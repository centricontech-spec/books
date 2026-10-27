// Every country edition of MANA GLOBAL.
// `pages` is the page range of that edition inside the black and white Final Manuscript (public/reader/page-NNN.jpg),
// which the Global Edition reader shows. `colourPages` is the same section in the colour manuscript
// (public/reader-colour/page-NNN.jpg), which the soft cover readers show.
// `hasCovers` editions have black / colour / white covers in public/covers/<slug>-<variant>.jpg.

export type Edition = {
  slug: string;
  countryId: string;
  country: string;
  language: string;
  flag: string;
  hasCovers: boolean;
  pages: [number, number];
  colourPages: [number, number];
  rtl: boolean;
};

export const editions: Edition[] = [
  { slug: "aotearoa-english", countryId: "aotearoa", country: "Aotearoa", language: "English", flag: "nz", hasCovers: true, pages: [7, 11], colourPages: [8, 12], rtl: false },
  { slug: "aotearoa-maori", countryId: "aotearoa", country: "Aotearoa", language: "Māori", flag: "nz", hasCovers: true, pages: [12, 16], colourPages: [13, 17], rtl: false },
  { slug: "argentina-spanish", countryId: "argentina", country: "Argentina", language: "Spanish", flag: "ar", hasCovers: true, pages: [17, 21], colourPages: [18, 22], rtl: false },
  { slug: "australia-english", countryId: "australia", country: "Australia", language: "English", flag: "au", hasCovers: true, pages: [22, 26], colourPages: [23, 27], rtl: false },
  { slug: "austria-german", countryId: "austria", country: "Austria", language: "German", flag: "at", hasCovers: true, pages: [27, 32], colourPages: [28, 33], rtl: false },
  { slug: "belgium-dutch", countryId: "belgium", country: "Belgium", language: "Dutch", flag: "be", hasCovers: true, pages: [33, 37], colourPages: [34, 38], rtl: false },
  { slug: "belgium-french", countryId: "belgium", country: "Belgium", language: "French", flag: "be", hasCovers: true, pages: [38, 42], colourPages: [39, 43], rtl: false },
  { slug: "belgium-german", countryId: "belgium", country: "Belgium", language: "German", flag: "be", hasCovers: true, pages: [43, 47], colourPages: [44, 48], rtl: false },
  { slug: "canada-english", countryId: "canada", country: "Canada", language: "English", flag: "ca", hasCovers: true, pages: [48, 52], colourPages: [49, 53], rtl: false },
  { slug: "canada-french", countryId: "canada", country: "Canada", language: "French", flag: "ca", hasCovers: true, pages: [53, 57], colourPages: [54, 58], rtl: false },
  { slug: "chile-spanish", countryId: "chile", country: "Chile", language: "Spanish", flag: "cl", hasCovers: true, pages: [58, 62], colourPages: [59, 63], rtl: false },
  { slug: "costa-rica-spanish", countryId: "costa-rica", country: "Costa Rica", language: "Spanish", flag: "cr", hasCovers: true, pages: [63, 67], colourPages: [64, 68], rtl: false },
  { slug: "czech-republic-czech", countryId: "czech-republic", country: "Czech Republic", language: "Czech", flag: "cz", hasCovers: true, pages: [68, 72], colourPages: [69, 73], rtl: false },
  { slug: "denmark-danish", countryId: "denmark", country: "Denmark", language: "Danish", flag: "dk", hasCovers: true, pages: [73, 77], colourPages: [74, 78], rtl: false },
  { slug: "england-english", countryId: "england", country: "England", language: "English", flag: "gb-eng", hasCovers: false, pages: [78, 82], colourPages: [79, 83], rtl: false },
  { slug: "estonia-estonian", countryId: "estonia", country: "Estonia", language: "Estonian", flag: "ee", hasCovers: true, pages: [83, 87], colourPages: [84, 88], rtl: false },
  { slug: "finland-finnish", countryId: "finland", country: "Finland", language: "Finnish", flag: "fi", hasCovers: true, pages: [88, 92], colourPages: [89, 93], rtl: false },
  { slug: "finland-swedish", countryId: "finland", country: "Finland", language: "Swedish", flag: "fi", hasCovers: false, pages: [93, 97], colourPages: [94, 98], rtl: false },
  { slug: "france-french", countryId: "france", country: "France", language: "French", flag: "fr", hasCovers: true, pages: [98, 103], colourPages: [99, 104], rtl: false },
  { slug: "germany-german", countryId: "germany", country: "Germany", language: "German", flag: "de", hasCovers: true, pages: [104, 109], colourPages: [105, 110], rtl: false },
  { slug: "greece-greek", countryId: "greece", country: "Greece", language: "Greek", flag: "gr", hasCovers: true, pages: [110, 117], colourPages: [111, 118], rtl: false },
  { slug: "iceland-icelandic", countryId: "iceland", country: "Iceland", language: "Icelandic", flag: "is", hasCovers: true, pages: [118, 122], colourPages: [119, 123], rtl: false },
  { slug: "india-english", countryId: "india", country: "India", language: "English", flag: "in", hasCovers: true, pages: [123, 127], colourPages: [124, 128], rtl: false },
  { slug: "india-hindi", countryId: "india", country: "India", language: "Hindi", flag: "in", hasCovers: true, pages: [128, 133], colourPages: [129, 134], rtl: false },
  { slug: "ireland-english", countryId: "ireland", country: "Ireland", language: "English", flag: "ie", hasCovers: true, pages: [134, 138], colourPages: [135, 139], rtl: false },
  { slug: "ireland-irish", countryId: "ireland", country: "Ireland", language: "Irish", flag: "ie", hasCovers: true, pages: [139, 144], colourPages: [140, 145], rtl: false },
  { slug: "israel-arabic", countryId: "israel", country: "Israel", language: "Arabic", flag: "il", hasCovers: true, pages: [145, 149], colourPages: [146, 150], rtl: true },
  { slug: "israel-hebrew", countryId: "israel", country: "Israel", language: "Hebrew", flag: "il", hasCovers: true, pages: [150, 154], colourPages: [151, 155], rtl: true },
  { slug: "italy-italian", countryId: "italy", country: "Italy", language: "Italian", flag: "it", hasCovers: true, pages: [155, 160], colourPages: [156, 161], rtl: false },
  { slug: "japan-japanese", countryId: "japan", country: "Japan", language: "Japanese", flag: "jp", hasCovers: true, pages: [161, 165], colourPages: [162, 166], rtl: false },
  { slug: "latvia-latvian", countryId: "latvia", country: "Latvia", language: "Latvian", flag: "lv", hasCovers: true, pages: [166, 170], colourPages: [167, 171], rtl: false },
  { slug: "lithuania-lithuanian", countryId: "lithuania", country: "Lithuania", language: "Lithuanian", flag: "lt", hasCovers: true, pages: [171, 176], colourPages: [172, 177], rtl: false },
  { slug: "luxembourg-french", countryId: "luxembourg", country: "Luxembourg", language: "French", flag: "lu", hasCovers: true, pages: [177, 182], colourPages: [178, 183], rtl: false },
  { slug: "luxembourg-german", countryId: "luxembourg", country: "Luxembourg", language: "German", flag: "lu", hasCovers: false, pages: [183, 188], colourPages: [184, 189], rtl: false },
  { slug: "luxembourg-luxembourgish", countryId: "luxembourg", country: "Luxembourg", language: "Luxembourgish", flag: "lu", hasCovers: true, pages: [189, 193], colourPages: [190, 194], rtl: false },
  { slug: "netherlands-dutch", countryId: "netherlands", country: "Netherlands", language: "Dutch", flag: "nl", hasCovers: true, pages: [194, 198], colourPages: [195, 199], rtl: false },
  { slug: "new-zealand-english", countryId: "new-zealand", country: "New Zealand", language: "English", flag: "nz", hasCovers: true, pages: [199, 203], colourPages: [200, 204], rtl: false },
  { slug: "new-zealand-maori", countryId: "new-zealand", country: "New Zealand", language: "Māori", flag: "nz", hasCovers: true, pages: [12, 16], colourPages: [13, 17], rtl: false },
  { slug: "norway-norwegian", countryId: "norway", country: "Norway", language: "Norwegian", flag: "no", hasCovers: true, pages: [204, 209], colourPages: [205, 210], rtl: false },
  { slug: "portugal-portuguese", countryId: "portugal", country: "Portugal", language: "Portuguese", flag: "pt", hasCovers: true, pages: [210, 214], colourPages: [211, 215], rtl: false },
  { slug: "scotland-english", countryId: "scotland", country: "Scotland", language: "English", flag: "gb-sct", hasCovers: true, pages: [215, 219], colourPages: [216, 220], rtl: false },
  { slug: "scotland-gaelic", countryId: "scotland", country: "Scotland", language: "Scots Gaelic", flag: "gb-sct", hasCovers: true, pages: [220, 224], colourPages: [221, 225], rtl: false },
  { slug: "slovakia-slovak", countryId: "slovakia", country: "Slovakia", language: "Slovak", flag: "sk", hasCovers: true, pages: [225, 229], colourPages: [226, 230], rtl: false },
  { slug: "south-africa-afrikaans", countryId: "south-africa", country: "South Africa", language: "Afrikaans", flag: "za", hasCovers: true, pages: [230, 235], colourPages: [231, 236], rtl: false },
  { slug: "south-africa-english", countryId: "south-africa", country: "South Africa", language: "English", flag: "za", hasCovers: true, pages: [236, 240], colourPages: [237, 241], rtl: false },
  { slug: "south-africa-xhosa", countryId: "south-africa", country: "South Africa", language: "Xhosa", flag: "za", hasCovers: true, pages: [241, 245], colourPages: [242, 246], rtl: false },
  { slug: "south-africa-zulu", countryId: "south-africa", country: "South Africa", language: "Zulu", flag: "za", hasCovers: true, pages: [246, 250], colourPages: [247, 251], rtl: false },
  { slug: "south-korea-korean", countryId: "south-korea", country: "South Korea", language: "Korean", flag: "kr", hasCovers: true, pages: [251, 256], colourPages: [252, 257], rtl: false },
  { slug: "spain-spanish", countryId: "spain", country: "Spain", language: "Spanish", flag: "es", hasCovers: true, pages: [257, 261], colourPages: [258, 263], rtl: false },
  { slug: "sweden-swedish", countryId: "sweden", country: "Sweden", language: "Swedish", flag: "se", hasCovers: true, pages: [262, 266], colourPages: [264, 268], rtl: false },
  { slug: "switzerland-french", countryId: "switzerland", country: "Switzerland", language: "French", flag: "ch", hasCovers: true, pages: [267, 271], colourPages: [269, 273], rtl: false },
  { slug: "switzerland-german", countryId: "switzerland", country: "Switzerland", language: "German", flag: "ch", hasCovers: true, pages: [272, 277], colourPages: [274, 279], rtl: false },
  { slug: "switzerland-italian", countryId: "switzerland", country: "Switzerland", language: "Italian", flag: "ch", hasCovers: true, pages: [278, 282], colourPages: [280, 284], rtl: false },
  { slug: "taiwan-chinese", countryId: "taiwan", country: "Taiwan", language: "Chinese", flag: "tw", hasCovers: true, pages: [283, 287], colourPages: [285, 289], rtl: false },
  { slug: "uruguay-spanish", countryId: "uruguay", country: "Uruguay", language: "Spanish", flag: "uy", hasCovers: true, pages: [288, 293], colourPages: [290, 295], rtl: false },
  { slug: "usa-english", countryId: "usa", country: "USA", language: "English", flag: "us", hasCovers: true, pages: [294, 299], colourPages: [296, 301], rtl: false },
  { slug: "wales-english", countryId: "wales", country: "Wales", language: "English", flag: "gb-wls", hasCovers: true, pages: [300, 305], colourPages: [302, 307], rtl: false },
  { slug: "wales-welsh", countryId: "wales", country: "Wales", language: "Welsh", flag: "gb-wls", hasCovers: true, pages: [306, 311], colourPages: [308, 313], rtl: false },
];

