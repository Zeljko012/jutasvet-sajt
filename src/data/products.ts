// ⚠️  GENERISANO iz Shopify izvoza — ne menjati ručno.
// Regeneriši sa:  node scripts/gen-products.mjs
// Tekstovi, kategorije i adrese se uređuju u scripts/gen-products.mjs.

export type Category = "kanap-i-tkanina" | "sport-i-penjanje" | "kuca-i-dekoracija" | "propratni-materijal";

export const CATEGORIES: Category[] = ["kanap-i-tkanina","sport-i-penjanje","kuca-i-dekoracija","propratni-materijal"];

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
    groups: ["Juta na metar","Klupče i snopovi","Platno i tkanina","Specijalni kanapi"],
  },
  "sport-i-penjanje": {
    slug: "sport-i-penjanje",
    title: "Sport i penjanje",
    heading: "Kanapi za penjanje, mreže i fitnes",
    intro:
      "Kanapi za penjanje, brodske merdevine, mreže i fitnes oprema od jute — za dvorišta, igrališta, teretane i škole.",
    groups: ["Kanapi za penjanje","Mreže i merdevine","Fitnes"],
  },
  "kuca-i-dekoracija": {
    slug: "kuca-i-dekoracija",
    title: "Kuća i dekoracija",
    heading: "Nameštaj, rasveta i dekoracija od jute",
    intro:
      "Taburei, stolice, ljuljaške, lusteri i visilice, zidne i plafonske dekoracije — prirodni materijali i ručna izrada za dom, baštu i ugostiteljstvo.",
    groups: ["Nameštaj","Ljuljaške","Rasveta","Zidovi i plafoni","Za trpezu i pakovanje"],
  },
  "propratni-materijal": {
    slug: "propratni-materijal",
    title: "Propratni materijal",
    heading: "Propratni materijal i pribor za kanap",
    intro: "Alke, suze i alat za montažu, kačenje i završnu obradu jutanog kanapa.",
    groups: ["Pribor"],
  },
};

