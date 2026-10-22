// Pravi vercel.json sa preusmerenjima (301) sa starih Shopify adresa na nove, da se Google pozicije ne izgube.
// Pokretanje: node scripts/gen-redirects.mjs   (posle promene proizvoda / slug-ova)
import { readFileSync, writeFileSync } from "node:fs";

const src = readFileSync(new URL("../src/data/products.ts", import.meta.url), "utf8");
const pairs = [];
for (const m of src.matchAll(/"slug":\s*"([^"]+)"[\s\S]*?"sourceHandle":\s*"([^"]+)"/g)) pairs.push([m[2], m[1]]);

const redirects = [];
const add = (source, destination) => redirects.push({ source, destination, permanent: true });

for (const [handle, slug] of pairs) {
  add(`/products/${handle}`, `/proizvod/${slug}`);
  add(`/collections/:c/products/${handle}`, `/proizvod/${slug}`);
}
// stare Shopify kolekcije -> nove objedinjene kategorije
const COLLECTIONS = {
  "juta-na-metar-1": "/kategorija/kanap-i-tkanina",
  "juta-na-metar": "/kategorija/kanap-i-tkanina",
  "specijalni-kanapi": "/kategorija/kanap-i-tkanina",
  "kanapi-za-penjanje": "/kategorija/sport-i-penjanje",
  "mreze-i-penjanje": "/kategorija/sport-i-penjanje",
  fitnes: "/kategorija/sport-i-penjanje",
  namestaj: "/kategorija/kuca-i-dekoracija",
  "za-trpezu": "/kategorija/kuca-i-dekoracija",
  rasveta: "/kategorija/kuca-i-dekoracija",
  aksesoari: "/kategorija/kuca-i-dekoracija",
  "plafon-i-instalacije": "/reference",
  "pregrade-i-zidovi": "/reference",
  "radovi-po-meri": "/reference",
  "propratni-materijal": "/kategorija/propratni-materijal",
  pribor: "/kategorija/propratni-materijal",
};
for (const [c, dest] of Object.entries(COLLECTIONS)) add(`/collections/${c}`, dest);
add("/collections/all", "/prodavnica");
add("/collections/:slug*", "/prodavnica");
add("/products/:slug*", "/prodavnica");
add("/cart", "/korpa");
add("/pages/contact", "/kontakt");
add("/pages/kontakt", "/kontakt");
add("/pages/o-nama", "/");
add("/o-nama", "/");
add("/pages/:slug*", "/");
add("/blogs/:slug*", "/vodic");
add("/account/:slug*", "/");
add("/account", "/");

const out = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  framework: "astro",
  buildCommand: "npm run build",
  redirects,
};
writeFileSync(new URL("../vercel.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
console.log(`${pairs.length} proizvoda, ${redirects.length} preusmerenja`);
