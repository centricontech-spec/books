// Every country edition of MANA GLOBAL.
// `pages` is the page range of that edition inside the Final Manuscript (public/reader/page-NNN.jpg).
// `hasCovers` editions have black / colour / white covers in public/covers/<slug>-<variant>.jpg.

export type Edition = {
  slug: string;
  countryId: string;
  country: string;
  language: string;
  flag: string;
  hasCovers: boolean;
  pages: [number, number];
  rtl: boolean;
};

export const editions: Edition[] = [
  { slug: "aotearoa-english", countryId: "aotearoa", country: "Aotearoa", language: "English", flag: "nz", hasCovers: true, pages: [8, 12], rtl: false },
  { slug: "aotearoa-maori", countryId: "aotearoa", country: "Aotearoa", language: "Māori", flag: "nz", hasCovers: true, pages: [13, 17], rtl: false },
  { slug: "argentina-spanish", countryId: "argentina", country: "Argentina", language: "Spanish", flag: "ar", hasCovers: true, pages: [18, 22], rtl: false },
  { slug: "australia-english", countryId: "australia", country: "Australia", language: "English", flag: "au", hasCovers: true, pages: [23, 27], rtl: false },
  { slug: "austria-german", countryId: "austria", country: "Austria", language: "German", flag: "at", hasCovers: true, pages: [28, 33], rtl: false },
  { slug: "belgium-dutch", countryId: "belgium", country: "Belgium", language: "Dutch", flag: "be", hasCovers: true, pages: [34, 38], rtl: false },
  { slug: "belgium-french", countryId: "belgium", country: "Belgium", language: "French", flag: "be", hasCovers: true, pages: [39, 43], rtl: false },
  { slug: "belgium-german", countryId: "belgium", country: "Belgium", language: "German", flag: "be", hasCovers: true, pages: [44, 48], rtl: false },
  { slug: "canada-english", countryId: "canada", country: "Canada", language: "English", flag: "ca", hasCovers: true, pages: [49, 53], rtl: false },
  { slug: "canada-french", countryId: "canada", country: "Canada", language: "French", flag: "ca", hasCovers: true, pages: [54, 58], rtl: false },
  { slug: "chile-spanish", countryId: "chile", country: "Chile", language: "Spanish", flag: "cl", hasCovers: true, pages: [59, 63], rtl: false },
  { slug: "costa-rica-spanish", countryId: "costa-rica", country: "Costa Rica", language: "Spanish", flag: "cr", hasCovers: true, pages: [64, 68], rtl: false },
  { slug: "czech-republic-czech", countryId: "czech-republic", country: "Czech Republic", language: "Czech", flag: "cz", hasCovers: true, pages: [69, 73], rtl: false },
  { slug: "denmark-danish", countryId: "denmark", country: "Denmark", language: "Danish", flag: "dk", hasCovers: true, pages: [74, 78], rtl: false },
  { slug: "england-english", countryId: "england", country: "England", language: "English", flag: "gb-eng", hasCovers: false, pages: [79, 83], rtl: false },
  { slug: "estonia-estonian", countryId: "estonia", country: "Estonia", language: "Estonian", flag: "ee", hasCovers: true, pages: [84, 88], rtl: false },
  { slug: "finland-finnish", countryId: "finland", country: "Finland", language: "Finnish", flag: "fi", hasCovers: true, pages: [89, 93], rtl: false },
  { slug: "finland-swedish", countryId: "finland", country: "Finland", language: "Swedish", flag: "fi", hasCovers: false, pages: [94, 98], rtl: false },
  { slug: "france-french", countryId: "france", country: "France", language: "French", flag: "fr", hasCovers: true, pages: [99, 104], rtl: false },
  { slug: "germany-german", countryId: "germany", country: "Germany", language: "German", flag: "de", hasCovers: true, pages: [105, 110], rtl: false },
  { slug: "greece-greek", countryId: "greece", country: "Greece", language: "Greek", flag: "gr", hasCovers: true, pages: [111, 118], rtl: false },
  { slug: "iceland-icelandic", countryId: "iceland", country: "Iceland", language: "Icelandic", flag: "is", hasCovers: true, pages: [119, 123], rtl: false },
  { slug: "india-english", countryId: "india", country: "India", language: "English", flag: "in", hasCovers: true, pages: [124, 128], rtl: false },
  { slug: "india-hindi", countryId: "india", country: "India", language: "Hindi", flag: "in", hasCovers: true, pages: [129, 134], rtl: false },
  { slug: "ireland-english", countryId: "ireland", country: "Ireland", language: "English", flag: "ie", hasCovers: true, pages: [135, 139], rtl: false },
  { slug: "ireland-irish", countryId: "ireland", country: "Ireland", language: "Irish", flag: "ie", hasCovers: true, pages: [140, 145], rtl: false },
  { slug: "israel-arabic", countryId: "israel", country: "Israel", language: "Arabic", flag: "il", hasCovers: true, pages: [146, 150], rtl: true },
  { slug: "israel-hebrew", countryId: "israel", country: "Israel", language: "Hebrew", flag: "il", hasCovers: true, pages: [151, 155], rtl: true },
  { slug: "italy-italian", countryId: "italy", country: "Italy", language: "Italian", flag: "it", hasCovers: true, pages: [156, 161], rtl: false },
  { slug: "japan-japanese", countryId: "japan", country: "Japan", language: "Japanese", flag: "jp", hasCovers: true, pages: [162, 166], rtl: false },
  { slug: "latvia-latvian", countryId: "latvia", country: "Latvia", language: "Latvian", flag: "lv", hasCovers: true, pages: [167, 171], rtl: false },
  { slug: "lithuania-lithuanian", countryId: "lithuania", country: "Lithuania", language: "Lithuanian", flag: "lt", hasCovers: true, pages: [172, 177], rtl: false },
  { slug: "luxembourg-french", countryId: "luxembourg", country: "Luxembourg", language: "French", flag: "lu", hasCovers: true, pages: [178, 183], rtl: false },
  { slug: "luxembourg-german", countryId: "luxembourg", country: "Luxembourg", language: "German", flag: "lu", hasCovers: false, pages: [184, 189], rtl: false },
  { slug: "luxembourg-luxembourgish", countryId: "luxembourg", country: "Luxembourg", language: "Luxembourgish", flag: "lu", hasCovers: true, pages: [190, 194], rtl: false },
  { slug: "netherlands-dutch", countryId: "netherlands", country: "Netherlands", language: "Dutch", flag: "nl", hasCovers: true, pages: [195, 199], rtl: false },
  { slug: "new-zealand-english", countryId: "new-zealand", country: "New Zealand", language: "English", flag: "nz", hasCovers: true, pages: [200, 204], rtl: false },
  { slug: "new-zealand-maori", countryId: "new-zealand", country: "New Zealand", language: "Māori", flag: "nz", hasCovers: true, pages: [13, 17], rtl: false },
  { slug: "norway-norwegian", countryId: "norway", country: "Norway", language: "Norwegian", flag: "no", hasCovers: true, pages: [205, 210], rtl: false },
  { slug: "portugal-portuguese", countryId: "portugal", country: "Portugal", language: "Portuguese", flag: "pt", hasCovers: true, pages: [211, 215], rtl: false },
  { slug: "scotland-english", countryId: "scotland", country: "Scotland", language: "English", flag: "gb-sct", hasCovers: true, pages: [216, 220], rtl: false },
  { slug: "scotland-gaelic", countryId: "scotland", country: "Scotland", language: "Scots Gaelic", flag: "gb-sct", hasCovers: true, pages: [221, 225], rtl: false },
  { slug: "slovakia-slovak", countryId: "slovakia", country: "Slovakia", language: "Slovak", flag: "sk", hasCovers: true, pages: [226, 230], rtl: false },
  { slug: "south-africa-afrikaans", countryId: "south-africa", country: "South Africa", language: "Afrikaans", flag: "za", hasCovers: true, pages: [231, 236], rtl: false },
  { slug: "south-africa-english", countryId: "south-africa", country: "South Africa", language: "English", flag: "za", hasCovers: true, pages: [237, 241], rtl: false },
  { slug: "south-africa-xhosa", countryId: "south-africa", country: "South Africa", language: "Xhosa", flag: "za", hasCovers: true, pages: [242, 246], rtl: false },
  { slug: "south-africa-zulu", countryId: "south-africa", country: "South Africa", language: "Zulu", flag: "za", hasCovers: true, pages: [247, 251], rtl: false },
  { slug: "south-korea-korean", countryId: "south-korea", country: "South Korea", language: "Korean", flag: "kr", hasCovers: true, pages: [252, 257], rtl: false },
  { slug: "spain-spanish", countryId: "spain", country: "Spain", language: "Spanish", flag: "es", hasCovers: true, pages: [258, 263], rtl: false },
  { slug: "sweden-swedish", countryId: "sweden", country: "Sweden", language: "Swedish", flag: "se", hasCovers: true, pages: [264, 268], rtl: false },
  { slug: "switzerland-french", countryId: "switzerland", country: "Switzerland", language: "French", flag: "ch", hasCovers: true, pages: [269, 273], rtl: false },
  { slug: "switzerland-german", countryId: "switzerland", country: "Switzerland", language: "German", flag: "ch", hasCovers: true, pages: [274, 279], rtl: false },
  { slug: "switzerland-italian", countryId: "switzerland", country: "Switzerland", language: "Italian", flag: "ch", hasCovers: true, pages: [280, 284], rtl: false },
  { slug: "taiwan-chinese", countryId: "taiwan", country: "Taiwan", language: "Chinese", flag: "tw", hasCovers: true, pages: [285, 289], rtl: false },
  { slug: "uruguay-spanish", countryId: "uruguay", country: "Uruguay", language: "Spanish", flag: "uy", hasCovers: true, pages: [290, 295], rtl: false },
  { slug: "usa-english", countryId: "usa", country: "USA", language: "English", flag: "us", hasCovers: true, pages: [296, 301], rtl: false },
  { slug: "wales-english", countryId: "wales", country: "Wales", language: "English", flag: "gb-wls", hasCovers: true, pages: [302, 307], rtl: false },
  { slug: "wales-welsh", countryId: "wales", country: "Wales", language: "Welsh", flag: "gb-wls", hasCovers: true, pages: [308, 313], rtl: false },
];

export type Country = { id: string; name: string; flag: string; editions: Edition[] };

export const countries: Country[] = editions.reduce<Country[]>((list, e) => {
  const existing = list.find((c) => c.id === e.countryId);
  if (existing) existing.editions.push(e);
  else list.push({ id: e.countryId, name: e.country, flag: e.flag, editions: [e] });
  return list;
}, []);

export const MANUSCRIPT_PAGES = 313;

export function getEdition(slug: string) {
  return editions.find((e) => e.slug === slug);
}

export function editionTitle(e: Edition) {
  return `${e.country} · ${e.language}`;
}

export const coverVariants = [
  { id: "black", label: "Black cover" },
  { id: "colour", label: "Colour cover" },
  { id: "white", label: "White cover" },
] as const;

export type CoverVariant = (typeof coverVariants)[number]["id"];

export function coverSrc(e: Edition, variant: CoverVariant) {
  return e.hasCovers ? `/covers/${e.slug}-${variant}.jpg` : "/covers/global-edition.jpg";
}