export const PRODUCTS: Product[] = [
  {
    "slug": "prirodna-juta",
    "name": "Prirodni jutani kanap (natur)",
    "category": "kanap-i-tkanina",
    "group": "Juta na metar",
    "price": 100,
    "maxPrice": 48000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Prirodni jutani kanap od 4 do 40 mm, sečen na dužinu koju izaberete — za dekoraciju, ograde, grebalice, pakovanje i zanatske radove.",
    "forWhom": "Za majstore, dekoratere, ljubitelje ručnog rada i sve koji traže prirodan, biorazgradiv kanap.",
    "description": [],
    "specs": [],
    "options": [
      {
        "name": "Debljina",
        "values": [
          "4mm",
          "6mm",
          "8mm",
          "10mm",
          "12mm",
          "16mm",
          "20mm",
          "25mm",
          "30mm",
          "40mm"
        ]
      },
      {
        "name": "Dužina",
        "values": [
          "5m",
          "10m",
          "15m",
          "20m",
          "25m",
          "30m",
          "35m",
          "40m",
          "45m",
          "50m",
          "60m",
          "80m",
          "100m"
        ]
      }
    ],
    "variants": [
      {
        "key": "4mm · 5m",
        "label": "4mm · 5m",
        "options": [
          "4mm",
          "5m"
        ],
        "price": 100,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 10m",
        "label": "4mm · 10m",
        "options": [
          "4mm",
          "10m"
        ],
        "price": 200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 15m",
        "label": "4mm · 15m",
        "options": [
          "4mm",
          "15m"
        ],
        "price": 300,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 20m",
        "label": "4mm · 20m",
        "options": [
          "4mm",
          "20m"
        ],
        "price": 400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 25m",
        "label": "4mm · 25m",
        "options": [
          "4mm",
          "25m"
        ],
        "price": 500,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 30m",
        "label": "4mm · 30m",
        "options": [
          "4mm",
          "30m"
        ],
        "price": 600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 35m",
        "label": "4mm · 35m",
        "options": [
          "4mm",
          "35m"
        ],
        "price": 700,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 40m",
        "label": "4mm · 40m",
        "options": [
          "4mm",
          "40m"
        ],
        "price": 800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 45m",
        "label": "4mm · 45m",
        "options": [
          "4mm",
          "45m"
        ],
        "price": 900,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 50m",
        "label": "4mm · 50m",
        "options": [
          "4mm",
          "50m"
        ],
        "price": 1000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 60m",
        "label": "4mm · 60m",
        "options": [
          "4mm",
          "60m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 80m",
        "label": "4mm · 80m",
        "options": [
          "4mm",
          "80m"
        ],
        "price": 1600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "4mm · 100m",
        "label": "4mm · 100m",
        "options": [
          "4mm",
          "100m"
        ],
        "price": 2000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/2.webp"
      },
      {
        "key": "6mm · 5m",
        "label": "6mm · 5m",
        "options": [
          "6mm",
          "5m"
        ],
        "price": 150,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 10m",
        "label": "6mm · 10m",
        "options": [
          "6mm",
          "10m"
        ],
        "price": 300,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 15m",
        "label": "6mm · 15m",
        "options": [
          "6mm",
          "15m"
        ],
        "price": 450,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 20m",
        "label": "6mm · 20m",
        "options": [
          "6mm",
          "20m"
        ],
        "price": 600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 25m",
        "label": "6mm · 25m",
        "options": [
          "6mm",
          "25m"
        ],
        "price": 750,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 30m",
        "label": "6mm · 30m",
        "options": [
          "6mm",
          "30m"
        ],
        "price": 900,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 35m",
        "label": "6mm · 35m",
        "options": [
          "6mm",
          "35m"
        ],
        "price": 1050,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 40m",
        "label": "6mm · 40m",
        "options": [
          "6mm",
          "40m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 45m",
        "label": "6mm · 45m",
        "options": [
          "6mm",
          "45m"
        ],
        "price": 1350,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 50m",
        "label": "6mm · 50m",
        "options": [
          "6mm",
          "50m"
        ],
        "price": 1500,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 60m",
        "label": "6mm · 60m",
        "options": [
          "6mm",
          "60m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 80m",
        "label": "6mm · 80m",
        "options": [
          "6mm",
          "80m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "6mm · 100m",
        "label": "6mm · 100m",
        "options": [
          "6mm",
          "100m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/3.webp"
      },
      {
        "key": "8mm · 5m",
        "label": "8mm · 5m",
        "options": [
          "8mm",
          "5m"
        ],
        "price": 200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 10m",
        "label": "8mm · 10m",
        "options": [
          "8mm",
          "10m"
        ],
        "price": 400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 15m",
        "label": "8mm · 15m",
        "options": [
          "8mm",
          "15m"
        ],
        "price": 600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 20m",
        "label": "8mm · 20m",
        "options": [
          "8mm",
          "20m"
        ],
        "price": 800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 25m",
        "label": "8mm · 25m",
        "options": [
          "8mm",
          "25m"
        ],
        "price": 1000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 30m",
        "label": "8mm · 30m",
        "options": [
          "8mm",
          "30m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 35m",
        "label": "8mm · 35m",
        "options": [
          "8mm",
          "35m"
        ],
        "price": 1400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 40m",
        "label": "8mm · 40m",
        "options": [
          "8mm",
          "40m"
        ],
        "price": 1600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 45m",
        "label": "8mm · 45m",
        "options": [
          "8mm",
          "45m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 50m",
        "label": "8mm · 50m",
        "options": [
          "8mm",
          "50m"
        ],
        "price": 2000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 60m",
        "label": "8mm · 60m",
        "options": [
          "8mm",
          "60m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 80m",
        "label": "8mm · 80m",
        "options": [
          "8mm",
          "80m"
        ],
        "price": 3200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "8mm · 100m",
        "label": "8mm · 100m",
        "options": [
          "8mm",
          "100m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/4.webp"
      },
      {
        "key": "10mm · 5m",
        "label": "10mm · 5m",
        "options": [
          "10mm",
          "5m"
        ],
        "price": 250,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 10m",
        "label": "10mm · 10m",
        "options": [
          "10mm",
          "10m"
        ],
        "price": 500,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 15m",
        "label": "10mm · 15m",
        "options": [
          "10mm",
          "15m"
        ],
        "price": 750,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 20m",
        "label": "10mm · 20m",
        "options": [
          "10mm",
          "20m"
        ],
        "price": 1000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 25m",
        "label": "10mm · 25m",
        "options": [
          "10mm",
          "25m"
        ],
        "price": 1250,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 30m",
        "label": "10mm · 30m",
        "options": [
          "10mm",
          "30m"
        ],
        "price": 1500,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 35m",
        "label": "10mm · 35m",
        "options": [
          "10mm",
          "35m"
        ],
        "price": 1750,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 40m",
        "label": "10mm · 40m",
        "options": [
          "10mm",
          "40m"
        ],
        "price": 2000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 45m",
        "label": "10mm · 45m",
        "options": [
          "10mm",
          "45m"
        ],
        "price": 2250,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 50m",
        "label": "10mm · 50m",
        "options": [
          "10mm",
          "50m"
        ],
        "price": 2500,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 60m",
        "label": "10mm · 60m",
        "options": [
          "10mm",
          "60m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 80m",
        "label": "10mm · 80m",
        "options": [
          "10mm",
          "80m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "10mm · 100m",
        "label": "10mm · 100m",
        "options": [
          "10mm",
          "100m"
        ],
        "price": 5000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/5.webp"
      },
      {
        "key": "12mm · 5m",
        "label": "12mm · 5m",
        "options": [
          "12mm",
          "5m"
        ],
        "price": 350,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 10m",
        "label": "12mm · 10m",
        "options": [
          "12mm",
          "10m"
        ],
        "price": 700,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 15m",
        "label": "12mm · 15m",
        "options": [
          "12mm",
          "15m"
        ],
        "price": 1050,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 20m",
        "label": "12mm · 20m",
        "options": [
          "12mm",
          "20m"
        ],
        "price": 1400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 25m",
        "label": "12mm · 25m",
        "options": [
          "12mm",
          "25m"
        ],
        "price": 1750,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 30m",
        "label": "12mm · 30m",
        "options": [
          "12mm",
          "30m"
        ],
        "price": 2100,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 35m",
        "label": "12mm · 35m",
        "options": [
          "12mm",
          "35m"
        ],
        "price": 2450,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 40m",
        "label": "12mm · 40m",
        "options": [
          "12mm",
          "40m"
        ],
        "price": 2800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 45m",
        "label": "12mm · 45m",
        "options": [
          "12mm",
          "45m"
        ],
        "price": 3150,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 50m",
        "label": "12mm · 50m",
        "options": [
          "12mm",
          "50m"
        ],
        "price": 3500,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 60m",
        "label": "12mm · 60m",
        "options": [
          "12mm",
          "60m"
        ],
        "price": 4200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 80m",
        "label": "12mm · 80m",
        "options": [
          "12mm",
          "80m"
        ],
        "price": 5600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "12mm · 100m",
        "label": "12mm · 100m",
        "options": [
          "12mm",
          "100m"
        ],
        "price": 7000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/6.webp"
      },
      {
        "key": "16mm · 5m",
        "label": "16mm · 5m",
        "options": [
          "16mm",
          "5m"
        ],
        "price": 600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 10m",
        "label": "16mm · 10m",
        "options": [
          "16mm",
          "10m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 15m",
        "label": "16mm · 15m",
        "options": [
          "16mm",
          "15m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 20m",
        "label": "16mm · 20m",
        "options": [
          "16mm",
          "20m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 25m",
        "label": "16mm · 25m",
        "options": [
          "16mm",
          "25m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 30m",
        "label": "16mm · 30m",
        "options": [
          "16mm",
          "30m"
        ],
        "price": 3600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 35m",
        "label": "16mm · 35m",
        "options": [
          "16mm",
          "35m"
        ],
        "price": 4200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 40m",
        "label": "16mm · 40m",
        "options": [
          "16mm",
          "40m"
        ],
        "price": 4800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 45m",
        "label": "16mm · 45m",
        "options": [
          "16mm",
          "45m"
        ],
        "price": 5400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 50m",
        "label": "16mm · 50m",
        "options": [
          "16mm",
          "50m"
        ],
        "price": 6000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 60m",
        "label": "16mm · 60m",
        "options": [
          "16mm",
          "60m"
        ],
        "price": 7200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 80m",
        "label": "16mm · 80m",
        "options": [
          "16mm",
          "80m"
        ],
        "price": 9600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "16mm · 100m",
        "label": "16mm · 100m",
        "options": [
          "16mm",
          "100m"
        ],
        "price": 12000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/7.webp"
      },
      {
        "key": "20mm · 5m",
        "label": "20mm · 5m",
        "options": [
          "20mm",
          "5m"
        ],
        "price": 850,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 10m",
        "label": "20mm · 10m",
        "options": [
          "20mm",
          "10m"
        ],
        "price": 1700,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 15m",
        "label": "20mm · 15m",
        "options": [
          "20mm",
          "15m"
        ],
        "price": 2550,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 20m",
        "label": "20mm · 20m",
        "options": [
          "20mm",
          "20m"
        ],
        "price": 3400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 25m",
        "label": "20mm · 25m",
        "options": [
          "20mm",
          "25m"
        ],
        "price": 4250,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 30m",
        "label": "20mm · 30m",
        "options": [
          "20mm",
          "30m"
        ],
        "price": 5100,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 35m",
        "label": "20mm · 35m",
        "options": [
          "20mm",
          "35m"
        ],
        "price": 5950,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 40m",
        "label": "20mm · 40m",
        "options": [
          "20mm",
          "40m"
        ],
        "price": 6800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 45m",
        "label": "20mm · 45m",
        "options": [
          "20mm",
          "45m"
        ],
        "price": 7650,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 50m",
        "label": "20mm · 50m",
        "options": [
          "20mm",
          "50m"
        ],
        "price": 8500,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 60m",
        "label": "20mm · 60m",
        "options": [
          "20mm",
          "60m"
        ],
        "price": 10200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 80m",
        "label": "20mm · 80m",
        "options": [
          "20mm",
          "80m"
        ],
        "price": 13600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "20mm · 100m",
        "label": "20mm · 100m",
        "options": [
          "20mm",
          "100m"
        ],
        "price": 17000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/8.webp"
      },
      {
        "key": "25mm · 5m",
        "label": "25mm · 5m",
        "options": [
          "25mm",
          "5m"
        ],
        "price": 1050,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 10m",
        "label": "25mm · 10m",
        "options": [
          "25mm",
          "10m"
        ],
        "price": 2100,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 15m",
        "label": "25mm · 15m",
        "options": [
          "25mm",
          "15m"
        ],
        "price": 3150,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 20m",
        "label": "25mm · 20m",
        "options": [
          "25mm",
          "20m"
        ],
        "price": 4200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 25m",
        "label": "25mm · 25m",
        "options": [
          "25mm",
          "25m"
        ],
        "price": 5250,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 30m",
        "label": "25mm · 30m",
        "options": [
          "25mm",
          "30m"
        ],
        "price": 6300,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 35m",
        "label": "25mm · 35m",
        "options": [
          "25mm",
          "35m"
        ],
        "price": 7350,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 40m",
        "label": "25mm · 40m",
        "options": [
          "25mm",
          "40m"
        ],
        "price": 8400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 45m",
        "label": "25mm · 45m",
        "options": [
          "25mm",
          "45m"
        ],
        "price": 9450,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 50m",
        "label": "25mm · 50m",
        "options": [
          "25mm",
          "50m"
        ],
        "price": 10500,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 60m",
        "label": "25mm · 60m",
        "options": [
          "25mm",
          "60m"
        ],
        "price": 12600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 80m",
        "label": "25mm · 80m",
        "options": [
          "25mm",
          "80m"
        ],
        "price": 16800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "25mm · 100m",
        "label": "25mm · 100m",
        "options": [
          "25mm",
          "100m"
        ],
        "price": 21000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/9.webp"
      },
      {
        "key": "30mm · 5m",
        "label": "30mm · 5m",
        "options": [
          "30mm",
          "5m"
        ],
        "price": 1600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 10m",
        "label": "30mm · 10m",
        "options": [
          "30mm",
          "10m"
        ],
        "price": 3200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 15m",
        "label": "30mm · 15m",
        "options": [
          "30mm",
          "15m"
        ],
        "price": 4800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 20m",
        "label": "30mm · 20m",
        "options": [
          "30mm",
          "20m"
        ],
        "price": 6400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 25m",
        "label": "30mm · 25m",
        "options": [
          "30mm",
          "25m"
        ],
        "price": 8000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 30m",
        "label": "30mm · 30m",
        "options": [
          "30mm",
          "30m"
        ],
        "price": 9600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 35m",
        "label": "30mm · 35m",
        "options": [
          "30mm",
          "35m"
        ],
        "price": 11200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 40m",
        "label": "30mm · 40m",
        "options": [
          "30mm",
          "40m"
        ],
        "price": 12800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 45m",
        "label": "30mm · 45m",
        "options": [
          "30mm",
          "45m"
        ],
        "price": 14400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 50m",
        "label": "30mm · 50m",
        "options": [
          "30mm",
          "50m"
        ],
        "price": 16000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 60m",
        "label": "30mm · 60m",
        "options": [
          "30mm",
          "60m"
        ],
        "price": 19200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 80m",
        "label": "30mm · 80m",
        "options": [
          "30mm",
          "80m"
        ],
        "price": 25600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "30mm · 100m",
        "label": "30mm · 100m",
        "options": [
          "30mm",
          "100m"
        ],
        "price": 32000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/10.webp"
      },
      {
        "key": "40mm · 5m",
        "label": "40mm · 5m",
        "options": [
          "40mm",
          "5m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 10m",
        "label": "40mm · 10m",
        "options": [
          "40mm",
          "10m"
        ],
        "price": 4800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 15m",
        "label": "40mm · 15m",
        "options": [
          "40mm",
          "15m"
        ],
        "price": 7200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 20m",
        "label": "40mm · 20m",
        "options": [
          "40mm",
          "20m"
        ],
        "price": 9600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 25m",
        "label": "40mm · 25m",
        "options": [
          "40mm",
          "25m"
        ],
        "price": 12000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 30m",
        "label": "40mm · 30m",
        "options": [
          "40mm",
          "30m"
        ],
        "price": 14400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 35m",
        "label": "40mm · 35m",
        "options": [
          "40mm",
          "35m"
        ],
        "price": 16800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 40m",
        "label": "40mm · 40m",
        "options": [
          "40mm",
          "40m"
        ],
        "price": 19200,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 45m",
        "label": "40mm · 45m",
        "options": [
          "40mm",
          "45m"
        ],
        "price": 21600,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 50m",
        "label": "40mm · 50m",
        "options": [
          "40mm",
          "50m"
        ],
        "price": 24000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 60m",
        "label": "40mm · 60m",
        "options": [
          "40mm",
          "60m"
        ],
        "price": 28800,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 80m",
        "label": "40mm · 80m",
        "options": [
          "40mm",
          "80m"
        ],
        "price": 38400,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      },
      {
        "key": "40mm · 100m",
        "label": "40mm · 100m",
        "options": [
          "40mm",
          "100m"
        ],
        "price": 48000,
        "compareAt": null,
        "image": "/images/products/prirodna-juta/11.webp"
      }
    ],
    "images": [
      {
        "src": "/images/products/prirodna-juta/1.webp",
        "alt": "Prirodni jutani kanap (natur) — Juta Svet"
      },
      {
        "src": "/images/products/prirodna-juta/2.webp",
        "alt": "Prirodni jutani kanap (natur), slika 2"
      },
      {
        "src": "/images/products/prirodna-juta/3.webp",
        "alt": "Prirodni jutani kanap (natur), slika 3"
      },
      {
        "src": "/images/products/prirodna-juta/4.webp",
        "alt": "Prirodni jutani kanap (natur), slika 4"
      },
      {
        "src": "/images/products/prirodna-juta/5.webp",
        "alt": "Prirodni jutani kanap (natur), slika 5"
      },
      {
        "src": "/images/products/prirodna-juta/6.webp",
        "alt": "Prirodni jutani kanap (natur), slika 6"
      },
      {
        "src": "/images/products/prirodna-juta/7.webp",
        "alt": "Prirodni jutani kanap (natur), slika 7"
      },
      {
        "src": "/images/products/prirodna-juta/8.webp",
        "alt": "Prirodni jutani kanap (natur), slika 8"
      },
      {
        "src": "/images/products/prirodna-juta/9.webp",
        "alt": "Prirodni jutani kanap (natur), slika 9"
      },
      {
        "src": "/images/products/prirodna-juta/10.webp",
        "alt": "Prirodni jutani kanap (natur), slika 10"
      },
      {
        "src": "/images/products/prirodna-juta/11.webp",
        "alt": "Prirodni jutani kanap (natur), slika 11"
      }
    ],
    "seoTitle": "Prirodni jutani kanap — cena po metru | Juta Svet",
    "seoDescription": "Prirodni jutani kanap od 4 do 40 mm, sečen na dužinu koju izaberete — za dekoraciju, ograde, grebalice, pakovanje i zanatske radove. Od 100 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": true,
    "bestsellerRank": 0,
    "sourceHandle": "prirodna-juta-cena-po-metru"
  },
  {
    "slug": "sinteticka-juta",
    "name": "Sintetički jutani kanap",
    "category": "kanap-i-tkanina",
    "group": "Juta na metar",
    "price": 200,
    "maxPrice": 85000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Izgleda kao prirodna juta, a ne upija vodu i ne truli — pravi izbor za ograde, terase, bašte i sve što stoji napolju.",
    "forWhom": "Za spoljnu upotrebu: gelendere, nautiku, igrališta i ugostiteljske bašte.",
    "description": [],
    "specs": [],
    "options": [
      {
        "name": "Debljina",
        "values": [
          "Fi 6",
          "Fi 10",
          "Fi 15",
          "Fi 20",
          "Fi 30",
          "Fi 40"
        ]
      },
      {
        "name": "Dužina",
        "values": [
          "5m",
          "10m",
          "15m",
          "20m",
          "25m",
          "30m",
          "35m",
          "40m",
          "45m",
          "50m",
          "60m",
          "80m",
          "100m"
        ]
      }
    ],
    "variants": [
      {
        "key": "Fi 6 · 5m",
        "label": "Fi 6 · 5m",
        "options": [
          "Fi 6",
          "5m"
        ],
        "price": 200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 10m",
        "label": "Fi 6 · 10m",
        "options": [
          "Fi 6",
          "10m"
        ],
        "price": 400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 15m",
        "label": "Fi 6 · 15m",
        "options": [
          "Fi 6",
          "15m"
        ],
        "price": 600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 20m",
        "label": "Fi 6 · 20m",
        "options": [
          "Fi 6",
          "20m"
        ],
        "price": 800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 25m",
        "label": "Fi 6 · 25m",
        "options": [
          "Fi 6",
          "25m"
        ],
        "price": 1000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 30m",
        "label": "Fi 6 · 30m",
        "options": [
          "Fi 6",
          "30m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 35m",
        "label": "Fi 6 · 35m",
        "options": [
          "Fi 6",
          "35m"
        ],
        "price": 1400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 40m",
        "label": "Fi 6 · 40m",
        "options": [
          "Fi 6",
          "40m"
        ],
        "price": 1600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 45m",
        "label": "Fi 6 · 45m",
        "options": [
          "Fi 6",
          "45m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 50m",
        "label": "Fi 6 · 50m",
        "options": [
          "Fi 6",
          "50m"
        ],
        "price": 2000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 60m",
        "label": "Fi 6 · 60m",
        "options": [
          "Fi 6",
          "60m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 80m",
        "label": "Fi 6 · 80m",
        "options": [
          "Fi 6",
          "80m"
        ],
        "price": 3200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 6 · 100m",
        "label": "Fi 6 · 100m",
        "options": [
          "Fi 6",
          "100m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 5m",
        "label": "Fi 10 · 5m",
        "options": [
          "Fi 10",
          "5m"
        ],
        "price": 450,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 10m",
        "label": "Fi 10 · 10m",
        "options": [
          "Fi 10",
          "10m"
        ],
        "price": 900,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 15m",
        "label": "Fi 10 · 15m",
        "options": [
          "Fi 10",
          "15m"
        ],
        "price": 1350,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 20m",
        "label": "Fi 10 · 20m",
        "options": [
          "Fi 10",
          "20m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 25m",
        "label": "Fi 10 · 25m",
        "options": [
          "Fi 10",
          "25m"
        ],
        "price": 2250,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 30m",
        "label": "Fi 10 · 30m",
        "options": [
          "Fi 10",
          "30m"
        ],
        "price": 2700,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 35m",
        "label": "Fi 10 · 35m",
        "options": [
          "Fi 10",
          "35m"
        ],
        "price": 3150,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 40m",
        "label": "Fi 10 · 40m",
        "options": [
          "Fi 10",
          "40m"
        ],
        "price": 3600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 45m",
        "label": "Fi 10 · 45m",
        "options": [
          "Fi 10",
          "45m"
        ],
        "price": 4050,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 50m",
        "label": "Fi 10 · 50m",
        "options": [
          "Fi 10",
          "50m"
        ],
        "price": 4500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 60m",
        "label": "Fi 10 · 60m",
        "options": [
          "Fi 10",
          "60m"
        ],
        "price": 5400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 80m",
        "label": "Fi 10 · 80m",
        "options": [
          "Fi 10",
          "80m"
        ],
        "price": 7200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 10 · 100m",
        "label": "Fi 10 · 100m",
        "options": [
          "Fi 10",
          "100m"
        ],
        "price": 9000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 5m",
        "label": "Fi 15 · 5m",
        "options": [
          "Fi 15",
          "5m"
        ],
        "price": 800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 10m",
        "label": "Fi 15 · 10m",
        "options": [
          "Fi 15",
          "10m"
        ],
        "price": 1600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 15m",
        "label": "Fi 15 · 15m",
        "options": [
          "Fi 15",
          "15m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 20m",
        "label": "Fi 15 · 20m",
        "options": [
          "Fi 15",
          "20m"
        ],
        "price": 3200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 25m",
        "label": "Fi 15 · 25m",
        "options": [
          "Fi 15",
          "25m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 30m",
        "label": "Fi 15 · 30m",
        "options": [
          "Fi 15",
          "30m"
        ],
        "price": 4800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 35m",
        "label": "Fi 15 · 35m",
        "options": [
          "Fi 15",
          "35m"
        ],
        "price": 5600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 40m",
        "label": "Fi 15 · 40m",
        "options": [
          "Fi 15",
          "40m"
        ],
        "price": 6400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 45m",
        "label": "Fi 15 · 45m",
        "options": [
          "Fi 15",
          "45m"
        ],
        "price": 7200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 50m",
        "label": "Fi 15 · 50m",
        "options": [
          "Fi 15",
          "50m"
        ],
        "price": 8000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 60m",
        "label": "Fi 15 · 60m",
        "options": [
          "Fi 15",
          "60m"
        ],
        "price": 9600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 80m",
        "label": "Fi 15 · 80m",
        "options": [
          "Fi 15",
          "80m"
        ],
        "price": 12800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 15 · 100m",
        "label": "Fi 15 · 100m",
        "options": [
          "Fi 15",
          "100m"
        ],
        "price": 16000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 5m",
        "label": "Fi 20 · 5m",
        "options": [
          "Fi 20",
          "5m"
        ],
        "price": 1500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 10m",
        "label": "Fi 20 · 10m",
        "options": [
          "Fi 20",
          "10m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 15m",
        "label": "Fi 20 · 15m",
        "options": [
          "Fi 20",
          "15m"
        ],
        "price": 4500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 20m",
        "label": "Fi 20 · 20m",
        "options": [
          "Fi 20",
          "20m"
        ],
        "price": 6000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 25m",
        "label": "Fi 20 · 25m",
        "options": [
          "Fi 20",
          "25m"
        ],
        "price": 7500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 30m",
        "label": "Fi 20 · 30m",
        "options": [
          "Fi 20",
          "30m"
        ],
        "price": 9000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 35m",
        "label": "Fi 20 · 35m",
        "options": [
          "Fi 20",
          "35m"
        ],
        "price": 10500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 40m",
        "label": "Fi 20 · 40m",
        "options": [
          "Fi 20",
          "40m"
        ],
        "price": 12000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 45m",
        "label": "Fi 20 · 45m",
        "options": [
          "Fi 20",
          "45m"
        ],
        "price": 13500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 50m",
        "label": "Fi 20 · 50m",
        "options": [
          "Fi 20",
          "50m"
        ],
        "price": 15000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 60m",
        "label": "Fi 20 · 60m",
        "options": [
          "Fi 20",
          "60m"
        ],
        "price": 18000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 80m",
        "label": "Fi 20 · 80m",
        "options": [
          "Fi 20",
          "80m"
        ],
        "price": 24000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 20 · 100m",
        "label": "Fi 20 · 100m",
        "options": [
          "Fi 20",
          "100m"
        ],
        "price": 30000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 5m",
        "label": "Fi 30 · 5m",
        "options": [
          "Fi 30",
          "5m"
        ],
        "price": 2750,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 10m",
        "label": "Fi 30 · 10m",
        "options": [
          "Fi 30",
          "10m"
        ],
        "price": 5500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 15m",
        "label": "Fi 30 · 15m",
        "options": [
          "Fi 30",
          "15m"
        ],
        "price": 8250,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 20m",
        "label": "Fi 30 · 20m",
        "options": [
          "Fi 30",
          "20m"
        ],
        "price": 11000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 25m",
        "label": "Fi 30 · 25m",
        "options": [
          "Fi 30",
          "25m"
        ],
        "price": 13750,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 30m",
        "label": "Fi 30 · 30m",
        "options": [
          "Fi 30",
          "30m"
        ],
        "price": 16500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 35m",
        "label": "Fi 30 · 35m",
        "options": [
          "Fi 30",
          "35m"
        ],
        "price": 19250,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 40m",
        "label": "Fi 30 · 40m",
        "options": [
          "Fi 30",
          "40m"
        ],
        "price": 22000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 45m",
        "label": "Fi 30 · 45m",
        "options": [
          "Fi 30",
          "45m"
        ],
        "price": 24750,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 50m",
        "label": "Fi 30 · 50m",
        "options": [
          "Fi 30",
          "50m"
        ],
        "price": 27500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 60m",
        "label": "Fi 30 · 60m",
        "options": [
          "Fi 30",
          "60m"
        ],
        "price": 33000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 80m",
        "label": "Fi 30 · 80m",
        "options": [
          "Fi 30",
          "80m"
        ],
        "price": 44000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 100m",
        "label": "Fi 30 · 100m",
        "options": [
          "Fi 30",
          "100m"
        ],
        "price": 55000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 5m",
        "label": "Fi 40 · 5m",
        "options": [
          "Fi 40",
          "5m"
        ],
        "price": 4250,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 10m",
        "label": "Fi 40 · 10m",
        "options": [
          "Fi 40",
          "10m"
        ],
        "price": 8500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 15m",
        "label": "Fi 40 · 15m",
        "options": [
          "Fi 40",
          "15m"
        ],
        "price": 12750,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 20m",
        "label": "Fi 40 · 20m",
        "options": [
          "Fi 40",
          "20m"
        ],
        "price": 17000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 25m",
        "label": "Fi 40 · 25m",
        "options": [
          "Fi 40",
          "25m"
        ],
        "price": 21250,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 30m",
        "label": "Fi 40 · 30m",
        "options": [
          "Fi 40",
          "30m"
        ],
        "price": 25500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 35m",
        "label": "Fi 40 · 35m",
        "options": [
          "Fi 40",
          "35m"
        ],
        "price": 29750,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 40m",
        "label": "Fi 40 · 40m",
        "options": [
          "Fi 40",
          "40m"
        ],
        "price": 34000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 45m",
        "label": "Fi 40 · 45m",
        "options": [
          "Fi 40",
          "45m"
        ],
        "price": 38250,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 50m",
        "label": "Fi 40 · 50m",
        "options": [
          "Fi 40",
          "50m"
        ],
        "price": 42500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 60m",
        "label": "Fi 40 · 60m",
        "options": [
          "Fi 40",
          "60m"
        ],
        "price": 51000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 80m",
        "label": "Fi 40 · 80m",
        "options": [
          "Fi 40",
          "80m"
        ],
        "price": 68000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 100m",
        "label": "Fi 40 · 100m",
        "options": [
          "Fi 40",
          "100m"
        ],
        "price": 85000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/sinteticka-juta/1.webp",
        "alt": "Sintetički jutani kanap — Juta Svet"
      },
      {
        "src": "/images/products/sinteticka-juta/2.webp",
        "alt": "Sintetički jutani kanap, slika 2"
      },
      {
        "src": "/images/products/sinteticka-juta/3.webp",
        "alt": "Sintetički jutani kanap, slika 3"
      }
    ],
    "seoTitle": "Sintetički jutani kanap — cena po metru | Juta Svet",
    "seoDescription": "Izgleda kao prirodna juta, a ne upija vodu i ne truli — pravi izbor za ograde, terase, bašte i sve što stoji napolju. Od 200 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": true,
    "bestsellerRank": 1,
    "sourceHandle": "sinteticka-juta-cena-po-metru"
  },
  {
    "slug": "jutani-kanap-u-boji",
    "name": "Jutani kanap u boji",
    "category": "kanap-i-tkanina",
    "group": "Juta na metar",
    "price": 150,
    "maxPrice": 56000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Jutani kanap u boji, od 4 do 30 mm — isti prirodan materijal, sa tonom koji se uklapa u vaš enterijer ili projekat.",
    "forWhom": "Za dekoratere, dečije sobe, rukotvorine i projekte gde je boja deo priče.",
    "description": [],
    "specs": [],
    "options": [
      {
        "name": "Debljina",
        "values": [
          "4mm",
          "6mm",
          "8mm",
          "10mm",
          "12mm",
          "14mm",
          "16mm",
          "20mm",
          "25mm",
          "30mm"
        ]
      },
      {
        "name": "Dužina",
        "values": [
          "5m",
          "10m",
          "15m",
          "20m",
          "25m",
          "30m",
          "35m",
          "40m",
          "45m",
          "50m",
          "60m",
          "80m",
          "100m"
        ]
      }
    ],
    "variants": [
      {
        "key": "4mm · 5m",
        "label": "4mm · 5m",
        "options": [
          "4mm",
          "5m"
        ],
        "price": 150,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 10m",
        "label": "4mm · 10m",
        "options": [
          "4mm",
          "10m"
        ],
        "price": 300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 15m",
        "label": "4mm · 15m",
        "options": [
          "4mm",
          "15m"
        ],
        "price": 450,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 20m",
        "label": "4mm · 20m",
        "options": [
          "4mm",
          "20m"
        ],
        "price": 600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 25m",
        "label": "4mm · 25m",
        "options": [
          "4mm",
          "25m"
        ],
        "price": 750,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 30m",
        "label": "4mm · 30m",
        "options": [
          "4mm",
          "30m"
        ],
        "price": 900,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 35m",
        "label": "4mm · 35m",
        "options": [
          "4mm",
          "35m"
        ],
        "price": 1050,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 40m",
        "label": "4mm · 40m",
        "options": [
          "4mm",
          "40m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 45m",
        "label": "4mm · 45m",
        "options": [
          "4mm",
          "45m"
        ],
        "price": 1350,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 50m",
        "label": "4mm · 50m",
        "options": [
          "4mm",
          "50m"
        ],
        "price": 1500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 60m",
        "label": "4mm · 60m",
        "options": [
          "4mm",
          "60m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 80m",
        "label": "4mm · 80m",
        "options": [
          "4mm",
          "80m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4mm · 100m",
        "label": "4mm · 100m",
        "options": [
          "4mm",
          "100m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 5m",
        "label": "6mm · 5m",
        "options": [
          "6mm",
          "5m"
        ],
        "price": 200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 10m",
        "label": "6mm · 10m",
        "options": [
          "6mm",
          "10m"
        ],
        "price": 400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 15m",
        "label": "6mm · 15m",
        "options": [
          "6mm",
          "15m"
        ],
        "price": 600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 20m",
        "label": "6mm · 20m",
        "options": [
          "6mm",
          "20m"
        ],
        "price": 800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 25m",
        "label": "6mm · 25m",
        "options": [
          "6mm",
          "25m"
        ],
        "price": 1000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 30m",
        "label": "6mm · 30m",
        "options": [
          "6mm",
          "30m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 35m",
        "label": "6mm · 35m",
        "options": [
          "6mm",
          "35m"
        ],
        "price": 1400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 40m",
        "label": "6mm · 40m",
        "options": [
          "6mm",
          "40m"
        ],
        "price": 1600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 45m",
        "label": "6mm · 45m",
        "options": [
          "6mm",
          "45m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 50m",
        "label": "6mm · 50m",
        "options": [
          "6mm",
          "50m"
        ],
        "price": 2000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 60m",
        "label": "6mm · 60m",
        "options": [
          "6mm",
          "60m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 80m",
        "label": "6mm · 80m",
        "options": [
          "6mm",
          "80m"
        ],
        "price": 3200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6mm · 100m",
        "label": "6mm · 100m",
        "options": [
          "6mm",
          "100m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 5m",
        "label": "8mm · 5m",
        "options": [
          "8mm",
          "5m"
        ],
        "price": 300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 10m",
        "label": "8mm · 10m",
        "options": [
          "8mm",
          "10m"
        ],
        "price": 600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 15m",
        "label": "8mm · 15m",
        "options": [
          "8mm",
          "15m"
        ],
        "price": 900,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 20m",
        "label": "8mm · 20m",
        "options": [
          "8mm",
          "20m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 25m",
        "label": "8mm · 25m",
        "options": [
          "8mm",
          "25m"
        ],
        "price": 1500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 30m",
        "label": "8mm · 30m",
        "options": [
          "8mm",
          "30m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 35m",
        "label": "8mm · 35m",
        "options": [
          "8mm",
          "35m"
        ],
        "price": 2100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 40m",
        "label": "8mm · 40m",
        "options": [
          "8mm",
          "40m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 45m",
        "label": "8mm · 45m",
        "options": [
          "8mm",
          "45m"
        ],
        "price": 2700,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 50m",
        "label": "8mm · 50m",
        "options": [
          "8mm",
          "50m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 60m",
        "label": "8mm · 60m",
        "options": [
          "8mm",
          "60m"
        ],
        "price": 3600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 80m",
        "label": "8mm · 80m",
        "options": [
          "8mm",
          "80m"
        ],
        "price": 4800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8mm · 100m",
        "label": "8mm · 100m",
        "options": [
          "8mm",
          "100m"
        ],
        "price": 6000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 5m",
        "label": "10mm · 5m",
        "options": [
          "10mm",
          "5m"
        ],
        "price": 400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 10m",
        "label": "10mm · 10m",
        "options": [
          "10mm",
          "10m"
        ],
        "price": 800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 15m",
        "label": "10mm · 15m",
        "options": [
          "10mm",
          "15m"
        ],
        "price": 1200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 20m",
        "label": "10mm · 20m",
        "options": [
          "10mm",
          "20m"
        ],
        "price": 1600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 25m",
        "label": "10mm · 25m",
        "options": [
          "10mm",
          "25m"
        ],
        "price": 2000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 30m",
        "label": "10mm · 30m",
        "options": [
          "10mm",
          "30m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 35m",
        "label": "10mm · 35m",
        "options": [
          "10mm",
          "35m"
        ],
        "price": 2800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 40m",
        "label": "10mm · 40m",
        "options": [
          "10mm",
          "40m"
        ],
        "price": 3200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 45m",
        "label": "10mm · 45m",
        "options": [
          "10mm",
          "45m"
        ],
        "price": 3600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 50m",
        "label": "10mm · 50m",
        "options": [
          "10mm",
          "50m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 60m",
        "label": "10mm · 60m",
        "options": [
          "10mm",
          "60m"
        ],
        "price": 4800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 80m",
        "label": "10mm · 80m",
        "options": [
          "10mm",
          "80m"
        ],
        "price": 6400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10mm · 100m",
        "label": "10mm · 100m",
        "options": [
          "10mm",
          "100m"
        ],
        "price": 8000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 5m",
        "label": "12mm · 5m",
        "options": [
          "12mm",
          "5m"
        ],
        "price": 500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 10m",
        "label": "12mm · 10m",
        "options": [
          "12mm",
          "10m"
        ],
        "price": 1000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 15m",
        "label": "12mm · 15m",
        "options": [
          "12mm",
          "15m"
        ],
        "price": 1500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 20m",
        "label": "12mm · 20m",
        "options": [
          "12mm",
          "20m"
        ],
        "price": 2000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 25m",
        "label": "12mm · 25m",
        "options": [
          "12mm",
          "25m"
        ],
        "price": 2500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 30m",
        "label": "12mm · 30m",
        "options": [
          "12mm",
          "30m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 35m",
        "label": "12mm · 35m",
        "options": [
          "12mm",
          "35m"
        ],
        "price": 3500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 40m",
        "label": "12mm · 40m",
        "options": [
          "12mm",
          "40m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 45m",
        "label": "12mm · 45m",
        "options": [
          "12mm",
          "45m"
        ],
        "price": 4500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 50m",
        "label": "12mm · 50m",
        "options": [
          "12mm",
          "50m"
        ],
        "price": 5000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 60m",
        "label": "12mm · 60m",
        "options": [
          "12mm",
          "60m"
        ],
        "price": 6000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 80m",
        "label": "12mm · 80m",
        "options": [
          "12mm",
          "80m"
        ],
        "price": 8000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "12mm · 100m",
        "label": "12mm · 100m",
        "options": [
          "12mm",
          "100m"
        ],
        "price": 10000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 5m",
        "label": "14mm · 5m",
        "options": [
          "14mm",
          "5m"
        ],
        "price": 700,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 10m",
        "label": "14mm · 10m",
        "options": [
          "14mm",
          "10m"
        ],
        "price": 1400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 15m",
        "label": "14mm · 15m",
        "options": [
          "14mm",
          "15m"
        ],
        "price": 2100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 20m",
        "label": "14mm · 20m",
        "options": [
          "14mm",
          "20m"
        ],
        "price": 2800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 25m",
        "label": "14mm · 25m",
        "options": [
          "14mm",
          "25m"
        ],
        "price": 3500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 30m",
        "label": "14mm · 30m",
        "options": [
          "14mm",
          "30m"
        ],
        "price": 4200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 35m",
        "label": "14mm · 35m",
        "options": [
          "14mm",
          "35m"
        ],
        "price": 4900,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 40m",
        "label": "14mm · 40m",
        "options": [
          "14mm",
          "40m"
        ],
        "price": 5600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 45m",
        "label": "14mm · 45m",
        "options": [
          "14mm",
          "45m"
        ],
        "price": 6300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 50m",
        "label": "14mm · 50m",
        "options": [
          "14mm",
          "50m"
        ],
        "price": 7000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 60m",
        "label": "14mm · 60m",
        "options": [
          "14mm",
          "60m"
        ],
        "price": 8400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 80m",
        "label": "14mm · 80m",
        "options": [
          "14mm",
          "80m"
        ],
        "price": 11200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14mm · 100m",
        "label": "14mm · 100m",
        "options": [
          "14mm",
          "100m"
        ],
        "price": 14000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 5m",
        "label": "16mm · 5m",
        "options": [
          "16mm",
          "5m"
        ],
        "price": 900,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 10m",
        "label": "16mm · 10m",
        "options": [
          "16mm",
          "10m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 15m",
        "label": "16mm · 15m",
        "options": [
          "16mm",
          "15m"
        ],
        "price": 2700,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 20m",
        "label": "16mm · 20m",
        "options": [
          "16mm",
          "20m"
        ],
        "price": 3600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 25m",
        "label": "16mm · 25m",
        "options": [
          "16mm",
          "25m"
        ],
        "price": 4500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 30m",
        "label": "16mm · 30m",
        "options": [
          "16mm",
          "30m"
        ],
        "price": 5400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 35m",
        "label": "16mm · 35m",
        "options": [
          "16mm",
          "35m"
        ],
        "price": 6300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 40m",
        "label": "16mm · 40m",
        "options": [
          "16mm",
          "40m"
        ],
        "price": 7200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 45m",
        "label": "16mm · 45m",
        "options": [
          "16mm",
          "45m"
        ],
        "price": 8100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 50m",
        "label": "16mm · 50m",
        "options": [
          "16mm",
          "50m"
        ],
        "price": 9000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 60m",
        "label": "16mm · 60m",
        "options": [
          "16mm",
          "60m"
        ],
        "price": 10800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 80m",
        "label": "16mm · 80m",
        "options": [
          "16mm",
          "80m"
        ],
        "price": 14400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "16mm · 100m",
        "label": "16mm · 100m",
        "options": [
          "16mm",
          "100m"
        ],
        "price": 18000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 5m",
        "label": "20mm · 5m",
        "options": [
          "20mm",
          "5m"
        ],
        "price": 1400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 10m",
        "label": "20mm · 10m",
        "options": [
          "20mm",
          "10m"
        ],
        "price": 2800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 15m",
        "label": "20mm · 15m",
        "options": [
          "20mm",
          "15m"
        ],
        "price": 4200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 20m",
        "label": "20mm · 20m",
        "options": [
          "20mm",
          "20m"
        ],
        "price": 5600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 25m",
        "label": "20mm · 25m",
        "options": [
          "20mm",
          "25m"
        ],
        "price": 7000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 30m",
        "label": "20mm · 30m",
        "options": [
          "20mm",
          "30m"
        ],
        "price": 8400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 35m",
        "label": "20mm · 35m",
        "options": [
          "20mm",
          "35m"
        ],
        "price": 9800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 40m",
        "label": "20mm · 40m",
        "options": [
          "20mm",
          "40m"
        ],
        "price": 11200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 45m",
        "label": "20mm · 45m",
        "options": [
          "20mm",
          "45m"
        ],
        "price": 12600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 50m",
        "label": "20mm · 50m",
        "options": [
          "20mm",
          "50m"
        ],
        "price": 14000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 60m",
        "label": "20mm · 60m",
        "options": [
          "20mm",
          "60m"
        ],
        "price": 16800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 80m",
        "label": "20mm · 80m",
        "options": [
          "20mm",
          "80m"
        ],
        "price": 22400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20mm · 100m",
        "label": "20mm · 100m",
        "options": [
          "20mm",
          "100m"
        ],
        "price": 28000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 5m",
        "label": "25mm · 5m",
        "options": [
          "25mm",
          "5m"
        ],
        "price": 1700,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 10m",
        "label": "25mm · 10m",
        "options": [
          "25mm",
          "10m"
        ],
        "price": 3400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 15m",
        "label": "25mm · 15m",
        "options": [
          "25mm",
          "15m"
        ],
        "price": 5100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 20m",
        "label": "25mm · 20m",
        "options": [
          "25mm",
          "20m"
        ],
        "price": 6800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 25m",
        "label": "25mm · 25m",
        "options": [
          "25mm",
          "25m"
        ],
        "price": 8500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 30m",
        "label": "25mm · 30m",
        "options": [
          "25mm",
          "30m"
        ],
        "price": 10200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 35m",
        "label": "25mm · 35m",
        "options": [
          "25mm",
          "35m"
        ],
        "price": 11900,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 40m",
        "label": "25mm · 40m",
        "options": [
          "25mm",
          "40m"
        ],
        "price": 13600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 45m",
        "label": "25mm · 45m",
        "options": [
          "25mm",
          "45m"
        ],
        "price": 15300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 50m",
        "label": "25mm · 50m",
        "options": [
          "25mm",
          "50m"
        ],
        "price": 17000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 60m",
        "label": "25mm · 60m",
        "options": [
          "25mm",
          "60m"
        ],
        "price": 20400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 80m",
        "label": "25mm · 80m",
        "options": [
          "25mm",
          "80m"
        ],
        "price": 27200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25mm · 100m",
        "label": "25mm · 100m",
        "options": [
          "25mm",
          "100m"
        ],
        "price": 34000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 5m",
        "label": "30mm · 5m",
        "options": [
          "30mm",
          "5m"
        ],
        "price": 2800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 10m",
        "label": "30mm · 10m",
        "options": [
          "30mm",
          "10m"
        ],
        "price": 5600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 15m",
        "label": "30mm · 15m",
        "options": [
          "30mm",
          "15m"
        ],
        "price": 8400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 20m",
        "label": "30mm · 20m",
        "options": [
          "30mm",
          "20m"
        ],
        "price": 11200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 25m",
        "label": "30mm · 25m",
        "options": [
          "30mm",
          "25m"
        ],
        "price": 14000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 30m",
        "label": "30mm · 30m",
        "options": [
          "30mm",
          "30m"
        ],
        "price": 16800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 35m",
        "label": "30mm · 35m",
        "options": [
          "30mm",
          "35m"
        ],
        "price": 19600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 40m",
        "label": "30mm · 40m",
        "options": [
          "30mm",
          "40m"
        ],
        "price": 22400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 45m",
        "label": "30mm · 45m",
        "options": [
          "30mm",
          "45m"
        ],
        "price": 25200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 50m",
        "label": "30mm · 50m",
        "options": [
          "30mm",
          "50m"
        ],
        "price": 28000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 60m",
        "label": "30mm · 60m",
        "options": [
          "30mm",
          "60m"
        ],
        "price": 33600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 80m",
        "label": "30mm · 80m",
        "options": [
          "30mm",
          "80m"
        ],
        "price": 44800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30mm · 100m",
        "label": "30mm · 100m",
        "options": [
          "30mm",
          "100m"
        ],
        "price": 56000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/jutani-kanap-u-boji/1.webp",
        "alt": "Jutani kanap u boji — Juta Svet"
      }
    ],
    "seoTitle": "Jutani kanap u boji — cena po metru | Juta Svet",
    "seoDescription": "Jutani kanap u boji, od 4 do 30 mm — isti prirodan materijal, sa tonom koji se uklapa u vaš enterijer ili projekat. Od 150 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": true,
    "bestsellerRank": 2,
    "sourceHandle": "jutani-kanap-u-boji-cena-po-metru"
  },
  {
    "slug": "juta-klube-2-5mm",
    "name": "Juta klupče 2,5 mm",
    "category": "kanap-i-tkanina",
    "group": "Klupče i snopovi",
    "price": 200,
    "maxPrice": 200,
    "compareAt": null,
    "onRequest": false,
    "lead": "Klupče prirodnog jutanog kanapa debljine 2,5 mm i dužine 40 metara — uvek pri ruci za vezivanje i pakovanje.",
    "forWhom": "Za pakovanje, baštu, DIY projekte i školske radionice.",
    "description": [
      "Prirodni jutani kanap upleten u klupče — praktično za skladištenje i upotrebu.",
      "Idealno za pakovanje, zanatstvo, dekoraciju, DIY projekte i vezivanje."
    ],
    "specs": [
      "Debljina: 2.5mm",
      "Dužina: 40 metara",
      "Materijal: 100% prirodna juta"
    ],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 200,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/juta-klube-2-5mm/1.webp",
        "alt": "Juta klupče 2,5 mm — Juta Svet"
      }
    ],
    "seoTitle": "Juta klube 2.5mm — klupče 40m | Juta Svet",
    "seoDescription": "Juta klupče 2,5 mm: Klupče prirodnog jutanog kanapa debljine 2,5 mm i dužine 40 metara — uvek pri ruci za vezivanje i pakovanje. 200 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "juta-klube-2-5mm"
  },
  {
    "slug": "juta-klube-1mm",
    "name": "Juta klupče 1 mm",
    "category": "kanap-i-tkanina",
    "group": "Klupče i snopovi",
    "price": 150,
    "maxPrice": 150,
    "compareAt": null,
    "onRequest": false,
    "lead": "Tanki jutani kanap od 1 mm, 100 metara u klupčetu — za fino vezivanje, etikete i ukrasno pakovanje.",
    "forWhom": "Za radnje, cvećare i sve koji vole uredno upakovan poklon.",
    "description": [
      "Prirodni jutani kanap upleten u klupče — praktično za skladištenje i upotrebu.",
      "Idealno za pakovanje, zanatstvo, dekoraciju, DIY projekte i vezivanje."
    ],
    "specs": [
      "Debljina: 1mm",
      "Dužina: 100 metara",
      "Materijal: 100% prirodna juta"
    ],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 150,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/juta-klube-1mm/1.webp",
        "alt": "Juta klupče 1 mm — Juta Svet"
      }
    ],
    "seoTitle": "Juta klube 1mm — klupče 100m | Juta Svet",
    "seoDescription": "Juta klupče 1 mm: Tanki jutani kanap od 1 mm, 100 metara u klupčetu — za fino vezivanje, etikete i ukrasno pakovanje. 150 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "juta-klube-1kg"
  },
  {
    "slug": "juta-3-snopa",
    "name": "Juta 3 snopa",
    "category": "kanap-i-tkanina",
    "group": "Klupče i snopovi",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Klasični jutani kanap upleten od tri snopa — prepoznatljiva spirala i prirodna nijansa.",
    "forWhom": "Za dekoraciju, ograde i rustične enterijere.",
    "description": [
      "Juta u snopu — prirodni jutani kanap pakovan u snopove."
    ],
    "specs": [],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 0,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/juta-3-snopa/1.webp",
        "alt": "Juta 3 snopa — Juta Svet"
      }
    ],
    "seoTitle": "Juta 3 snopa — prirodni jutani kanap | Juta Svet",
    "seoDescription": "Juta 3 snopa: Klasični jutani kanap upleten od tri snopa — prepoznatljiva spirala i prirodna nijansa. Cena na upit · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "juta-3-snopa"
  },
  {
    "slug": "juta-4-snopa",
    "name": "Juta 4 snopa",
    "category": "kanap-i-tkanina",
    "group": "Klupče i snopovi",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Čvrst jutani kanap upleten od četiri snopa — ravnomeran, gust i otporan na habanje.",
    "forWhom": "Za ozbiljnije opterećenje, ograde i dekoraciju gde se kanap vidi izbliza.",
    "description": [
      "Juta u snopu — prirodni jutani kanap pakovan u snopove."
    ],
    "specs": [],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 0,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/juta-4-snopa/1.webp",
        "alt": "Juta 4 snopa — Juta Svet"
      }
    ],
    "seoTitle": "Juta 4 snopa — prirodni jutani kanap | Juta Svet",
    "seoDescription": "Juta 4 snopa: Čvrst jutani kanap upleten od četiri snopa — ravnomeran, gust i otporan na habanje. Cena na upit · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "juta-4-snopa"
  },
  {
    "slug": "jutano-platno",
    "name": "Jutano platno",
    "category": "kanap-i-tkanina",
    "group": "Platno i tkanina",
    "price": 400,
    "maxPrice": 20000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Jutano platno od 100% prirodne jute, širine 1,15 m — za torbe, presvlake, dekoraciju i zanatske radove.",
    "forWhom": "Za krojače, dekoratere, baštovane i kreativne radionice.",
    "description": [],
    "specs": [],
    "options": [
      {
        "name": "Količina",
        "values": [
          "1 m²",
          "2 m²",
          "3 m²",
          "4 m²",
          "5 m²",
          "10 m²",
          "20 m²",
          "30 m²",
          "40 m²",
          "50 m²"
        ]
      }
    ],
    "variants": [
      {
        "key": "1 m²",
        "label": "1 m²",
        "options": [
          "1 m²"
        ],
        "price": 400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "2 m²",
        "label": "2 m²",
        "options": [
          "2 m²"
        ],
        "price": 800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "3 m²",
        "label": "3 m²",
        "options": [
          "3 m²"
        ],
        "price": 1200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4 m²",
        "label": "4 m²",
        "options": [
          "4 m²"
        ],
        "price": 1600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "5 m²",
        "label": "5 m²",
        "options": [
          "5 m²"
        ],
        "price": 2000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10 m²",
        "label": "10 m²",
        "options": [
          "10 m²"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20 m²",
        "label": "20 m²",
        "options": [
          "20 m²"
        ],
        "price": 8000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "30 m²",
        "label": "30 m²",
        "options": [
          "30 m²"
        ],
        "price": 12000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "40 m²",
        "label": "40 m²",
        "options": [
          "40 m²"
        ],
        "price": 16000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "50 m²",
        "label": "50 m²",
        "options": [
          "50 m²"
        ],
        "price": 20000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/jutano-platno/1.webp",
        "alt": "Jutano platno — Juta Svet"
      }
    ],
    "seoTitle": "Jutano platno 400 RSD/m² — prirodna tkanina | Juta Svet",
    "seoDescription": "Jutano platno: Jutano platno od 100% prirodne jute, širine 1,15 m — za torbe, presvlake, dekoraciju i zanatske radove. Od 400 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "jutano-platno-400-rsd-m"
  },
  {
    "slug": "juta-traka-u-boji",
    "name": "Juta traka u boji",
    "category": "kanap-i-tkanina",
    "group": "Platno i tkanina",
    "price": 100,
    "maxPrice": 600,
    "compareAt": null,
    "onRequest": false,
    "lead": "Tkana jutana traka u boji, širine od 5 do 20 cm — za pakovanje poklona, aranžmane i dekoraciju stola.",
    "forWhom": "Za cvećare, dekoratere događaja i sve koji pakuju sa stilom.",
    "description": [
      "Tkana jutana traka u boji, 4 širine. Za pakovanje i dekoraciju."
    ],
    "specs": [],
    "options": [
      {
        "name": "Širina",
        "values": [
          "5cm",
          "10cm",
          "15cm",
          "20cm"
        ]
      },
      {
        "name": "Dužina",
        "values": [
          "2m",
          "4m"
        ]
      }
    ],
    "variants": [
      {
        "key": "5cm · 2m",
        "label": "5cm · 2m",
        "options": [
          "5cm",
          "2m"
        ],
        "price": 100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "5cm · 4m",
        "label": "5cm · 4m",
        "options": [
          "5cm",
          "4m"
        ],
        "price": 200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10cm · 2m",
        "label": "10cm · 2m",
        "options": [
          "10cm",
          "2m"
        ],
        "price": 160,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10cm · 4m",
        "label": "10cm · 4m",
        "options": [
          "10cm",
          "4m"
        ],
        "price": 320,
        "compareAt": null,
        "image": null
      },
      {
        "key": "15cm · 2m",
        "label": "15cm · 2m",
        "options": [
          "15cm",
          "2m"
        ],
        "price": 240,
        "compareAt": null,
        "image": null
      },
      {
        "key": "15cm · 4m",
        "label": "15cm · 4m",
        "options": [
          "15cm",
          "4m"
        ],
        "price": 480,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20cm · 2m",
        "label": "20cm · 2m",
        "options": [
          "20cm",
          "2m"
        ],
        "price": 300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "20cm · 4m",
        "label": "20cm · 4m",
        "options": [
          "20cm",
          "4m"
        ],
        "price": 600,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/juta-traka-u-boji/1.webp",
        "alt": "Juta traka u boji — Juta Svet"
      }
    ],
    "seoTitle": "Juta traka u boji — po metru | Juta Svet",
    "seoDescription": "Juta traka u boji: Tkana jutana traka u boji, širine od 5 do 20 cm — za pakovanje poklona, aranžmane i dekoraciju stola. Od 100 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "juta-traka-u-boji-cena-po-metru-1"
  },
  {
    "slug": "bokobrani-rusticni",
    "name": "Bokobrani rustični",
    "category": "kanap-i-tkanina",
    "group": "Specijalni kanapi",
    "price": 5000,
    "maxPrice": 15000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Ručno pleteni jutani bokobrani — funkcionalni na brodu, a dekorativni na terasi, u kafani ili rustičnom enterijeru.",
    "forWhom": "Za vlasnike plovila, ugostitelje i ljubitelje nautičkog stila.",
    "description": [
      "Rustični jutani bokobrani — dekorativni i funkcionalni elementi od prirodnog kanapa, idealni za brodove, terase, kafane i rustičan enterijer."
    ],
    "specs": [
      "Materijal: 100% prirodna juta. Svaki komad je ručno rađen."
    ],
    "options": [
      {
        "name": "Model",
        "values": [
          "Mobilni (viseći)",
          "Fiksni, 1 m dužine",
          "Fiksni, 2 m dužine"
        ]
      }
    ],
    "variants": [
      {
        "key": "Mobilni (viseći)",
        "label": "Mobilni (viseći)",
        "options": [
          "Mobilni (viseći)"
        ],
        "price": 5000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fiksni, 1 m dužine",
        "label": "Fiksni, 1 m dužine",
        "options": [
          "Fiksni, 1 m dužine"
        ],
        "price": 5000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fiksni, 2 m dužine",
        "label": "Fiksni, 2 m dužine",
        "options": [
          "Fiksni, 2 m dužine"
        ],
        "price": 15000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/bokobrani-rusticni/1.webp",
        "alt": "Bokobrani rustični — Juta Svet"
      },
      {
        "src": "/images/products/bokobrani-rusticni/2.webp",
        "alt": "Bokobrani rustični, slika 2"
      }
    ],
    "seoTitle": "Bokobrani rustični od jute — nautički dekor | Juta Svet",
    "seoDescription": "Ručno pleteni jutani bokobrani — funkcionalni na brodu, a dekorativni na terasi, u kafani ili rustičnom enterijeru. Od 5.000 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": true,
    "bestsellerRank": 5,
    "sourceHandle": "bokobrani-rusticni"
  },
  {
    "slug": "kanap-za-penjanje-fi40",
    "name": "Kanap za penjanje fi40 — sa čeličnom alkom",
    "category": "sport-i-penjanje",
    "group": "Kanapi za penjanje",
    "price": 2500,
    "maxPrice": 6500,
    "compareAt": null,
    "onRequest": false,
    "lead": "Debeo jutani kanap za penjanje (fi 40) sa čeličnom alkom za kačenje — spreman za dvorište, teretanu ili igralište.",
    "forWhom": "Za teretane, škole, dvorišta i sve koji treniraju snagu hvata.",
    "description": [
      "Jutani kanap za penjanje fi40 sa čeličnom alkom. Visokokvalitetna prirodna juta, otporna na habanje."
    ],
    "specs": [],
    "options": [
      {
        "name": "Dužina",
        "values": [
          "2m",
          "3m",
          "4m",
          "5m",
          "6m",
          "7m",
          "8m",
          "9m",
          "10m"
        ]
      }
    ],
    "variants": [
      {
        "key": "2m",
        "label": "2m",
        "options": [
          "2m"
        ],
        "price": 2500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "3m",
        "label": "3m",
        "options": [
          "3m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4m",
        "label": "4m",
        "options": [
          "4m"
        ],
        "price": 3500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "5m",
        "label": "5m",
        "options": [
          "5m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6m",
        "label": "6m",
        "options": [
          "6m"
        ],
        "price": 4500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "7m",
        "label": "7m",
        "options": [
          "7m"
        ],
        "price": 5000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8m",
        "label": "8m",
        "options": [
          "8m"
        ],
        "price": 5500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "9m",
        "label": "9m",
        "options": [
          "9m"
        ],
        "price": 6000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10m",
        "label": "10m",
        "options": [
          "10m"
        ],
        "price": 6500,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/kanap-za-penjanje-fi40/1.webp",
        "alt": "Kanap za penjanje fi40 — sa čeličnom alkom — Juta Svet"
      }
    ],
    "seoTitle": "Kanap za penjanje fi40 sa čeličnom alkom | Juta Svet",
    "seoDescription": "Debeo jutani kanap za penjanje (fi 40) sa čeličnom alkom za kačenje — spreman za dvorište, teretanu ili igralište. Od 2.500 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": true,
    "bestsellerRank": 3,
    "sourceHandle": "kanap-za-penjanje-fi40"
  },
  {
    "slug": "junior-kanap-za-penjanje-fi30",
    "name": "Junior kanap za penjanje fi30 — bez čvorova",
    "category": "sport-i-penjanje",
    "group": "Kanapi za penjanje",
    "price": 1500,
    "maxPrice": 3900,
    "compareAt": null,
    "onRequest": false,
    "lead": "Kanap za penjanje fi 30 bez čvorova, prilagođen dečijoj ruci — za dvorište, igralište i dečiju sobu.",
    "forWhom": "Za decu, vrtiće i porodična dvorišta.",
    "description": [
      "Junior jutani kanap za penjanje fi30 bez čvorova. Idealan za decu, dvorišta i playground konstrukcije."
    ],
    "specs": [],
    "options": [
      {
        "name": "Dužina",
        "values": [
          "2m",
          "3m",
          "4m",
          "5m",
          "6m",
          "7m",
          "8m",
          "9m",
          "10m"
        ]
      }
    ],
    "variants": [
      {
        "key": "2m",
        "label": "2m",
        "options": [
          "2m"
        ],
        "price": 1500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "3m",
        "label": "3m",
        "options": [
          "3m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4m",
        "label": "4m",
        "options": [
          "4m"
        ],
        "price": 2100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "5m",
        "label": "5m",
        "options": [
          "5m"
        ],
        "price": 2400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6m",
        "label": "6m",
        "options": [
          "6m"
        ],
        "price": 2700,
        "compareAt": null,
        "image": null
      },
      {
        "key": "7m",
        "label": "7m",
        "options": [
          "7m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8m",
        "label": "8m",
        "options": [
          "8m"
        ],
        "price": 3300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "9m",
        "label": "9m",
        "options": [
          "9m"
        ],
        "price": 3600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10m",
        "label": "10m",
        "options": [
          "10m"
        ],
        "price": 3900,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/junior-kanap-za-penjanje-fi30/1.webp",
        "alt": "Junior kanap za penjanje fi30 — bez čvorova — Juta Svet"
      },
      {
        "src": "/images/products/junior-kanap-za-penjanje-fi30/2.webp",
        "alt": "Junior kanap za penjanje fi30 — bez čvorova, slika 2"
      }
    ],
    "seoTitle": "Junior kanap za penjanje fi30 — bez čvorova | Juta Svet",
    "seoDescription": "Kanap za penjanje fi 30 bez čvorova, prilagođen dečijoj ruci — za dvorište, igralište i dečiju sobu. Od 1.500 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "junior-kanap-za-penjanje-fi30"
  },
  {
    "slug": "mreza-za-penjanje-zastitna-mreza",
    "name": "Mreža za penjanje i zaštitna mreža",
    "category": "sport-i-penjanje",
    "group": "Mreže i merdevine",
    "price": 5000,
    "maxPrice": 5000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Jutana mreža za penjanje ili zaštitu, pletena po meri — debljina kanapa, veličina okca i kačenje prema vašoj konstrukciji.",
    "forWhom": "Za igrališta, sportske terene, galerije i dekorativne instalacije.",
    "description": [
      "Jutana mreža za penjanje i zaštitna mreža — izrađuje se po meri, prilagođena tačno vašim potrebama i konstrukciji.",
      "Debljina kanapa — 10mm ili 15mm",
      "Dimenzija okca (veličina jednog otvora mreže)",
      "Vrsta završetka/kačenja na konstrukciju"
    ],
    "specs": [],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 5000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/mreza-za-penjanje-zastitna-mreza/1.webp",
        "alt": "Mreža za penjanje i zaštitna mreža — Juta Svet"
      },
      {
        "src": "/images/products/mreza-za-penjanje-zastitna-mreza/2.webp",
        "alt": "Mreža za penjanje i zaštitna mreža, slika 2"
      },
      {
        "src": "/images/products/mreza-za-penjanje-zastitna-mreza/3.webp",
        "alt": "Mreža za penjanje i zaštitna mreža, slika 3"
      },
      {
        "src": "/images/products/mreza-za-penjanje-zastitna-mreza/4.webp",
        "alt": "Mreža za penjanje i zaštitna mreža, slika 4"
      },
      {
        "src": "/images/products/mreza-za-penjanje-zastitna-mreza/5.webp",
        "alt": "Mreža za penjanje i zaštitna mreža, slika 5"
      }
    ],
    "seoTitle": "Mreža za penjanje i zaštitna mreža od jute | Juta Svet",
    "seoDescription": "Jutana mreža za penjanje ili zaštitu, pletena po meri — debljina kanapa, veličina okca i kačenje prema vašoj konstrukciji. 5.000 RSD · dostava po Srbiji.",
    "featured": true,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "mreza-za-penjanje-zastitna-mreza"
  },
  {
    "slug": "brodske-merdevine",
    "name": "Brodske merdevine",
    "category": "sport-i-penjanje",
    "group": "Mreže i merdevine",
    "price": 2500,
    "maxPrice": 16000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Brodske merdevine od jutanog kanapa i drvenih prečki, dužine od 1 do 10 metara.",
    "forWhom": "Za dečija igrališta, kućice na drvetu, terase i nautički dekor.",
    "description": [
      "Brodske merdevine od jutanog kanapa i drvenih prečkova. Za decu, terase, brodove i rustičan enterijer."
    ],
    "specs": [],
    "options": [
      {
        "name": "Dužina",
        "values": [
          "1m",
          "2m",
          "3m",
          "4m",
          "5m",
          "6m",
          "7m",
          "8m",
          "9m",
          "10m"
        ]
      }
    ],
    "variants": [
      {
        "key": "1m",
        "label": "1m",
        "options": [
          "1m"
        ],
        "price": 2500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "2m",
        "label": "2m",
        "options": [
          "2m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "3m",
        "label": "3m",
        "options": [
          "3m"
        ],
        "price": 5500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "4m",
        "label": "4m",
        "options": [
          "4m"
        ],
        "price": 7000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "5m",
        "label": "5m",
        "options": [
          "5m"
        ],
        "price": 8500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "6m",
        "label": "6m",
        "options": [
          "6m"
        ],
        "price": 10000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "7m",
        "label": "7m",
        "options": [
          "7m"
        ],
        "price": 11500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "8m",
        "label": "8m",
        "options": [
          "8m"
        ],
        "price": 13000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "9m",
        "label": "9m",
        "options": [
          "9m"
        ],
        "price": 14500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "10m",
        "label": "10m",
        "options": [
          "10m"
        ],
        "price": 16000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/brodske-merdevine/1.webp",
        "alt": "Brodske merdevine — Juta Svet"
      }
    ],
    "seoTitle": "Brodske merdevine za decu od jute | Juta Svet",
    "seoDescription": "Brodske merdevine: Brodske merdevine od jutanog kanapa i drvenih prečki, dužine od 1 do 10 metara. Od 2.500 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": true,
    "bestsellerRank": 4,
    "sourceHandle": "merdevine-za-decu-brodske-merdevine"
  },
  {
    "slug": "monkey-bar-kanap",
    "name": "Monkey bar kanap",
    "category": "sport-i-penjanje",
    "group": "Fitnes",
    "price": 1500,
    "maxPrice": 2000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Jutani kanap za monkey bar, debljine 35–40 mm i dužine 50 cm — sa kuglom na kraju ili bez nje.",
    "forWhom": "Za teretane, ninja staze i kućne fitnes kutke.",
    "description": [
      "Jutani kanap za monkey bar — debljine 35–40mm, dužine 50cm.",
      "Prodaje se po komadu"
    ],
    "specs": [
      "Materijal: 100% prirodna juta",
      "Debljina: 35–40mm",
      "Dužina: 50cm"
    ],
    "options": [
      {
        "name": "Model",
        "values": [
          "Bez kugle na kraju",
          "Sa kuglom na kraju"
        ]
      }
    ],
    "variants": [
      {
        "key": "Bez kugle na kraju",
        "label": "Bez kugle na kraju",
        "options": [
          "Bez kugle na kraju"
        ],
        "price": 1500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Sa kuglom na kraju",
        "label": "Sa kuglom na kraju",
        "options": [
          "Sa kuglom na kraju"
        ],
        "price": 2000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/monkey-bar-kanap/1.webp",
        "alt": "Monkey bar kanap — Juta Svet"
      },
      {
        "src": "/images/products/monkey-bar-kanap/2.webp",
        "alt": "Monkey bar kanap, slika 2"
      }
    ],
    "seoTitle": "Monkey bar kanap fi35-40, dužina 50cm | Juta Svet",
    "seoDescription": "Monkey bar kanap: Jutani kanap za monkey bar, debljine 35–40 mm i dužine 50 cm — sa kuglom na kraju ili bez nje. Od 1.500 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "monkey-bar-rope"
  },
  {
    "slug": "jutani-tabure",
    "name": "Jutani tabure",
    "category": "kuca-i-dekoracija",
    "group": "Nameštaj",
    "price": 9000,
    "maxPrice": 12000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Okrugli tabure obmotan prirodnom jutom — sedište, oslonac za noge ili mali stočić, u veličini M ili XL.",
    "forWhom": "Za dnevnu sobu, terasu i rustične enterijere.",
    "description": [
      "Jutani tabure i puf od 100% prirodne jute. Udoban i dekorativan element za svaki prostor."
    ],
    "specs": [],
    "options": [
      {
        "name": "Veličina",
        "values": [
          "M",
          "XL"
        ]
      }
    ],
    "variants": [
      {
        "key": "M",
        "label": "M",
        "options": [
          "M"
        ],
        "price": 9000,
        "compareAt": null,
        "image": "/images/products/jutani-tabure/2.webp"
      },
      {
        "key": "XL",
        "label": "XL",
        "options": [
          "XL"
        ],
        "price": 12000,
        "compareAt": null,
        "image": "/images/products/jutani-tabure/2.webp"
      }
    ],
    "images": [
      {
        "src": "/images/products/jutani-tabure/1.webp",
        "alt": "Jutani tabure — Juta Svet"
      },
      {
        "src": "/images/products/jutani-tabure/2.webp",
        "alt": "Jutani tabure, slika 2"
      },
      {
        "src": "/images/products/jutani-tabure/3.webp",
        "alt": "Jutani tabure, slika 3"
      },
      {
        "src": "/images/products/jutani-tabure/4.webp",
        "alt": "Jutani tabure, slika 4"
      }
    ],
    "seoTitle": "Jutani tabure — okrugli puf od jute | Juta Svet",
    "seoDescription": "Jutani tabure: Okrugli tabure obmotan prirodnom jutom — sedište, oslonac za noge ili mali stočić, u veličini M ili XL. Od 9.000 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": true,
    "bestsellerRank": 6,
    "sourceHandle": "jutani-tabure"
  },
  {
    "slug": "pletena-stolica-drvo-i-juta",
    "name": "Pletena stolica — drvo i juta",
    "category": "kuca-i-dekoracija",
    "group": "Nameštaj",
    "price": 15000,
    "maxPrice": 15000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Drvena stolica sa sedištem i naslonom ručno pletenim od jute — čvrsta, topla i prirodna.",
    "forWhom": "Za trpezarije, kafane i vikendice.",
    "description": [
      "Pletena jutana stolica — čvrsta stolica sa pletenim jutanim sedištem i leđima, prirodan materijal i rustičan izgled."
    ],
    "specs": [
      "Materijal: drvo + prirodna juta",
      "Tip: stolica sa pletenim jutanim sedištem"
    ],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 15000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/pletena-stolica-drvo-i-juta/1.webp",
        "alt": "Pletena stolica — drvo i juta — Juta Svet"
      },
      {
        "src": "/images/products/pletena-stolica-drvo-i-juta/2.webp",
        "alt": "Pletena stolica — drvo i juta, slika 2"
      }
    ],
    "seoTitle": "Stolica pletena — drvo i juta | Juta Svet",
    "seoDescription": "Pletena stolica — drvo i juta: Drvena stolica sa sedištem i naslonom ručno pletenim od jute — čvrsta, topla i prirodna. 15.000 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "stolica-pletena-drvo-i-juta"
  },
  {
    "slug": "klub-sto-juta",
    "name": "Klub sto — juta",
    "category": "kuca-i-dekoracija",
    "group": "Nameštaj",
    "price": 18000,
    "maxPrice": 18000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Niski okrugli klub sto sa jutanim omotačem — centralni komad dnevne sobe ili terase.",
    "forWhom": "Za ljubitelje prirodnih materijala i boho enterijera.",
    "description": [
      "Jutani klub sto — okrugli niski sto sa jutanim omotačem, idealan za dnevnu sobu ili terasu."
    ],
    "specs": [
      "Materijal: drvo + prirodna juta",
      "Oblik: okrugli",
      "Tip: niski klub sto"
    ],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 18000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/klub-sto-juta/1.webp",
        "alt": "Klub sto — juta — Juta Svet"
      }
    ],
    "seoTitle": "Klub sto od jute — rustičan niski sto | Juta Svet",
    "seoDescription": "Klub sto — juta: Niski okrugli klub sto sa jutanim omotačem — centralni komad dnevne sobe ili terase. 18.000 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "klub-sto-juta"
  },
  {
    "slug": "ljuljaska-gospodar-prstenova",
    "name": "Ljuljaška Gospodar prstenova",
    "category": "kuca-i-dekoracija",
    "group": "Ljuljaške",
    "price": 25000,
    "maxPrice": 25000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Okrugla ljuljaška sa drvenim prstenom i jutanim kanapom — unikatna forma koja privlači pogled u svakom dvorištu.",
    "forWhom": "Za bašte, dvorišta, terase i kafiće sa baštom.",
    "description": [
      "Ljuljaška okrugla — unikatan dizajn sa kružnim okvirom od drveta i jutanim kanapom. Idealna za baštu, dvorište ili terasu."
    ],
    "specs": [
      "Materijal: drvo + prirodni jutani kanap",
      "Oblik: kružni okvir",
      "Primena: bašta, dvorište, terasa"
    ],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 25000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/ljuljaska-gospodar-prstenova/1.webp",
        "alt": "Ljuljaška Gospodar prstenova — Juta Svet"
      }
    ],
    "seoTitle": "Ljuljaška Gospodar prstenova — drvo i juta | Juta Svet",
    "seoDescription": "Okrugla ljuljaška sa drvenim prstenom i jutanim kanapom — unikatna forma koja privlači pogled u svakom dvorištu. 25.000 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": true,
    "bestsellerRank": 7,
    "sourceHandle": "ljuljaska-okrugla-drvo-i-juta"
  },
  {
    "slug": "ljuljaska-basic-drvo-i-juta",
    "name": "Ljuljaška basic — drvo i juta",
    "category": "kuca-i-dekoracija",
    "group": "Ljuljaške",
    "price": 5000,
    "maxPrice": 5000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Klasična drvena ljuljaška na jutanom kanapu — jednostavna, čvrsta i spremna za kačenje.",
    "forWhom": "Za decu i odrasle, u dvorištu, bašti ili na terasi.",
    "description": [
      "Ljuljaška basic — klasična drvena daska sa jutanim kanapom. Jednostavna, čvrsta i prirodna, idealna za baštu ili dvorište."
    ],
    "specs": [
      "Materijal: drvo + prirodni jutani kanap",
      "Tip: klasična daska ljuljaška",
      "Primena: bašta, dvorište, terasa"
    ],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 5000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/ljuljaska-basic-drvo-i-juta/1.webp",
        "alt": "Ljuljaška basic — drvo i juta — Juta Svet"
      },
      {
        "src": "/images/products/ljuljaska-basic-drvo-i-juta/2.webp",
        "alt": "Ljuljaška basic — drvo i juta, slika 2"
      }
    ],
    "seoTitle": "Ljuljaška basic — drvo i juta | Juta Svet",
    "seoDescription": "Ljuljaška basic — drvo i juta: Klasična drvena ljuljaška na jutanom kanapu — jednostavna, čvrsta i spremna za kačenje. 5.000 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "ljuljaska-basic-drvo-i-juta"
  },
  {
    "slug": "jutana-visilica-sa-el-kablom",
    "name": "Jutana visilica sa el. kablom",
    "category": "kuca-i-dekoracija",
    "group": "Rasveta",
    "price": 900,
    "maxPrice": 11000,
    "compareAt": null,
    "onRequest": false,
    "lead": "Jutani kanap sa ugrađenim električnim kablom, spreman za montažu viseće rasvete — debljine fi 25, 30 ili 40.",
    "forWhom": "Za električare, dekoratere i ugostitelje koji uređuju rustičnu rasvetu.",
    "description": [
      "Kompletna jutana visilica sa el. kablom, sprema za montažu. Za rustičnu rasvetu i kafane."
    ],
    "specs": [],
    "options": [
      {
        "name": "Debljina",
        "values": [
          "Fi 25",
          "Fi 30",
          "Fi 40"
        ]
      },
      {
        "name": "Dužina",
        "values": [
          "1m",
          "2m",
          "3m",
          "4m",
          "5m",
          "6m",
          "7m",
          "8m",
          "9m",
          "10m"
        ]
      }
    ],
    "variants": [
      {
        "key": "Fi 25 · 1m",
        "label": "Fi 25 · 1m",
        "options": [
          "Fi 25",
          "1m"
        ],
        "price": 900,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 2m",
        "label": "Fi 25 · 2m",
        "options": [
          "Fi 25",
          "2m"
        ],
        "price": 1800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 3m",
        "label": "Fi 25 · 3m",
        "options": [
          "Fi 25",
          "3m"
        ],
        "price": 2700,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 4m",
        "label": "Fi 25 · 4m",
        "options": [
          "Fi 25",
          "4m"
        ],
        "price": 3600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 5m",
        "label": "Fi 25 · 5m",
        "options": [
          "Fi 25",
          "5m"
        ],
        "price": 4500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 6m",
        "label": "Fi 25 · 6m",
        "options": [
          "Fi 25",
          "6m"
        ],
        "price": 5400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 7m",
        "label": "Fi 25 · 7m",
        "options": [
          "Fi 25",
          "7m"
        ],
        "price": 6300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 8m",
        "label": "Fi 25 · 8m",
        "options": [
          "Fi 25",
          "8m"
        ],
        "price": 7200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 9m",
        "label": "Fi 25 · 9m",
        "options": [
          "Fi 25",
          "9m"
        ],
        "price": 8100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 25 · 10m",
        "label": "Fi 25 · 10m",
        "options": [
          "Fi 25",
          "10m"
        ],
        "price": 9000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 1m",
        "label": "Fi 30 · 1m",
        "options": [
          "Fi 30",
          "1m"
        ],
        "price": 1000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 2m",
        "label": "Fi 30 · 2m",
        "options": [
          "Fi 30",
          "2m"
        ],
        "price": 2000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 3m",
        "label": "Fi 30 · 3m",
        "options": [
          "Fi 30",
          "3m"
        ],
        "price": 3000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 4m",
        "label": "Fi 30 · 4m",
        "options": [
          "Fi 30",
          "4m"
        ],
        "price": 4000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 5m",
        "label": "Fi 30 · 5m",
        "options": [
          "Fi 30",
          "5m"
        ],
        "price": 5000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 6m",
        "label": "Fi 30 · 6m",
        "options": [
          "Fi 30",
          "6m"
        ],
        "price": 6000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 7m",
        "label": "Fi 30 · 7m",
        "options": [
          "Fi 30",
          "7m"
        ],
        "price": 7000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 8m",
        "label": "Fi 30 · 8m",
        "options": [
          "Fi 30",
          "8m"
        ],
        "price": 8000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 9m",
        "label": "Fi 30 · 9m",
        "options": [
          "Fi 30",
          "9m"
        ],
        "price": 9000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 30 · 10m",
        "label": "Fi 30 · 10m",
        "options": [
          "Fi 30",
          "10m"
        ],
        "price": 10000,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 1m",
        "label": "Fi 40 · 1m",
        "options": [
          "Fi 40",
          "1m"
        ],
        "price": 1100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 2m",
        "label": "Fi 40 · 2m",
        "options": [
          "Fi 40",
          "2m"
        ],
        "price": 2200,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 3m",
        "label": "Fi 40 · 3m",
        "options": [
          "Fi 40",
          "3m"
        ],
        "price": 3300,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 4m",
        "label": "Fi 40 · 4m",
        "options": [
          "Fi 40",
          "4m"
        ],
        "price": 4400,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 5m",
        "label": "Fi 40 · 5m",
        "options": [
          "Fi 40",
          "5m"
        ],
        "price": 5500,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 6m",
        "label": "Fi 40 · 6m",
        "options": [
          "Fi 40",
          "6m"
        ],
        "price": 6600,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 7m",
        "label": "Fi 40 · 7m",
        "options": [
          "Fi 40",
          "7m"
        ],
        "price": 7700,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 8m",
        "label": "Fi 40 · 8m",
        "options": [
          "Fi 40",
          "8m"
        ],
        "price": 8800,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 9m",
        "label": "Fi 40 · 9m",
        "options": [
          "Fi 40",
          "9m"
        ],
        "price": 9900,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Fi 40 · 10m",
        "label": "Fi 40 · 10m",
        "options": [
          "Fi 40",
          "10m"
        ],
        "price": 11000,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/jutana-visilica-sa-el-kablom/1.webp",
        "alt": "Jutana visilica sa el. kablom — Juta Svet"
      }
    ],
    "seoTitle": "Jutana visilica sa el. kablom — po metru | Juta Svet",
    "seoDescription": "Jutani kanap sa ugrađenim električnim kablom, spreman za montažu viseće rasvete — debljine fi 25, 30 ili 40. Od 900 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "jutana-visilica-sa-el-kablom"
  },
  {
    "slug": "jutana-visilica",
    "name": "Jutana visilica",
    "category": "kuca-i-dekoracija",
    "group": "Rasveta",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Rustična viseća lampa od jutanog kanapa — jednostruka, dupla ili trostruka.",
    "forWhom": "Za kuhinje, šankove, kafane i restorane.",
    "description": [
      "Rustična jutana visilica — jednostruka viseća lampa od prirodnog jutanog kanapa. Topao, prirodan izgled za svaki prostor."
    ],
    "specs": [
      "Materijal: 100% prirodna juta",
      "Tip: jednostruka visilica",
      "Primena: dnevna soba, spavaća soba, kafana, restoran"
    ],
    "options": [
      {
        "name": "Tip",
        "values": [
          "x1 — jednostruka",
          "x2 — dupla",
          "x3 — trostruka"
        ]
      }
    ],
    "variants": [
      {
        "key": "x1 — jednostruka",
        "label": "x1 — jednostruka",
        "options": [
          "x1 — jednostruka"
        ],
        "price": 0,
        "compareAt": null,
        "image": "/images/products/jutana-visilica/2.webp"
      },
      {
        "key": "x2 — dupla",
        "label": "x2 — dupla",
        "options": [
          "x2 — dupla"
        ],
        "price": 0,
        "compareAt": null,
        "image": "/images/products/jutana-visilica/3.webp"
      },
      {
        "key": "x3 — trostruka",
        "label": "x3 — trostruka",
        "options": [
          "x3 — trostruka"
        ],
        "price": 0,
        "compareAt": null,
        "image": "/images/products/jutana-visilica/4.webp"
      }
    ],
    "images": [
      {
        "src": "/images/products/jutana-visilica/1.webp",
        "alt": "Jutana visilica — Juta Svet"
      },
      {
        "src": "/images/products/jutana-visilica/2.webp",
        "alt": "Jutana visilica, slika 2"
      },
      {
        "src": "/images/products/jutana-visilica/3.webp",
        "alt": "Jutana visilica, slika 3"
      },
      {
        "src": "/images/products/jutana-visilica/4.webp",
        "alt": "Jutana visilica, slika 4"
      },
      {
        "src": "/images/products/jutana-visilica/5.webp",
        "alt": "Jutana visilica, slika 5"
      }
    ],
    "seoTitle": "Jutana visilica — rustična viseća lampa | Juta Svet",
    "seoDescription": "Jutana visilica: Rustična viseća lampa od jutanog kanapa — jednostruka, dupla ili trostruka. Cena na upit · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "jutana-visilica"
  },
  {
    "slug": "jutani-luster",
    "name": "Jutani luster",
    "category": "kuca-i-dekoracija",
    "group": "Rasveta",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Višekraki luster od prirodnog jutanog kanapa — topla, autentična svetlost za veće prostorije.",
    "forWhom": "Za trpezarije, kafane, restorane i vikendice.",
    "description": [
      "Rustični jutani luster — višekraki luster od prirodnog jutanog kanapa, idealan za toplu i autentičnu atmosferu u domu, kafani ili restoranu."
    ],
    "specs": [
      "Materijal: 100% prirodna juta",
      "Tip: višekraki luster",
      "Primena: dnevna soba, trpezarija, kafana, restoran"
    ],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 0,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/jutani-luster/1.webp",
        "alt": "Jutani luster — Juta Svet"
      }
    ],
    "seoTitle": "Jutani luster — rustična rasveta | Juta Svet",
    "seoDescription": "Jutani luster: Višekraki luster od prirodnog jutanog kanapa — topla, autentična svetlost za veće prostorije. Cena na upit · dostava po Srbiji.",
    "featured": true,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "jutani-luster"
  },
  {
    "slug": "zidni-panel-od-kanapa",
    "name": "Zidni panel od pletenog kanapa",
    "category": "kuca-i-dekoracija",
    "group": "Zidovi i plafoni",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Zidni panel od pletenog kanapa sa geometrijskim šarama — izrađuje se po meri vašeg zida.",
    "forWhom": "Za lokale, kancelarije i domove sa industrijskim ili rustičnim stilom.",
    "description": [
      "Zidni dekorativni panel od pletenog kanapa — geometrijski pleteni dizajn koji daje prostoru industrijsku ili rustičnu notu."
    ],
    "specs": [],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 0,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/zidni-panel-od-kanapa/1.webp",
        "alt": "Zidni panel od pletenog kanapa — Juta Svet"
      }
    ],
    "seoTitle": "Zidna dekoracija — pleteni panel od kanapa | Juta Svet",
    "seoDescription": "Zidni panel od pletenog kanapa: Zidni panel od pletenog kanapa sa geometrijskim šarama — izrađuje se po meri vašeg zida. Cena na upit · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "zidna-dekoracija-pleteni-panel-od-kanapa"
  },
  {
    "slug": "plafonska-dekoracija-od-kanapa",
    "name": "Plafonska dekoracija od kanapa",
    "category": "kuca-i-dekoracija",
    "group": "Zidovi i plafoni",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Plafonska instalacija od vertikalnih linija jutanog kanapa — menja prostor bez građevinskih radova.",
    "forWhom": "Za kafane, restorane, hotele i poslovne prostore.",
    "description": [
      "Plafonska dekoracija od jutanog kanapa — vertikalne linije kanapa koje stvaraju jedinstven vizuelni efekat na plafonu."
    ],
    "specs": [],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 0,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/plafonska-dekoracija-od-kanapa/1.webp",
        "alt": "Plafonska dekoracija od kanapa — Juta Svet"
      },
      {
        "src": "/images/products/plafonska-dekoracija-od-kanapa/2.webp",
        "alt": "Plafonska dekoracija od kanapa, slika 2"
      }
    ],
    "seoTitle": "Plafonska dekoracija od kanapa — vertikalne linije | Juta Svet",
    "seoDescription": "Plafonska dekoracija od kanapa: Plafonska instalacija od vertikalnih linija jutanog kanapa — menja prostor bez građevinskih radova. Cena na upit · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "plafonska-dekoracija-od-kanapa-vertikalne-linije"
  },
  {
    "slug": "jutani-podmetac",
    "name": "Jutani podmetač",
    "category": "kuca-i-dekoracija",
    "group": "Za trpezu i pakovanje",
    "price": 150,
    "maxPrice": 900,
    "compareAt": null,
    "onRequest": false,
    "lead": "Pleteni jutani podmetači za čaše i tanjire — štite sto i daju trpezi prirodnu notu.",
    "forWhom": "Za domaćinstva, kafiće i restorane.",
    "description": [
      "Pleteni okrugli podmetači od 100% prirodne jute. Štite sto i ukrašavaju trpezu."
    ],
    "specs": [],
    "options": [
      {
        "name": "Količina",
        "values": [
          "Za čašu fi10",
          "Za tanjir fi30",
          "Elipsa 30x50cm"
        ]
      }
    ],
    "variants": [
      {
        "key": "Za čašu fi10",
        "label": "Za čašu fi10",
        "options": [
          "Za čašu fi10"
        ],
        "price": 150,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Za tanjir fi30",
        "label": "Za tanjir fi30",
        "options": [
          "Za tanjir fi30"
        ],
        "price": 750,
        "compareAt": null,
        "image": null
      },
      {
        "key": "Elipsa 30x50cm",
        "label": "Elipsa 30x50cm",
        "options": [
          "Elipsa 30x50cm"
        ],
        "price": 900,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/jutani-podmetac/1.webp",
        "alt": "Jutani podmetač — Juta Svet"
      },
      {
        "src": "/images/products/jutani-podmetac/2.webp",
        "alt": "Jutani podmetač, slika 2"
      },
      {
        "src": "/images/products/jutani-podmetac/3.webp",
        "alt": "Jutani podmetač, slika 3"
      }
    ],
    "seoTitle": "Jutani podmetač — pleteni okrugli | Juta Svet",
    "seoDescription": "Jutani podmetač: Pleteni jutani podmetači za čaše i tanjire — štite sto i daju trpezi prirodnu notu. Od 150 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "jutani-podmetac"
  },
  {
    "slug": "jutani-dzakcici-i-vrece",
    "name": "Jutani džakčići i vreće",
    "category": "kuca-i-dekoracija",
    "group": "Za trpezu i pakovanje",
    "price": 100,
    "maxPrice": 320,
    "compareAt": null,
    "onRequest": false,
    "lead": "Jutani džakčići i vreće u pet veličina — za pakovanje poklona, suvenire, kafu i dekoraciju.",
    "forWhom": "Za radnje, proizvođače suvenira, venčanja i firme koje pakuju poklone.",
    "description": [
      "Jutani džakčići i vreće od 100% prirodne jute. Za pakovanje poklona, suvenire i dekoraciju."
    ],
    "specs": [],
    "options": [
      {
        "name": "Dimenzija",
        "values": [
          "10cm x 14cm",
          "14cm x 18cm",
          "18cm x 25cm",
          "25cm x 50cm",
          "50cm x 100cm"
        ]
      }
    ],
    "variants": [
      {
        "key": "10cm x 14cm",
        "label": "10cm x 14cm",
        "options": [
          "10cm x 14cm"
        ],
        "price": 100,
        "compareAt": null,
        "image": null
      },
      {
        "key": "14cm x 18cm",
        "label": "14cm x 18cm",
        "options": [
          "14cm x 18cm"
        ],
        "price": 130,
        "compareAt": null,
        "image": null
      },
      {
        "key": "18cm x 25cm",
        "label": "18cm x 25cm",
        "options": [
          "18cm x 25cm"
        ],
        "price": 160,
        "compareAt": null,
        "image": null
      },
      {
        "key": "25cm x 50cm",
        "label": "25cm x 50cm",
        "options": [
          "25cm x 50cm"
        ],
        "price": 210,
        "compareAt": null,
        "image": null
      },
      {
        "key": "50cm x 100cm",
        "label": "50cm x 100cm",
        "options": [
          "50cm x 100cm"
        ],
        "price": 320,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/jutani-dzakcici-i-vrece/1.webp",
        "alt": "Jutani džakčići i vreće — Juta Svet"
      }
    ],
    "seoTitle": "Jutani džakčići i vreće — prirodna boja | Juta Svet",
    "seoDescription": "Jutani džakčići i vreće: Jutani džakčići i vreće u pet veličina — za pakovanje poklona, suvenire, kafu i dekoraciju. Od 100 RSD · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "jutani-dzakcici-i-vrece-prirodna-boja"
  },
  {
    "slug": "silo-za-kanap",
    "name": "Šilo za kanap",
    "category": "propratni-materijal",
    "group": "Pribor",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Šilo za provlačenje i spajanje kanapa — nezamenljiv alat za pletenje i završne radove.",
    "forWhom": "Za sve koji sami pletu, vezuju ili popravljaju kanap.",
    "description": [],
    "specs": [],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 0,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/silo-za-kanap/1.webp",
        "alt": "Šilo za kanap — Juta Svet"
      },
      {
        "src": "/images/products/silo-za-kanap/2.webp",
        "alt": "Šilo za kanap, slika 2"
      }
    ],
    "seoTitle": "Šilo za rad sa jutanim kanapom | Juta Svet",
    "seoDescription": "Šilo za kanap: Šilo za provlačenje i spajanje kanapa — nezamenljiv alat za pletenje i završne radove. Cena na upit · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "silo-za-kanap"
  },
  {
    "slug": "metalna-suza-za-kanap",
    "name": "Metalna suza za kanap",
    "category": "propratni-materijal",
    "group": "Pribor",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Metalna suza (kaus) štiti omču kanapa od habanja i daje čvrst, uredan završetak.",
    "forWhom": "Za montažu ograda, ljuljaški i visećih instalacija.",
    "description": [],
    "specs": [],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 0,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/metalna-suza-za-kanap/1.webp",
        "alt": "Metalna suza za kanap — Juta Svet"
      },
      {
        "src": "/images/products/metalna-suza-za-kanap/2.webp",
        "alt": "Metalna suza za kanap, slika 2"
      }
    ],
    "seoTitle": "Metalna suza za jutani kanap | Juta Svet",
    "seoDescription": "Metalna suza za kanap: Metalna suza (kaus) štiti omču kanapa od habanja i daje čvrst, uredan završetak. Cena na upit · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "metalna-suza-za-kanap"
  },
  {
    "slug": "metalna-alka-za-kanap",
    "name": "Metalna alka za kanap",
    "category": "propratni-materijal",
    "group": "Pribor",
    "price": 0,
    "maxPrice": 0,
    "compareAt": null,
    "onRequest": true,
    "lead": "Metalna alka za kačenje i spajanje jutanog kanapa — za ljuljaške, rasvetu i dekoracije.",
    "forWhom": "Za montažu ljuljaški, visilica i zidnih dekoracija.",
    "description": [],
    "specs": [],
    "options": [],
    "variants": [
      {
        "key": "standard",
        "label": "",
        "options": [],
        "price": 0,
        "compareAt": null,
        "image": null
      }
    ],
    "images": [
      {
        "src": "/images/products/metalna-alka-za-kanap/1.webp",
        "alt": "Metalna alka za kanap — Juta Svet"
      }
    ],
    "seoTitle": "Metalna alka za jutani kanap | Juta Svet",
    "seoDescription": "Metalna alka za kanap: Metalna alka za kačenje i spajanje jutanog kanapa — za ljuljaške, rasvetu i dekoracije. Cena na upit · dostava po Srbiji.",
    "featured": false,
    "bestseller": false,
    "bestsellerRank": -1,
    "sourceHandle": "metalna-alka-za-kanap"
  }
];

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
  return p.maxPrice > p.price ? `od ${money(p.price)}` : money(p.price);
}
