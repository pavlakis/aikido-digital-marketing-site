import { features } from './features.mjs'
import { publishedUpdates, resources, visibleArticles } from './articles.mjs'
import { customers } from './customers.mjs'
export const baseUrl = 'https://aikidodigital.com'
export const pages = [
  { path: '/', name: 'Home', view: 'Home', title: 'Membership Management for Aikido Organisations | AikidoDigital', description: 'Membership management software for Aikido and martial arts organisations. Manage members, renewals, grading records, certificates, clubs and reporting.' },
  { path: '/features', name: 'Features', view: 'FeaturesView', title: 'Membership Software Features | AikidoDigital', description: 'Explore membership administration, renewals, grading records, organisation structures and reporting for Aikido and martial arts organisations.' },
  { path: '/about', name: 'About', view: 'About', title: 'About AikidoDigital | Specialist Membership Software', description: 'Learn about AikidoDigital, a specialist membership management platform built around Aikido organisations, associations and governing bodies.' },
  { path: '/contact', name: 'Contact', view: 'ContactView', title: 'Contact AikidoDigital', description: 'Contact AikidoDigital with questions about membership management software for Aikido and martial arts organisations.' },
  { path: '/privacy-policy', name: 'PrivacyPolicy', view: 'PrivacyPolicy', title: 'Privacy Policy | AikidoDigital', description: 'Read how AikidoDigital handles personal information for website visitors, members, instructors and organisations.' },
  { path: '/sub-processors', name: 'SubProcessors', view: 'SubProcessors', title: 'Sub-Processors | AikidoDigital', description: 'See the sub-processors AikidoDigital uses to deliver its membership management platform.' },
  { path: '/security-data-protection', view: 'SecurityView', title: 'Security & Data Protection | AikidoDigital', description: 'Learn about role-based access, authentication and administrative audit logs, and find AikidoDigital’s privacy and sub-processor information.' },
  ...features.map(feature => ({ path: '/' + feature.slug, view: 'FeatureDetail', title: `${feature.title} for Martial Arts Organisations | AikidoDigital`, description: feature.summary, props: { feature } })),
  ...[
    { path: '/whats-new', title: 'What’s New', description: 'Customer-facing product updates and announcements from AikidoDigital, with practical explanations for membership teams and organisation officers.', entries: publishedUpdates() },
    { path: '/resources', title: 'Resources', description: 'Educational resources for Aikido and martial arts organisations managing membership records, grading, renewals and multi-club administration.', entries: visibleArticles(resources) }
  ].flatMap(section => [
    { path: section.path, view: 'ContentIndex', title: `${section.title} | AikidoDigital`, description: section.description, noindex: section.entries.every(a => a.status === 'draft'), props: { title: section.title, description: section.description, base: section.path, entries: section.entries } },
    ...section.entries.map(entry => ({ path: `${section.path}/${entry.slug}`, view: 'ContentArticle', title: entry.seoTitle || `${entry.title}${section.path === '/resources' ? ' | Resources' : ''} | AikidoDigital`, description: entry.seoDescription || entry.summary, noindex: entry.status !== 'published', article: entry.status === 'published' ? entry : null, image: entry.image, props: { entry, base: section.path, sectionTitle: section.title } }))
  ]),
  ...customers.filter(story => story.status === 'published').map(story => ({ path: `/customers/${story.slug}`, view: 'CustomerStory', title: `${story.title} | AikidoDigital`, description: story.summary, article: story, image: story.image, props: { story } }))
]
