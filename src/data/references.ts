/**
 * Reference — urađeni projekti („od ideje do realizacije").
 * Slike su u public/images/reference/<id>-<n>.webp (+ -lg.webp za uvećanje).
 * Nova referenca: dodaj slike sa istim imenovanjem i jedan unos ovde.
 */
export interface ReferenceProject {
  id: string;
  title: string;
  kicker: string;
  text: string;
  /** dimenzije male slike (zbog rasporeda bez skakanja) */
  images: [number, number][];
  /** povezani proizvodi / kategorija */
  link?: { label: string; href: string };
}

export const REFERENCES: ReferenceProject[] = [
  {
    id: "krovna-terasa",
    title: "Talasasti plafon od kanapa na krovnoj terasi",
    kicker: "Ugostiteljstvo · izrada po meri",
    text: "Stakleni krov terase dobio je meku senku i topao ritam: debeli jutani kanap razvučen u talasima preko cele konstrukcije. Rešenje koje filtrira sunce, a ne zatvara pogled na grad.",
    images: [
      [800, 600],
      [800, 600],
      [800, 600],
      [800, 600],
      [600, 800],
      [800, 600],
    ],
    link: { label: "Plafonska dekoracija od kanapa", href: "/proizvod/plafonska-dekoracija-od-kanapa" },
  },
  {
    id: "ugostiteljstvo",
    title: "Kafane i restorani: plafoni i rasveta od jute",
    kicker: "Enterijer i bašte",
    text: "Plafonske instalacije od kanapa iznad šanka i sale, viseće lampe i natkrivene bašte — juta daje lokalu toplu, rustičnu atmosferu koju gosti pamte.",
    images: [
      [800, 600],
      [800, 600],
      [800, 600],
      [600, 800],
      [800, 600],
      [800, 600],
    ],
    link: { label: "Rasveta i dekor za ugostitelje", href: "/primena/jutana-rasveta-za-ugostitelje" },
  },
  {
    id: "nautika",
    title: "Nautika: ručno pleteni bokobrani i ukrasi plovila",
    kicker: "Plovila i pristaništa",
    text: "Bokobrani i dekorativni kanapi po meri trupa — funkcionalna zaštita i prepoznatljiv nautički detalj na čamcima i jahtama.",
    images: [
      [800, 600],
      [800, 600],
      [800, 600],
      [800, 600],
      [600, 800],
      [450, 800],
    ],
    link: { label: "Bokobrani rustični", href: "/proizvod/bokobrani-rusticni" },
  },
  {
    id: "ograde-i-gelenderi",
    title: "Ograde, gelenderi i stepeništa od kanapa",
    kicker: "Terase · bašte · enterijer",
    text: "Debeli kanap kao ograda bašte, rukohvat stepeništa ili pregrada na terasi — čvrsto, bezbedno i lepše od klasične metalne ograde.",
    images: [
      [760, 570],
      [800, 800],
      [800, 450],
      [600, 800],
      [600, 800],
      [601, 800],
    ],
    link: { label: "Kanap za ogradu i gelender", href: "/primena/kanap-za-ogradu-i-gelender" },
  },
  {
    id: "rasveta",
    title: "Rasveta od jutanog kanapa",
    kicker: "Lusteri i visilice",
    text: "Lusteri i visilice od debelog kanapa za kuće, vikendice i lokale — od jedne lampe iznad stola do unikatnih komada sa karakterom.",
    images: [
      [800, 600],
      [800, 800],
      [800, 800],
      [800, 800],
      [800, 600],
      [800, 600],
    ],
    link: { label: "Rasveta od jute", href: "/kategorija/kuca-i-dekoracija#rasveta" },
  },
  {
    id: "dvoriste-i-pregrade",
    title: "Ljuljaške, dvorišta i pregrade",
    kicker: "Dvorište i enterijer",
    text: "Ljuljaške na jutanom kanapu, viseći kreveti za baštu i pregrade od vertikalnih linija kanapa koje dele prostor, a propuštaju svetlo.",
    images: [
      [600, 800],
      [450, 800],
      [600, 800],
    ],
    link: { label: "Ljuljaške od drveta i jute", href: "/kategorija/kuca-i-dekoracija#ljuljaske" },
  },
];
