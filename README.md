# Juta Svet — online prodavnica

Novi sajt za **jutasvet.com**, napravljen po uzoru na Lumora sajt (isti dizajn i iste funkcije),
prilagođen juti. Statički sajt (Astro) sa korpom, porudžbinom na mejl i admin aplikacijom za telefon.
Bez online plaćanja — plaćanje pouzećem.

- **30 proizvoda** iz Shopify izvoza, u 4 kategorije (bez padajućeg menija — svaka kategorija je jedna strana sa svim podkategorijama):
  Kanap i tkanina · Sport i penjanje · Kuća i dekoracija · Propratni materijal
- **Varijante**: debljina × dužina (i širina, veličina, tip, model…) — cena i slika se menjaju uživo
- Proizvodi bez cene imaju **„Cena na upit"** → kontakt forma sa unapred upisanim proizvodom
- Korpa + kasa → 2 mejla preko [Resend](https://resend.com) (vlasniku i kupcu). **Cena se uvek proverava na serveru** iz kataloga
- **Reference** (urađeni projekti), **Primena** (ograde, grebalice, igrališta, rasveta, pakovanje, nautika), **Vodič**
- Video iz radionice — samo na početnoj
- SEO: meta po strani, Open Graph, JSON-LD, sitemap, `robots.txt`, **301 preusmerenja sa starih Shopify adresa** (`vercel.json`)
- Svetla i tamna tema
- **Juta Svet Admin** (`/admin/`): aplikacija za telefon — porudžbine sa sajta, pakovanje, kuriri, naplata, kontakti i analitika. Uputstvo: `docs/ADMIN.md`

## Urađeno sa spiska („Vili sajt 21.12.txt")

- [x] Nav bar bez padajućeg menija, sve podkategorije objedinjene na jednoj strani
- [x] Početna: velika slika kao na starom sajtu, sve ostalo kao na Lumori
- [x] „Prostorna rešenja" uklonjena iz menija (proizvodi su u „Kuća i dekoracija", radovi u Referencama)
- [x] Stranica **Reference** u meniju
- [x] Početna: 8 proizvoda u 2 reda po 4
- [x] Stranica „O nama" obrisana (stara adresa preusmerava na početnu)
- [x] Reference i Kontakt u meniju vizuelno odvojeni (zaobljena dugmad posle crte)
- [x] Slika iznad „Pogledajte sve naše proizvode" uklonjena — i sa početne i iz proizvoda
- [x] Video samo na početnoj
- [x] Fi 8 i Fi 40 — zamenjene slike (Fi 8: tanji kalem koji nije bio korišćen; Fi 40: najdeblji kanap umesto duplikata od 30 mm)
- [x] U „Kanap i tkanina" ubačeni platno i tkanina (Jutano platno, Juta traka u boji)

## ⚠️ Proveriti pre puštanja

- **Rok isporuke** (sada 2–5 radnih dana) u `src/data/site.ts` — prag za besplatnu dostavu (10.000 RSD) je potvrđen
- Šilo, metalna suza i metalna alka su u Shopify-ju „draft" — ovde su uključeni (cena na upit) jer je „Propratni materijal" u meniju.
  Alka sa šrafom i luster kuka nemaju sliku pa nisu na sajtu. Lista: `INCLUDE_DRAFT` u `scripts/gen-products.mjs`
- Pravne strane (`uslovi-koriscenja`, `politika-privatnosti`) dopuniti podacima o firmi (PIB, matični broj)

---

## 1. Pokretanje lokalno

```bash
npm install
npm run dev
```

Sajt: <http://localhost:4321>

| Komanda | Šta radi |
|---|---|
| `npm run build` | Napravi produkcionu verziju (sajt + admin aplikacija) |
| `npm run preview` | Lokalno pregleda build |
| `npm run images` | Skine/optimizuje slike proizvoda (preskače postojeće; `-- --force` za sve) |

## 2. Novi Shopify izvoz → proizvodi na sajtu

```bash
# 1) CSV (podrazumevano ../products_export_1 (1).csv) -> scripts/products-source.json
python scripts/parse_csv.py "putanja/do/products_export.csv"

# 2) products-source.json -> src/data/products.ts + katalog za admin aplikaciju
node scripts/gen-products.mjs

# 3) slike novih proizvoda
npm run images

# 4) preusmerenja sa starih Shopify adresa
node scripts/gen-redirects.mjs
```

U `scripts/gen-products.mjs` se uređuje sve što nije u Shopify-ju: kategorija i grupa (`CATEGORY`), čista adresa (`SLUG`),
naziv (`NAME`), uvodni tekst (`COPY`), istaknuti proizvodi na početnoj (`BESTSELLER` — prvih 8, `FEATURED`),
zamena slike za pojedinu debljinu (`VARIANT_IMAGE_OVERRIDE`) i slike koje se ne prikazuju (`BANNED_IMAGES`).

Reference (urađeni projekti) su u `src/data/references.ts`, slike u `public/images/reference/`.

## 3. Mejlovi (Resend) — obavezno za porudžbine i upite

1. Nalog na <https://resend.com> → *Domains* → dodaj `jutasvet.com` i DNS zapise kod registrara.
2. *API Keys* → *Create* → kopiraj ključ.
3. Varijable (lokalno u `.env`, na Vercel-u u *Settings → Environment Variables*):

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
ORDER_FROM="Juta Svet <porudzbine@jutasvet.com>"
ORDER_TO=jutasvet@gmail.com
PUBLIC_SITE_URL=https://jutasvet.com
```

Kopiraj `.env.example` u `.env` i popuni. Ostale opcije (Supabase za automatski prijem porudžbina u aplikaciji,
push obaveštenja, statistika posete) su opisane u `.env.example` i `docs/ADMIN.md`.
**Za Jutu napraviti novi Supabase projekat** (ne koristiti Lumora bazu) i pokrenuti SQL iz `docs/`.

## 4. Objavljivanje (Vercel)

1. Kod na GitHub (`git init`, pa novi privatni repo).
2. Vercel → *Add New → Project* → izaberi repo (Astro se prepoznaje sam).
3. Unesi varijable iz koraka 3 → *Deploy*.
4. *Settings → Domains* → `jutasvet.com` i `www.jutasvet.com`, pa DNS kod registrara.
   Tek tada se domen prebacuje sa Shopify-ja — stare adrese proizvoda i kolekcija same preusmeravaju na nove.

## Struktura

```
src/
  data/       site.ts (brend, meni), products.ts (generisano), seo.ts, references.ts
  layouts/    Base.astro
  components/ Header, Footer, CartDrawer, ProductCard, ProductLanding, Breadcrumbs, FaqBlock, Seo
  lib/        cart.ts, format.ts, url.ts, supabase.ts, push.ts
  pages/
    index · prodavnica · kategorija/[slug] · proizvod/[slug]
    reference · primena/ · vodic/ · kontakt
    korpa · kasa · hvala · dostava-i-povracaj · cesta-pitanja · uslovi-koriscenja · politika-privatnosti · 404
    api/order.ts (porudžbina) · api/upit.ts (upit sa kontakt forme) · api/subscribe.ts (newsletter)
admin/        Juta Svet Admin (React PWA, gradi se u public/admin)
scripts/      parse_csv.py · gen-products.mjs · fetch-images.mjs · gen-redirects.mjs
brand/        logo-source.png · make-icons.py (sve ikone + og-default.jpg) · source-images/
```
