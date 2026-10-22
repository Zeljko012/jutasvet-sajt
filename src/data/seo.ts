/**
 * SEO sadržaj i ciljne ključne reči — kategorije, stranice „Primena" i vodiči.
 *
 * NAPOMENA: ključne reči su izabrane prema tome kako ljudi u Srbiji realno
 * traže ovakve proizvode (latinica, i sa i bez dijakritika — Google ih
 * izjednačava), a NE prema izmerenim brojevima pretrage. Kad sajt dobije pravi
 * domen, proveriti u Google Search Console (Performance → Queries) koje se
 * fraze stvarno prikazuju i prilagoditi naslove/tekstove.
 *
 * Tokeni u tekstu: {from} najniža cena, {to} najviša cena, {count} broj proizvoda.
 */
import type { Category } from "./products";
import { SITE } from "./site";

export interface Faq {
  q: string;
  a: string;
}
export interface Section {
  h2: string;
  p: string[];
}
export interface SeoLink {
  label: string;
  href: string;
}

export const fill = (s: string, v: Record<string, string | number>): string =>
  s.replace(/\{(\w+)\}/g, (_, k) => String(v[k] ?? ""));

const DELIVERY = SITE.deliveryTime;

/* ============================== KATEGORIJE ============================== */

export interface CategorySeo {
  /** <title> (bez " | Juta Svet" — dodaje se automatski) */
  title: string;
  h1: string;
  description: string;
  sections: Section[];
  faqs: Faq[];
  related: SeoLink[];
  keywords: string[];
}

