export type Heat = "Mild" | "Medium" | "Fiery";

export interface Product {
  id: string;
  name: string;
  urdu: string;
  img: string;
  price: number;
  heat: Heat;
  heatLevel: number; // 1..3
  tag?: string;
  tint: string;
  notes: string[];
  desc: string;
  pairs: string[];
  ingredients: string;
  batch: string;
}

export const IMG = {
  hero: "https://image.qwenlm.ai/generated-images/4e4b914d-1305-4eb3-95b9-50896de171dd/_result.png",
  mango: "https://image.qwenlm.ai/generated-images/eb8846eb-c1f7-4a1a-a733-d5d4578ea445/_result.png",
  garlic: "https://image.qwenlm.ai/generated-images/0db4cfde-c677-4eb2-8c80-0a05f8487f18/_result.png",
  chilli: "https://image.qwenlm.ai/generated-images/82177031-9e19-4064-86de-33179282fa93/_result.png",
  lemon: "https://image.qwenlm.ai/generated-images/81c8cae6-0216-48d6-afff-33bd54f8a256/_result.png",
  mix: "https://image.qwenlm.ai/generated-images/a3f375b2-15d5-4c62-bee9-5610311a9138/_result.png",
  story: "https://image.qwenlm.ai/generated-images/aa6fbae8-8540-41f3-83d1-731bc9a296ed/_result.png",
};

export const PRODUCTS: Product[] = [
  {
    id: "mango",
    name: "Mango Pickle",
    urdu: "Aam ka Achar",
    img: IMG.mango,
    price: 1450,
    heat: "Medium",
    heatLevel: 2,
    tag: "Bestseller",
    tint: "#EAA93A",
    notes: ["Tangy", "Mustard seed", "Slow warmth"],
    desc: "Raw Sindhri mangoes cut by knife, salted overnight, sun-cured for three days and folded through roasted spices in cold-pressed mustard oil. The jar every Pakistani kitchen argues over.",
    pairs: ["Aloo paratha", "Daal chawal", "Chicken biryani"],
    ingredients: "Raw mango · cold-pressed mustard oil · sea salt · whole mustard & fenugreek seed · Kashmiri chilli · turmeric · kalonji",
    batch: "Batch № 044 · resting",
  },
  {
    id: "garlic",
    name: "Garlic Pickle",
    urdu: "Lahsun ka Achar",
    img: IMG.garlic,
    price: 1350,
    heat: "Medium",
    heatLevel: 2,
    tint: "#D8B36A",
    notes: ["Bold", "Earthy", "Mellow heat"],
    desc: "Whole cloves peeled by hand the same morning, cured until the bite mellows into something deep, savoury and dangerously spoon-able. Ages beautifully past month three.",
    pairs: ["Nihari", "Halwa poori", "Beef pulao"],
    ingredients: "Garlic cloves · cold-pressed mustard oil · sea salt · whole red chilli · mustard seed · fenugreek · vinegar-free",
    batch: "Batch № 044 · ready",
  },
  {
    id: "chilli",
    name: "Green Chillies Pickle",
    urdu: "Hari Mirch ka Achar",
    img: IMG.chilli,
    price: 1250,
    heat: "Fiery",
    heatLevel: 3,
    tag: "For the brave",
    tint: "#92AC5F",
    notes: ["Fiery", "Bright", "Lemon-cut"],
    desc: "Longi chillies stuffed with masala and cured with lemon until the fire turns fragrant. Two per plate is plenty — three is a dare. Our fastest-selling jar in Karachi.",
    pairs: ["Daal fry", "Seekh kebab", "Plain yogurt & naan"],
    ingredients: "Green chillies · lemon · cold-pressed mustard oil · sea salt · roasted spice paste · mustard seed",
    batch: "Batch № 043 · ready",
  },
  {
    id: "lemon",
    name: "Lemon Pickle",
    urdu: "Nimbu ka Achar",
    img: IMG.lemon,
    price: 1250,
    heat: "Mild",
    heatLevel: 1,
    tint: "#E8C84A",
    notes: ["Citrus-bright", "Gentle", "Aromatic"],
    desc: "Thin-skinned lemons slow-cured in turmeric masala until the peel goes soft and the sourness rounds into perfume. The gentle jar — and the one kids steal first.",
    pairs: ["Chicken biryani", "Aloo gosht", "Sada chawal"],
    ingredients: "Lemon · cold-pressed mustard oil · sea salt · turmeric · whole mustard seed · fenugreek · kalonji",
    batch: "Batch № 045 · sun-curing",
  },
  {
    id: "mix",
    name: "Mix Pickle",
    urdu: "Mix Achar",
    img: IMG.mix,
    price: 1650,
    heat: "Medium",
    heatLevel: 2,
    tag: "House favourite",
    tint: "#D95A35",
    notes: ["Everything", "Layered", "Weekend jar"],
    desc: "Mango, lemon, carrot and green chilli sharing one masala — every spoonful lands differently. The jar to buy when the household cannot agree on anything else.",
    pairs: ["Sunday brunch", "Fried fish", "Chapli kebab"],
    ingredients: "Mango · lemon · carrot · green chilli · cold-pressed mustard oil · sea salt · roasted whole spices",
    batch: "Batch № 043 · reserved",
  },
];

export interface Preset {
  id: string;
  name: string;
  desc: string;
  contents: string;
  items: string[];
  price: number;
  was: number;
}