export type Country = { id: string; name: string; flag: string; editions: Edition[] };

export const countries: Country[] = editions.reduce<Country[]>((list, e) => {
  const existing = list.find((c) => c.id === e.countryId);
  if (existing) existing.editions.push(e);
  else list.push({ id: e.countryId, name: e.country, flag: e.flag, editions: [e] });
  return list;
}, []);

export const MANUSCRIPT_PAGES = 311;
// Blank print pages in the manuscript; the online reader skips them.
export const BLANK_PAGES = [1, 6];

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

// Global Edition (hard cover) front cover for an edition. To use a cover in the
// edition's own language, add public/covers/<slug>-global.jpg and list the slug here.
export const globalCoversInLanguage: string[] = [];

export function globalCoverSrc(e?: Edition) {
  return e && globalCoversInLanguage.includes(e.slug) ? `/covers/${e.slug}-global.jpg` : "/covers/global-edition.jpg";
}

export const GLOBAL_BACK_COVER = "/covers/global-edition-back.jpg";

export function isCoverVariant(value: string | null): value is CoverVariant {
  return coverVariants.some((v) => v.id === value);
}

// Undefined when the edition's cover artwork hasn't been supplied yet.
export function coverSrc(e: Edition, variant: CoverVariant, side: "front" | "back" = "front") {
  if (!e.hasCovers) return undefined;
  return `/covers/${e.slug}-${variant}${side === "back" ? "-back" : ""}.jpg`;
}
