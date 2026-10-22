/**
 * Generiše src/data/products.ts, scripts/images.json i admin/src/data/catalog.json
 * iz scripts/products-source.json (parsiran Shopify izvoz — v. scripts/parse_csv.py).
 *
 * Pokretanje:  node scripts/gen-products.mjs
 *
 * Ovde se uređuje sve što nije u Shopify-ju:
 *   SLUG      — čista adresa proizvoda (stari Shopify handle ide u preusmerenja)
 *   NAME      — prikazani naziv (ako se razlikuje od Shopify naslova)
 *   CATEGORY  — glavna kategorija + grupa unutar nje
 *   COPY      — kratak uvod (lead) i „za koga je" (forWhom)
 *   INCLUDE_DRAFT — proizvodi koji su u Shopify-ju „draft", a ipak idu na sajt
 *   BESTSELLER / FEATURED — šta se ističe na naslovnoj
 *   VARIANT_IMAGE_OVERRIDE — ručna zamena slike za pojedinu varijantu
 *   BANNED_IMAGES — slike koje se nigde ne prikazuju
 */
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = process.argv[2] || path.join(__dirname, "products-source.json");
const raw = JSON.parse(fs.readFileSync(SRC, "utf8"));

// ── kategorije (redosled = redosled u meniju) ─────────────────────────
const CATEGORIES = ["kanap-i-tkanina", "sport-i-penjanje", "kuca-i-dekoracija", "propratni-materijal"];

// ── Shopify handle -> [kategorija, grupa unutar kategorije] ───────────
const CATEGORY = {
  "prirodna-juta-cena-po-metru": ["kanap-i-tkanina", "Juta na metar"],
  "sinteticka-juta-cena-po-metru": ["kanap-i-tkanina", "Juta na metar"],
  "jutani-kanap-u-boji-cena-po-metru": ["kanap-i-tkanina", "Juta na metar"],
  "juta-klube-2-5mm": ["kanap-i-tkanina", "Klupče i snopovi"],
  "juta-klube-1kg": ["kanap-i-tkanina", "Klupče i snopovi"],
  "juta-3-snopa": ["kanap-i-tkanina", "Klupče i snopovi"],
  "juta-4-snopa": ["kanap-i-tkanina", "Klupče i snopovi"],
  "jutano-platno-400-rsd-m": ["kanap-i-tkanina", "Platno i tkanina"],
  "juta-traka-u-boji-cena-po-metru-1": ["kanap-i-tkanina", "Platno i tkanina"],
  "bokobrani-rusticni": ["kanap-i-tkanina", "Specijalni kanapi"],

  "kanap-za-penjanje-fi40": ["sport-i-penjanje", "Kanapi za penjanje"],
  "junior-kanap-za-penjanje-fi30": ["sport-i-penjanje", "Kanapi za penjanje"],
  "mreza-za-penjanje-zastitna-mreza": ["sport-i-penjanje", "Mreže i merdevine"],
  "merdevine-za-decu-brodske-merdevine": ["sport-i-penjanje", "Mreže i merdevine"],
  "monkey-bar-rope": ["sport-i-penjanje", "Fitnes"],

  "jutani-tabure": ["kuca-i-dekoracija", "Nameštaj"],
  "stolica-pletena-drvo-i-juta": ["kuca-i-dekoracija", "Nameštaj"],
  "klub-sto-juta": ["kuca-i-dekoracija", "Nameštaj"],
  "ljuljaska-okrugla-drvo-i-juta": ["kuca-i-dekoracija", "Ljuljaške"],
  "ljuljaska-basic-drvo-i-juta": ["kuca-i-dekoracija", "Ljuljaške"],
  "jutana-visilica-sa-el-kablom": ["kuca-i-dekoracija", "Rasveta"],
  "jutana-visilica": ["kuca-i-dekoracija", "Rasveta"],
  "jutani-luster": ["kuca-i-dekoracija", "Rasveta"],
  "zidna-dekoracija-pleteni-panel-od-kanapa": ["kuca-i-dekoracija", "Zidovi i plafoni"],
  "plafonska-dekoracija-od-kanapa-vertikalne-linije": ["kuca-i-dekoracija", "Zidovi i plafoni"],
  "jutani-podmetac": ["kuca-i-dekoracija", "Za trpezu i pakovanje"],
  "jutani-dzakcici-i-vrece-prirodna-boja": ["kuca-i-dekoracija", "Za trpezu i pakovanje"],

  "silo-za-kanap": ["propratni-materijal", "Pribor"],
  "metalna-suza-za-kanap": ["propratni-materijal", "Pribor"],
  "metalna-alka-za-kanap": ["propratni-materijal", "Pribor"],
};

/** U Shopify-ju su „draft", ali spadaju u Propratni materijal koji je u meniju. */
const INCLUDE_DRAFT = new Set(["silo-za-kanap", "metalna-suza-za-kanap", "metalna-alka-za-kanap"]);

