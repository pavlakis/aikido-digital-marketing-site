import { baseUrl } from './content/pages.mjs'
export function seoData(page, path) {
  const url = baseUrl + path
  const image = new URL(page.image?.src || '/android-chrome-512x512.png', baseUrl).href
  const tags = [
    ['name', 'title', page.title], ['name', 'description', page.description],
    ['name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow'],
    ['property', 'og:type', page.article ? 'article' : 'website'],
    ['property', 'og:title', page.title], ['property', 'og:description', page.description],
    ['property', 'og:url', url], ['property', 'og:site_name', 'AikidoDigital'],
    ['property', 'og:image', image], ['property', 'og:image:alt', page.image?.alt || 'AikidoDigital logo'],
    ['name', 'twitter:card', page.image ? 'summary_large_image' : 'summary'],
    ['name', 'twitter:title', page.title], ['name', 'twitter:description', page.description],
    ['name', 'twitter:image', image], ['name', 'twitter:image:alt', page.image?.alt || 'AikidoDigital logo']
  ]
  const breadcrumb = [{ '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl + '/' }]
  if (path !== '/') {
    const parent = path.startsWith('/whats-new/') ? ['/whats-new', 'What’s New'] : path.startsWith('/resources/') ? ['/resources', 'Resources'] : page.view === 'FeatureDetail' ? ['/features', 'Features'] : null
    if (parent) breadcrumb.push({ '@type': 'ListItem', position: 2, name: parent[1], item: baseUrl + parent[0] })
    breadcrumb.push({ '@type': 'ListItem', position: breadcrumb.length + 1, name: page.title.split(' | ')[0], item: url })
  }
  const schema = [{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumb }]
  if (page.article) schema.push({ '@context': 'https://schema.org', '@type': 'Article', headline: page.article.title, description: page.description, datePublished: page.article.date, mainEntityOfPage: url, ...(page.image ? { image } : {}), publisher: { '@type': 'Organization', name: 'Aikido Digital Limited', url: baseUrl } })
  return { url, tags, schema }
}
export function updateSeo(page, path) {
  const { url, tags, schema } = seoData(page, path)
  document.title = page.title
  document.querySelector('link[rel="canonical"]').setAttribute('href', url)
  for (const [attribute, key, value] of tags) {
    let element = document.querySelector(`meta[${attribute}="${key}"]`)
    if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element) }
    element.setAttribute('content', value)
  }
  let structured = document.getElementById('page-schema')
  if (!structured) { structured = document.createElement('script'); structured.id = 'page-schema'; structured.type = 'application/ld+json'; document.head.appendChild(structured) }
  structured.textContent = JSON.stringify(schema)
}
