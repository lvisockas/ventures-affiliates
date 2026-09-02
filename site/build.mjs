import fs from 'node:fs';
import path from 'node:path';
const here = path.dirname(new URL(import.meta.url).pathname);
let html = fs.readFileSync(path.join(here, 'partners.src.html'), 'utf8');
html = html.replace(/\{\{shot:(\w+)\}\}/g, (_, name) => {
  const b64 = fs.readFileSync(path.join(here, 'shots', name + '.png')).toString('base64');
  return 'data:image/png;base64,' + b64;
});
fs.writeFileSync(path.join(here, 'partners.html'), html);
console.log('built partners.html', (html.length / 1024 / 1024).toFixed(2), 'MB');
