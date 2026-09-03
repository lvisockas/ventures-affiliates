import fs from 'node:fs';
import path from 'node:path';
const here = path.dirname(new URL(import.meta.url).pathname);
const root = path.resolve(here, '..');
let body = fs.readFileSync(path.join(here, 'partners.src.html'), 'utf8');
body = body.replace(/\{\{shot:(\w+)\}\}/g, (_, name) => {
  const b64 = fs.readFileSync(path.join(here, 'shots', name + '.png')).toString('base64');
  return 'data:image/png;base64,' + b64;
});
// Artifact fragment: the artifact host supplies the document skeleton.
fs.writeFileSync(path.join(here, 'partners.html'), body);
// Standalone document at the repo root, served by GitHub Pages from main.
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Gildium partner program: feature what the studio ships, keep the first month.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='9' fill='%237C5CFA'/%3E%3Ccircle cx='16' cy='16' r='7' fill='none' stroke='%23fff' stroke-width='4' stroke-dasharray='33 11'/%3E%3C/svg%3E">
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
  fs.copyFileSync(path.join(here, 'prototype', f), path.join(proto, f));
}
fs.writeFileSync(path.join(root, '.nojekyll'), '');
console.log('built site/partners.html, index.html and prototype/', (page.length / 1024 / 1024).toFixed(2), 'MB');
