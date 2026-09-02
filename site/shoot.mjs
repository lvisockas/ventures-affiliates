import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';
import path from 'node:path';
const here = path.resolve('site');
const pages = ['offers','offer','links','earnings','payouts'];
const proxy = process.env.HTTPS_PROXY || process.env.https_proxy;
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'], proxy: proxy ? { server: proxy } : undefined });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: 2, ignoreHTTPSErrors: true });
for (const p of pages) {
  const page = await ctx.newPage();
  await page.goto('file://' + path.join(here, 'prototype', p + '.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(800);
  const ok = await page.evaluate(() => [...document.fonts].filter(f=>f.status==='loaded').length);
  console.log('fonts loaded:', ok);
  await page.screenshot({ path: path.join(here, 'shots', p + '.png') });
  await page.close();
  console.log('shot', p);
}
await browser.close();
