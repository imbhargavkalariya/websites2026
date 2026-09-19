/* ==========================================================================
   NEPTUNE TIMES - LUXURY WATCH DATASET & BRAND CATALOG (ALL 17 BRANDS)
   ========================================================================== */

const BRANDS_DATA = [
    {
        id: "audemars-piguet",
        name: "Audemars Piguet",
        logo: "assets/brand-logo/audemars-piguet.svg",
        origin: "Le Brassus, Switzerland",
        established: 1875,
        watchCount: 18,
        description: "Pioneers of luxury steel sports horology with the iconic Royal Oak, offshore chronographs and avant-garde skeleton artistry.",
        tagline: "To break the rules, you must first master them.",
        category: "Sport Luxury",
        featured: true
    },
    {
        id: "breitling",
        name: "Breitling",
        logo: "assets/brand-logo/breitling.svg",
        origin: "Grenchen, Switzerland",
        established: 1884,
        watchCount: 16,
        description: "The official wrist instrument for aviation pioneers, high-altitude chronographs, Navitimer circular slide-rules and endurance tools.",
        tagline: "Instruments for Professionals.",
        category: "Aviation Chronograph",
        featured: true
    },
    {
        id: "cartier",
        name: "Cartier",
        logo: "assets/brand-logo/cartier.svg",
        origin: "Paris, France",
        established: 1847,
        watchCount: 20,
        description: "Architectural elegance and legendary geometric silhouettes including the Santos, Tank, Ballon Bleu, and surrealist Crash.",
        tagline: "The Jeweler of Kings and the King of Jewelers.",
        category: "Dress Horology",
        featured: true
    },
    {
        id: "franck-muller",
        name: "Franck Muller",
        logo: "assets/brand-logo/franck-muller.svg",
        origin: "Genthod, Geneva, Switzerland",
        established: 1991,
        watchCount: 12,
        description: "The Master of Complications famous for the signature Cintrée Curvex tonneau case, Crazy Hours jumping numerals and mega tourbillons.",
        tagline: "Master of Complications.",
        category: "Grand Complication",
        featured: true
    },
    {
        id: "hublot",
        name: "Hublot",
        logo: "assets/brand-logo/hublot.svg",
        origin: "Nyon, Switzerland",
        established: 1980,
        watchCount: 15,
        description: "Disruptive Art of Fusion combining rubber straps, Magic Gold, sapphire crystal cases and Unico manufacture movements.",
        tagline: "Be First, Different and Unique.",
        category: "Avant-Garde",
        featured: true
    },
    {
        id: "iceout",
        name: "Bespoke Ice-Out",
        logo: "assets/brand-logo/iceout.svg",
        origin: "Geneva & Dubai Vaults",
        established: 2012,
        watchCount: 10,
        description: "Custom haute joaillerie horology set with VVS flawless baguette diamonds, factory pave bezels and iced-out heirloom masterworks.",
        tagline: "Unapologetic High-Jewelry Horology.",
        category: "High Horology",
        featured: true
    },
    {
        id: "iwc",
        name: "IWC Schaffhausen",
        logo: "assets/brand-logo/iwc.svg",
        origin: "Schaffhausen, Switzerland",
        established: 1868,
        watchCount: 14,
        description: "Precision Swiss engineering from Schaffhausen. Iconic Big Pilot's instruments, Portugieser perpetual calendars and Aquatimer divers.",
        tagline: "Engineered for Men.",
        category: "Aviation Chronograph",
        featured: true
    },
    {
        id: "jaeger-lecoultre",
        name: "Jaeger-LeCoultre",
        logo: "assets/brand-logo/jaeger-lecoultre.svg",
        origin: "Le Sentier, Switzerland",
        established: 1833,
        watchCount: 17,
        description: "The Watchmaker of Watchmakers, master creators of over 1,200 mechanical calibers, Atmos clocks and the swiveling Reverso.",
        tagline: "The Watchmaker of Watchmakers.",
        category: "Dress Horology",
        featured: true
    },
    {
        id: "omega",
        name: "Omega",
        logo: "assets/brand-logo/omega.svg",
        origin: "Biel/Bienne, Switzerland",
        established: 1848,
        watchCount: 22,
        description: "The legendary Speedmaster Professional Moonwatch, Seamaster Diver 300M James Bond icons, and Master Co-Axial chronometers.",
        tagline: "First Watch Worn on the Moon.",
        category: "Sport Luxury",
        featured: true
    },
    {
        id: "panerai",
        name: "Officine Panerai",
        logo: "assets/brand-logo/panerai.svg",
        origin: "Florence, Italy & Neuchâtel",
        established: 1860,
        watchCount: 13,
        description: "Florentine naval heritage, cushion-shaped Radiomir & Luminor cases with patented crown-protecting bridges and luminous sandwich dials.",
        tagline: "Where Italian Design Meets Swiss Technology.",
        category: "Sport Luxury",
        featured: true
    },
    {
        id: "patek-philippe",
        name: "Patek Philippe",
        logo: "assets/brand-logo/patek-philippe.svg",
        origin: "Geneva, Switzerland",
        established: 1839,
        watchCount: 24,
        description: "The absolute pinnacle of Swiss haute horology, world-renowned for grand complications, Calatrava dress elegance and Nautilus sports icons.",
        tagline: "You never actually own a Patek Philippe. You merely look after it for the next generation.",
        category: "Grand Complication",
        featured: true
    },
    {
        id: "richard-mille",
        name: "Richard Mille",
        logo: "assets/brand-logo/richard-mille.svg",
        origin: "Les Breuleux, Switzerland",
        established: 2001,
        watchCount: 9,
        description: "Futuristic racing machines on the wrist engineered with aerospace NTPT carbon, titanium grade 5 and g-force shock tourbillons.",
        tagline: "A Racing Machine on the Wrist.",
        category: "Avant-Garde",
        featured: true
    },
    {
        id: "roger-dubuis",
        name: "Roger Dubuis",
        logo: "assets/brand-logo/roger-dubuis.svg",
        origin: "Geneva, Switzerland",
        established: 1995,
        watchCount: 8,
        description: "Hyper Horology featuring the Excalibur skeleton flying tourbillon stamped with the prestigious Poinçon de Genève seal of quality.",
        tagline: "No Rules, Our Game.",
        category: "Avant-Garde",
        featured: true
    },
    {
        id: "rolex",
        name: "Rolex",
        logo: "assets/brand-logo/rolex.svg",
        origin: "Geneva, Switzerland",
        established: 1905,
        watchCount: 28,
        description: "The global benchmark in precision, durability, and prestige. Cosmograph Daytona, Submariner, Day-Date President, and GMT-Master II icons.",
        tagline: "A Crown for Every Achievement.",
        category: "Sport Luxury",
        featured: true
    },
    {
        id: "tag-heuer",
        name: "TAG Heuer",
        logo: "assets/brand-logo/tag-heuer.svg",
        origin: "La Chaux-de-Fonds, Switzerland",
        established: 1860,
        watchCount: 15,
        description: "Motorsport racing heritage embodied by the Monaco square chronograph, Carrera tachymeter, and Aquaracer professional dive tools.",
        tagline: "Don't Crack Under Pressure.",
        category: "Aviation Chronograph",
        featured: true
    },
    {
        id: "ulysse-nardin",
        name: "Ulysse Nardin",
        logo: "assets/brand-logo/ulysse-nardin.svg",
        origin: "Le Locle, Switzerland",
        established: 1846,
        watchCount: 11,
        description: "Historic marine chronometers and revolutionary silicon escapements showcased in The Freak carrousel-tourbillon without hands or crown.",
        tagline: "Freakish Horological Genius.",
        category: "High Horology",
        featured: true
    },
    {
        id: "vacheron-constantin",
        name: "Vacheron Constantin",
        logo: "assets/brand-logo/vacheron-constantin.svg",
        origin: "Geneva, Switzerland",
        established: 1755,
        watchCount: 14,
        description: "The oldest continuously operating watch manufacture in history, crafting Overseas steel sports, Historiques, and poetic complications for centuries.",
        tagline: "One of Not Many.",
        category: "High Horology",
        featured: true
    }
];

