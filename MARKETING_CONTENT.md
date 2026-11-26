# Marketing content and publication

## Architecture

The existing Vue 3 / Vite / Vue Router / Bootstrap 5 site is retained. No CMS,
analytics provider or additional dependency was introduced. Feature data lives in
`src/content/features.mjs`, updates and educational guides in `articles.mjs`, and
approved case studies in `customers.mjs`. `pages.mjs` is the route/metadata registry.
Existing routes, customer logos, privacy policy and sub-processor content are preserved.

`npm run build` renders HTML for each route after Vite builds the client. Initial HTML
contains page content, canonical, Open Graph, Twitter and breadcrumb metadata. Published
articles also receive Article schema. The client updates metadata on navigation. The
production sitemap is generated from the same page registry; `public/sitemap.xml` is
only the legacy development fallback. Netlify's final fallback now serves a real 404,
so always deploy the complete build output. No server runtime is needed.

## Current publication status

The only published article is the Grading Authority product update in What’s New,
dated 26 November 2026. The Resources collection is empty.

Product links lead to sections of the Features overview. The former standalone
feature pages, including Digital Membership Cards, have been removed.

New What's New posts appear only with `status: 'published'`. Resource drafts can be
previewed publicly with draft labels and noindex; use `status: 'hidden'` to remove
an entry from public routes and links. Never include confidential information in
content files. Seek qualified review before adding legal detail.

## Add an update or resource

Add an object to the appropriate exported content array:

```js
{
  slug: 'unique-lowercase-slug',
  status: 'draft', // published or hidden
  title: 'A plain-language benefit',
  summary: 'A concise explanation for an administrator.',
  date: 'YYYY-MM-DD', // actual publication date for published content
  category: 'Product Update', // or Company News / Press Release; guides use topic categories
  feature: 'membership-management', // optional for company announcements
  sections: [{ title: 'What you can do', text: 'Approved, factual explanation.' }],
  // Optional:
  seoTitle: 'Unique search title | AikidoDigital',
  seoDescription: 'Unique, accurate description.',
  image: { src: '/images/approved.webp', alt: 'Meaningful description', width: 1200, height: 675 },
}
```

Use ISO dates. Indexes sort newest first. Categories appear only on actual entries;
there are no empty category pages. Place optimised images under `public/images`, with
real dimensions and meaningful alt text. Content is rendered as text, not raw HTML.
Internal feature and cross-section article links are generated from `feature`.
Run the build and checks before release. No route edits are needed for new content.

## Customer stories

There are no published customer stories and no empty customer navigation item.
`CustomerStory.vue` supports organisation background, previous process, usage, outcome,
optional image and optional testimonial/attribution. The field shape is
shown in `customers.mjs`. Add a customer-approved entry with `status: 'published'` to
create `/customers/[slug]`; add contextual links when genuine stories are ready.
No outcomes or quotes should be invented to fill the template.

## Product evidence and scope

- Membership, renewals, grading/certificates, hierarchy and role/reporting copy uses the
  existing website and reference product. Relevant reference modules include
  `src/Membership/MembershipRenewalManager.php`, `src/Membership/Report/MemberGradeReport.php`,
  `src/Membership/Report/AgmReport.php` and `src/EventListener/UserGradeRecordListener.php`.
- Security copy reuses the existing Features page's access, authentication and audit
  statements and links to existing data policies. No certification claims were added.
- Public Terms were intentionally removed previously: see `TERMS_OF_SERVICE_DECISION.md`.
  This decision is preserved. No FAQs page exists, so no empty FAQ link was introduced.
- No tracking infrastructure was present. No tracking scripts, cookies or personal-data
  events were added. Review analytics requirements and privacy wording together before
  selecting or enabling a provider.
- `/contact` provides general contact details. Demo buttons, banners and booking
  prompts are removed until the business is ready; no booking service is introduced.
- Removed an unsupported zero-price Offer from the standalone public schema file.
- The reference application was read only and has not been changed.

## Suggested six-month editorial sequence

1. Verify product availability, approve screenshots and publish the first genuine update.
2. Draft membership records and renewals guides using common demo questions.
3. Publish a reviewed grading guide and update the grading section of the Features overview with real imagery.
4. Publish organisation/reporting guidance for association officers and committees.
5. Request approval for a real customer story and publish only substantiated outcomes.
6. Review demo enquiries and content gaps; prepare a company announcement if warranted.

For each release: verify the change → publish What's New → update the feature page →
prepare a LinkedIn/social post and customer/prospect email → check internal links and
appropriate next step (demo CTAs are currently disabled). Posting, emailing and deployment are separate actions, not performed
by this implementation.
