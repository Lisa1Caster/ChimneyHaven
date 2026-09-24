/**
 * ChimneyHaven Business Configuration
 * 
 * CRITICAL ARCHITECTURE RULE:
 * Every word of business text, color code, service item, and image URL lives ONLY in this file.
 * A non-technical owner can edit this single configuration file to update the entire website.
 */

export const business = {
  // Identity & Core Metadata
  name: "ChimneyHaven",
  shortName: "ChimneyHaven",
  type: "Home Services",
  niche: "Chimney Sweeping & Flue Care",
  tagline: "Clean Chimneys, Safer Homes",
  headline: "Clean chimneys, safer homes across Whitefield and Manchester.",
  subheadline: "Complete chimney sweeping, CCTV inspections, masonry repairs, and flue installations with guaranteed zero-mess care.",
  
  // Location & Address
  city: "Whitefield, Manchester",
  area: "Whitefield & Greater Manchester",
  address: {
    line1: "Leonard Curtis House, Elms Square",
    line2: "Bury New Road",
    town: "Whitefield",
    city: "Manchester",
    postcode: "M45 7TA",
    full: "Leonard Curtis House Elms Square, Bury New Road, Whitefield, Manchester, M45 7TA"
  },
  
  // Direct Contact Details
  contact: {
    phone: "+447480770281",
    phoneDisplay: "07480 770281",
    phoneInternational: "+44 7480 770281",
    phoneLink: "tel:+447480770281",
    
    // WhatsApp provided in brief: +447480770281
    whatsapp: "+447480770281",
    whatsappDisplay: "+44 7480 770281",
    whatsappLink: "https://wa.me/447480770281",
    
    // Email omitted if placeholder
    email: null,
    emailLink: null,
    
    googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Leonard+Curtis+House+Elms+Square+Bury+New+Road+Whitefield+Manchester+M45+7TA"
  },

  // Operating Hours
  hours: [
    { days: "Monday – Friday", times: "08:00 – 18:00" },
    { days: "Saturday", times: "09:00 – 16:00" },
    { days: "Sunday", times: "Emergency Callouts & By Appointment" }
  ],
  hoursSummary: "Mon – Fri: 08:00 – 18:00 · Sat: 09:00 – 16:00",

  // Calls to Action
  cta: {
    primary: {
      label: "Call Now",
      href: "tel:+447480770281",
      subtext: "Direct owner line: 07480 770281"
    },
    whatsapp: {
      label: "WhatsApp Us",
      href: "https://wa.me/447480770281",
      subtext: "Instant quote & chat"
    },
    secondary: {
      label: "Contact Us",
      href: "#contact",
      subtext: "Request a local booking callback"
    },
    directions: {
      label: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=Leonard+Curtis+House+Elms+Square+Bury+New+Road+Whitefield+Manchester+M45+7TA"
    }
  },

  // Navigation Links
  navigation: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],

  // Brand Palette & Styling (Modern SaaS Style)
  theme: {
    style: "Modern SaaS",
    primaryColor: "Black",
    secondaryColor: "Beige",
    colors: {
      primary: "#0C0D0E",
      secondary: "#D4C3A3",
      accent: "#B88E57",
      canvas: "#FBFBFA",
      surface: "#FFFFFF",
      surfaceMuted: "#F5F4F0"
    }
  },

  // Imagery (Authentic, high-resolution home services photo URLs)
  images: {
    hero: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    about: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    serviceCleaning: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
    serviceInspection: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    serviceRepair: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    serviceInstallation: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    serviceMaintenance: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
    serviceSweeping: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    serviceCap: "https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=1600&q=80",
    serviceLiner: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
    serviceWaterproofing: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    serviceLeak: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
    serviceCrown: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80",
    serviceFlashing: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
  },

  // About Section Narrative (Calm, experienced local trade owner voice)
  about: {
    eyebrow: "Local Craft & Safety",
    title: "Dedicated chimney care for homes in Whitefield and Greater Manchester.",
    paragraphs: [
      "Operating from Leonard Curtis House at Elms Square on Bury New Road, ChimneyHaven was founded to give local homeowners dependable, soot-free chimney care. We treat every home with the highest standards of cleanliness, using protective floor sheeting and industrial HEPA extraction so your living room remains immaculate.",
      "Whether you heat your home with a traditional open fireplace or a modern high-efficiency multi-fuel stove, regular professional sweeping and chimney repairs prevent dangerous creosote build-ups, chimney fires, and water ingress. Every service concludes with a thorough draw test and an official certificate for your household insurance."
    ],
    highlights: [
      { label: "Service Radius", value: "Whitefield, Prestwich, Bury & Greater Manchester" },
      { label: "Cleanliness", value: "HEPA filtration and total hearth containment" },
      { label: "Documentation", value: "Written insurance certificate with every visit" }
    ]
  },

  // Full 12 Main Services Provided in Business Brief
  services: [
    {
      id: "chimney-cleaning",
      number: "01",
      title: "Chimney Cleaning",
      description: "Deep chemical and mechanical removal of stubborn creosote glaze, soot deposits, and combustible residue from all flue types.",
      category: "Care & Cleaning",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80",
      features: ["Creosote glaze breakdown", "Clean hearth protection", "Open fires & stoves", "Safety verification"]
    },
    {
      id: "chimney-inspection",
      number: "02",
      title: "Chimney Inspection",
      description: "High-definition internal CCTV camera surveys to assess flue lining condition, hidden structural cracks, and blockage hazards.",
      category: "Diagnostics",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
      features: ["360° CCTV camera diagnostics", "Pre-purchase home surveys", "Flue liner integrity checks", "Insurance-ready reports"]
    },
    {
      id: "chimney-repair",
      number: "03",
      title: "Chimney Repair",
      description: "Expert restoration of compromised chimney stacks, crumbling brickwork, fractured joints, and damaged fireclay liners.",
      category: "Masonry & Structural",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
      features: ["Brick repointing & rebuilding", "Damaged flue repairs", "Smoke chamber restoration", "Structural stabilization"]
    },
    {
      id: "chimney-installation",
      number: "04",
      title: "Chimney Installation",
      description: "Complete installation of twin-wall insulated chimney systems, prefabricated flues, and solid-fuel appliance connections.",
      category: "Installation",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
      features: ["Twin-wall insulated flues", "Factory-built chimney systems", "Building regulation compliance", "Hearth & stove integration"]
    },
    {
      id: "chimney-maintenance",
      number: "05",
      title: "Chimney Maintenance",
      description: "Scheduled preventative seasonal servicing, stove door rope renewal, firebrick checks, and draught calibration.",
      category: "Care & Cleaning",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80",
      features: ["Pre-winter health checks", "Door seal & gasket replacement", "Baffle plate maintenance", "Airflow tuning"]
    },
    {
      id: "chimney-sweeping",
      number: "06",
      title: "Chimney Sweeping",
      description: "Traditional manual and power sweeping for open hearths and wood burners with sealed fireplace containment and zero mess.",
      category: "Care & Cleaning",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
      features: ["Power & manual rotary sweep", "Industrial HEPA dust vacuuming", "Clean room guarantee", "Certificate of sweeping issued"]
    },
    {
      id: "chimney-cap-installation",
      number: "07",
      title: "Chimney Cap Installation",
      description: "Fitting weather-resistant terracotta and stainless steel bird guards, rain caps, and anti-downdraught cowls on active or disused flues.",
      category: "Protection & Weathering",
      image: "https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=1600&q=80",
      features: ["Bird & vermin prevention", "Rainfall ingress protection", "Anti-downdraught cowls", "Secure strap installations"]
    },
    {
      id: "chimney-liner-installation",
      number: "08",
      title: "Chimney Liner Installation",
      description: "Installation of flexible 316 and 904 grade stainless steel flue liners designed for optimal stove efficiency and complete safety.",
      category: "Installation",
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80",
      features: ["Class 1 flexible steel liners", "Improved stove draw efficiency", "Protection against gas leakage", "Long-term manufacturer warranties"]
    },
    {
      id: "chimney-waterproofing",
      number: "09",
      title: "Chimney Waterproofing",
      description: "Application of breathable masonry water repellents that protect brickwork and mortar from freeze-thaw spalling and damp.",
      category: "Protection & Weathering",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
      features: ["Siloxane breathable sealants", "Freeze-thaw cycle defense", "Prevents internal chimney damp", "Preserves historic brickwork"]
    },
    {
      id: "chimney-leak-repair",
      number: "10",
      title: "Chimney Leak Repair",
      description: "Pinpoint diagnosis and permanent sealing of rain leaks penetrating through porous masonry, cracked crowns, or failing mortar.",
      category: "Masonry & Structural",
      image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1600&q=80",
      features: ["Ceiling damp diagnosis", "Water entry path sealing", "Mortar bed rebedding", "Storm damage emergency repairs"]
    },
    {
      id: "chimney-crown-repair",
      number: "11",
      title: "Chimney Crown Repair",
      description: "Resurfacing, sealing, or full recasting of damaged concrete chimney crowns to prevent water penetrating down into the brick core.",
      category: "Masonry & Structural",
      image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80",
      features: ["Flexible crown seal coatings", "Full concrete recasting", "Drip edge construction", "Eliminates vertical fractures"]
    },
    {
      id: "chimney-flashing-repair",
      number: "12",
      title: "Chimney Flashing Repair",
      description: "Precision installation and repair of stepped lead flashing and apron soakers where your chimney stack meets the roofline.",
      category: "Protection & Weathering",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      features: ["Code 4 & 5 rolled leadwork", "Step flashing re-pointing", "Waterproof mastic sealing", "Prevents roof valley leaks"]
    }
  ],

  // Unique Selling Points (Derived strictly from business reality, location, and safety standards)
  whyChooseUs: [
    {
      index: "01",
      title: "Zero-Mess Guarantee",
      description: "We seal every fireplace with industrial sheeting and run certified HEPA extractors before starting. Your home stays as clean as we found it."
    },
    {
      index: "02",
      title: "Whitefield Based, Locally Responsive",
      description: "Operating from Elms Square on Bury New Road, we provide punctual and dependable service across Whitefield, Prestwich, Bury, and North Manchester."
    },
    {
      index: "03",
      title: "Insurance-Approved Sweeping Certificate",
      description: "A formal certificate of sweeping is issued after every completed job to ensure your homeowner or landlord insurance policy remains fully compliant."
    },
    {
      index: "04",
      title: "Flue Diagnostics & Camera Surveys",
      description: "We don't just brush blindly. Our camera equipment diagnoses hidden flue cracks, structural decay, and stubborn blockages with complete transparency."
    }
  ],

  // Testimonials (Omitted cleanly if none provided in source brief)
  testimonials: [],

  // Frequently Asked Questions (Helpful, practical, owner-toned)
  faq: [
    {
      question: "How often should my chimney or stove flue be swept?",
      answer: "Chimneys burning seasoned wood or bituminous coal should be swept at least once a year, and ideally twice if used heavily throughout the winter months. Smokeless fuel appliances require sweeping at least once annually to prevent dangerous sulphur and soot build-up."
    },
    {
      question: "Will the sweeping process create soot or dust in my home?",
      answer: "No. We take cleanliness extremely seriously. Before any brushes enter your flue, the fireplace opening is fully taped and sealed, heavy clean floor runners are laid, and an industrial-grade HEPA filtration vacuum runs continuously to catch airborne micro-particles."
    },
    {
      question: "Do you supply an insurance certificate after sweeping?",
      answer: "Yes. After completing each sweep and smoke draw test, we issue a written certificate of chimney sweeping detailing the date, appliance condition, and findings for your household records and insurance requirements."
    },
    {
      question: "What areas around Whitefield do you cover?",
      answer: "We are based at Leonard Curtis House in Elms Square on Bury New Road in Whitefield (M45 7TA). We regularly service residential and commercial properties throughout Whitefield, Prestwich, Bury, Radcliffe, Swinton, and the wider North Manchester area."
    }
  ],

  // Contact Form Options
  serviceOptions: [
    "Chimney Cleaning",
    "Chimney Inspection",
    "Chimney Repair",
    "Chimney Installation",
    "Chimney Maintenance",
    "Chimney Sweeping",
    "Chimney Cap Installation",
    "Chimney Liner Installation",
    "Chimney Waterproofing",
    "Chimney Leak Repair",
    "Chimney Crown Repair",
    "Chimney Flashing Repair"
  ],

  // Footer Details
  footer: {
    note: "Clean chimneys, safer homes. Professional chimney sweeping, CCTV inspections, and masonry repairs across Whitefield and Greater Manchester.",
    copyright: `© ${new Date().getFullYear()} ChimneyHaven. All rights reserved.`
  }
};
