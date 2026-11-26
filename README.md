# aikido.digital Website

This is the marketing website for aikido.digital - a membership management platform for aikido organisations.

Built with Vue 3 + Vite using Bootstrap 5 and vue-router. Includes accessibility and responsive patterns.

Quick start:

```bash
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview
```

## Features

- Responsive design for all devices
- Accessibility-first approach with semantic HTML and ARIA attributes
- "Skip to content" link for keyboard navigation
- Focus styles for keyboard users
- Clean, modern UI matching aikido.digital brand

## Project Structure

- `src/` - Vue components and application code
- `index.html` - Entry HTML file
- `vite.config.js` - Vite configuration
- `package.json` - Dependencies and scripts



## Marketing content

See [MARKETING_CONTENT.md](MARKETING_CONTENT.md) for editorial status, adding articles,
product verification notes, customer stories and the release workflow.

`npm run build` builds and pre-renders every known route using the existing Vue renderer.
Publish the complete `dist/` directory. Netlify serves generated pages and returns a 404
for unknown URLs. New content automatically updates the production sitemap.

Checks: `npm run lint`, `npm run build`, then `npm run test:marketing`.
For browser checks, run `npm run preview -- --host 127.0.0.1`, then
`CHROME_PATH="/path/to/chrome" node scripts/check-browser.mjs` (uses existing Puppeteer).
