/**
 * Centralno mesto za sve podatke o brendu i prodavnici.
 * Izmeni ovde -> menja se svuda na sajtu.
 */

const rawUrl =
  (typeof process !== "undefined" && process.env?.PUBLIC_SITE_URL) ||
  "https://jutasvet.com";

export const SITE = {
  name: "Juta Svet",
  legalName: "Juta Svet",
  /** Puni URL bez kose crte na kraju */
  url: rawUrl.replace(/\/$/, ""),
  /** Kratak opis za SEO (meta description na naslovnoj) */
  description:
    "Juta Svet — jutani kanap na metar od 4 do 40 mm, kanapi za penjanje, brodske merdevine, nameštaj, rasveta i dekoracija od jute. Plaćanje pouzećem, dostava po celoj Srbiji.",
  tagline: "Prirodni kanapi i dekoracija od jute",

  email: "jutasvet@gmail.com",
  phone: "066 498 180",
  phoneHref: "tel:+38166498180",
  address: {
    street: "Prote Mateje 20",
    zip: "12000",
    city: "Požarevac",
    country: "Srbija",
    countryCode: "RS",
  },

  social: {
    instagram: "https://www.instagram.com/jutani_kanap",
    instagramHandle: "@jutani_kanap",
    tiktok: "https://www.tiktok.com/@jutani.kanap",
    tiktokHandle: "@jutani.kanap",
  },

  /** Prag za besplatnu dostavu u dinarima (potvrdio vlasnik). */
  freeShippingThreshold: 10000,
  /**
   * Cena dostave ispod praga nije fiksna — naplaćuje se po ceni kurirske
   * službe ("Po ceni kurirske službe" na sajtu).
   */
  deliveryTime: "2–5 radnih dana",
  paymentNote: "Plaćanje pouzećem — gotovinom kuriru pri preuzimanju.",

  currency: "RSD",
  locale: "sr-RS",

  /** Godina osnivanja — za "© 20xx" */
  foundedYear: 2020,
} as const;

/**
 * Glavni meni. Bez padajućih menija: svaka kategorija je jedna strana na
 * kojoj su objedinjene sve njene podkategorije.
 * `secondary` stavke (Reference, Kontakt) su vizuelno odvojene od kategorija.
 */
export const NAV = [
  { label: "Kanap i tkanina", href: "/kategorija/kanap-i-tkanina" },
  { label: "Sport i penjanje", href: "/kategorija/sport-i-penjanje" },
  { label: "Kuća i dekoracija", href: "/kategorija/kuca-i-dekoracija" },
  { label: "Propratni materijal", href: "/kategorija/propratni-materijal" },
] as const;

export const NAV_SECONDARY = [
  { label: "Reference", href: "/reference" },
  { label: "Kontakt", href: "/kontakt" },
] as const;