// ── čiste adrese (stari handle -> novi slug) ──────────────────────────
const SLUG = {
  "prirodna-juta-cena-po-metru": "prirodna-juta",
  "sinteticka-juta-cena-po-metru": "sinteticka-juta",
  "jutani-kanap-u-boji-cena-po-metru": "jutani-kanap-u-boji",
  "juta-traka-u-boji-cena-po-metru-1": "juta-traka-u-boji",
  "jutano-platno-400-rsd-m": "jutano-platno",
  "juta-klube-1kg": "juta-klube-1mm",
  "ljuljaska-okrugla-drvo-i-juta": "ljuljaska-gospodar-prstenova",
  "jutani-dzakcici-i-vrece-prirodna-boja": "jutani-dzakcici-i-vrece",
  "monkey-bar-rope": "monkey-bar-kanap",
  "merdevine-za-decu-brodske-merdevine": "brodske-merdevine",
  "zidna-dekoracija-pleteni-panel-od-kanapa": "zidni-panel-od-kanapa",
  "plafonska-dekoracija-od-kanapa-vertikalne-linije": "plafonska-dekoracija-od-kanapa",
  "stolica-pletena-drvo-i-juta": "pletena-stolica-drvo-i-juta",
};

const NAME = {
  "prirodna-juta-cena-po-metru": "Prirodni jutani kanap (natur)",
  "sinteticka-juta-cena-po-metru": "Sintetički jutani kanap",
  "merdevine-za-decu-brodske-merdevine": "Brodske merdevine",
  "juta-klube-2-5mm": "Juta klupče 2,5 mm",
  "juta-klube-1kg": "Juta klupče 1 mm",
  "zidna-dekoracija-pleteni-panel-od-kanapa": "Zidni panel od pletenog kanapa",
  "plafonska-dekoracija-od-kanapa-vertikalne-linije": "Plafonska dekoracija od kanapa",
  "stolica-pletena-drvo-i-juta": "Pletena stolica — drvo i juta",
  "jutani-dzakcici-i-vrece-prirodna-boja": "Jutani džakčići i vreće",
};

