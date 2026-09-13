// Renders each gallery page in MOCKUPS/ to png/<name>.png with headless Chromium.
// Evidence only: Linux Chromium, fallback typeface (Roboto), not iOS. No network, no product code.
const path = require('node:path');
const fs = require('node:fs');
const { chromium } = require(process.env.SWEET_PLAYWRIGHT_MODULE || '/home/ubuntu/.cache/uv/archive-v0/Ry3kXWDypibUiULB/playwright/driver/package');
const exe = process.env.SWEET_CHROMIUM || '/home/ubuntu/.cache/ms-playwright/chromium-1243/chrome-linux64/chrome';
const dir = __dirname;
const only = process.argv.slice(2);
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: exe, args: ['--no-sandbox'] });
  const page = await browser.newPage({ viewport: { width: 1320, height: 1000 }, deviceScaleFactor: 1 });
  page.on('request', r => { if (!r.url().startsWith('file://')) console.error('unexpected request', r.url()); });
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html' && (only.length === 0 || only.includes(f)));
  for (const f of files) {
    await page.goto('file://' + path.join(dir, f));
    await page.waitForTimeout(250);
    const out = path.join(dir, 'png', f.replace(/\.html$/, '.png'));
    await page.screenshot({ path: out, fullPage: true });
    console.log('rendered', out);
  }
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
