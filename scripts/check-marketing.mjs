import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { pages, baseUrl } from '../src/content/pages.mjs'
import { visibleArticles, whatsNew, resources } from '../src/content/articles.mjs'
import { customers } from '../src/content/customers.mjs'
import { seoData } from '../src/seo.mjs'
const routes = new Set(pages.map(p => p.path))
assert.equal(routes.size, pages.length, 'Duplicate routes')
for (const field of ['title', 'description']) assert.equal(new Set(pages.map(p => p[field])).size, pages.length, `Duplicate ${field}`)
for (const entries of [whatsNew, resources]) {
  const sorted = visibleArticles(entries)
  assert(sorted.every((entry, i) => !i || sorted[i - 1].date >= entry.date), 'Content must be newest first')
}
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
for (const page of pages) {
  const html = await readFile(`dist${page.path === '/' ? '' : page.path}/index.html`, 'utf8')
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${page.path}: one H1`)
  assert.equal((html.match(/<title>/g) || []).length, 1, `${page.path}: one title`)
  assert(html.includes(`href="${baseUrl}${page.path}"`), `${page.path}: canonical missing`)
  assert(html.includes('property="og:title"') && html.includes('name="twitter:title"'), `${page.path}: social metadata`)
  assert(!/book a demo|demo request/i.test(html), `${page.path}: demo action must be absent`)
  assert.equal(sitemap.includes(`<loc>${baseUrl}${page.path}</loc>`), !page.noindex, `${page.path}: sitemap indexing`)
  if (page.noindex) assert(html.includes('content="noindex, follow"'), `${page.path}: draft indexing`)
  if (page.props?.entry?.status === 'draft') assert(html.includes('Draft example'), `${page.path}: draft notice`)
  for (const match of html.matchAll(/href="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const path = match[1]
    if (path.startsWith('/assets/') || /\.[a-z0-9]+$/i.test(path)) await access(`dist${path}`)
    else assert(routes.has(path), `${page.path}: broken internal link ${path}`)
  }
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(match[1])
}
for (const entry of whatsNew.filter(entry => entry.status !== 'published')) {
  assert(!routes.has(`/whats-new/${entry.slug}`), 'Unpublished updates must not have public routes')
}
// Exercise future publication metadata without publishing a fake article.
const fixture = { title: 'Editorial test', description: 'Test only', article: { title: 'Editorial test', date: '2026-10-02' } }
assert(seoData(fixture, '/whats-new/test').schema.some(schema => schema['@type'] === 'Article'))
assert.equal(pages.filter(p => p.path.startsWith('/customers/')).length, customers.filter(c => c.status === 'published').length, 'Only approved customer routes')
console.log(`Verified ${pages.length} rendered pages: internal links, metadata, schemas, draft indexing and content ordering.`)
