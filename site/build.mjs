import fs from 'node:fs';
import path from 'node:path';
import { applyIcons, logoSvg } from './icons.mjs';
const here = path.dirname(new URL(import.meta.url).pathname);
const root = path.resolve(here, '..');
let body = fs.readFileSync(path.join(here, 'partners.src.html'), 'utf8');
body = body.replace(/\{\{shot:(\w+)\}\}/g, (_, name) => {
  const b64 = fs.readFileSync(path.join(here, 'shots', name + '.png')).toString('base64');
  return 'data:image/png;base64,' + b64;
});
body = applyIcons(body).replace(/\{\{logo_dark\}\}/g, logoSvg()).replace(/\{\{logo\}\}/g, logoSvg());
// Artifact fragment: the artifact host supplies the document skeleton.
fs.writeFileSync(path.join(here, 'partners.html'), body);
// Standalone document at the repo root, served by GitHub Pages from main.
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Gildium partner program: feature what the studio ships, keep the first month.">
<link rel="icon" href="favicon.svg">
</head>
<body style="margin:0">
${body}
</body>
</html>
`;
fs.writeFileSync(path.join(root, 'index.html'), page);
const proto = path.join(root, 'prototype');
fs.rmSync(proto, { recursive: true, force: true });
fs.mkdirSync(proto);
for (const f of fs.readdirSync(path.join(here, 'prototype'))) {
  let c = fs.readFileSync(path.join(here, 'prototype', f), 'utf8');
  if (f.endsWith('.html')) c = applyIcons(c).replace(/\{\{logo\}\}/g, logoSvg());
  fs.writeFileSync(path.join(proto, f), c);
}
const mark = fs.readFileSync(path.join(here, 'logo.svg'), 'utf8').match(/<path d="([^"]+)"/)[1];
fs.writeFileSync(path.join(root, 'favicon.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 32 32"><rect x="-4" y="-4" width="32" height="32" rx="8" fill="#7C5CFA"/><path d="' + mark + '" fill="#fff"/></svg>');
fs.writeFileSync(path.join(root, '.nojekyll'), '');
console.log('built site/partners.html, index.html and prototype/', (page.length / 1024 / 1024).toFixed(2), 'MB');
