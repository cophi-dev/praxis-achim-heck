export const site = {
  name: "Achim Heck",
  title: "Praxis Achim Heck",
  tagline: "Osteopathie, Physiotherapie & Heilpraktiker in Hamburg-Langenhorn",
  claim: "Ihr Heilpraktiker für tiefgreifende Diagnostik und nachhaltige Therapiekonzepte.",
  eyebrow: "OSTEO  /  PHYSIO  /  CHIRO  /  SPORT  /  THERAPIE",
  description:
    "Praxis für ganzheitliche Gesundheit im Norden Hamburgs. Osteopathie, Chiropraktik und Sport-Physiotherapie bei Achim Heck – Heilpraktiker, Osteopath (AFO) und Sportphysiotherapeut (VPT) in Hamburg-Langenhorn.",
  url: "https://www.achimheck.de",
  email: "info@achimheck.de",
  phone: "040. 278 81 728",
  phoneHref: "tel:+494027881728",
  address: {
    street: "Beim Schäferhof 76",
    zip: "22415",
    city: "Hamburg",
    district: "Hamburg-Langenhorn",
    lat: 53.642103,
    lng: 10.020767,
  },
  hours: "Montag – Freitag 09:00 – 18:00 und nach Vereinbarung",
  transit: "U-Bahn Fuhlsbüttel Nord, 8 Minuten zu Fuß",
  vatId: "49 / 089 / 01075",
} as const;

export const prices = {
  ersttermin: { label: "Ersttermin", amount: 135, unit: "€", hint: "Anamnese, Untersuchung und Behandlung" },
  folgetermin: { label: "Folgetermin", amount: 90, unit: "€", hint: "Weiterführende osteopathische Therapie" },
  abo: {
    label: "Gesundheits-ABO",
    amount: 810,
    unit: "€",
    period: "im Jahr",
    value: 1080,
    save: 270,
    sessions: 12,
    pay: 9,
    extraDiscount: 10,
  },
} as const;

export const nav = [
  { href: "/", label: "Praxis" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/therapeut", label: "Therapeut" },
  { href: "/kosten", label: "Kosten" },
  { href: "/infos", label: "Infos" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export const legalNav = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
] as const;