export const CATEGORY_SEO: Record<Category, CategorySeo> = {
  "kanap-i-tkanina": {
    title: "Jutani kanap na metar, platno i trake",
    h1: "Jutani kanap na metar, platno i tkanina",
    description:
      "Jutani kanap na metar od 4 do 40 mm — prirodni, sintetički i u boji, klupčad i snopovi, jutano platno i trake. {count} proizvoda, od {from}. Dostava po Srbiji.",
    sections: [
      {
        h2: "Prirodna, sintetička ili juta u boji?",
        p: [
          "Prirodna (natur) juta je biljno vlakno: topla na dodir, prepoznatljive boje i potpuno biorazgradiva. Najbolja je za enterijer, dekoraciju, grebalice za mačke, pakovanje i zanatske radove.",
          "Sintetička juta izgleda kao prirodna, ali ne upija vodu i ne truli, pa je pravi izbor za ograde, terase, bašte, nautiku i sve što stoji napolju. Juta u boji je isti prirodan kanap u tonovima koji se uklapaju u vaš projekat.",
        ],
      },
      {
        h2: "Kako izabrati debljinu kanapa",
        p: [
          "Tanki kanap (1–6 mm) služi za vezivanje, pakovanje, makrame i ukrasne detalje. Srednje debljine (8–16 mm) su najčešće za grebalice, dekoraciju, police i lakše ograde. Debeli kanap (20–40 mm) koristi se za gelendere, stepeništa, bokobrane, penjanje i upečatljive instalacije.",
          "Na stranici svakog proizvoda birate debljinu i dužinu, a cena se odmah obračunava. Ako vam treba dužina koje nema u ponudi, pišite nam — sečemo po meri.",
        ],
      },
    ],
    faqs: [
      {
        q: "Da li prodajete jutani kanap na metar?",
        a: "Da. Prirodni, sintetički i jutani kanap u boji birate po debljini i dužini — od 5 do 100 metara, a veće količine po dogovoru.",
      },
      {
        q: "Koja je razlika između prirodne i sintetičke jute?",
        a: "Prirodna juta je biljno, biorazgradivo vlakno i namenjena je pre svega unutrašnjem prostoru. Sintetička juta izgleda slično, ali ne upija vodu i ne truli, pa je bolja za spoljnu upotrebu.",
      },
      {
        q: "Koliko košta jutani kanap?",
        a: "Cene u ovoj kategoriji kreću se od {from} do {to}, u zavisnosti od debljine, dužine i vrste kanapa. Za veće količine pošaljite upit.",
      },
      {
        q: "Kako se plaća i koliko traje dostava?",
        a: `Plaćanje je pouzećem, gotovinom kuriru. Dostava po celoj Srbiji traje ${DELIVERY} od potvrde porudžbine.`,
      },
      {
        q: "Imate li jutano platno?",
        a: "Da — jutano platno od 100% prirodne jute, širine 1,15 m, prodaje se po kvadratnom metru, kao i tkane jutane trake u boji širine 5 do 20 cm.",
      },
    ],
    related: [
      { label: "Koja debljina jutanog kanapa mi treba", href: "/vodic/koja-debljina-jutanog-kanapa" },
      { label: "Prirodna ili sintetička juta", href: "/vodic/prirodna-ili-sinteticka-juta" },
      { label: "Kanap za ogradu i gelender", href: "/primena/kanap-za-ogradu-i-gelender" },
      { label: "Kanap za mačje grebalice", href: "/primena/kanap-za-macje-grebalice" },
    ],
    keywords: [
      "jutani kanap",
      "jutani kanap na metar",
      "juta kanap cena",
      "sintetička juta",
      "jutano platno",
      "juta traka",
      "kanap od jute",
    ],
  },

  "sport-i-penjanje": {
    title: "Kanap za penjanje, brodske merdevine i mreže od jute",
    h1: "Kanapi za penjanje, merdevine i mreže",
    description:
      "Jutani kanap za penjanje fi 30 i fi 40, brodske merdevine, mreže za penjanje i monkey bar kanapi. {count} proizvoda, od {from}. Dostava po celoj Srbiji.",
    sections: [
      {
        h2: "Za dvorište, igralište i teretanu",
        p: [
          "Jutani kanap je prijatan za ruku i dobro drži hvat, zato se vekovima koristi za penjanje. Za decu je pogodan junior kanap fi 30, a za odrasle i teretane kanap fi 40 sa čeličnom alkom za kačenje.",
          "Brodske merdevine od kanapa i drvenih prečki rade se u dužinama od 1 do 10 metara, a mreže za penjanje i zaštitne mreže pletemo po meri vaše konstrukcije.",
        ],
      },
      {
        h2: "Bezbedna montaža",
        p: [
          "Kanap, merdevine i mreža su onoliko bezbedni koliko je čvrsta konstrukcija na koju se kače. Koristite nosač predviđen za dinamičko opterećenje, proveravajte kanap povremeno na habanje i ne ostavljajte decu bez nadzora.",
        ],
      },
    ],
    faqs: [
      {
        q: "Koju debljinu kanapa za penjanje da izaberem?",
        a: "Za decu je pogodniji tanji kanap fi 30 koji se lakše obuhvata šakom. Za odrasle, teretane i CrossFit vežbe uobičajen je fi 40.",
      },
      {
        q: "Da li pravite mrežu za penjanje po meri?",
        a: "Da. Mreža se plete po meri — birate debljinu kanapa, veličinu okca i način kačenja. Pošaljite dimenzije i fotografiju konstrukcije za ponudu.",
      },
      {
        q: "Koje dužine brodskih merdevina imate?",
        a: "Od 1 do 10 metara, cena zavisi od dužine. Za duže merdevine pošaljite upit.",
      },
      {
        q: "Kako se plaća i koliko traje dostava?",
        a: `Plaćanje je pouzećem. Dostava po celoj Srbiji traje ${DELIVERY}; za mreže po meri rok se dogovara.`,
      },
    ],
    related: [
      { label: "Kanap za dečija igrališta", href: "/primena/kanap-za-decja-igralista" },
      { label: "Ljuljaške od drveta i jute", href: "/kategorija/kuca-i-dekoracija" },
      { label: "Kako održavati jutani kanap", href: "/vodic/kako-odrzavati-jutani-kanap" },
    ],
    keywords: [
      "kanap za penjanje",
      "konopac za penjanje",
      "brodske merdevine",
      "mreža za penjanje",
      "merdevine od kanapa",
      "monkey bar",
    ],
  },

  "kuca-i-dekoracija": {
    title: "Nameštaj, rasveta i dekoracija od jute",
    h1: "Nameštaj, rasveta i dekoracija od jute",
    description:
      "Jutani taburei, pletene stolice, ljuljaške, lusteri i visilice, zidne i plafonske dekoracije od kanapa, podmetači i džakčići. Ručna izrada, od {from}.",
    sections: [
      {
        h2: "Prirodni materijali, ručna izrada",
        p: [
          "Svaki komad nastaje u našoj radionici od drveta i prirodne jute — od taburea i stolica sa pletenim sedištem do ljuljaški za dvorište. Juta unosi toplinu i teksturu koju je teško postići bilo kojim drugim materijalom.",
          "Rustična rasveta od jutanog kanapa — visilice, lusteri i kanap sa ugrađenim električnim kablom — omiljena je u kafanama, restoranima i vikendicama.",
        ],
      },
      {
        h2: "Dekoracija po meri prostora",
        p: [
          "Zidni paneli i plafonske instalacije od kanapa rade se po meri vašeg prostora, zato je cena na upit. Pošaljite nam dimenzije i fotografije prostora, a mi predlažemo rešenje. Pogledajte i naše reference — urađene projekte za lokale i domove.",
        ],
      },
    ],
    faqs: [
      {
        q: "Da li radite dekoraciju od kanapa po meri?",
        a: "Da. Zidne panele, plafonske instalacije, pregrade i rasvetu radimo po meri prostora. Pošaljite dimenzije i fotografije za ponudu.",
      },
      {
        q: "Da li se jutani nameštaj može držati napolju?",
        a: "Prirodna juta je namenjena natkrivenom prostoru. Na kiši i direktnom suncu brže stari, pa ljuljaške i nameštaj držite pod nadstrešnicom ili ih unosite zimi.",
      },
      {
        q: "Koliko košta jutani luster ili visilica?",
        a: "Visilice i lusteri rade se po porudžbini i cena zavisi od broja krakova i dužine kanapa — pošaljite upit sa stranice proizvoda.",
      },
      {
        q: "Kako se plaća i koliko traje dostava?",
        a: `Plaćanje je pouzećem. Gotovi proizvodi stižu za ${DELIVERY}; za izradu po meri rok se dogovara.`,
      },
    ],
    related: [
      { label: "Rasveta i dekor za kafane i restorane", href: "/primena/jutana-rasveta-za-ugostitelje" },
      { label: "Reference — naši radovi", href: "/reference" },
      { label: "Kako održavati jutani kanap", href: "/vodic/kako-odrzavati-jutani-kanap" },
    ],
    keywords: [
      "jutani tabure",
      "jutani luster",
      "visilica od kanapa",
      "ljuljaška od drveta",
      "dekoracija od kanapa",
      "plafonska dekoracija",
      "rustična rasveta",
    ],
  },

  "propratni-materijal": {
    title: "Propratni materijal za kanap — alke, suze, šilo",
    h1: "Propratni materijal i pribor za kanap",
    description:
      "Metalne alke, suze (kausi) i šilo za montažu, kačenje i završnu obradu jutanog kanapa. Veličine i cene na upit. Juta Svet.",
    sections: [
      {
        h2: "Sve za montažu na jednom mestu",
        p: [
          "Za uredan i trajan završetak kanapa potreban je i dobar pribor: metalne suze štite omču od habanja, alke služe za kačenje i spajanje, a šilom se kanap provlači i spaja. Veličine biramo prema debljini kanapa koju kupujete — zato je cena na upit.",
        ],
      },
    ],
    faqs: [
      {
        q: "Koju veličinu alke ili suze da izaberem?",
        a: "Zavisi od debljine kanapa. Napišite nam koju debljinu koristite i preporučićemo odgovarajuću veličinu.",
      },
      {
        q: "Mogu li da poručim pribor zajedno sa kanapom?",
        a: "Naravno. Pošaljite upit za pribor, a kanap dodajte u korpu — sve šaljemo zajedno.",
      },
    ],
    related: [
      { label: "Jutani kanap na metar", href: "/kategorija/kanap-i-tkanina" },
      { label: "Kanap za ogradu i gelender", href: "/primena/kanap-za-ogradu-i-gelender" },
    ],
    keywords: ["metalna suza za kanap", "alka za kanap", "šilo za kanap", "kaus za uže"],
  },
};

