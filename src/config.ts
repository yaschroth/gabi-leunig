// Kosmetikinstitut Gabi Leunig Configuration
// Fachinstitut für Ganzheitskosmetik und Permanent Make-up in Heilbronn

export const config = {
  // ============================================
  // BUSINESS IDENTITY
  // ============================================
  business: {
    name: "Kosmetikinstitut Gabi Leunig",
    tagline: "Fachinstitut für Ganzheitskosmetik und Permanent Make-up",
    description: "Eine der ersten Adressen für gutes Aussehen in Heilbronn. Spezialisierte medizinisch-kosmetische Behandlungen mit internationalen Methoden seit über 30 Jahren.",
    foundingYear: 1990,
    yearsExperience: 30,
    satisfiedClients: "5.000+",
  },

  // ============================================
  // CONTACT INFORMATION
  // ============================================
  contact: {
    phone: "07131 86174",
    phoneLink: "tel:+49713186174",
    email: "info@gabi-leunig.de",
    whatsapp: "+49 176 12345678",
    whatsappLink: "https://wa.me/4917612345678",
    address: {
      street: "Fleiner Str. 39",
      city: "Heilbronn",
      district: "Innenstadt",
      zip: "74072",
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2614.5!2d9.2165!3d49.1420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982915e8888889%3A0x0!2sFleiner%20Str.%2039%2C%2074072%20Heilbronn!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde",
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Fleiner+Str.+39,+74072+Heilbronn",
  },

  // ============================================
  // SOCIAL MEDIA
  // ============================================
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  // ============================================
  // OPENING HOURS
  // ============================================
  hours: {
    weekdays: "Di-Fr 10:00-18:00",
    saturday: "nach Vereinbarung",
    sunday: "Geschlossen",
    note: "Zentrale Lage in der Heilbronner Innenstadt, neben H&M",
    display: "Di-Fr 10:00-18:00",
  },

  // ============================================
  // GOOGLE REVIEWS
  // ============================================
  reviews: {
    rating: 5.0,
    count: "80+",
    googleReviewLink: "https://g.page/gabi-leunig/review",
  },

  // ============================================
  // OWNER / ABOUT SECTION
  // ============================================
  owner: {
    name: "Gabi",
    fullName: "Gabi Leunig",
    image: "/beauty/frau.jpg",
    bio: [
      "Seit über 30 Jahren widme ich mich mit Liebe und Leidenschaft der Kosmetik und dem Permanent Make-up. Mein Institut in der Heilbronner Innenstadt ist eine der ersten Adressen für gutes Aussehen in der Region.",
      "In meinem modernen, gemütlichen und privaten Institut biete ich Ihnen ein umfassendes Spektrum an Gesichts- und Körperbehandlungen. Von HydraFacial über Microneedling bis hin zu professionellem Permanent Make-up.",
      "Ich arbeite mit über 15 renommierten Kosmetikmarken wie Dr. med. Christine Schrammek, Green Peel, Reviderm, Guinot, Thalgo und BIOEFFECT. Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.",
    ],
    certifications: [
      { label: "Fachinstitut", icon: "shield" },
      { label: "30+ Jahre Erfahrung", icon: "star" },
      { label: "15+ Markenpartner", icon: "award" },
      { label: "PMU Spezialistin", icon: "check" },
    ],
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: [
    {
      name: "Sandra M.",
      rating: 5,
      text: "Frau Leunig ist eine wahre Meisterin ihres Fachs. Das Permanent Make-up meiner Augenbrauen sieht so natürlich aus, ich bin überglücklich! Sehr professionell und einfühlsam.",
      service: "Permanent Make-up",
      date: "vor 2 Wochen",
    },
    {
      name: "Michaela K.",
      rating: 5,
      text: "Die HydraFacial-Behandlung war ein Traum. Meine Haut hat noch nie so gestrahlt! Das gemütliche Ambiente und die kompetente Beratung haben mich sofort überzeugt.",
      service: "HydraFacial Deluxe",
      date: "vor 1 Monat",
    },
    {
      name: "Birgit W.",
      rating: 5,
      text: "Ich komme seit Jahren zu Frau Leunig und bin immer wieder begeistert. Die Wimpernverlängerung sieht perfekt aus und hält sehr lange. Absolute Empfehlung!",
      service: "XTREME Lashes",
      date: "vor 3 Wochen",
    },
    {
      name: "Karin H.",
      rating: 5,
      text: "Das Institut ist wunderschön und die Behandlungen sind erstklassig. Die Maniküre mit LED-Lack hält bei mir über drei Wochen. Preis-Leistung stimmt absolut!",
      service: "Maniküre mit LED Lack",
      date: "vor 1 Woche",
    },
  ],

  // ============================================
  // SERVICES (Featured)
  // ============================================
  services: [
    {
      title: "HydraFacial",
      description: "Patentierte, nicht invasive Methode, die Peeling, Tiefenreinigung und Infusion von Antioxidantien und Hyaluronsäure in einer Sitzung vereint.",
      price: "ab 129€",
      image: "/beauty/face.jpg",
      benefits: ["Sofort-Glow", "Keine Ausfallzeit"],
    },
    {
      title: "Permanent Make-up",
      description: "Augenbrauen durch Schattierung und feinste Härchenzeichnung individuell und natürlich gestaltet. Über 30 Jahre Erfahrung.",
      price: "ab 290€",
      image: "/beauty/eyebrow-after.png",
      benefits: ["30+ Jahre Erfahrung", "Natürlicher Look"],
    },
    {
      title: "XTREME Lashes",
      description: "Professionelle Wimpernverlängerung für einen natürlichen bis glamourösen Look. Verschiedene Styles von Naturelle bis Fabulous.",
      price: "ab 99€",
      image: "/beauty/wimpern.png",
      benefits: ["Hält 2-4 Wochen", "Verschiedene Looks"],
    },
    {
      title: "Needeling Power Lift",
      description: "Sofortige, sichtbare Wirkung. Aktiviert alle Hautfunktionen und stimuliert Bereiche mit Falten und Narben. Schmerzfrei und für alle Hauttypen geeignet.",
      price: "40€ / 15 Min",
      image: "/beauty/microneedling.jpg",
      benefits: ["Sofort-Effekt", "Schmerzfrei"],
    },
    {
      title: "Klassische Grundbehandlung",
      description: "Reinigung, Fruchtsäure, Ausreinigung, Brauen zupfen, Massage und Spezialmaske. Die perfekte Basis für strahlende Haut.",
      price: "89€",
      image: "/beauty/face2.jpg",
      benefits: ["60 Minuten", "Komplett-Pflege"],
    },
    {
      title: "Maniküre & Pediküre",
      description: "Professionelle Hand- und Fußpflege mit optionalem LED-Lack für langanhaltende Ergebnisse. Gepflegte Hände und Füße.",
      price: "ab 39€",
      image: "/beauty/maniküre%20neu.png",
      benefits: ["Mit LED-Lack", "Langanhaltend"],
    },
    {
      title: "Radiofrequenztherapie",
      description: "Effektive Hautstraffung und Kollagenstimulation für ein jugendlicheres Erscheinungsbild ohne operative Eingriffe.",
      price: "auf Anfrage",
      image: "/beauty/behandlung%204.png",
      benefits: ["Lifting ohne OP", "Tiefenwirkung"],
    },
    {
      title: "Green Peel Kräuterschälkur",
      description: "Natürliche Kräuterschälkur für eine intensive Hauterneuerung. Reduziert Unreinheiten, Pigmentflecken und feine Falten.",
      price: "auf Anfrage",
      image: "/beauty/behandlung%203.png",
      benefits: ["100% natürlich", "Hauterneuerung"],
    },
  ],

  // ============================================
  // PRICING MENU
  // ============================================
  pricing: [
    {
      category: "HydraFacial",
      items: [
        { name: "Basis Acne Treatment", price: "129€" },
        { name: "Signature Treatment", price: "169€" },
        { name: "Deluxe Anti-Aging", price: "199€" },
        { name: "Deluxe Anti-Aging + Booster + LED", price: "239€" },
        { name: "Platinum (inkl. Booster, LED, Lymphdrainage)", price: "279€" },
        { name: "Lip Perk (Hydration & Volumen)", price: "40€" },
        { name: "Eye Perk (Straffung & Hydration)", price: "60€" },
        { name: "Hals", price: "49€" },
        { name: "Hals + Spezial Booster", price: "69€" },
        { name: "Dekolleté", price: "59€" },
        { name: "Dekolleté + Booster", price: "89€" },
        { name: "Hände (Pigmentation/Straffung + Booster)", price: "69€" },
        { name: "Deluxe Anti-Pigmentation Treatment", price: "199€" },
      ],
    },
    {
      category: "Permanent Make-up",
      items: [
        { name: "Augenbrauen Formschattierung", price: "400€" },
        { name: "Augenbrauen Härchenzeichnung", price: "490€" },
        { name: "Augenbrauen Härchenzeichnung, Teilbereiche", price: "ab 350€" },
        { name: "Lidstrich Oberlid", price: "290€" },
        { name: "Lidstrich Oberlid breiter", price: "350€" },
        { name: "Lidstrich Unterlid", price: "260€" },
        { name: "Lippenkontur", price: "490€" },
        { name: "Lippenkontur mit Schattierung", price: "690€" },
        { name: "Lippenvergrößerung", price: "100€" },
        { name: "Liplight Oberlippe", price: "95€" },
      ],
    },
    {
      category: "Wimpern & Augen",
      items: [
        { name: "XTREME Lashes Naturelle Look", price: "ab 99€" },
        { name: "XTREME Lashes Mascara Look", price: "ab 129€" },
        { name: "XTREME Lashes Fabulous Eyes", price: "ab 149€" },
        { name: "Wimpern Auffüllen", price: "ab 50€" },
      ],
    },
    {
      category: "Gesichtsbehandlungen",
      items: [
        { name: "Klassische Grundbehandlung (60 Min)", price: "89€" },
        { name: "Needeling Power Lift (15 Min)", price: "40€" },
        { name: "Green Peel Kräuterschälkur", price: "auf Anfrage" },
        { name: "Radiofrequenztherapie", price: "auf Anfrage" },
        { name: "O2 Oxygen Behandlung", price: "auf Anfrage" },
      ],
    },
    {
      category: "Maniküre",
      items: [
        { name: "Maniküre mit LED Lack", price: "69€" },
        { name: "Maniküre mit Lack", price: "49€" },
        { name: "Maniküre ohne Lack", price: "39€" },
      ],
    },
    {
      category: "Pediküre",
      items: [
        { name: "Pediküre mit LED Lack", price: "79€" },
        { name: "Pediküre mit Lack", price: "59€" },
        { name: "Pediküre ohne Lack", price: "49€" },
      ],
    },
  ],

  // ============================================
  // IMAGES
  // ============================================
  images: {
    hero: "/beauty/face.jpg",
    heroAlt: "Professionelle Kosmetikbehandlung im Kosmetikinstitut Gabi Leunig",
    hygiene: "/beauty/behandlung%204.png",
    gallery: [
      { url: "/beauty/face.jpg", category: "Behandlung" },
      { url: "/beauty/face2.jpg", category: "Behandlung" },
      { url: "/beauty/microneedling.jpg", category: "Behandlung" },
      { url: "/beauty/behandlung%202.webp", category: "Behandlung" },
      { url: "/beauty/behandlung%203.png", category: "Behandlung" },
      { url: "/beauty/behandlung%204.png", category: "Behandlung" },
      { url: "/beauty/wimpern.png", category: "Augen" },
      { url: "/beauty/wimpern%20(2).webp", category: "Augen" },
      { url: "/beauty/eyebrow-after.png", category: "Augen" },
      { url: "/beauty/kopfmassage.png", category: "Wellness" },
      { url: "/beauty/klangschale.jpg", category: "Wellness" },
      { url: "/beauty/maniküre%20neu.png", category: "Pflege" },
      { url: "/beauty/maniküre%203.png", category: "Pflege" },
      { url: "/beauty/pedicure.webp", category: "Pflege" },
      { url: "/beauty/acne-after.png", category: "Ergebnisse" },
      { url: "/beauty/contact.png", category: "Studio" },
    ],
  },

  // ============================================
  // COLORS (Theme) - Professional blue from website
  // ============================================
  colors: {
    primary: "#2E5B8B", // Professional blue
    primaryRgb: "46, 91, 139",
    dark: "#1A2A3A",
    light: "#F5F8FA",
    lightAlt: "#E8EEF4",
  },

  // ============================================
  // HYGIENE SECTION
  // ============================================
  hygiene: {
    headline: "Qualität & Professionalität",
    description: "Ihr Wohlbefinden und Ihre Sicherheit stehen bei uns an erster Stelle. Alle Behandlungen werden unter strengsten Hygienestandards durchgeführt.",
    features: [
      {
        icon: "shield",
        title: "Sterile Instrumente",
        description: "Alle wiederverwendbaren Instrumente werden nach jeder Behandlung fachgerecht sterilisiert.",
      },
      {
        icon: "check",
        title: "Einweg-Material",
        description: "Nadeln und Verbrauchsmaterialien werden ausschließlich einmal verwendet.",
      },
      {
        icon: "award",
        title: "Premium Marken",
        description: "Wir arbeiten mit über 15 renommierten Kosmetikmarken wie Reviderm, Guinot und Thalgo.",
      },
      {
        icon: "star",
        title: "30+ Jahre Erfahrung",
        description: "Langjährige Expertise und regelmäßige Fortbildungen garantieren höchste Standards.",
      },
    ],
  },

  // ============================================
  // LOGO
  // ============================================
  logo: {
    src: "/logo.png",
    alt: "Kosmetikinstitut Gabi Leunig Logo",
  },
};

export type Config = typeof config;