// ── jedinstven tekst po proizvodu ─────────────────────────────────────
const COPY = {
  "prirodna-juta-cena-po-metru": {
    lead: "Prirodni jutani kanap od 4 do 40 mm, sečen na dužinu koju izaberete — za dekoraciju, ograde, grebalice, pakovanje i zanatske radove.",
    forWhom: "Za majstore, dekoratere, ljubitelje ručnog rada i sve koji traže prirodan, biorazgradiv kanap.",
  },
  "sinteticka-juta-cena-po-metru": {
    lead: "Izgleda kao prirodna juta, a ne upija vodu i ne truli — pravi izbor za ograde, terase, bašte i sve što stoji napolju.",
    forWhom: "Za spoljnu upotrebu: gelendere, nautiku, igrališta i ugostiteljske bašte.",
  },
  "jutani-kanap-u-boji-cena-po-metru": {
    lead: "Jutani kanap u boji, od 4 do 30 mm — isti prirodan materijal, sa tonom koji se uklapa u vaš enterijer ili projekat.",
    forWhom: "Za dekoratere, dečije sobe, rukotvorine i projekte gde je boja deo priče.",
  },
  "juta-traka-u-boji-cena-po-metru-1": {
    lead: "Tkana jutana traka u boji, širine od 5 do 20 cm — za pakovanje poklona, aranžmane i dekoraciju stola.",
    forWhom: "Za cvećare, dekoratere događaja i sve koji pakuju sa stilom.",
  },
  "jutano-platno-400-rsd-m": {
    lead: "Jutano platno od 100% prirodne jute, širine 1,15 m — za torbe, presvlake, dekoraciju i zanatske radove.",
    forWhom: "Za krojače, dekoratere, baštovane i kreativne radionice.",
  },
  "juta-klube-2-5mm": {
    lead: "Klupče prirodnog jutanog kanapa debljine 2,5 mm i dužine 40 metara — uvek pri ruci za vezivanje i pakovanje.",
    forWhom: "Za pakovanje, baštu, DIY projekte i školske radionice.",
  },
  "juta-klube-1kg": {
    lead: "Tanki jutani kanap od 1 mm, 100 metara u klupčetu — za fino vezivanje, etikete i ukrasno pakovanje.",
    forWhom: "Za radnje, cvećare i sve koji vole uredno upakovan poklon.",
  },
  "juta-4-snopa": {
    lead: "Čvrst jutani kanap upleten od četiri snopa — ravnomeran, gust i otporan na habanje.",
    forWhom: "Za ozbiljnije opterećenje, ograde i dekoraciju gde se kanap vidi izbliza.",
  },
  "juta-3-snopa": {
    lead: "Klasični jutani kanap upleten od tri snopa — prepoznatljiva spirala i prirodna nijansa.",
    forWhom: "Za dekoraciju, ograde i rustične enterijere.",
  },
  "bokobrani-rusticni": {
    lead: "Ručno pleteni jutani bokobrani — funkcionalni na brodu, a dekorativni na terasi, u kafani ili rustičnom enterijeru.",
    forWhom: "Za vlasnike plovila, ugostitelje i ljubitelje nautičkog stila.",
  },
  "kanap-za-penjanje-fi40": {
    lead: "Debeo jutani kanap za penjanje (fi 40) sa čeličnom alkom za kačenje — spreman za dvorište, teretanu ili igralište.",
    forWhom: "Za teretane, škole, dvorišta i sve koji treniraju snagu hvata.",
  },
  "junior-kanap-za-penjanje-fi30": {
    lead: "Kanap za penjanje fi 30 bez čvorova, prilagođen dečijoj ruci — za dvorište, igralište i dečiju sobu.",
    forWhom: "Za decu, vrtiće i porodična dvorišta.",
  },
  "mreza-za-penjanje-zastitna-mreza": {
    lead: "Jutana mreža za penjanje ili zaštitu, pletena po meri — debljina kanapa, veličina okca i kačenje prema vašoj konstrukciji.",
    forWhom: "Za igrališta, sportske terene, galerije i dekorativne instalacije.",
  },
  "merdevine-za-decu-brodske-merdevine": {
    lead: "Brodske merdevine od jutanog kanapa i drvenih prečki, dužine od 1 do 10 metara.",
    forWhom: "Za dečija igrališta, kućice na drvetu, terase i nautički dekor.",
  },
  "monkey-bar-rope": {
    lead: "Jutani kanap za monkey bar, debljine 35–40 mm i dužine 50 cm — sa kuglom na kraju ili bez nje.",
    forWhom: "Za teretane, ninja staze i kućne fitnes kutke.",
  },
  "jutani-tabure": {
    lead: "Okrugli tabure obmotan prirodnom jutom — sedište, oslonac za noge ili mali stočić, u veličini M ili XL.",
    forWhom: "Za dnevnu sobu, terasu i rustične enterijere.",
  },
  "stolica-pletena-drvo-i-juta": {
    lead: "Drvena stolica sa sedištem i naslonom ručno pletenim od jute — čvrsta, topla i prirodna.",
    forWhom: "Za trpezarije, kafane i vikendice.",
  },
  "klub-sto-juta": {
    lead: "Niski okrugli klub sto sa jutanim omotačem — centralni komad dnevne sobe ili terase.",
    forWhom: "Za ljubitelje prirodnih materijala i boho enterijera.",
  },
  "ljuljaska-okrugla-drvo-i-juta": {
    lead: "Okrugla ljuljaška sa drvenim prstenom i jutanim kanapom — unikatna forma koja privlači pogled u svakom dvorištu.",
    forWhom: "Za bašte, dvorišta, terase i kafiće sa baštom.",
  },
  "ljuljaska-basic-drvo-i-juta": {
    lead: "Klasična drvena ljuljaška na jutanom kanapu — jednostavna, čvrsta i spremna za kačenje.",
    forWhom: "Za decu i odrasle, u dvorištu, bašti ili na terasi.",
  },
  "jutana-visilica-sa-el-kablom": {
    lead: "Jutani kanap sa ugrađenim električnim kablom, spreman za montažu viseće rasvete — debljine fi 25, 30 ili 40.",
    forWhom: "Za električare, dekoratere i ugostitelje koji uređuju rustičnu rasvetu.",
  },
  "jutana-visilica": {
    lead: "Rustična viseća lampa od jutanog kanapa — jednostruka, dupla ili trostruka.",
    forWhom: "Za kuhinje, šankove, kafane i restorane.",
  },
  "jutani-luster": {
    lead: "Višekraki luster od prirodnog jutanog kanapa — topla, autentična svetlost za veće prostorije.",
    forWhom: "Za trpezarije, kafane, restorane i vikendice.",
  },
  "zidna-dekoracija-pleteni-panel-od-kanapa": {
    lead: "Zidni panel od pletenog kanapa sa geometrijskim šarama — izrađuje se po meri vašeg zida.",
    forWhom: "Za lokale, kancelarije i domove sa industrijskim ili rustičnim stilom.",
  },
  "plafonska-dekoracija-od-kanapa-vertikalne-linije": {
    lead: "Plafonska instalacija od vertikalnih linija jutanog kanapa — menja prostor bez građevinskih radova.",
    forWhom: "Za kafane, restorane, hotele i poslovne prostore.",
  },
  "jutani-podmetac": {
    lead: "Pleteni jutani podmetači za čaše i tanjire — štite sto i daju trpezi prirodnu notu.",
    forWhom: "Za domaćinstva, kafiće i restorane.",
  },
  "jutani-dzakcici-i-vrece-prirodna-boja": {
    lead: "Jutani džakčići i vreće u pet veličina — za pakovanje poklona, suvenire, kafu i dekoraciju.",
    forWhom: "Za radnje, proizvođače suvenira, venčanja i firme koje pakuju poklone.",
  },
  "silo-za-kanap": {
    lead: "Šilo za provlačenje i spajanje kanapa — nezamenljiv alat za pletenje i završne radove.",
    forWhom: "Za sve koji sami pletu, vezuju ili popravljaju kanap.",
  },
  "metalna-suza-za-kanap": {
    lead: "Metalna suza (kaus) štiti omču kanapa od habanja i daje čvrst, uredan završetak.",
    forWhom: "Za montažu ograda, ljuljaški i visećih instalacija.",
  },
  "metalna-alka-za-kanap": {
    lead: "Metalna alka za kačenje i spajanje jutanog kanapa — za ljuljaške, rasvetu i dekoracije.",
    forWhom: "Za montažu ljuljaški, visilica i zidnih dekoracija.",
  },
};