/* ======================== STRANICE „PRIMENA" ======================== */

export interface UsePage {
  slug: string;
  title: string;
  h1: string;
  description: string;
  intro: string[];
  /** slug-ovi proizvoda (redosled se čuva) */
  products: string[];
  tips: Section;
  faqs: Faq[];
  keywords: string[];
}

export const USE_PAGES: UsePage[] = [
  {
    slug: "kanap-za-ogradu-i-gelender",
    title: "Kanap za ogradu, gelender i stepenište",
    h1: "Kanap za ogradu, gelender i stepenište",
    description:
      "Jutani kanap za ogradu, gelender i stepenište — prirodni za enterijer, sintetički za spolja, od 4 do 40 mm. Alke i suze za montažu. Od {from}.",
    intro: [
      "Kanap kao ograda ili rukohvat daje stepeništu, terasi i galeriji topao, rustičan izgled — a montaža je jednostavnija nego kod metalne ograde.",
      "Za unutrašnje stepenište birajte prirodnu jutu, a za terase, bašte i pristaništa sintetičku jutu koja ne upija vodu. Najčešće debljine za rukohvat su od 25 do 40 mm.",
    ],
    products: ["prirodna-juta", "sinteticka-juta", "juta-3-snopa", "juta-4-snopa", "metalna-suza-za-kanap", "metalna-alka-za-kanap"],
    tips: {
      h2: "Saveti za montažu",
      p: [
        "Kanap zategnite između nosača na razmaku od 1 do 1,5 m da se ne ugiba. Na krajevima koristite metalne suze ili omču sa obmotajem da se kanap ne raspliće.",
        "Izmerite dužinu po trasi ograde i dodajte po 30–50 cm za svaki čvor i završetak.",
      ],
    },
    faqs: [
      {
        q: "Koja debljina kanapa je najbolja za gelender?",
        a: "Za rukohvat se najčešće bira 30 ili 40 mm jer se prijatno obuhvata šakom. Za dekorativne ograde i pregrade dovoljno je 16–25 mm.",
      },
      {
        q: "Može li jutani kanap napolju?",
        a: "Za spoljnu ogradu preporučujemo sintetičku jutu — izgleda kao prirodna, a otporna je na vlagu.",
      },
    ],
    keywords: ["kanap za ogradu", "kanap za gelender", "kanap za stepenište", "ograda od kanapa"],
  },
  {
    slug: "kanap-za-macje-grebalice",
    title: "Jutani kanap za mačje grebalice",
    h1: "Jutani kanap za mačje grebalice",
    description:
      "Prirodni jutani kanap za izradu i obnovu mačjih grebalica — 6 do 10 mm, na metar ili u klupčetu. Bez hemikalija. Od {from}, dostava po Srbiji.",
    intro: [
      "Mačke obožavaju jutu: grube prirodne niti su idealne za oštrenje kandži, a kanap se lako namotava na stub ili dasku.",
      "Za grebalice se najčešće koristi prirodni kanap debljine 6–10 mm. Jedan metar stuba prečnika 10 cm traži otprilike 35–45 m kanapa od 8 mm.",
    ],
    products: ["prirodna-juta", "jutani-kanap-u-boji", "juta-klube-2-5mm", "silo-za-kanap"],
    tips: {
      h2: "Kako obmotati grebalicu",
      p: [
        "Počnite od dna: krajeve kanapa učvrstite ekserčićima ili spajalicom, pa namotavajte gusto, red do reda. Lepak nanosite samo na početku i kraju — mačke ne bi trebalo da grebu kroz lepak.",
        "Kad se kanap izlizao, skinite ga i namotajte novi — stub ostaje isti.",
      ],
    },
    faqs: [
      {
        q: "Da li je jutani kanap bezbedan za mačke?",
        a: "Prirodna juta je biljno vlakno bez dodatih hemikalija i najčešći je materijal za grebalice.",
      },
      {
        q: "Koliko kanapa mi treba za grebalicu?",
        a: "Za stub prečnika 10 cm i visine 50 cm, sa kanapom od 8 mm, potrebno je oko 20 m. Najbolje je uzeti malo više.",
      },
    ],
    keywords: ["kanap za grebalicu", "juta za mačke", "grebalica za mačke kanap", "jutani kanap 8mm"],
  },
  {
    slug: "kanap-za-decja-igralista",
    title: "Kanap za penjanje i oprema za dečija igrališta",
    h1: "Kanap, merdevine i mreže za dečija igrališta",
    description:
      "Jutani kanap za penjanje, brodske merdevine, mreže za penjanje i ljuljaške za dvorište i igrališta. Prirodni materijali, od {from}.",
    intro: [
      "Kanap za penjanje, brodske merdevine i mreža pretvaraju svako dvorište ili kućicu na drvetu u igralište. Jutani kanap je prijatan za dečiju ruku i ne klizi kao plastika.",
      "Uz to, ljuljaške od drveta i jute uklapaju se u baštu kao da su oduvek bile tu.",
    ],
    products: [
      "junior-kanap-za-penjanje-fi30",
      "kanap-za-penjanje-fi40",
      "brodske-merdevine",
      "mreza-za-penjanje-zastitna-mreza",
      "ljuljaska-basic-drvo-i-juta",
      "ljuljaska-gospodar-prstenova",
    ],
    tips: {
      h2: "Bezbednost na prvom mestu",
      p: [
        "Sve kačite na nosače predviđene za dinamičko opterećenje i ispod postavite meku podlogu (travu, pesak ili gumene ploče). Kanap povremeno proverite na habanje, naročito na mestu kačenja.",
      ],
    },
    faqs: [
      {
        q: "Koji kanap za penjanje je za decu?",
        a: "Junior kanap fi 30 je tanji i lakše se obuhvata dečijom šakom.",
      },
      {
        q: "Da li mreža može po meri kućice na drvetu?",
        a: "Da, mreže pletemo po meri — pošaljite dimenzije i fotografiju.",
      },
    ],
    keywords: ["kanap za penjanje za decu", "brodske merdevine za decu", "mreža za igralište", "ljuljaška za dvorište"],
  },
  {
    slug: "jutana-rasveta-za-ugostitelje",
    title: "Jutana rasveta i dekor za kafane i restorane",
    h1: "Rasveta i dekoracija od jute za kafane i restorane",
    description:
      "Jutane visilice, lusteri, kanap sa el. kablom, plafonske i zidne dekoracije od kanapa za kafane, restorane i hotele. Izrada po meri.",
    intro: [
      "Juta je zaštitni znak rustičnog enterijera: visilice od debelog kanapa iznad šanka, luster u sali, plafon od vertikalnih linija kanapa i pletene stolice daju lokalu toplinu koja se pamti.",
      "Radimo po meri prostora — od jedne visilice do kompletnog opremanja lokala. Pogledajte naše reference.",
    ],
    products: [
      "jutana-visilica-sa-el-kablom",
      "jutana-visilica",
      "jutani-luster",
      "plafonska-dekoracija-od-kanapa",
      "zidni-panel-od-kanapa",
      "pletena-stolica-drvo-i-juta",
      "bokobrani-rusticni",
      "jutani-podmetac",
    ],
    tips: {
      h2: "Kako do ponude",
      p: [
        "Pošaljite nam fotografije prostora, visinu plafona i okvirne dimenzije. Predložićemo rešenje i cenu, a za veće projekte dolazimo i na izlazak.",
      ],
    },
    faqs: [
      {
        q: "Da li izlazite na teren?",
        a: "Za veće projekte dogovaramo izlazak na teren. Za manje dovoljno je da pošaljete fotografije i dimenzije.",
      },
      {
        q: "Da li je kanap sa el. kablom spreman za montažu?",
        a: "Da, kabl je već uvučen u kanap. Priključenje i montažu rasvete treba da uradi električar.",
      },
    ],
    keywords: ["jutana rasveta", "luster od kanapa", "dekoracija za kafanu", "rustični enterijer restorana"],
  },
  {
    slug: "juta-za-pakovanje-i-rukotvorine",
    title: "Juta za pakovanje, rukotvorine i DIY",
    h1: "Juta za pakovanje, rukotvorine i DIY projekte",
    description:
      "Jutano klupče 1 i 2,5 mm, jutana traka u boji, džakčići, platno i kanap u boji — za pakovanje poklona, makrame i rukotvorine. Od {from}.",
    intro: [
      "Juta je omiljena za pakovanje i ručni rad: tanki kanap za etikete i bukete, trake za aranžmane, džakčići za poklone i suvenire, platno za torbe i presvlake.",
      "Sve je od prirodnih vlakana, pa se uklapa u eko pakovanje i rustičan stil venčanja i proslava.",
    ],
    products: ["juta-klube-1mm", "juta-klube-2-5mm", "juta-traka-u-boji", "jutani-dzakcici-i-vrece", "jutano-platno", "jutani-kanap-u-boji"],
    tips: {
      h2: "Ideje za upotrebu",
      p: [
        "Tankim kanapom vežite kutije i tegle, trakom ukrasite stolove i stolice na proslavi, a džakčiće koristite za kafu, začine, bombonjere ili sitne poklone.",
      ],
    },
    faqs: [
      {
        q: "Da li prodajete veće količine džakčića?",
        a: "Da, za firme, venčanja i proizvođače suvenira dajemo ponudu za veće količine.",
      },
    ],
    keywords: ["jutani džakčići", "juta za pakovanje", "jutano klupče", "juta traka", "jutano platno"],
  },
  {
    slug: "nauticki-dekor-od-jute",
    title: "Nautički dekor i oprema od jute",
    h1: "Nautički dekor i oprema od jute",
    description:
      "Ručno pleteni jutani bokobrani, sintetička juta za brodove i pristaništa, brodske merdevine i debeli kanap. Za plovila, terase i lokale na vodi.",
    intro: [
      "Debeli kanap i pleteni bokobrani su deo pomorske tradicije — i na plovilu i kao dekor terase, splava ili restorana na vodi.",
      "Za sve što je stalno izloženo vodi preporučujemo sintetičku jutu, a prirodna juta je idealna za natkrivene i dekorativne delove.",
    ],
    products: ["bokobrani-rusticni", "sinteticka-juta", "brodske-merdevine", "juta-4-snopa", "prirodna-juta"],
    tips: {
      h2: "Nega na vodi",
      p: [
        "Prirodnu jutu posle kiše ili prskanja ostavite da se osuši na vazduhu. Sintetičku jutu je dovoljno isprati čistom vodom.",
      ],
    },
    faqs: [
      {
        q: "Da li se bokobrani mogu koristiti na brodu?",
        a: "Da, bokobrani su i funkcionalni i dekorativni. Za stalnu upotrebu na vodi pitajte nas za izradu od sintetičke jute.",
      },
    ],
    keywords: ["bokobrani", "nautički dekor", "kanap za brod", "brodski konop"],
  },
];

