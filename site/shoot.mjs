import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import path from 'node:path';
import fs from 'node:fs';
import { applyIcons, logoSvg } from './icons.mjs';
const here = path.dirname(new URL(import.meta.url).pathname);
const pages = ['offers','offer','links','earnings','payouts'];
const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'], proxy: proxy ? { server: proxy } : undefined });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2, ignoreHTTPSErrors: true });
for (const p of pages) {
  const page = await ctx.newPage();
  let html = fs.readFileSync(path.join(here, 'prototype', p + '.html'), 'utf8');
  html = applyIcons(html).replace(/\{\{logo\}\}/g, logoSvg());
  const tmp = path.join(here, 'prototype', `.shoot-${p}.html`);
  fs.writeFileSync(tmp, html);
  await page.goto('file://' + tmp, { waitUntil: 'load' });
  fs.unlinkSync(tmp);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  const ok = await page.evaluate(() => [...document.fonts].filter(f=>f.status==='loaded').length);
  console.log('fonts loaded:', ok);
  await page.screenshot({ path: path.join(here, 'shots', p + '.png') });
  await page.close();
  console.log('shot', p);
}
await browser.close();
