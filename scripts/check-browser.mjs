import assert from 'node:assert/strict'
import puppeteer from 'puppeteer'
import pa11y from 'pa11y'
import { pages } from '../src/content/pages.mjs'
const browser = await puppeteer.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) })
const errors = []
try {
  if (!process.argv.includes('--a11y-only')) {
    const tab = await browser.newPage()
    tab.on('pageerror', error => errors.push(error.message))
    tab.on('console', message => { if (/hydration|mismatch/i.test(message.text())) errors.push(message.text()) })
    for (const width of [390, 768, 1440]) {
      await tab.setViewport({ width, height: 1000 })
      for (const entry of pages) {
        await tab.goto(`http://127.0.0.1:5173${entry.path}`, { waitUntil: 'networkidle0' })
        assert.equal(await tab.title(), entry.title, `${entry.path}: title`)
        assert(await tab.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${entry.path}: overflow at ${width}`)
        assert.equal(await tab.$$eval('h1', nodes => nodes.length), 1, `${entry.path}: H1 at ${width}; ${errors.join('; ')}`)
      }
      console.log(`Responsive pages checked at ${width}px`)
    }
    await tab.setViewport({ width: 390, height: 844 })
    await tab.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' })
    await tab.focus('.navbar-toggler')
    await tab.keyboard.press('Enter')
    assert.equal(await tab.$eval('.navbar-toggler', node => node.getAttribute('aria-expanded')), 'true')
    await tab.keyboard.press('Escape')
    assert.equal(await tab.$eval('.navbar-toggler', node => node.getAttribute('aria-expanded')), 'false')
    await tab.click('.navbar-toggler')
    await tab.click('#navbarNav a[href="/whats-new"]')
    await tab.waitForFunction(() => document.title === 'What’s New | AikidoDigital')
    assert.equal(await tab.$eval('.navbar-toggler', node => node.getAttribute('aria-expanded')), 'false')
    assert.equal(await tab.$eval('meta[name="robots"]', node => node.content), pages.find(page => page.path === '/whats-new').noindex ? 'noindex, follow' : 'index, follow')
    await tab.click('.navbar-toggler')
    await tab.click('#navbarNav a[href="/features"]')
    await tab.waitForFunction(() => document.title === 'Membership Software Features | AikidoDigital')
    assert.equal(await tab.$eval('meta[name="robots"]', node => node.content), 'index, follow')
    await tab.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' })
    await tab.screenshot({ path: '/tmp/aikido-home-mobile.png', clip: { x: 0, y: 0, width: 390, height: 844 } })
    await tab.setViewport({ width: 1440, height: 1000 })
    await tab.goto('http://127.0.0.1:5173/digital-membership-cards', { waitUntil: 'networkidle0' })
    await tab.screenshot({ path: '/tmp/aikido-cards-desktop.png', fullPage: true })
    await tab.goto('http://127.0.0.1:5173/whats-new', { waitUntil: 'networkidle0' })
    await tab.screenshot({ path: '/tmp/aikido-updates-desktop.png', fullPage: true })
    assert.deepEqual(errors, [], 'Browser errors or hydration warnings')
  }
  const issues = []
  for (const path of ['/', '/contact', '/digital-membership-cards', '/whats-new', '/whats-new/grading-authority', '/resources', '/security-data-protection']) {
    const result = await pa11y(`http://127.0.0.1:5173${path}`, { browser, standard: 'WCAG2AA', timeout: 30000 })
    issues.push(...result.issues.map(issue => ({ path, ...issue })))
  }
  const mobile = await browser.newPage()
  await mobile.setViewport({ width: 390, height: 844 })
  await mobile.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle0' })
  await mobile.screenshot({ path: '/tmp/aikido-home-mobile.png', clip: { x: 0, y: 0, width: 390, height: 844 } })
  await mobile.close()
  assert.deepEqual(issues, [], 'Accessibility issues')
  console.log('Automated WCAG2AA checks passed for the homepage, contact and all new page templates.')
  if (!process.argv.includes('--a11y-only')) console.log(`Verified all ${pages.length} pages at mobile, tablet and desktop widths; mobile keyboard navigation, route metadata and hydration passed.`)
} finally { await browser.close() }
