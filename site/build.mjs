import fs from 'node:fs';
import path from 'node:path';
const here = path.dirname(new URL(import.meta.url).pathname);
let body = fs.readFileSync(path.join(here, 'partners.src.html'), 'utf8');
body = body.replace(/\{\{shot:(\w+)\}\}/g, (_, name) => {
  const b64 = fs.readFileSync(path.join(here, 'shots', name + '.png')).toString('base64');
  return 'data:image/png;base64,' + b64;
});
// Artifact fragment: the artifact host supplies the document skeleton.
fs.writeFileSync(path.join(here, 'partners.html'), body);
// Standalone document for GitHub Pages.
const dist = path.join(here, 'dist');
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(path.join(dist, 'prototype'), { recursive: true });
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="Gildium partner program: feature what the studio ships, keep the first month.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23B8912F'/%3E%3Ccircle cx='16' cy='16' r='7' fill='%23111820'/%3E%3C/svg%3E">
</head>
<body style="margin:0">
${body}
</body>
</html>
`;
fs.writeFileSync(path.join(dist, 'index.html'), page);
for (const f of fs.readdirSync(path.join(here, 'prototype'))) {
  fs.copyFileSync(path.join(here, 'prototype', f), path.join(dist, 'prototype', f));
}
fs.writeFileSync(path.join(dist, '.nojekyll'), '');
console.log('built partners.html and dist/', (page.length / 1024 / 1024).toFixed(2), 'MB');
