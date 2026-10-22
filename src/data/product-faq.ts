/**
 * Česta pitanja na stranici proizvoda — po grupi proizvoda + zajednička (plaćanje, dostava).
 * Izvor pitanja: docs/seo-istrazivanje.md (šta kupci u Srbiji pitaju o juti).
 * Namerno bez tvrdnji o nosivosti/atestu — za to nemamo izmerene podatke.
 */
import type { Product } from "./products";
import type { Faq } from "./seo";
import { SITE } from "./site";

const ROPE: Faq[] = [
  {
    q: "Da li se jutani kanap prodaje na metar?",
    a: "Da. Birate debljinu i dužinu, a kanap sečemo i pakujemo prema porudžbini. Ako vam treba dužina koje nema u ponudi, pošaljite upit.",
  },
  {
    q: "Koju debljinu da izaberem?",
    a: "Za vezivanje i pakovanje 1–4 mm, za grebalice i dekoraciju 6–12 mm, za ograde i pregrade 16–25 mm, a za gelendere i rukohvate 30–40 mm. Detaljnije u vodiču „Koja debljina jutanog kanapa mi treba?”.",
  },
  {
    q: "Da li jutani kanap miriše?",
    a: "Prirodna juta ima blag, prirodan miris biljnog vlakna koji vremenom slabi, naročito u provetrenom prostoru.",
  },
  {
    q: "Da li prirodna juta može napolju?",
    a: "Prirodna juta upija vlagu i namenjena je pre svega unutrašnjem i natkrivenom prostoru. Za ograde, terase i nautiku preporučujemo sintetičku jutu.",
  },
  {
    q: "Kanap, konopac ili uže — ima li razlike?",
    a: "Kod jute se ti nazivi koriste za isti materijal: „kanap” je češći za tanji, „konopac” i „uže” za deblji kanap. Kod nas sve birate po debljini u milimetrima.",
  },
];

const FABRIC: Faq[] = [
  {
    q: "Za šta se koristi jutano platno i traka?",
    a: "Za pakovanje poklona, dekoraciju stolova i proslava, cvetne aranžmane, torbe, presvlake i rukotvorine.",
  },
  {
    q: "Kako se čisti juta?",
    a: "Prašinu uklonite četkom ili usisivačem, a fleke tapkajte blago vlažnom krpom. Jutu ne potapajte u vodu.",
  },
];

const CLIMBING: Faq[] = [
  {
    q: "Koju debljinu kanapa za penjanje da izaberem?",
    a: "Za decu je pogodniji tanji kanap fi 30 koji se lakše obuhvata šakom, a za odrasle i teretane fi 40.",
  },
  {
    q: "Da li je kanap za penjanje bezbedan za decu?",
    a: "Bezbednost zavisi od montaže: kanap kačite na nosač predviđen za dinamičko opterećenje, ispod postavite meku podlogu i deca neka ga koriste uz nadzor. Kanap povremeno proverite na habanje.",
  },
  {
    q: "Uže, konopac ili kanap za penjanje?",
    a: "Isti proizvod — u prodavnicama se zove i „uže za penjanje” i „konopac za penjanje”. Naš je od prirodne jute, prijatan za ruku.",
  },
];

const NETS: Faq[] = [
  {
    q: "Da li radite mrežu i merdevine po meri?",
    a: "Da. Mrežu pletemo po meri konstrukcije (debljina kanapa, veličina okca, način kačenja), a brodske merdevine radimo u dužinama od 1 do 10 m. Za drugačije mere pošaljite upit.",
  },
  {
    q: "Gde se koriste brodske merdevine od kanapa?",
    a: "Na dečijim igralištima i kućicama na drvetu, na terasama i kao merdevine za ulazak u čamac.",
  },
];

const FITNESS: Faq[] = [
  {
    q: "Kako se kači monkey bar kanap?",
    a: "Kanap se kači na šipku ili nosač monkey bar staze. Model sa kuglom na kraju olakšava hvatanje.",
  },
];

const FURNITURE: Faq[] = [
  {
    q: "Da li se nameštaj i ljuljaške od jute mogu držati napolju?",
    a: "Prirodna juta je za natkriven prostor. Na kiši i direktnom suncu brže stari, pa ljuljaške i nameštaj držite pod nadstrešnicom ili ih unosite zimi.",
  },
  {
    q: "Kako se održava nameštaj od jute?",
    a: "Usisivačem ili mekom četkom, a fleke blago vlažnom krpom. Izbegavajte potapanje i jake deterdžente.",
  },
];

const LIGHTING: Faq[] = [
  {
    q: "Da li radite rasvetu po meri?",
    a: "Da — visilice i lustere radimo prema broju krakova, dužini kanapa i visini plafona. Pošaljite upit sa fotografijom prostora.",
  },
  {
    q: "Ko montira rasvetu?",
    a: "Kabl je uvučen u kanap, a priključenje i montažu rasvete treba da uradi električar.",
  },
];

const WALLS: Faq[] = [
  {
    q: "Kako dobiti ponudu za dekoraciju po meri?",
    a: "Pošaljite dimenzije i fotografije prostora — predložićemo rešenje i cenu. Pogledajte i naše reference.",
  },
];

const TABLE: Faq[] = [
  {
    q: "Da li prodajete veće količine?",
    a: "Da — za radnje, venčanja, proslave i firme dajemo ponudu za veće količine džakčića, podmetača i traka.",
  },
];

const ACCESSORIES: Faq[] = [
  {
    q: "Koju veličinu da izaberem?",
    a: "Veličina alke ili suze zavisi od debljine kanapa. Napišite nam koju debljinu koristite i preporučićemo odgovarajuću.",
  },
];

const BY_GROUP: Record<string, Faq[]> = {
  "Juta na metar": ROPE,
  "Klupče i snopovi": ROPE.slice(0, 3),
  "Platno i tkanina": FABRIC,
  "Specijalni kanapi": [ROPE[3], WALLS[0]],
  "Kanapi za penjanje": CLIMBING,
  "Mreže i merdevine": [...NETS, CLIMBING[1]],
  Fitnes: [...FITNESS, CLIMBING[1]],
  Nameštaj: FURNITURE,
  Ljuljaške: [...FURNITURE, CLIMBING[1]],
  Rasveta: LIGHTING,
  "Zidovi i plafoni": WALLS,
  "Za trpezu i pakovanje": [...TABLE, FABRIC[1]],
  Pribor: ACCESSORIES,
};

const COMMON: Faq[] = [
  {
    q: "Kako se plaća i koliko traje dostava?",
    a: `Plaćanje je pouzećem, gotovinom kuriru. Dostava po celoj Srbiji traje ${SITE.deliveryTime}; za izradu po meri rok se dogovara.`,
  },
];

export function productFaqs(p: Product): Faq[] {
  return [...(BY_GROUP[p.group] ?? []), ...COMMON];
}
