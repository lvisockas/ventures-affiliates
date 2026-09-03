// Shared by build.mjs and shoot.mjs.
// Product marks: a local file in site/icons/<slug>.(svg|png|ico|jpg) wins;
// otherwise Google's favicon service is referenced directly and the letter
// mark stays underneath as the fallback if the image cannot load.
import fs from 'node:fs';
import path from 'node:path';
const here = path.dirname(new URL(import.meta.url).pathname);
const MIME = { svg: 'image/svg+xml', png: 'image/png', ico: 'image/x-icon', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };
const DOMAINS = { postsie: 'postsie.com', postbee: 'postbee.ai', '8legs': '8legs.app', ownloop: 'ownloop.io', demilked: 'demilked.com' };
export function iconFor(slug) {
  for (const ext of Object.keys(MIME)) {
    const f = path.join(here, 'icons', `${slug}.${ext}`);
    if (fs.existsSync(f)) return `data:${MIME[ext]};base64,${fs.readFileSync(f).toString('base64')}`;
  }
  const d = DOMAINS[slug];
  return d ? `https://www.google.com/s2/favicons?domain=${d}&sz=128` : null;
}
export function applyIcons(html) {
  return html.replace(/<div class="mark" data-icon="([\w-]+)"([^>]*)>([^<]*)<\/div>/g, (m, slug, attrs, letter) => {
    const src = iconFor(slug);
    if (!src) return m;
    return `<div class="mark" data-icon="${slug}"${attrs}>${letter}<img src="${src}" alt="" onerror="this.remove()"></div>`;
  });
}
export function logoSvg(cls = '') {
  return fs.readFileSync(path.join(here, 'logo.svg'), 'utf8').replace('<svg ', `<svg class="${cls}" aria-label="Gildium" role="img" `);
}
