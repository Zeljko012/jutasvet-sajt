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
    title: "Jutani kanap na metar, konopac, platno i juta traka — cena",
    h1: "Jutani kanap na metar, platno i juta traka",
    description:
      "Jutani kanap i konopac na metar od 4 do 40 mm — prirodni, sintetički i u boji, juta klupče, jutano platno i juta traka. {count} proizvoda, od {from}. Dostava po Srbiji.",
    sections: [
      {
        h2: "Prirodna, sintetička ili juta u boji?",
        p: [
          "Jutani kanap — zovu ga i jutani konopac, juta kanap ili uže od jute — prodajemo na metar, u debljini koja vam treba. Prirodna (natur) juta je biljno vlakno: topla na dodir, prepoznatljive boje i potpuno biorazgradiva. Najbolja je za enterijer, dekoraciju, grebalice za mačke, pakovanje i zanatske radove.",
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
        q: "Koja je razlika između kanapa, konopca i užeta od jute?",
        a: "Kod jute se ti nazivi koriste za isti materijal — „kanap” češće za tanji, „konopac” i „uže” za deblji. Kod nas birate debljinu u milimetrima, od 1 do 40 mm.",
      },
      {
        q: "Da li je juta dobra za mačju grebalicu?",
        a: "Može, ali je sisal tvrđi i otporniji pa je češći izbor za grebalice koje mačka intenzivno koristi. Juta je mekša i lepša na oko. Više u vodiču „Juta ili sisal za grebalicu”.",
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
      { label: "Kanap, konopac ili uže — razlike", href: "/vodic/kanap-konopac-ili-uze" },
      { label: "Juta za venčanja i pakovanje poklona", href: "/primena/juta-za-vencanja-i-poklone" },
    ],
    keywords: [
      "jutani kanap",
      "jutani konopac",
      "juta kanap",
      "jutani kanap cena",
      "jutani kanap 10 mm",
      "jutani kanap na metar",
      "juta kanap cena",
      "sintetička juta",
      "jutano platno",
      "juta traka",
      "kanap od jute",
    ],
  },

  "sport-i-penjanje": {
    title: "Kanap za penjanje, uže za penjanje i brodske merdevine",
    h1: "Kanapi i užad za penjanje, merdevine i mreže",
    description:
      "Kanap za penjanje (uže, konopac) fi 30 i fi 40 od jute, brodske merdevine od kanapa, mreže za penjanje i monkey bar kanap. {count} proizvoda, od {from}. Dostava po Srbiji.",
    sections: [
      {
        h2: "Za dvorište, igralište i teretanu",
        p: [
          "Kanap za penjanje — u prodavnicama i kao uže za penjanje ili konopac za penjanje — od jute je prijatan za ruku i dobro drži hvat, zato se vekovima koristi za penjanje. Za decu je pogodan junior kanap fi 30, a za odrasle i teretane kanap fi 40 sa čeličnom alkom za kačenje.",
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
      { label: "Kako izabrati kanap za penjanje", href: "/vodic/kako-izabrati-kanap-za-penjanje" },
      { label: "Ljuljaška za dvorište", href: "/primena/ljuljaska-za-dvoriste" },
      { label: "Ljuljaške od drveta i jute", href: "/kategorija/kuca-i-dekoracija" },
      { label: "Kako održavati jutani kanap", href: "/vodic/kako-odrzavati-jutani-kanap" },
    ],
    keywords: [
      "kanap za penjanje",
      "uže za penjanje",
      "konopac za penjanje",
      "kanap za penjanje 40 mm",
      "merdevine od kanapa",
      "brodske merdevine",
      "mreža za penjanje",
      "merdevine od kanapa",
      "monkey bar",
    ],
  },

  "kuca-i-dekoracija": {
    title: "Jutani luster, visilice, ljuljaške i nameštaj od jute",
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
      { label: "Dekoracija za kafane i restorane", href: "/primena/jutana-rasveta-za-ugostitelje" },
      { label: "Ljuljaška za dvorište", href: "/primena/ljuljaska-za-dvoriste" },
      { label: "Božićna dekoracija od jute", href: "/vodic/bozicna-dekoracija-od-jute" },
      { label: "Reference — naši radovi", href: "/reference" },
      { label: "Kako održavati jutani kanap", href: "/vodic/kako-odrzavati-jutani-kanap" },
    ],
    keywords: [
      "jutani tabure",
      "jutani luster",
      "luster od kanapa",
      "ljuljaška za dvorište",
      "dekoracija za kafanu",
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
    title: "Dekoracija za kafane i restorane od jute — rasveta i plafoni",
    h1: "Dekoracija za kafane i restorane od jute",
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
  {
    slug: "ljuljaska-za-dvoriste",
    title: "Ljuljaška za dvorište od drveta i jute",
    h1: "Ljuljaška za dvorište od drveta i jute",
    description:
      "Ljuljaške za dvorište, baštu i terasu — drvena daska ili okrugli prsten na jutanom užetu, plus kanap i alke za kačenje. Od {from}, dostava po Srbiji.",
    intro: [
      "Ljuljaška na jutanom užetu je najjednostavniji način da dvorište dobije mesto za igru i odmor. Drvo i juta izgledaju prirodno u bašti i ne deluju kao plastična igračka.",
      "Pored gotovih ljuljaški nudimo i kanap, alke i suze ako ljuljašku pravite ili popravljate sami.",
    ],
    products: [
      "ljuljaska-basic-drvo-i-juta",
      "ljuljaska-gospodar-prstenova",
      "sinteticka-juta",
      "metalna-alka-za-kanap",
      "metalna-suza-za-kanap",
    ],
    tips: {
      h2: "Saveti za kačenje ljuljaške",
      p: [
        "Ljuljašku kačite na granu ili gredu predviđenu za dinamičko opterećenje, a ispod ostavite slobodan prostor i meku podlogu. Mesto kačenja i uže povremeno proverite na habanje.",
        "Prirodna juta voli natkriven prostor — za ljuljašku koja stalno stoji na kiši izaberite sintetičku jutu ili je unosite zimi.",
      ],
    },
    faqs: [
      {
        q: "Da li ljuljaška može da stoji napolju cele godine?",
        a: "Prirodna juta brže stari na kiši i suncu. Najbolje je da ljuljaška bude pod krošnjom ili nadstrešnicom, a zimi je unesite.",
      },
      {
        q: "Šta mi treba za kačenje?",
        a: "Čvrst nosač, kanap odgovarajuće debljine i metalne alke ili suze za uredan završetak. Pitajte nas ako niste sigurni šta da izaberete.",
      },
    ],
    keywords: ["ljuljaška za dvorište", "ljuljaška od drveta", "ljuljaška od jute", "drvena ljuljaška"],
  },
  {
    slug: "juta-za-vencanja-i-poklone",
    title: "Juta za venčanja, proslave i pakovanje poklona",
    h1: "Juta za venčanja, proslave i pakovanje poklona",
    description:
      "Juta traka, jutani džakčići, tanki kanap i jutano platno za venčanja, krštenja, proslave i pakovanje poklona. Rustičan dekor od prirodne jute, od {from}.",
    intro: [
      "Juta je omiljena za rustična venčanja i proslave: traka na stolicama i stolovima, džakčići za poklone gostima, tanki kanap za kartice sa imenima i buketiće.",
      "Za poklone i praznike juta daje toplo, prirodno pakovanje — od Božića i Nove godine do Valentinova.",
    ],
    products: [
      "juta-traka-u-boji",
      "jutani-dzakcici-i-vrece",
      "juta-klube-1mm",
      "juta-klube-2-5mm",
      "jutano-platno",
      "jutani-podmetac",
    ],
    tips: {
      h2: "Ideje za dekoraciju",
      p: [
        "Trakom obmotajte vaze i tegle sa cvećem, vežite salvete tankim kanapom, a džakčiće napunite bombonama ili začinima kao poklon za goste. Jutano platno može poslužiti kao staza preko stola.",
        "Za veće proslave računajte količine unapred i pošaljite upit — dajemo ponudu za veće količine.",
      ],
    },
    faqs: [
      {
        q: "Da li prodajete džakčiće i traku u većim količinama?",
        a: "Da — za venčanja, proslave i firme pošaljite upit sa količinama i dobićete ponudu.",
      },
      {
        q: "Koje veličine džakčića imate?",
        a: "Od malih 10 × 14 cm do vreća 50 × 100 cm — sve veličine su na stranici proizvoda.",
      },
    ],
    keywords: ["juta za venčanje", "juta traka", "jutani džakčići", "dekoracija od jute za venčanje", "juta za pakovanje poklona"],
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
  {
    slug: "juta-ili-sisal-za-grebalicu",
    title: "Juta ili sisal za mačju grebalicu?",
    description:
      "Razlike između jute i sisala za mačje grebalice: tvrdoća, trajnost, izgled — i kada je juta dobar izbor, a kada je bolji sisal.",
    intro:
      "Kada pravite ili obnavljate grebalicu, prvo pitanje je materijal. Juta i sisal su oba prirodna vlakna, ali se ponašaju različito pod mačjim kandžama.",
    sections: [
      {
        h2: "Sisal: tvrđi i otporniji",
        p: [
          "Sisal se dobija od agave. Vlakna su tvrđa i grublja, pa duže podnose intenzivno grebanje — zato je sisal najčešći materijal gotovih grebalica.",
        ],
      },
      {
        h2: "Juta: mekša i lepša na oko",
        p: [
          "Juta je mekša i toplija, prijatnija na dodir i lepše se uklapa u enterijer. Mnoge mačke je rado koriste, ali se pri intenzivnom grebanju brže lista i troši.",
        ],
      },
      {
        h2: "Kada izabrati jutu",
        p: [
          "Za mačiće, mirnije mačke, dekorativne grebalice i delove grebalice koji se manje koriste juta je sasvim dobar izbor. Kad se kanap istroši, lako se zamenjuje — najčešće se koristi prirodni jutani kanap 6–10 mm.",
        ],
      },
    ],
    related: [
      { label: "Kanap za mačje grebalice", href: "/primena/kanap-za-macje-grebalice" },
      { label: "Prirodni jutani kanap", href: "/proizvod/prirodna-juta" },
      { label: "Koja debljina kanapa mi treba", href: "/vodic/koja-debljina-jutanog-kanapa" },
    ],
    keywords: ["juta ili sisal", "sisal za grebalicu", "juta za grebalicu", "kanap za grebalicu"],
    published: "2026-10-23",
  },
  {
    slug: "kanap-konopac-ili-uze",
    title: "Kanap, konopac ili uže — koja je razlika?",
    description:
      "Šta znače reči kanap, konopac, uže i štrik kada se kupuje juta, i kako izabrati pravi proizvod po debljini.",
    intro:
      "Kupci i prodavnice za isti materijal koriste različite reči. Evo šta se najčešće misli pod kojim nazivom — da lakše nađete ono što vam treba.",
    sections: [
      {
        h2: "Kanap",
        p: [
          "Najčešći naziv za jutu na metar i za tanji materijal: jutani kanap, kanap od jute, kanap za vezivanje i pakovanje.",
        ],
      },
      {
        h2: "Konopac",
        p: [
          "Obično se koristi za deblji, upleteni kanap namenjen opterećenju: jutani konopac, konopac za penjanje, konopac za ogradu.",
        ],
      },
      {
        h2: "Uže",
        p: [
          "Najčešće za sport, nautiku i penjanje: uže za penjanje, uže za nadvlačenje, brodsko uže. „Štrik” je kolokvijalan naziv za isto.",
        ],
      },
      {
        h2: "Šta je zapravo važno",
        p: [
          "Naziv je manje važan od debljine i vrste: prirodna ili sintetička juta, i prečnik u milimetrima. Kod nas sve birate po debljini od 1 do 40 mm.",
        ],
      },
    ],
    related: [
      { label: "Jutani kanap na metar", href: "/kategorija/kanap-i-tkanina" },
      { label: "Kanapi za penjanje", href: "/kategorija/sport-i-penjanje" },
      { label: "Koja debljina kanapa mi treba", href: "/vodic/koja-debljina-jutanog-kanapa" },
    ],
    keywords: ["kanap ili konopac", "jutani konopac", "uže od jute", "jutani štrik"],
    published: "2026-10-23",
  },
  {
    slug: "kako-izabrati-kanap-za-penjanje",
    title: "Kako izabrati kanap za penjanje",
    description:
      "Kanap (uže) za penjanje za decu i odrasle: debljina fi 30 ili fi 40, dužina, kačenje i bezbedna montaža u dvorištu i teretani.",
    intro:
      "Kanap za penjanje je jednostavna sprava, ali izbor debljine, dužine i načina kačenja odlučuje koliko će biti prijatan i bezbedan.",
    sections: [
      {
        h2: "Debljina: fi 30 ili fi 40",
        p: [
          "Fi 30 je tanji i lakše se obuhvata dečijom šakom — pogodan za decu i dvorišta. Fi 40 je standard za odrasle, teretane i vežbe snage hvata.",
        ],
      },
      {
        h2: "Dužina",
        p: [
          "Merite od mesta kačenja do poda i oduzmite oko 20–30 cm da kanap ne leži na podu. Za decu je kraći kanap sigurniji.",
        ],
      },
      {
        h2: "Kačenje i bezbednost",
        p: [
          "Kanap kačite na nosač predviđen za dinamičko opterećenje (greda, čelična konstrukcija), ispod postavite meku podlogu i redovno proverite mesto kačenja i kanap na habanje. Deca neka se penju uz nadzor.",
        ],
      },
    ],
    related: [
      { label: "Kanap za penjanje fi 40", href: "/proizvod/kanap-za-penjanje-fi40" },
      { label: "Kanap za penjanje fi 30", href: "/proizvod/junior-kanap-za-penjanje-fi30" },
      { label: "Kanap za dečija igrališta", href: "/primena/kanap-za-decja-igralista" },
    ],
    keywords: ["kanap za penjanje", "uže za penjanje", "konopac za penjanje 40 mm", "kanap za penjanje za decu"],
    published: "2026-10-23",
  },
  {
    slug: "bozicna-dekoracija-od-jute",
    title: "Božićna i novogodišnja dekoracija od jute",
    description:
      "Ideje za božićnu i novogodišnju dekoraciju od jute: pakovanje poklona, ukrasi za jelku, stolovi i venci od jutane trake i kanapa.",
    intro:
      "Juta je savršena za praznike: prirodna, topla i jednostavna za rad. Sa malo trake, kanapa i džakčića dobijate dekor u rustičnom stilu.",
    sections: [
      {
        h2: "Pakovanje poklona",
        p: [
          "Poklone zamotajte u papir i vežite tankim jutanim kanapom, ili ih spakujte u jutane džakčiće. Uz grančicu bora izgleda kao iz kataloga.",
        ],
      },
      {
        h2: "Ukrasi i stolovi",
        p: [
          "Od juta trake napravite mašne za jelku i venac na vratima. Jutano platno kao staza preko stola i jutani podmetači daju prazničnoj trpezi toplinu.",
        ],
      },
      {
        h2: "Na vreme",
        p: [
          "Pred praznike je najveća potražnja za trakama i džakčićima — poručite ranije, naročito za veće količine.",
        ],
      },
    ],
    related: [
      { label: "Juta za venčanja i pakovanje poklona", href: "/primena/juta-za-vencanja-i-poklone" },
      { label: "Juta traka u boji", href: "/proizvod/juta-traka-u-boji" },
      { label: "Jutani džakčići i vreće", href: "/proizvod/jutani-dzakcici-i-vrece" },
    ],
    keywords: ["božićna dekoracija od jute", "novogodišnja dekoracija", "juta traka", "pakovanje poklona juta"],
    published: "2026-10-23",
  },
];

export const getGuide = (slug: string) => GUIDES.find((g) => g.slug === slug);