const WATCHES_DATA = [
    // PATEK PHILIPPE
    {
        id: "patek-philippe-5271-gemset",
        brandId: "patek-philippe",
        brandName: "Patek Philippe",
        model: "Grand Complications Gem-Set Perpetual Calendar",
        reference: "Ref. 5271/12R-010",
        price: 345000,
        priceDisplay: "$345,000",
        originalPrice: "$375,000",
        availability: "Private Vault",
        category: "Grand Complication",
        image: "assets/watch/patek-philippe/m1/1.jpeg",
        gallery: ["assets/watch/patek-philippe/m1/1.jpeg", "assets/watch/patek-philippe/m1/2.jpeg", "assets/watch/patek-philippe/m1/3.jpeg", "assets/watch/patek-philippe/m1/4.jpeg", "assets/watch/patek-philippe/m1/5.jpeg", "assets/watch/patek-philippe/m1/6.jpeg", "assets/watch/patek-philippe/m1/7.jpeg"],
        badge: "Baguette Ruby Set",
        description: "An extraordinary 18K rose gold grand complication set with 80 baguette-cut rubies on the bezel and lugs, featuring a perpetual calendar and manual-wind chronograph Calibre CH 29-535 PS Q.",
        specs: {
            movement: "Calibre CH 29-535 PS Q (Manual Wind)",
            powerReserve: "65 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "18K Rose Gold set with Baguette Rubies",
            waterResistance: "30 Meters",
            dialColor: "Ebony Black Sunburst",
            strap: "Shiny Black Alligator Leather"
        },
        featured: true
    },
    {
        id: "patek-philippe-aquanaut-5267-200a",
        brandId: "patek-philippe",
        brandName: "Patek Philippe",
        model: "Aquanaut Luce Diamond Bezel",
        reference: "Ref. 5267/200A-001",
        price: 118000,
        priceDisplay: "$118,000",
        originalPrice: "$130,000",
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/watch/patek-philippe/m2/136.jpeg",
        gallery: ["assets/watch/patek-philippe/m2/136.jpeg", "assets/watch/patek-philippe/m2/137.jpeg", "assets/watch/patek-philippe/m2/138.jpeg", "assets/watch/patek-philippe/m2/139.jpeg", "assets/watch/patek-philippe/m2/140.jpeg"],
        badge: "Diamond Bezel",
        description: "A contemporary sport-chic design featuring a stainless steel case set with 48 flawless diamonds, an embossed black Aquanaut pattern dial, and integrated black composite strap.",
        specs: {
            movement: "Calibre E 23-250 S C (Quartz)",
            powerReserve: "Battery Powered",
            caseSize: "38.8 mm",
            caseMaterial: "Stainless Steel set with 48 Diamonds",
            waterResistance: "120 Meters",
            dialColor: "Black Embossed Aquanaut Pattern",
            strap: "Black Composite Polymer Strap"
        },
        featured: true
    },
    {
        id: "patek-philippe-nautilus-skeleton-tourbillon",
        brandId: "patek-philippe",
        brandName: "Patek Philippe",
        model: "Nautilus Skeleton Tourbillon Openwork",
        // Exact reference requires manual verification
        reference: "Ref. 5711/1A-SQ",
        price: 295000,
        priceDisplay: "$295,000",
        originalPrice: "$325,000",
        availability: "Private Vault",
        category: "Grand Complication",
        image: "assets/watch/patek-philippe/m3/141.jpeg",
        gallery: [
            "assets/watch/patek-philippe/m3/141.jpeg",
            "assets/watch/patek-philippe/m3/142.jpeg",
            "assets/watch/patek-philippe/m3/143.jpeg",
            "assets/watch/patek-philippe/m3/147.jpeg",
            "assets/watch/patek-philippe/m3/148.jpeg",
            "assets/watch/patek-philippe/m3/149.jpeg"
        ],
        badge: "Flying Tourbillon",
        description: "A spectacular bespoke openwork creation based on the iconic Nautilus silhouette, featuring a fully skeletonized automatic tourbillon movement and hand-engraved mainplate.",
        specs: {
            movement: "Bespoke Openwork Tourbillon Movement",
            powerReserve: "48 Hours",
            caseSize: "40.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "30 Meters",
            dialColor: "Skeletonized Sapphire",
            strap: "Integrated Stainless Steel Bracelet"
        },
        featured: true
    },

    // ROLEX
    {
        id: "rolex-yacht-master-126621",
        brandId: "rolex",
        brandName: "Rolex",
        model: "Yacht-Master 40 Everose Rolesor",
        reference: "Ref. 126621",
        price: 34500,
        priceDisplay: "$34,500",
        originalPrice: "$38,000",
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/watch/rolex/m1/1.png",
        gallery: [
            "assets/watch/rolex/m1/1.png",
            "assets/watch/rolex/m1/2.png",
            "assets/watch/rolex/m1/3.png",
            "assets/watch/rolex/m1/4.png",
            "assets/watch/rolex/m1/5.png"
        ],
        badge: "Everose Rolesor",
        description: "Distinguished by its bidirectional rotatable 60-minute raised numeral bezel in 18K Everose gold, rich chocolate dial, and combination Oystersteel and Everose gold bracelet.",
        specs: {
            movement: "Calibre 3235 (Automatic)",
            powerReserve: "70 Hours",
            caseSize: "40.0 mm",
            caseMaterial: "Oystersteel & 18K Everose Gold",
            waterResistance: "100 Meters",
            dialColor: "Chocolate Sunburst",
            strap: "Everose Rolesor Oyster Bracelet"
        },
        featured: true
    },
    {
        id: "rolex-perpetual-1908-52509",
        brandId: "rolex",
        brandName: "Rolex",
        model: "Perpetual 1908 18K White Gold",
        reference: "Ref. 52509",
        price: 14500,
        priceDisplay: "$14,500",
        originalPrice: "$16,000",
        availability: "In Stock",
        category: "Classic Luxury",
        image: "assets/watch/rolex/m2/1.png",
        gallery: [
            "assets/watch/rolex/m2/1.png",
            "assets/watch/rolex/m2/2.png",
            "assets/watch/rolex/m2/3.png",
            "assets/watch/rolex/m2/4.png",
            "assets/watch/rolex/m2/5.png",
            "assets/watch/rolex/m2/6.png"
        ],
        badge: "1908 Dress Icon",
        description: "An elegant dress watch featuring a slim 18K white gold case with domed and fluted bezel, intense white dial with small seconds at 6 o'clock, and transparent sapphire case back.",
        specs: {
            movement: "Calibre 7140 (Automatic)",
            powerReserve: "66 Hours",
            caseSize: "39.0 mm",
            caseMaterial: "18K White Gold",
            waterResistance: "50 Meters",
            dialColor: "Intense White",
            strap: "Black Alligator Leather Strap"
        },
        featured: true
    },
    {
        id: "rolex-deepsea-136660-dblue",
        brandId: "rolex",
        brandName: "Rolex",
        model: "Deepsea D-Blue Dial 'James Cameron'",
        reference: "Ref. 136660",
        price: 24500,
        priceDisplay: "$24,500",
        originalPrice: "$27,000",
        availability: "Limited Edition",
        category: "Dive Luxury",
        image: "assets/watch/rolex/m3/1.png",
        gallery: [
            "assets/watch/rolex/m3/1.png",
            "assets/watch/rolex/m3/2.png",
            "assets/watch/rolex/m3/3.png"
        ],
        badge: "3900M Deep Diver",
        description: "Commemorating James Cameron's historic solo dive, featuring a two-color gradient dial transitioning from brilliant blue to bottomless black and Ringlock System architecture.",
        specs: {
            movement: "Calibre 3235 (Automatic)",
            powerReserve: "70 Hours",
            caseSize: "44.0 mm",
            caseMaterial: "Oystersteel & Titanium Case Back",
            waterResistance: "3,900 Meters",
            dialColor: "D-Blue Gradient",
            strap: "Oyster Steel with Glidelock Extension"
        },
        featured: true
    },
    {
        id: "rolex-land-dweller-127000",
        brandId: "rolex",
        brandName: "Rolex",
        model: "Land-Dweller Honeycomb Dial",
        // Exact reference requires manual verification
        reference: "Ref. 127000",
        price: 16500,
        priceDisplay: "$16,500",
        originalPrice: "$18,500",
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/watch/rolex/m4/1.png",
        gallery: [
            "assets/watch/rolex/m4/1.png",
            "assets/watch/rolex/m4/2.png",
            "assets/watch/rolex/m4/3.png",
            "assets/watch/rolex/m4/4.png",
            "assets/watch/rolex/m4/5.png"
        ],
        badge: "Flat Jubilee",
        description: "A remarkable concept creation featuring an integrated Flat Jubilee bracelet, smooth bezel, and laser-etched honeycomb textured dial with high-contrast indices.",
        specs: {
            movement: "Calibre 3230 (Automatic)",
            powerReserve: "70 Hours",
            caseSize: "40.0 mm",
            caseMaterial: "Oystersteel",
            waterResistance: "100 Meters",
            dialColor: "Black Honeycomb Pattern",
            strap: "Integrated Flat Jubilee Bracelet"
        },
        featured: true
    },

    // AUDEMARS PIGUET
    {
        id: "ap-royal-oak-flying-tourbillon-26530st",
        brandId: "audemars-piguet",
        brandName: "Audemars Piguet",
        model: "Royal Oak Selfwinding Flying Tourbillon",
        reference: "Ref. 26530ST.OO.1220ST.01",
        price: 49500,
        priceDisplay: "$49,500",
        originalPrice: "$54,000",
        availability: "Limited Edition",
        category: "Grand Complication",
        image: "assets/watch/audemars-piguet/m1/18-1.jpeg",
        gallery: ["assets/watch/audemars-piguet/m1/18-2.jpeg", "assets/watch/audemars-piguet/m1/18-3.jpeg", "assets/watch/audemars-piguet/m1/18-4.jpeg", "assets/watch/audemars-piguet/m1/18-5.jpeg", "assets/watch/audemars-piguet/m1/18-6.jpeg", "assets/watch/audemars-piguet/m1/18-7.jpeg", "assets/watch/audemars-piguet/m1/18-8.jpeg"],
        badge: "Flying Tourbillon",
        description: "Combining Audemars Piguet's signature octagonal steel architecture with a smoked blue 'Evolutive Tapisserie' pattern dial and a mesmerizing flying tourbillon cage at 6 o'clock.",
        specs: {
            movement: "Calibre 2950 (Automatic Flying Tourbillon)",
            powerReserve: "65 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "50 Meters",
            dialColor: "Smoked Blue Evolutive Tapisserie",
            strap: "Integrated Hand-Finished Steel Bracelet"
        },
        featured: true
    },
    {
        id: "ap-royal-oak-15400st-black",
        brandId: "audemars-piguet",
        brandName: "Audemars Piguet",
        model: "Royal Oak Selfwinding Black Dial",
        reference: "Ref. 15400ST.OO.1220ST.01",
        price: 62500,
        priceDisplay: "$62,500",
        originalPrice: "$68,000",
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/watch/audemars-piguet/m2/16.jpeg",
        gallery: [
            "assets/watch/audemars-piguet/m2/16.jpeg",
            "assets/watch/audemars-piguet/m2/16-1.jpeg",
            "assets/watch/audemars-piguet/m2/16-2.jpeg",
            "assets/watch/audemars-piguet/m2/16-3.jpeg"
        ],
        badge: "Gérald Genta Classic",
        description: "The classic 41mm Royal Oak in stainless steel featuring a black 'Grande Tapisserie' pattern dial, white gold applied hour markers, and bevel-finished integrated steel bracelet.",
        specs: {
            movement: "Calibre 3120 (Automatic)",
            powerReserve: "60 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "50 Meters",
            dialColor: "Black Grande Tapisserie",
            strap: "Integrated Stainless Steel Bracelet"
        },
        featured: true
    },
    {
        id: "ap-royal-oak-chronograph-26331st",
        brandId: "audemars-piguet",
        brandName: "Audemars Piguet",
        model: "Royal Oak Chronograph Black Dial",
        reference: "Ref. 26331ST.OO.1220ST.02",
        price: 58500,
        priceDisplay: "$58,500",
        originalPrice: "$64,000",
        availability: "Private Vault",
        category: "Sport Luxury",
        image: "assets/watch/audemars-piguet/m3/25-1.jpeg",
        gallery: [
            "assets/watch/audemars-piguet/m3/25-1.jpeg",
            "assets/watch/audemars-piguet/m3/25-2.jpeg",
            "assets/watch/audemars-piguet/m3/25-3.jpeg",
            "assets/watch/audemars-piguet/m3/25-4.jpeg",
            "assets/watch/audemars-piguet/m3/25-5.jpeg"
        ],
        badge: "Iconic Chrono",
        description: "An iconic sport chronograph featuring a black 'Grande Tapisserie' dial with contrasting nickel-toned sub-dials, integrated stainless steel bracelet, and Calibre 2385 movement.",
        specs: {
            movement: "Calibre 2385 (Automatic Chronograph)",
            powerReserve: "40 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "50 Meters",
            dialColor: "Black with Silver Sub-dials",
            strap: "Integrated Stainless Steel Bracelet"
        },
        featured: true
    },

    // VACHERON CONSTANTIN
    {
        id: "vc-historiques-1912-37001",
        brandId: "vacheron-constantin",
        brandName: "Vacheron Constantin",
        model: "Historiques 1912 White Gold",
        reference: "Ref. 37001/000G-8689",
        price: 38800,
        priceDisplay: "$38,800",
        originalPrice: null,
        availability: "In Stock",
        category: "Avant-Garde Dress",
        image: "assets/watch/vacheron-constantin/m1/1.jpg",
        gallery: [
            "assets/watch/vacheron-constantin/m1/1.jpg",
            "assets/watch/vacheron-constantin/m1/2.jpg",
            "assets/watch/vacheron-constantin/m1/3.jpg",
            "assets/watch/vacheron-constantin/m1/4.jpg",
            "assets/watch/vacheron-constantin/m1/5.jpg",
            "assets/watch/vacheron-constantin/m1/6.jpg"
        ],
        badge: "Art Deco Tonneau",
        description: "An Art Deco revival masterpiece with a flared, curved rectangular 18K white gold case, mobile swivel lugs, vintage Roman numeral dial, and manual-wind Calibre 1126.",
        specs: {
            movement: "Calibre 1126 (Manual Wind)",
            powerReserve: "40 Hours",
            caseSize: "30.0 mm x 37.0 mm",
            caseMaterial: "18K White Gold",
            waterResistance: "30 Meters",
            dialColor: "Silvered Opaline with Roman Numerals",
            strap: "Hand-stitched Black Alligator Strap"
        },
        featured: true
    },
    {
        id: "vc-overseas-tourbillon-6000v",
        brandId: "vacheron-constantin",
        brandName: "Vacheron Constantin",
        model: "Overseas Tourbillon 18K Pink Gold",
        reference: "Ref. 6000V/110R-B733",
        price: 29500,
        priceDisplay: "$29,500",
        originalPrice: null,
        availability: "Private Vault",
        category: "Grand Complication",
        image: "assets/watch/vacheron-constantin/m2/1.jpeg",
        gallery: [
            "assets/watch/vacheron-constantin/m2/1.jpeg",
            "assets/watch/vacheron-constantin/m2/2.jpeg",
            "assets/watch/vacheron-constantin/m2/3.jpeg"
        ],
        badge: "Peripheral Tourbillon",
        description: "Crafted entirely in 18K 5N pink gold with a signature blue lacquer dial and Maltese cross bezel. Driven by ultra-thin Calibre 2160 featuring a peripheral rotor and flying tourbillon.",
        specs: {
            movement: "Calibre 2160 (Ultra-Thin Automatic Tourbillon)",
            powerReserve: "80 Hours",
            caseSize: "42.5 mm",
            caseMaterial: "18K 5N Pink Gold",
            waterResistance: "50 Meters",
            dialColor: "Translucent Blue Lacquer",
            strap: "Integrated 18K 5N Pink Gold Bracelet"
        },
        featured: true
    },
    {
        id: "vc-overseas-4500v-blue",
        brandId: "vacheron-constantin",
        brandName: "Vacheron Constantin",
        model: "Overseas Selfwinding Blue Dial",
        reference: "Ref. 4500V/110A-B128",
        price: 32500,
        priceDisplay: "$32,500",
        originalPrice: null,
        availability: "Limited Edition",
        category: "Sport Luxury",
        image: "assets/watch/vacheron-constantin/m3/1.jpeg",
        gallery: [
            "assets/watch/vacheron-constantin/m3/1.jpeg",
            "assets/watch/vacheron-constantin/m3/2.jpeg",
            "assets/watch/vacheron-constantin/m3/3.jpeg",
            "assets/watch/vacheron-constantin/m3/4.jpeg",
            "assets/watch/vacheron-constantin/m3/5.jpeg"
        ],
        badge: "Maltese Cross Icon",
        description: "The modern classic sports luxury watch with a six-sided bezel recalling the Maltese cross, deep sunburst blue lacquered dial, and Geneva Seal Calibre 5100 movement.",
        specs: {
            movement: "Calibre 5100 (Automatic Geneva Seal)",
            powerReserve: "60 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "150 Meters",
            dialColor: "Translucent Blue Sunburst Lacquer",
            strap: "Integrated Stainless Steel Bracelet"
        },
        featured: true
    },

    // BREITLING
    {
        id: "breitling-superocean-a17366-orange",
        brandId: "breitling",
        brandName: "Breitling",
        model: "Superocean Automatic 42 Orange",
        reference: "Ref. A17366D81O1S1",
        price: 9600,
        priceDisplay: "$9,600",
        originalPrice: "$10,800",
        availability: "In Stock",
        category: "Diver",
        image: "assets/watch/breitling/m1/1.jpg",
        gallery: [
            "assets/watch/breitling/m1/1.jpg",
            "assets/watch/breitling/m1/2.jpg",
            "assets/watch/breitling/m1/3.jpg",
            "assets/watch/breitling/m1/4.jpg",
            "assets/watch/breitling/m1/5.jpg",
            "assets/watch/breitling/m1/6.jpg",
            "assets/watch/breitling/m1/7.jpg"
        ],
        badge: "500M Pro Diver",
        description: "A high-visibility professional dive watch featuring a vibrant orange dial, ratchet-tooth unidirectional ceramic bezel, robust steel case, and 500 meters of water resistance.",
        specs: {
            movement: "Breitling Caliber 17 (Automatic)",
            powerReserve: "38 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "500 Meters",
            dialColor: "Vibrant Orange",
            strap: "Black Diver Pro II Rubber Strap"
        },
        featured: false
    },
    {
        id: "breitling-avenger-chronograph-a13381",
        brandId: "breitling",
        brandName: "Breitling",
        model: "Avenger Chronograph 45 Light Blue",
        reference: "Ref. A13381111C1A1",
        price: 5900,
        priceDisplay: "$5,900",
        originalPrice: "$6,500",
        availability: "In Stock",
        category: "Aviation Chronograph",
        image: "assets/watch/breitling/m2/1.jpeg",
        gallery: [
            "assets/watch/breitling/m2/1.jpeg",
            "assets/watch/breitling/m2/2.jpeg",
            "assets/watch/breitling/m2/3.jpeg"
        ],
        badge: "Avenger Pilot",
        description: "A bold pilot chronograph engineered for heavy-duty performance, featuring a light blue dial with stencil rider tab bezel, triple sub-dial layout, and solid steel bracelet.",
        specs: {
            movement: "Breitling Caliber 13 (Automatic Chronograph)",
            powerReserve: "48 Hours",
            caseSize: "45.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "300 Meters",
            dialColor: "Light Blue Sunburst",
            strap: "Professional Stainless Steel Bracelet"
        },
        featured: false
    },

    // CARTIER
    {
        id: "cartier-ballon-bleu-wsbb0025",
        brandId: "cartier",
        brandName: "Cartier",
        model: "Ballon Bleu de Cartier 42mm",
        reference: "Ref. WSBB0025",
        price: 7750,
        priceDisplay: "$7,750",
        originalPrice: "$8,500",
        availability: "In Stock",
        category: "Classic Luxury",
        image: "assets/watch/cartier/m1/1.jpeg",
        gallery: [
            "assets/watch/cartier/m1/1.jpeg",
            "assets/watch/cartier/m1/2.jpeg",
            "assets/watch/cartier/m1/3.jpeg"
        ],
        badge: "Pebble Case Icon",
        description: "Defined by its double-convex circular case and blue sapphire cabochon nested inside an integrated crown guard. Features a guilloché silver dial with Roman numerals.",
        specs: {
            movement: "Calibre 1847 MC (Automatic)",
            powerReserve: "42 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "30 Meters",
            dialColor: "Silvered Guilloché",
            strap: "Interchangeable Steel Bracelet"
        },
        featured: false
    },
    {
        id: "cartier-santos-chronograph-wgsa0017",
        brandId: "cartier",
        brandName: "Cartier",
        model: "Santos de Cartier Chronograph XL 18K Gold",
        reference: "Ref. WGSA0017",
        price: 5650,
        priceDisplay: "$5,650",
        originalPrice: "$6,200",
        availability: "In Stock",
        category: "Luxury Chronograph",
        image: "assets/watch/cartier/m2/1.jpeg",
        gallery: [
            "assets/watch/cartier/m2/1.jpeg",
            "assets/watch/cartier/m2/2.jpeg",
            "assets/watch/cartier/m2/3.jpeg",
            "assets/watch/cartier/m2/4.jpeg"
        ],
        badge: "Single-Pusher Chrono",
        description: "An expansive 18K rose gold Santos featuring a single-pusher chronograph start/stop button at 9 o'clock, reset through the crown, silver dial, and ADLC bezel accent.",
        specs: {
            movement: "Calibre 1904-CH MC (Automatic Chronograph)",
            powerReserve: "48 Hours",
            caseSize: "43.3 mm x 51.4 mm",
            caseMaterial: "18K Rose Gold",
            waterResistance: "100 Meters",
            dialColor: "Satin-brushed Silver",
            strap: "Black Rubber / Alligator QuickSwitch Strap"
        },
        featured: false
    },

    // FRANCK MULLER
    {
        id: "franck-muller-vanguard-v45cc",
        brandId: "franck-muller",
        brandName: "Franck Muller",
        model: "Vanguard Chronograph Rose Gold Accent",
        reference: "Ref. V 45 CC DT",
        price: 88000,
        priceDisplay: "$88,000",
        originalPrice: "$95,000",
        availability: "Private Vault",
        category: "Avant-Garde",
        image: "assets/watch/franck-muller/m1/1.jpeg",
        gallery: [
            "assets/watch/franck-muller/m1/1.jpeg",
            "assets/watch/franck-muller/m1/2.jpeg",
            "assets/watch/franck-muller/m1/3.jpeg"
        ],
        badge: "Curved Vanguard",
        description: "A captivating avant-garde chronograph featuring a Cintrée Curvex tonneau case, hand-applied rose gold oversized numerals, and precision bi-compax chronograph movement.",
        specs: {
            movement: "FM Calibre 7000 (Automatic Chronograph)",
            powerReserve: "48 Hours",
            caseSize: "44.0 mm x 53.7 mm",
            caseMaterial: "Stainless Steel with Rose Gold Accents",
            waterResistance: "30 Meters",
            dialColor: "Charcoal Grey with Rose Gold Numerals",
            strap: "Hand-Stitched Leather Rubber Hybrid Strap"
        },
        featured: false
    },
    {
        id: "franck-muller-cintree-curvex-pave",
        brandId: "franck-muller",
        brandName: "Franck Muller",
        model: "Cintrée Curvex Diamond Pavé Rose Gold",
        reference: "Ref. 7851 SC D",
        price: 42500,
        priceDisplay: "$42,500",
        originalPrice: "$47,000",
        availability: "Limited Edition",
        category: "High Jewelry",
        image: "assets/watch/franck-muller/m2/1.jpeg",
        gallery: [
            "assets/watch/franck-muller/m2/1.jpeg",
            "assets/watch/franck-muller/m2/2.jpeg"
        ],
        badge: "Diamond Pavé",
        description: "A breathtaking expression of high-jewelry watchmaking featuring an 18K rose gold Cintrée Curvex case fully set with brilliant-cut diamonds, diamond pavé dial, and white alligator strap.",
        specs: {
            movement: "FM Calibre 2800 (Automatic)",
            powerReserve: "42 Hours",
            caseSize: "35.0 mm x 48.5 mm",
            caseMaterial: "18K Rose Gold with Factory Diamond Pavé",
            waterResistance: "30 Meters",
            dialColor: "Full Diamond Pavé with Black Numerals",
            strap: "White Alligator Leather Strap"
        },
        featured: false
    },

    // HUBLOT
    {
        id: "hublot-square-bang-king-gold",
        brandId: "hublot",
        brandName: "Hublot",
        model: "Square Bang Unico King Gold Ceramic",
        reference: "Ref. 821.OM.0180.RX",
        price: 68000,
        priceDisplay: "$68,000",
        originalPrice: "$75,000",
        availability: "Limited Edition",
        category: "Avant-Garde Chronograph",
        image: "assets/watch/hublot/m1/1.jpeg",
        gallery: [
            "assets/watch/hublot/m1/1.jpeg",
            "assets/watch/hublot/m1/2.jpeg",
            "assets/watch/hublot/m1/3.jpeg",
            "assets/watch/hublot/m1/4.jpeg"
        ],
        badge: "Square Unico",
        description: "A groundbreaking square-cased masterpiece constructed from satin-finished 18K King Gold and polished black ceramic, revealing the in-house HUB1280 flyback chronograph movement.",
        specs: {
            movement: "HUB1280 Unico Automatic Flyback Chronograph",
            powerReserve: "72 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "18K King Gold & Black Ceramic Bezel",
            waterResistance: "100 Meters",
            dialColor: "Sapphire Skeleton Dial",
            strap: "Black Structured Rubber Strap"
        },
        featured: false
    },
    {
        id: "hublot-classic-fusion-king-gold",
        brandId: "hublot",
        brandName: "Hublot",
        model: "Classic Fusion King Gold Blue",
        reference: "Ref. 542.OX.7180.LR",
        price: 32500,
        priceDisplay: "$32,500",
        originalPrice: "$36,000",
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/watch/hublot/m2/1.jpeg",
        gallery: [
            "assets/watch/hublot/m2/1.jpeg",
            "assets/watch/hublot/m2/2.jpeg",
            "assets/watch/hublot/m2/3.jpeg",
            "assets/watch/hublot/m2/4.jpeg"
        ],
        badge: "King Gold Elegance",
        description: "An elegant luxury timepiece featuring Hublot's proprietary 18K King Gold alloy, a satin-finished blue sunray dial, and seamless integration of rubber and alligator leather.",
        specs: {
            movement: "HUB1110 (Automatic)",
            powerReserve: "42 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "Satin-finished 18K King Gold",
            waterResistance: "50 Meters",
            dialColor: "Satin-Finished Blue Sunray",
            strap: "Blue Rubber and Alligator Strap"
        },
        featured: false
    },

    // BESPOKE ICE-OUT
    {
        id: "bespoke-rolex-daytona-iced",
        brandId: "iceout",
        brandName: "Bespoke Ice-Out",
        model: "Bespoke Daytona Full Diamond Pavé",
        // Exact reference requires manual verification
        reference: "Ref. 116509-ICE",
        price: 195000,
        priceDisplay: "$195,000",
        originalPrice: "$220,000",
        availability: "Private Vault",
        category: "Bespoke Diamond",
        image: "assets/watch/iceout/m1/1.jpg",
        gallery: [
            "assets/watch/iceout/m1/1.jpg",
            "assets/watch/iceout/m1/2.jpeg",
            "assets/watch/iceout/m1/3.jpg",
            "assets/watch/iceout/m1/4.jpeg",
            "assets/watch/iceout/m1/5.jpg",
            "assets/watch/iceout/m1/6.jpg"
        ],
        badge: "Full Diamond Set",
        description: "A masterpiece of haute joaillerie, fully iced out with hand-selected VS1+ brilliant-cut diamonds across the case, bezel, dial, and Oyster bracelet.",
        specs: {
            movement: "Calibre 4130 (Automatic Chronograph)",
            powerReserve: "72 Hours",
            caseSize: "40.0 mm",
            caseMaterial: "18K White Gold with Bespoke Diamond Setting",
            waterResistance: "100 Meters",
            dialColor: "Full Diamond Pavé",
            strap: "Bespoke Diamond Paved Oyster Bracelet"
        },
        featured: true
    },
    {
        id: "bespoke-ap-royal-oak-chrono-yellow-gold-iced",
        brandId: "iceout",
        brandName: "Bespoke Ice-Out",
        model: "Bespoke Royal Oak Chronograph Yellow Gold Iced",
        // Exact reference requires manual verification
        reference: "Ref. 26331BA-ICE",
        price: 225000,
        priceDisplay: "$225,000",
        originalPrice: "$250,000",
        availability: "Private Vault",
        category: "Bespoke Diamond",
        image: "assets/watch/iceout/m2/1.jpeg",
        gallery: [
            "assets/watch/iceout/m2/1.jpeg",
            "assets/watch/iceout/m2/2.jpeg",
            "assets/watch/iceout/m2/3.jpeg",
            "assets/watch/iceout/m2/4.jpeg",
            "assets/watch/iceout/m2/5.jpeg",
            "assets/watch/iceout/m2/6.jpeg",
            "assets/watch/iceout/m2/7.jpeg"
        ],
        badge: "Yellow Gold Diamond",
        description: "An opulent custom creation combining 18K yellow gold with full diamond pavé coverage across the octagonal Royal Oak case, bezel, dial, and integrated bracelet.",
        specs: {
            movement: "Calibre 2385 (Automatic Chronograph)",
            powerReserve: "40 Hours",
            caseSize: "41.0 mm",
            caseMaterial: "18K Yellow Gold with Bespoke Diamond Setting",
            waterResistance: "50 Meters",
            dialColor: "Full Diamond Pavé with Gold Sub-Dials",
            strap: "Bespoke Diamond Paved 18K Yellow Gold Royal Oak Bracelet"
        },
        featured: true
    },

    // IWC SCHAFFHAUSEN
    {
        id: "iwc-portugieser-automatic-iw500713",
        brandId: "iwc",
        brandName: "IWC Schaffhausen",
        model: "Portugieser Automatic 7-Day",
        reference: "Ref. IW500713",
        price: 9250,
        priceDisplay: "$9,250",
        originalPrice: null,
        availability: "In Stock",
        category: "Dress",
        image: "assets/watch/iwc/m1/1.jpeg",
        gallery: [
            "assets/watch/iwc/m1/1.jpeg",
            "assets/watch/iwc/m1/2.jpeg",
            "assets/watch/iwc/m1/3.jpeg",
            "assets/watch/iwc/m1/4.jpeg",
            "assets/watch/iwc/m1/5.jpeg"
        ],
        badge: "7-Day Reserve",
        description: "A masterpiece of haute horlogerie featuring an 18K Armor Gold case, midnight blue sunburst dial, twin-barrel Calibre 52010 movement providing a phenomenal 7-day power reserve.",
        specs: {
            movement: "IWC Calibre 52010 (Automatic Pellaton Winding)",
            powerReserve: "168 Hours (7 Days)",
            caseSize: "42.3 mm",
            caseMaterial: "18K Armor Gold",
            waterResistance: "30 Meters",
            dialColor: "Midnight Blue Sunburst",
            strap: "Blue Alligator Leather Strap by Santoni"
        },
        featured: false
    },
    {
        id: "iwc-big-pilot-constant-force-tourbillon",
        brandId: "iwc",
        brandName: "IWC Schaffhausen",
        model: "Big Pilot's Constant-Force Tourbillon",
        reference: "Ref. IW590303",
        price: 8800,
        priceDisplay: "$8,800",
        originalPrice: "$9,750",
        availability: "In Stock",
        category: "Grand Complication",
        image: "assets/watch/iwc/m2/1.jpg",
        gallery: [
            "assets/watch/iwc/m2/1.jpg",
            "assets/watch/iwc/m2/2.jpg",
            "assets/watch/iwc/m2/3.jpg",
            "assets/watch/iwc/m2/4.jpg"
        ],
        badge: "Constant-Force Tourbillon",
        description: "An extraordinary aviation grand complication featuring a patented constant-force tourbillon, perpetual moon phase indicator, and twin-barrel 96-hour power reserve.",
        specs: {
            movement: "IWC Calibre 94805 (Manual-Wind Constant-Force Tourbillon)",
            powerReserve: "96 Hours (4 Days)",
            caseSize: "46.2 mm",
            caseMaterial: "Hard Gold / Platinum",
            waterResistance: "60 Meters",
            dialColor: "Silver-Plated",
            strap: "Black Calfskin Leather Strap"
        },
        featured: false
    },

    // JAEGER-LECOULTRE
    {
        id: "jlc-master-control-chrono-calendar",
        brandId: "jaeger-lecoultre",
        brandName: "Jaeger-LeCoultre",
        model: "Master Control Chronograph Calendar",
        reference: "Ref. Q4138420",
        price: 16400,
        priceDisplay: "$16,400",
        originalPrice: "$18,000",
        availability: "In Stock",
        category: "Complication",
        image: "assets/watch/jaeger-lecoultre/m1/1.jpeg",
        gallery: [
            "assets/watch/jaeger-lecoultre/m1/1.jpeg"
        ],
        badge: "Chrono Calendar",
        description: "An elegant high complication combining a column-wheel chronograph with a complete calendar and moon phase display, driven by the manufacture Calibre 759.",
        specs: {
            movement: "JLC Calibre 759 (Automatic)",
            powerReserve: "65 Hours",
            caseSize: "40.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "50 Meters",
            dialColor: "Silver Sunray",
            strap: "Tan Novonappa Calfskin Leather Strap"
        },
        featured: false
    },
    {
        id: "jlc-master-control-chrono-calendar-gold",
        brandId: "jaeger-lecoultre",
        brandName: "Jaeger-LeCoultre",
        model: "Master Control Chronograph Calendar Rose Gold",
        reference: "Ref. Q413257J",
        price: 11800,
        priceDisplay: "$11,800",
        originalPrice: "$13,000",
        availability: "In Stock",
        category: "Complication",
        image: "assets/watch/jaeger-lecoultre/m2/1.jpeg",
        gallery: [
            "assets/watch/jaeger-lecoultre/m2/1.jpeg"
        ],
        badge: "Rose Gold Calendar",
        description: "A luxurious interpretation in 18K 750 pink gold featuring a vibrant sunray blue dial, complete calendar complication with moon phase, and integrated column-wheel chronograph.",
        specs: {
            movement: "JLC Calibre 759 (Automatic)",
            powerReserve: "65 Hours",
            caseSize: "40.0 mm",
            caseMaterial: "18K Pink Gold",
            waterResistance: "50 Meters",
            dialColor: "Sunray Blue",
            strap: "Blue Leather Strap"
        },
        featured: false
    },

    // OMEGA
    {
        id: "omega-seamaster-diver-300m-black",
        brandId: "omega",
        brandName: "Omega",
        model: "Seamaster Diver 300M Co-Axial 42",
        reference: "Ref. 210.32.42.20.01.001",
        price: 7600,
        priceDisplay: "$7,600",
        originalPrice: "$8,200",
        availability: "In Stock",
        category: "Diver",
        image: "assets/watch/omega/m1/1.jpeg",
        gallery: [
            "assets/watch/omega/m1/1.jpeg",
            "assets/watch/omega/m1/2.jpeg",
            "assets/watch/omega/m1/3.jpeg",
            "assets/watch/omega/m1/4.jpeg",
            "assets/watch/omega/m1/5.jpeg",
            "assets/watch/omega/m1/6.jpeg"
        ],
        badge: "300M Master Chronometer",
        description: "The legendary dive watch updated with a laser-engraved black ceramic wave dial, black ceramic bezel with enamel scale, conical helium escape valve, and METAS-certified Calibre 8800.",
        specs: {
            movement: "Omega Calibre 8800 (Automatic Master Chronometer)",
            powerReserve: "55 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "Stainless Steel",
            waterResistance: "300 Meters",
            dialColor: "Polished Black Ceramic Wave Dial",
            strap: "Black Integrated Rubber Strap"
        },
        featured: false
    },

    // OFFICINE PANERAI
    {
        id: "panerai-luminor-gmt-green-pam1058",
        brandId: "panerai",
        brandName: "Officine Panerai",
        model: "Luminor GMT Military Green",
        // Exact reference requires manual verification
        reference: "PAM01058",
        price: 7400,
        priceDisplay: "$7,400",
        originalPrice: null,
        availability: "In Stock",
        category: "Military Diver",
        image: "assets/watch/panerai/m1/1.jpeg",
        gallery: [
            "assets/watch/panerai/m1/1.jpeg"
        ],
        badge: "Military GMT",
        description: "A bold naval instrument featuring a matte military green sandwich dial, signature Safety Lock crown protection bridge, dual time zone GMT function, and 300m water resistance.",
        specs: {
            movement: "Calibre P.9010 (Automatic GMT)",
            powerReserve: "72 Hours (3 Days)",
            caseSize: "44.0 mm",
            caseMaterial: "AISI 316L Polished Stainless Steel",
            waterResistance: "300 Meters",
            dialColor: "Matte Military Green Sandwich Dial",
            strap: "Military Green Rubber Strap"
        },
        featured: false
    },
    {
        id: "panerai-luminor-marina-goldtech-pam1112",
        brandId: "panerai",
        brandName: "Officine Panerai",
        model: "Luminor Marina Goldtech 44",
        reference: "PAM01112",
        price: 7400,
        priceDisplay: "$7,400",
        originalPrice: null,
        availability: "In Stock",
        category: "Sport Luxury",
        image: "assets/watch/panerai/m2/1.jpeg",
        gallery: [
            "assets/watch/panerai/m2/1.jpeg",
            "assets/watch/panerai/m2/2.jpeg",
            "assets/watch/panerai/m2/3.jpeg"
        ],
        badge: "Goldtech Luxury",
        description: "Crafted from Panerai's intense red Goldtech alloy containing copper and platinum, paired with a sun-brushed green sandwich dial and full Goldtech bracelet.",
        specs: {
            movement: "Calibre P.9010 (Automatic)",
            powerReserve: "72 Hours (3 Days)",
            caseSize: "44.0 mm",
            caseMaterial: "Polished Panerai Goldtech 18K Red Gold",
            waterResistance: "50 Meters",
            dialColor: "Sun-Brushed Green Sandwich Dial",
            strap: "Panerai Goldtech 18K Red Gold Bracelet"
        },
        featured: false
    },

    // RICHARD MILLE
    {
        id: "richard-mille-rm67-02-wayde-van-niekerk",
        brandId: "richard-mille",
        brandName: "Richard Mille",
        model: "RM 67-02 Wayde van Niekerk",
        reference: "Ref. RM 67-02 WVN",
        price: 265000,
        priceDisplay: "$265,000",
        originalPrice: "$290,000",
        availability: "Private Vault",
        category: "Ultra-Light Sport",
        image: "assets/watch/richard-mille/m1/1.jpeg",
        gallery: [
            "assets/watch/richard-mille/m1/1.jpeg",
            "assets/watch/richard-mille/m1/2.jpeg",
            "assets/watch/richard-mille/m1/3.jpeg",
            "assets/watch/richard-mille/m1/4.jpeg"
        ],
        badge: "Ultra-Light 32g",
        description: "Engineered for sprint legend Wayde van Niekerk, weighing just 32 grams with strap. Crafted in vibrant green and yellow Quartz TPT with a grade 5 titanium skeleton movement.",
        specs: {
            movement: "CRMA7 Calibre (Skeletonized Automatic)",
            powerReserve: "50 Hours",
            caseSize: "38.7 mm x 47.5 mm",
            caseMaterial: "Green and Yellow Quartz TPT",
            waterResistance: "30 Meters",
            dialColor: "Skeletonized Titanium with Hand-Painted Accent Bridges",
            strap: "Green Seamless Elastic Comfort Strap"
        },
        featured: true
    },
    {
        id: "richard-mille-rm11-03-rose-gold",
        brandId: "richard-mille",
        brandName: "Richard Mille",
        model: "RM 11-03 Flyback Chronograph Rose Gold",
        reference: "Ref. RM 11-03 RG",
        price: 265000,
        priceDisplay: "$265,000",
        originalPrice: "$290,000",
        availability: "Private Vault",
        category: "Avant-Garde Chronograph",
        image: "assets/watch/richard-mille/m2/1.jpeg",
        gallery: [
            "assets/watch/richard-mille/m2/1.jpeg",
            "assets/watch/richard-mille/m2/2.jpeg",
            "assets/watch/richard-mille/m2/3.jpeg",
            "assets/watch/richard-mille/m2/4.jpeg"
        ],
        badge: "Rose Gold Flyback",
        description: "An icon of modern horology featuring an 18K rose gold tonneau case, skeletonized RMAC3 flyback chronograph movement, annual calendar with oversized date, and variable-geometry rotor.",
        specs: {
            movement: "RMAC3 Calibre (Automatic Flyback Chronograph)",
            powerReserve: "55 Hours",
            caseSize: "44.5 mm x 49.9 mm",
            caseMaterial: "18K Rose Gold",
            waterResistance: "50 Meters",
            dialColor: "Sapphire Skeleton with Oversized Date",
            strap: "Vented Black Rubber Strap"
        },
        featured: true
    },
    {
        id: "richard-mille-rm65-01-split-seconds-carbon",
        brandId: "richard-mille",
        brandName: "Richard Mille",
        model: "RM 65-01 Split-Seconds Chronograph",
        reference: "Ref. RM 65-01 Carbon TPT",
        price: 265000,
        priceDisplay: "$265,000",
        originalPrice: "$290,000",
        availability: "Private Vault",
        category: "Grand Complication",
        image: "assets/watch/richard-mille/m3/1.jpeg",
        gallery: [
            "assets/watch/richard-mille/m3/1.jpeg",
            "assets/watch/richard-mille/m3/2.jpeg",
            "assets/watch/richard-mille/m3/3.jpeg",
            "assets/watch/richard-mille/m3/4.jpeg",
            "assets/watch/richard-mille/m3/5.jpeg"
        ],
        badge: "Split-Seconds TPT",
        description: "Richard Mille's most complex automatic timepiece, crafted in damascene Carbon TPT with a high-frequency 5Hz split-seconds chronograph, rapid winding pusher at 8 o'clock, and function selector.",
        specs: {
            movement: "RMAC4 Calibre (Automatic High-Frequency Split-Seconds)",
            powerReserve: "60 Hours",
            caseSize: "44.5 mm x 49.9 mm",
            caseMaterial: "Carbon TPT",
            waterResistance: "50 Meters",
            dialColor: "Sapphire Skeleton with Color-Coded Functions",
            strap: "Black Vented Rubber Strap"
        },
        featured: true
    },

    // ROGER DUBUIS
    {
        id: "roger-dubuis-excalibur-spider-huracan",
        brandId: "roger-dubuis",
        brandName: "Roger Dubuis",
        model: "Excalibur Spider Huracán Red",
        reference: "Ref. RDDBEX0748",
        price: 72000,
        priceDisplay: "$72,000",
        originalPrice: "$80,000",
        availability: "Private Vault",
        category: "Hyper Horology",
        image: "assets/watch/roger-dubuis/m1/1.jpeg",
        gallery: ["assets/watch/roger-dubuis/m1/1.jpeg"],
        badge: "Hyper Horology",
        description: "Powered by the Lamborghini Squadra Corse co-developed Calibre RD630 with a 12-degree inclined balance wheel, housed in a black DLC titanium case with racing red accents.",
        specs: {
            movement: "Calibre RD630 (Automatic Skeletonized Calibre)",
            powerReserve: "60 Hours",
            caseSize: "45.0 mm",
            caseMaterial: "Black DLC Titanium",
            waterResistance: "50 Meters",
            dialColor: "Skeletonized Red & Black Racing Dial",
            strap: "Black Rubber Strap with Red Alcantara Inlay"
        },
        featured: false
    },

    // TAG HEUER
    {
        id: "tag-heuer-monaco-gulf-cbl2115",
        brandId: "tag-heuer",
        brandName: "TAG Heuer",
        model: "Monaco Gulf Special Edition",
        reference: "Ref. CBL2115.FC6494",
        price: 7800,
        priceDisplay: "$7,800",
        originalPrice: null,
        availability: "In Stock",
        category: "Racing Chronograph",
        image: "assets/watch/tag-heuer/m1/1.jpg",
        gallery: [
            "assets/watch/tag-heuer/m1/1.jpg",
            "assets/watch/tag-heuer/m1/2.jpg",
            "assets/watch/tag-heuer/m1/3.jpg",
            "assets/watch/tag-heuer/m1/4.jpg",
            "assets/watch/tag-heuer/m1/5.jpg"
        ],
        badge: "Gulf Racing",
        description: "The iconic square racing chronograph bearing the legendary Gulf Racing livery in light blue and orange stripes, powered by the in-house Heuer 02 automatic movement.",
        specs: {
            movement: "Heuer 02 (Automatic Chronograph)",
            powerReserve: "80 Hours",
            caseSize: "39.0 mm",
            caseMaterial: "Fine-Brushed and Polished Stainless Steel",
            waterResistance: "100 Meters",
            dialColor: "Sunray Blue with Gulf Racing Stripes",
            strap: "Stainless Steel Bracelet"
        },
        featured: false
    },
    {
        id: "tag-heuer-aquaracer-300m-way201b",
        brandId: "tag-heuer",
        brandName: "TAG Heuer",
        model: "Aquaracer 300M Calibre 5",
        reference: "Ref. WAY201B.BA0927",
        price: 7800,
        priceDisplay: "$7,800",
        originalPrice: null,
        availability: "In Stock",
        category: "Diver",
        image: "assets/watch/tag-heuer/m2/1.jpg",
        gallery: [
            "assets/watch/tag-heuer/m2/1.jpg",
            "assets/watch/tag-heuer/m2/2.jpg"
        ],
        badge: "300M Professional",
        description: "A robust professional dive instrument equipped with a signature 12-faceted uni-directional rotating steel bezel, horizontal linear textured dial, and 300-meter water resistance.",
        specs: {
            movement: "Calibre 5 (Automatic)",
            powerReserve: "38 Hours",
            caseSize: "43.0 mm",
            caseMaterial: "Fine-Brushed and Polished Stainless Steel",
            waterResistance: "300 Meters",
            dialColor: "Black Horizontal Streak Dial",
            strap: "Fine-Brushed Stainless Steel 3-Row Bracelet"
        },
        featured: false
    },

    // ULYSSE NARDIN
    {
        id: "ulysse-nardin-marine-torpilleur-1183",
        brandId: "ulysse-nardin",
        brandName: "Ulysse Nardin",
        model: "Marine Torpilleur Black Dial",
        reference: "Ref. 1183-310/42",
        price: 24500,
        priceDisplay: "$24,500",
        originalPrice: "$27,000",
        availability: "In Stock",
        category: "Marine Chronometer",
        image: "assets/watch/ulysse-nardin/m1/1.jpeg",
        gallery: [
            "assets/watch/ulysse-nardin/m1/1.jpeg",
            "assets/watch/ulysse-nardin/m1/2.jpeg",
            "assets/watch/ulysse-nardin/m1/3.jpeg",
            "assets/watch/ulysse-nardin/m1/4.jpeg",
            "assets/watch/ulysse-nardin/m1/5.jpeg",
            "assets/watch/ulysse-nardin/m1/6.jpeg",
            "assets/watch/ulysse-nardin/m1/7.jpeg"
        ],
        badge: "Marine Chronometer",
        description: "Inspired by 19th-century pocket marine chronometers, featuring a coin-edge steel bezel, Roman numeral dial, power reserve indicator at 12 o'clock, and silicium UN-118 movement.",
        specs: {
            movement: "UN-118 Calibre (In-House Automatic Silicium)",
            powerReserve: "60 Hours",
            caseSize: "42.0 mm",
            caseMaterial: "Stainless Steel with Coin-Edge Bezel",
            waterResistance: "50 Meters",
            dialColor: "Matte Black with Roman Numerals",
            strap: "Black Rubber Strap with Titanium Element"
        },
        featured: false
    }
];

// WhatsApp Concierge Configuration
const WHATSAPP_CONFIG = {
    phoneNumber: "919274520512",
    formattedPhone: "+91 9274520512",
    defaultMessage: "Hi, I am interested in your luxury watch collection. Please share the available models, pictures and prices."
};