export const PRESETS: Preset[] = [
  {
    id: "duo",
    name: "The Classic Duo",
    desc: "Two mango jars — double the tang for households that finish one a week.",
    contents: "2 × Mango Pickle",
    items: ["mango", "mango"],
    price: 2750,
    was: 2900,
  },
  {
    id: "trio",
    name: "Tang & Fire",
    desc: "Mango for the table, green chilli for the brave, lemon for the kids.",
    contents: "Mango + Green Chillies + Lemon",
    items: ["mango", "chilli", "lemon"],
    price: 3600,
    was: 3950,
  },
  {
    id: "martban",
    name: "The Full Martban",
    desc: "All five recipes, one wooden crate. The wedding-gift standard since 1974.",
    contents: "All 5 jars · 1 kg each",
    items: ["mango", "garlic", "chilli", "lemon", "mix"],
    price: 6000,
    was: 6950,
  },
];

export const STEPS = [
  {
    day: "Day 0",
    title: "The mandi run",
    body: "Mangoes, chillies, garlic and lemons picked at Lahore's Akbari Mandi at dawn — sorted by hand before the oil is even measured.",
  },
  {
    day: "Day 0 – 1",
    title: "Cut, salted, rested",
    body: "Every piece cut by knife, never machine, then salted overnight so the fruit surrenders its water the honest way.",
  },
  {
    day: "Day 1 – 3",
    title: "Three days of Lahore sun",
    body: "Spread on white cotton sheets across the terrace and turned by hand every few hours until the edges shrink and sweeten.",
  },
  {
    day: "Day 3 – 24",
    title: "Spiced, oiled, aged 21 days",
    body: "Folded through freshly roasted spices and cold-pressed mustard oil, then rested three full weeks before a single lid goes on.",
  },
];

export const STATS = [
  { value: 51, suffix: "", label: "years of the same recipe book" },
  { value: 128110, suffix: "+", label: "jars packed by hand since 1974" },
  { value: 40, suffix: "", label: "jars per batch — never more" },
  { value: 0, suffix: "", label: "preservatives. ever." },
];

export const REVIEWS = [
  {
    quote: "The aam ka achar tastes exactly like my nani's. My mother asked for the recipe and refused to believe I ordered it online.",
    name: "Ayesha Tariq",
    city: "Lahore",
    bought: "mango",
    rot: "-2.5deg",
    off: "lg:translate-y-0",
  },
  {
    quote: "Reached Karachi in three days, sealed perfectly, not a drop of oil leaked. The stuffed chilli is dangerously good.",
    name: "Hamza Sheikh",
    city: "Karachi",
    bought: "chilli",
    rot: "1.8deg",
    off: "lg:translate-y-10",
  },
  {
    quote: "Ordered the garlic pickle for my in-laws as a gift — now they order it themselves every month. The jars look beautiful on the shelf.",
    name: "Nimra Javed",
    city: "Islamabad",
    bought: "garlic",
    rot: "-1.2deg",
    off: "lg:-translate-y-4",
  },
  {
    quote: "You can smell the mustard oil the moment the box opens. No vinegar, no chemical aftertaste — this is real homemade achar.",
    name: "Usman Raza",
    city: "Faisalabad",
    bought: "mix",
    rot: "2.4deg",
    off: "lg:translate-y-6",
  },
  {
    quote: "The nimbu achar turned plain daal chawal into an event. My toddler asks for 'the yellow one' at every single meal.",
    name: "Mehr Fatima",
    city: "Multan",
    bought: "lemon",
    rot: "-2deg",
    off: "lg:translate-y-2",
  },
];

export const FAQS = [
  {
    q: "How long do the pickles keep?",
    a: "Unopened, 12 months in a cool, dark cupboard. Once opened, 3–4 months — always use a clean, dry spoon. The mustard oil is the preservative; keep the pieces submerged and it does the rest.",
  },
  {
    q: "Do you use preservatives or vinegar?",
    a: "Neither. Only salt, whole roasted spices and cold-pressed mustard oil — exactly the way it has been made on this terrace since 1974. The 21-day rest is what builds the shelf life naturally.",
  },
  {
    q: "Where do you deliver, and how long does it take?",
    a: "Nationwide in 2–4 working days via TCS or Leopards, Rs 200 flat — free on orders over Rs 5,000. Inside Lahore we do same-day delivery on request, and yes, the jars travel sealed in wooden crates.",
  },
  {
    q: "Can I order for a wedding or corporate gifting?",
    a: "Gladly. We do crates of 20+ jars with printed kraft sleeves and handwritten notes. WhatsApp us at least two weeks ahead — small batches mean we book out fast in shaadi season.",
  },
  {
    q: "How do I pay?",
    a: "Cash on delivery anywhere in Pakistan, or bank transfer / JazzCash if you prefer to prepay. You confirm the order on WhatsApp and we send the tracking number the day it ships.",
  },
];

export const CITIES = ["Lahore", "Karachi", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Sialkot", "Gujranwala"];

export const BATCH_LOG = [
  { no: "№ 044", jar: "Mango", status: "Resting · 9 days left", tone: "mustard" },
  { no: "№ 044", jar: "Garlic", status: "Ready to ship", tone: "dill" },
  { no: "№ 043", jar: "Mix", status: "Fully reserved", tone: "chili" },
  { no: "№ 045", jar: "Lemon", status: "Sun-curing on the terrace", tone: "mustard" },
] as const;

export const TICKER_ITEMS = [
  "No preservatives",
  "Cold-pressed mustard oil",
  "Sun-cured on a Lahore terrace",
  "Aged 21 days",
  "Batches of 40 jars",
  "1 kg jars only",
  "Delivery Rs 200 nationwide",
  "Cash on delivery",
  "Hand-packed to order",
  "Est. 1974",
];

export const fmt = (n: number) => "Rs " + n.toLocaleString("en-US");