/**
 * SEO naslovi (<title>, bez " | Juta Svet" — dodaje se sam). Pokrivaju reči koje kupci
 * stvarno kucaju: kanap / konopac / uže, debljine, „cena", „na metar" (v. docs/seo-istrazivanje.md).
 */
const SEO_TITLE = {
  "prirodna-juta-cena-po-metru": "Jutani kanap na metar 4–40 mm — prirodni konopac od jute, cena",
  "sinteticka-juta-cena-po-metru": "Sintetička juta — kanap i uže za spoljnu upotrebu, cena po metru",
  "jutani-kanap-u-boji-cena-po-metru": "Jutani kanap u boji na metar 4–30 mm — cena",
  "juta-klube-2-5mm": "Juta klupče 2,5 mm, 40 m — tanki jutani kanap",
  "juta-klube-1kg": "Juta klupče 1 mm, 100 m — kanap za pakovanje",
  "juta-3-snopa": "Juta 3 snopa — upleteni jutani konopac",
  "juta-4-snopa": "Juta 4 snopa — čvrst jutani konopac",
  "jutano-platno-400-rsd-m": "Jutano platno — tkanina od jute, širina 1,15 m",
  "juta-traka-u-boji-cena-po-metru-1": "Juta traka u boji — jutana traka 5–20 cm",
  "bokobrani-rusticni": "Bokobrani od jute — ručno pleteni, nautički dekor",
  "kanap-za-penjanje-fi40": "Kanap za penjanje fi 40 — uže za penjanje sa alkom",
  "junior-kanap-za-penjanje-fi30": "Kanap za penjanje fi 30 za decu — uže bez čvorova",
  "mreza-za-penjanje-zastitna-mreza": "Mreža za penjanje i zaštitna mreža od kanapa, po meri",
  "merdevine-za-decu-brodske-merdevine": "Brodske merdevine od kanapa — za decu, dvorište i čamac",
  "monkey-bar-rope": "Monkey bar kanap 35–40 mm — jutano uže za fitnes",
  "jutani-tabure": "Jutani tabure — okrugli puf od jute, M i XL",
  "stolica-pletena-drvo-i-juta": "Pletena stolica od jute i drveta",
  "klub-sto-juta": "Klub sto od jute — okrugli niski sto",
  "ljuljaska-okrugla-drvo-i-juta": "Okrugla ljuljaška za dvorište — drvo i juta",
  "ljuljaska-basic-drvo-i-juta": "Ljuljaška za dvorište od drveta i jutanog užeta",
  "jutana-visilica-sa-el-kablom": "Jutani kanap sa el. kablom — visilica po metru",
  "jutana-visilica": "Jutana visilica — viseća lampa od kanapa",
  "jutani-luster": "Jutani luster — luster od kanapa, rustična rasveta",
  "zidna-dekoracija-pleteni-panel-od-kanapa": "Zidna dekoracija od kanapa — pleteni panel po meri",
  "plafonska-dekoracija-od-kanapa-vertikalne-linije": "Plafonska dekoracija od kanapa — za kafane i lokale",
  "jutani-podmetac": "Jutani podmetači za čaše i tanjire",
  "jutani-dzakcici-i-vrece-prirodna-boja": "Jutani džakčići i vreće — za pakovanje poklona",
  "silo-za-kanap": "Šilo za kanap — alat za pletenje i spajanje",
  "metalna-suza-za-kanap": "Metalna suza (kaus) za kanap i uže",
  "metalna-alka-za-kanap": "Metalna alka za kanap i uže",
};

