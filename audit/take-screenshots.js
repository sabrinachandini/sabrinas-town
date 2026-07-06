const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = 'https://sabrinas-town.vercel.app';
const OUT = path.join(__dirname, 'screenshots');
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet',  width: 768,  height: 1024 },
  { name: 'mobile',  width: 390,  height: 844 },
];

const PATHS = [
  { name: 'home',         url: '/' },
  { name: 'towns',        url: '/towns' },
  { name: 'town-lexington', url: '/towns/lexington-ma' },
  { name: 'town-boston',  url: '/towns/boston-ma' },
  { name: 'muster',       url: '/muster' },
  { name: 'partner',      url: '/partner' },
  { name: 'teach',        url: '/teach' },
  { name: 'about',        url: '/about' },
];

(async () => {
  const browser = await chromium.launch();

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
    });
    const page = await ctx.newPage();

    for (const p of PATHS) {
      try {
        await page.goto(BASE + p.url, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(1000);
        const fname = `${p.name}-${vp.name}.png`;
        await page.screenshot({ path: path.join(OUT, fname), fullPage: true });
        console.log(`✓ ${fname}`);
      } catch (e) {
        console.log(`✗ ${p.name}-${vp.name}: ${e.message}`);
      }
    }

    await ctx.close();
  }

  await browser.close();
  console.log('Done.');
})();