export const getUsePage = (slug: string) => USE_PAGES.find((g) => g.slug === slug);

/* ================================ VODIČI ================================ */

export interface Guide {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: Section[];
  related: SeoLink[];
  keywords: string[];
  published: string; // ISO datum
}

export const GUIDES: Guide[] = [
  {
    slug: "koja-debljina-jutanog-kanapa",
    title: "Koja debljina jutanog kanapa mi treba?",
    description:
      "Praktičan vodič kroz debljine jutanog kanapa od 1 do 40 mm: šta se koristi za pakovanje, grebalice, dekoraciju, ograde i penjanje.",
    intro:
      "Najčešće pitanje koje dobijamo je: koja debljina? Odgovor zavisi od toga šta pravite. Evo kratkog pregleda po nameni.",
    sections: [
      {
        h2: "1–4 mm: vezivanje, pakovanje, makrame",
        p: [
          "Tanki kanap u klupčetu služi za pakovanje poklona, etikete, bukete, baštu i makrame. Lako se vezuje i seče makazama.",
        ],
      },
      {
        h2: "6–12 mm: grebalice, dekoracija, police",
        p: [
          "Ovo je najuniverzalniji raspon. Kanap od 8 mm je standard za mačje grebalice, a 10–12 mm za viseće police, obmotavanje nogara, ogledala i dekoraciju.",
        ],
      },
      {
        h2: "16–25 mm: pregrade, ograde, dekor",
        p: [
          "Srednje debeli kanap se lepo vidi iz daljine — koristi se za dekorativne ograde, pregrade od vertikalnih linija i nautički dekor.",
        ],
      },
      {
        h2: "30–40 mm: gelenderi, penjanje, bokobrani",
        p: [
          "Debeo kanap je za rukohvate na stepeništu, kanape za penjanje i upečatljive instalacije. Fi 40 se prijatno obuhvata šakom odrasle osobe, a fi 30 je bolji za decu.",
        ],
      },
      {
        h2: "Kako izračunati dužinu",
        p: [
          "Izmerite trasu i dodajte rezervu za čvorove i završetke (30–50 cm po završetku). Za namotavanje oko stuba: obim stuba × broj redova (visina / debljina kanapa).",
        ],
      },
    ],
    related: [
      { label: "Prirodni jutani kanap", href: "/proizvod/prirodna-juta" },
      { label: "Sintetički jutani kanap", href: "/proizvod/sinteticka-juta" },
      { label: "Kanap za mačje grebalice", href: "/primena/kanap-za-macje-grebalice" },
      { label: "Kanap za ogradu i gelender", href: "/primena/kanap-za-ogradu-i-gelender" },
    ],
    keywords: ["debljina jutanog kanapa", "jutani kanap 8mm", "jutani kanap 40mm", "koji kanap za ogradu"],
    published: "2026-10-22",
  },
  {
    slug: "prirodna-ili-sinteticka-juta",
    title: "Prirodna ili sintetička juta — koju izabrati?",
    description:
      "Razlike između prirodne i sintetičke jute: izgled, otpornost na vlagu, trajnost i za šta se koja koristi — unutra i napolju.",
    intro:
      "Na prvi pogled liče, ali se ponašaju sasvim drugačije. Evo kako da izaberete pravu jutu za svoj projekat.",
    sections: [
      {
        h2: "Prirodna juta",
        p: [
          "Biljno vlakno, toplo na dodir, sa karakterističnim mirisom i nijansom. Biorazgradiva je i bez hemikalija. Upija vlagu, pa je namenjena pre svega unutrašnjem i natkrivenom prostoru: dekoraciji, grebalicama, nameštaju, rasveti i pakovanju.",
        ],
      },
      {
        h2: "Sintetička juta",
        p: [
          "Izrađena od sintetičkih vlakana koja imitiraju izgled jute. Ne upija vodu, ne truli i ne buđa, pa traje duže napolju — na ogradama, terasama, baštama, igralištima i na vodi.",
        ],
      },
      {
        h2: "Brzo pravilo",
        p: [
          "Unutra — prirodna juta. Napolju i na vodi — sintetička. Kada niste sigurni, pišite nam šta pravite i gde će stajati.",
        ],
      },
    ],
    related: [
      { label: "Prirodni jutani kanap", href: "/proizvod/prirodna-juta" },
      { label: "Sintetički jutani kanap", href: "/proizvod/sinteticka-juta" },
      { label: "Nautički dekor od jute", href: "/primena/nauticki-dekor-od-jute" },
    ],
    keywords: ["sintetička juta", "prirodna juta", "razlika juta sintetika", "kanap za spoljnu upotrebu"],
    published: "2026-10-22",
  },
  {
    slug: "kako-odrzavati-jutani-kanap",
    title: "Kako održavati jutani kanap i proizvode od jute",
    description:
      "Nega jutanog kanapa, nameštaja i dekoracije: čišćenje, vlaga, sunce i kako produžiti vek proizvodima od prirodne jute.",
    intro:
      "Juta je izdržljiva, ali kao svako prirodno vlakno voli suvo i provetreno. Nekoliko jednostavnih navika produžiće joj vek godinama.",
    sections: [
      {
        h2: "Čišćenje",
        p: [
          "Prašinu uklanjajte usisivačem sa mekim nastavkom ili četkom. Fleke tapkajte blago vlažnom krpom — ne trljajte i ne potapajte jutu u vodu.",
        ],
      },
      {
        h2: "Vlaga i sunce",
        p: [
          "Prirodna juta ne voli dugotrajnu vlagu: ako se pokvasi, ostavite je da se osuši na vazduhu. Direktno sunce s vremenom posvetli boju — za spoljne projekte birajte sintetičku jutu.",
        ],
      },
      {
        h2: "Kanapi za penjanje i ljuljaške",
        p: [
          "Povremeno proverite mesto kačenja i ceo kanap na habanje i oštećenja. Ljuljaške i nameštaj od prirodne jute unesite pod krov tokom zime.",
        ],
      },
    ],
    related: [
      { label: "Kuća i dekoracija", href: "/kategorija/kuca-i-dekoracija" },
      { label: "Sport i penjanje", href: "/kategorija/sport-i-penjanje" },
      { label: "Prirodna ili sintetička juta", href: "/vodic/prirodna-ili-sinteticka-juta" },
    ],
    keywords: ["održavanje jute", "kako očistiti jutu", "nega jutanog kanapa"],
    published: "2026-10-22",
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