/** Drugi nazivi pod kojima kupci traže proizvod (rečenica u opisu proizvoda). */
const AKA = {
  "prirodna-juta-cena-po-metru": "jutani konopac, juta kanap, uže od jute ili jutani štrik",
  "sinteticka-juta-cena-po-metru": "sintetički konopac ili uže za spoljnu upotrebu",
  "jutani-kanap-u-boji-cena-po-metru": "obojeni jutani konopac ili juta kanap u boji",
  "juta-klube-2-5mm": "tanki jutani kanap ili kanap za vezivanje",
  "juta-klube-1kg": "tanki kanap za pakovanje ili kanap za etikete",
  "juta-3-snopa": "upleteni jutani konopac ili uže od jute",
  "juta-4-snopa": "jutani konopac od četiri snopa ili uže od jute",
  "jutano-platno-400-rsd-m": "jutana tkanina ili platno od jute",
  "juta-traka-u-boji-cena-po-metru-1": "jutana traka, traka od jute ili ukrasna juta traka",
  "kanap-za-penjanje-fi40": "uže za penjanje, konopac za penjanje ili CrossFit uže",
  "junior-kanap-za-penjanje-fi30": "dečije uže za penjanje ili konopac za penjanje",
  "merdevine-za-decu-brodske-merdevine": "merdevine od kanapa, merdevine od užeta ili merdevine za čamac",
  "mreza-za-penjanje-zastitna-mreza": "mreža od kanapa, mreža od užeta ili mreža za igralište",
  "monkey-bar-rope": "uže za monkey bar ili kanap za ninja stazu",
  "jutani-luster": "luster od kanapa ili luster od užeta",
  "jutana-visilica": "visilica od jute ili lampa od kanapa",
  "jutana-visilica-sa-el-kablom": "tekstilni kabl od jute ili kanap sa kablom za lampe",
};

const BESTSELLER = [
  "prirodna-juta-cena-po-metru",
  "sinteticka-juta-cena-po-metru",
  "jutani-kanap-u-boji-cena-po-metru",
  "kanap-za-penjanje-fi40",
  "merdevine-za-decu-brodske-merdevine",
  "bokobrani-rusticni",
  "jutani-tabure",
  "ljuljaska-okrugla-drvo-i-juta",
];
const FEATURED = new Set(["jutani-luster", "mreza-za-penjanje-zastitna-mreza"]);

/** Ručna zamena slike za jednu vrednost prve opcije (npr. debljinu). */
const VARIANT_IMAGE_OVERRIDE = {
  "prirodna-juta-cena-po-metru": {
    // Fi 8: tanji kalem (ranije je stajala slika debelog kanapa)
    "8mm": "brand/source-images/prirodna-juta-8mm.jpg",
    // Fi 40: najdeblji kanap (ranije je stajala ista slika kao za 30mm)
    "40mm": "Gemini_Generated_Image_l4i01ml4i01ml4i0",
  },
};

/** Delovi naziva fajla slika koje se nigde ne prikazuju. */
const BANNED_IMAGES = ["jutatrakauboji1"];

/** Ispravke vrednosti opcija iz Shopify-ja. */
const OPTION_VALUE_FIX = { 10: "10m", "Fiksni 1m duzine": "Fiksni, 1 m dužine", "Fiksni 2m duzine": "Fiksni, 2 m dužine" };
const OPTION_NAME_FIX = { Fi: "Debljina", "Duzina/cena": "Dužina", Dimenzije: "Model", Dimenzija: "Dimenzija" };

// ──────────────────────────────────────────────────────────────────────

