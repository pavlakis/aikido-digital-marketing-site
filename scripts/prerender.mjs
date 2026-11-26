// Uses Vue's bundled server renderer and Vite: no extra rendering dependency.
import { build } from 'vite'
import { readFile, writeFile, mkdir, readdir, rm } from 'node:fs/promises'
import { pages, baseUrl } from '../src/content/pages.mjs'
import { seoData } from '../src/seo.mjs'
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
let template = await readFile('dist/index.html', 'utf8')
// Include page styles in the initial HTML to avoid waiting for lazy route hydration.
const styles = (await readdir('dist/assets')).filter(name => name.endsWith('.css') && !name.startsWith('index-'))
template = template.replace('</head>', styles.map(name => `<link rel="stylesheet" href="/assets/${name}">`).join('\n') + '\n</head>')
// Compile SSR with the same production settings as the browser bundle. Development
// compilation produces different scoped-style IDs and comments, breaking hydration.
await build({ build: { ssr: 'src/entry-server.js', outDir: 'dist/.server', emptyOutDir: true } })
try {
  const { render } = await import('../dist/.server/entry-server.mjs')
  for (const page of [...pages, { path: '/404', title: 'Page Not Found | AikidoDigital', description: 'This page is unavailable.', noindex: true }]) {
    const { url, tags, schema } = seoData(page, page.path)
    const head = `<title>${escape(page.title)}</title>\n<link rel="canonical" href="${escape(url)}">\n` + tags.map(([attribute, key, value]) => `<meta ${attribute}="${key}" content="${escape(value)}">`).join('\n') + `\n<script id="page-schema" type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`
    const body = await render(page.path)
    const html = template.replace(/<title>[\s\S]*?<\/title>/, '').replace(/<link rel="canonical"[^>]*>/g, '').replace(/<meta (?:name|property)="(?:title|description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>/g, '').replace('</head>', `${head}\n</head>`).replace('<div id="app"></div>', () => `<div id="app">${body}</div>`)
    const directory = page.path === '/' ? 'dist' : `dist${page.path}`
    await mkdir(directory, { recursive: true })
    await writeFile(`${directory}/index.html`, html)
    if (page.path === '/404') await writeFile('dist/404.html', html)
  }
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(p => !p.noindex).map(p => `  <url><loc>${baseUrl}${p.path}</loc></url>`).join('\n')}\n</urlset>\n`)
  console.log(`Pre-rendered ${pages.length} pages and a 404 page; excluded drafts from sitemap.`)
} finally { await rm('dist/.server', { recursive: true, force: true }) }