const fmt = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const leadingNum = (v) => {
  const m = String(v).replace(/^fi\s*/i, "").match(/^(\d+(?:[.,]\d+)?)/);
  return m ? parseFloat(m[1].replace(",", ".")) : null;
};
const baseName = (u) => decodeURIComponent(String(u).split("?")[0].split("/").pop() || "");
// Shopify duplikatima dodaje "_<uuid>" na ime fajla — to se ignoriše pri poređenju
const imgId = (u) =>
  baseName(u)
    .replace(/\.\w+$/, "")
    .replace(/_[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, "");
const sameImage = (a, b) => imgId(a) === imgId(b);

const SPEC_RE = /^(Materijal|Tip|Debljina|Dužina|Oblik|Primena|Širina|Prodaje se)\b/i;
const DROP_RE = /(kontakt forme|kontaktirajte nas|jutasvet@gmail|^Cena\b|RSD|\bdin\b|ponudu pošaljite|ponudu kontakt|Za cenu i narudžbinu)/i;

const items = [];
const imageJobs = [];
const redirects = [];

for (const p of raw) {
  const cat = CATEGORY[p.handle];
  if (!cat) continue;
  if (p.status !== "active" && !INCLUDE_DRAFT.has(p.handle)) continue;

  const slug = SLUG[p.handle] ?? p.handle;
  const name = NAME[p.handle] ?? p.title;
  const [category, group] = cat;
  const copy = COPY[p.handle] ?? { lead: "", forWhom: "" };
  if (slug !== p.handle) redirects.push([p.handle, slug]);

  // ── opcije i varijante ──
  const rawNames = p.option_names.map((n) => OPTION_NAME_FIX[n] ?? n);
  const isDefault = p.variants.length <= 1 && (!p.variants[0] || p.variants[0].options[0] === "Default Title");
  let variants = p.variants.map((v) => ({
    options: v.options.map((o) => OPTION_VALUE_FIX[o] ?? o),
    price: Math.round(v.price),
    compareAt: v.compare_at > v.price ? Math.round(v.compare_at) : null,
    image: v.image,
  }));

  let options = [];
  if (!isDefault) {
    for (let i = 0; i < 3; i++) {
      if (!rawNames[i]) continue;
      const vals = [...new Set(variants.map((v) => v.options[i]).filter(Boolean))];
      if (vals.length === 0) continue;
      const allNum = vals.every((x) => leadingNum(x) !== null);
      if (allNum) vals.sort((a, b) => leadingNum(a) - leadingNum(b));
      options.push({ index: i, name: rawNames[i], values: vals });
    }
    // opcija sa samo jednom vrednošću nije izbor (npr. Model: „Bez kugle")
    options = options.filter((o) => o.values.length > 1 || options.length === 1);
  }

  // ── slike ──
  const override = VARIANT_IMAGE_OVERRIDE[p.handle] ?? {};
  const productImgs = p.images.map((im) => im.src).filter((u) => !BANNED_IMAGES.some((b) => u.includes(b)));
  const firstOpt = options[0];
  const variantImgFor = new Map(); // vrednost prve opcije -> izvor slike
  if (firstOpt) {
    for (const val of firstOpt.values) {
      let src = override[val];
      if (src && !src.includes("/")) src = productImgs.find((u) => u.includes(src)) ?? null;
      if (!src) src = variants.find((v) => v.options[firstOpt.index] === val && v.image)?.image ?? null;
      if (src && BANNED_IMAGES.some((b) => src.includes(b))) src = null;
      if (src) variantImgFor.set(val, src);
    }
  }
  const variantSrcs = [...new Set(variantImgFor.values())];
  const lead = productImgs.filter((u) => !variantSrcs.some((v) => sameImage(u, v)));
  const gallerySrcs = [];
  const pushSrc = (s) => {
    if (!gallerySrcs.some((g) => sameImage(g, s))) gallerySrcs.push(s);
  };
  if (lead[0]) pushSrc(lead[0]);
  variantSrcs.forEach(pushSrc);
  lead.slice(1).forEach(pushSrc);
  const limit = variantSrcs.length ? 12 : 6;
  const gallery = gallerySrcs.slice(0, limit);
  if (gallery.length === 0) continue; // bez slike ne ide na sajt

  const images = gallery.map((src, i) => ({
    src: `/images/products/${slug}/${i + 1}.webp`,
    alt: i === 0 ? `${name} — Juta Svet` : `${name}, slika ${i + 1}`,
  }));
  imageJobs.push({ slug, urls: gallery });
  const imgPathFor = (src) => {
    const idx = gallery.findIndex((g) => sameImage(g, src));
    return idx >= 0 ? images[idx].src : null;
  };

  // ── varijante za sajt ──
  const outVariants = (isDefault ? [{ options: [], price: variants[0]?.price ?? 0, compareAt: variants[0]?.compareAt ?? null }] : variants).map((v) => {
    const opts = isDefault ? [] : options.map((o) => v.options[o.index]);
    const label = opts.join(" · ");
    const vImg = firstOpt && !isDefault ? variantImgFor.get(v.options[firstOpt.index]) : null;
    return {
      key: label || "standard",
      label,
      options: opts,
      price: v.price,
      compareAt: v.compareAt ?? null,
      image: vImg ? imgPathFor(vImg) : null,
    };
  });

  const prices = outVariants.map((v) => v.price).filter((x) => x > 0);
  const onRequest = prices.length === 0;
  const price = onRequest ? 0 : Math.min(...prices);
  const maxPrice = onRequest ? 0 : Math.max(...prices);
  const cmp = outVariants.find((v) => v.price === price)?.compareAt ?? null;

  // ── opis i specifikacije iz Shopify opisa ──
  const fold = (x) => String(x).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const optionValues = new Set(p.variants.flatMap((v) => v.options).map(fold));
  const specs = [];
  const description = [];
  for (const ln of p.body_lines) {
    if (DROP_RE.test(ln) || optionValues.has(fold(ln))) continue;
    if (SPEC_RE.test(ln) && ln.includes(":")) specs.push(ln);
    else if (/^(Fi \d|Širina \d|Veličina|Pojedinačno|Set od|Model)/.test(ln)) continue;
    else description.push(ln.replace(/^Cena zavisi od tri faktora:$/, "Cena zavisi od debljine kanapa, veličine okca i načina kačenja na konstrukciju."));
  }

  const priceTxt = onRequest ? "Cena na upit" : maxPrice > price ? `Od ${fmt(price)} RSD` : `${fmt(price)} RSD`;
  let seoDescription = `${name}: ${copy.lead} ${priceTxt} · dostava po Srbiji.`.replace(/\s+/g, " ").trim();
  if (seoDescription.length > 165) seoDescription = `${copy.lead} ${priceTxt} · dostava po Srbiji.`;

  items.push({
    slug,
    name,
    category,
    group,
    price,
    maxPrice,
    compareAt: cmp,
    onRequest,
    lead: copy.lead,
    forWhom: copy.forWhom,
    description,
    specs,
    options: options.map((o) => ({ name: o.name, values: o.values })),
    variants: outVariants,
    images,
    seoTitle: (SEO_TITLE[p.handle] || p.seo_title || `${name} | Juta Svet`).replace(/\s+/g, " ").trim(),
    aka: AKA[p.handle] ?? "",
    seoDescription,
    featured: FEATURED.has(p.handle),
    bestseller: BESTSELLER.includes(p.handle),
    bestsellerRank: BESTSELLER.indexOf(p.handle),
    sourceHandle: p.handle,
  });
}

// stabilan redosled: po kategoriji, pa po grupi (redosled iz CATEGORY), pa kako su navedeni
const handleOrder = Object.keys(CATEGORY);
items.sort(
  (a, b) =>
    CATEGORIES.indexOf(a.category) - CATEGORIES.indexOf(b.category) ||
    handleOrder.indexOf(a.sourceHandle) - handleOrder.indexOf(b.sourceHandle),
);

// ── products.ts ───────────────────────────────────────────────────────
const header = `// ⚠️  GENERISANO iz Shopify izvoza — ne menjati ručno.
// Regeneriši sa:  node scripts/gen-products.mjs
// Tekstovi, kategorije i adrese se uređuju u scripts/gen-products.mjs.

export type Category = ${CATEGORIES.map((c) => JSON.stringify(c)).join(" | ")};

export const CATEGORIES: Category[] = ${JSON.stringify(CATEGORIES)};

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductOption {
  /** npr. "Debljina", "Dužina" */
  name: string;
  values: string[];
}

export interface ProductVariant {
  /** jedinstven ključ varijante u okviru proizvoda (ide u korpu i porudžbinu) */
  key: string;
  /** npr. "8mm · 10m" (prazno za proizvode bez izbora) */
  label: string;
  /** vrednosti opcija istim redom kao Product.options */
  options: string[];
  /** cena u dinarima; 0 = na upit */
  price: number;
  compareAt: number | null;
  /** slika koja se prikazuje kad je izabrana ova varijanta */
  image: string | null;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  /** grupa unutar kategorije, npr. "Juta na metar" */
  group: string;
  /** najniža cena u dinarima (0 = cena na upit) */
  price: number;
  /** najviša cena varijante */
  maxPrice: number;
  compareAt: number | null;
  /** nijedna varijanta nema cenu — umesto korpe ide upit */
  onRequest: boolean;
  lead: string;
  forWhom: string;
  /** drugi nazivi pod kojima se proizvod traži (npr. "jutani konopac, uže od jute") */
  aka: string;
  /** pasusi opisa iz Shopify-ja */
  description: string[];
  /** npr. "Materijal: 100% prirodna juta" */
  specs: string[];
  options: ProductOption[];
  variants: ProductVariant[];
  images: ProductImage[];
  seoTitle: string;
  seoDescription: string;
  featured: boolean;
  bestseller: boolean;
  bestsellerRank: number;
  /** Originalni Shopify handle — samo za referencu */
  sourceHandle: string;
}

export interface CategoryMeta {
  slug: Category;
  title: string;
  heading: string;
  intro: string;
  /** grupe unutar kategorije, redom */
  groups: string[];
}

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  "kanap-i-tkanina": {
    slug: "kanap-i-tkanina",
    title: "Kanap i tkanina",
    heading: "Jutani kanap, platno i tkanina",
    intro:
      "Prirodni, sintetički i obojeni jutani kanap na metar, klupčad, snopovi, jutano platno i trake — od 1 do 40 mm, u dužini koja vam treba.",
    groups: ${JSON.stringify([...new Set(items.filter((i) => i.category === "kanap-i-tkanina").map((i) => i.group))])},
  },
  "sport-i-penjanje": {
    slug: "sport-i-penjanje",
    title: "Sport i penjanje",
    heading: "Kanapi za penjanje, mreže i fitnes",
    intro:
      "Kanapi za penjanje, brodske merdevine, mreže i fitnes oprema od jute — za dvorišta, igrališta, teretane i škole.",
    groups: ${JSON.stringify([...new Set(items.filter((i) => i.category === "sport-i-penjanje").map((i) => i.group))])},
  },
  "kuca-i-dekoracija": {
    slug: "kuca-i-dekoracija",
    title: "Kuća i dekoracija",
    heading: "Nameštaj, rasveta i dekoracija od jute",
    intro:
      "Taburei, stolice, ljuljaške, lusteri i visilice, zidne i plafonske dekoracije — prirodni materijali i ručna izrada za dom, baštu i ugostiteljstvo.",
    groups: ${JSON.stringify([...new Set(items.filter((i) => i.category === "kuca-i-dekoracija").map((i) => i.group))])},
  },
  "propratni-materijal": {
    slug: "propratni-materijal",
    title: "Propratni materijal",
    heading: "Propratni materijal i pribor za kanap",
    intro: "Alke, suze i alat za montažu, kačenje i završnu obradu jutanog kanapa.",
    groups: ${JSON.stringify([...new Set(items.filter((i) => i.category === "propratni-materijal").map((i) => i.group))])},
  },
};

export const PRODUCTS: Product[] = ${JSON.stringify(items, null, 2)};

export const getProduct = (slug: string): Product | undefined =>
  PRODUCTS.find((p) => p.slug === slug);

export const productsByCategory = (c: Category): Product[] =>
  PRODUCTS.filter((p) => p.category === c);

export const featuredProducts = (): Product[] => PRODUCTS.filter((p) => p.featured);

export const bestsellers = (): Product[] =>
  PRODUCTS.filter((p) => p.bestseller).sort((a, b) => a.bestsellerRank - b.bestsellerRank);

export function relatedProducts(p: Product, n = 4): Product[] {
  const sameGroup = PRODUCTS.filter((x) => x.group === p.group && x.slug !== p.slug);
  const sameCat = PRODUCTS.filter((x) => x.category === p.category && x.group !== p.group);
  const rest = PRODUCTS.filter((x) => x.category !== p.category);
  return [...sameGroup, ...sameCat, ...rest].slice(0, n);
}

export const priceRange = (): [number, number] => {
  const ps = PRODUCTS.filter((p) => !p.onRequest).map((p) => p.price);
  return [Math.min(...ps), Math.max(...PRODUCTS.map((p) => p.maxPrice))];
};

/** Tekst cene za karticu: "od 100 RSD", "5.000 RSD" ili "Cena na upit". */
export function priceFromLabel(p: Product, money: (n: number) => string): string {
  if (p.onRequest) return "Cena na upit";
  return p.maxPrice > p.price ? \`od \${money(p.price)}\` : money(p.price);
}
`;

// ── katalog za admin aplikaciju (admin/src/data/catalog.json) ─────────
const catalogProducts = items.map((i) => ({
  slug: i.slug,
  name: i.name,
  category: i.category,
  price: i.price,
  colors: i.variants.map((v) => ({
    key: v.key,
    // prva opcija -> "boja/tip", druga -> "veličina/dužina" u aplikaciji
    label: v.options[0] ?? "",
    size: v.options.slice(1).join(" · "),
    price: v.price,
  })),
  image: i.images[0] ? i.images[0].src.replace(/^\//, "") : "",
}));
const catalogVersion = parseInt(
  crypto.createHash("sha1").update(JSON.stringify(catalogProducts)).digest("hex").slice(0, 7),
  16,
);
fs.mkdirSync(path.join(ROOT, "admin/src/data"), { recursive: true });
fs.writeFileSync(
  path.join(ROOT, "admin/src/data/catalog.json"),
  JSON.stringify({ version: catalogVersion, products: catalogProducts }, null, 1),
  "utf8",
);

fs.writeFileSync(path.join(ROOT, "src/data/products.ts"), header, "utf8");
fs.writeFileSync(path.join(__dirname, "images.json"), JSON.stringify(imageJobs, null, 2), "utf8");
fs.writeFileSync(path.join(__dirname, "redirects.json"), JSON.stringify(redirects, null, 2), "utf8");

console.log(`✓ ${items.length} proizvoda -> src/data/products.ts`);
for (const c of CATEGORIES) console.log(`  ${c}: ${items.filter((i) => i.category === c).length}`);
const longDesc = items.filter((i) => i.seoDescription.length > 165);
if (longDesc.length) console.log(`  ⚠ meta opis > 165:`, longDesc.map((i) => `${i.slug}:${i.seoDescription.length}`).join(", "));
console.log(`✓ ${imageJobs.length} setova slika -> scripts/images.json`);
console.log(`✓ katalog za admin aplikaciju (v${catalogVersion}) -> admin/src/data/catalog.json`);
