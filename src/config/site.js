export const siteConfig = {
  name: "B&B Home Bakery",
  description: "Produse artizanale, proaspete, pentru fiecare zi. Cofetărie cu multiple locații în București și Ilfov.",
  url: "https://bbhomebakery.ro",
  
  // TELEFON - Completează aici numărul de telefon
  phone: "0773 903 220", // TODO: Completează numărul de telefon aici
  
  // Social Media
  social: {
    facebook: "https://www.facebook.com/bbhomebakery/?locale=ro_RO",
    instagram: "https://www.instagram.com/bbhomebakery/?hl=en",
  },
  
  // Locații
  locations: [
    {
      id: "bucuresti-mihail-sebastian",
      name: "București - Mihail Sebastian",
      address: "Str. Mihail Sebastian 37C, București",
      type: "magazin",
      icon: "⚜️",
      coordinates: {
        lat: 44.4268,
        lng: 26.1025
      },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.123456789!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20123456789ab%3A0x1234567890abcdef!2sStr.%20Mihail%20Sebastian%2037C%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1234567890!5m2!1sro!2sro"
    },
    {
      id: "bucuresti-aerogarii",
      name: "București - Bd. Aerogarii",
      address: "Bd. Aerogarii 2-8, București",
      type: "magazin",
      icon: "📍",
      coordinates: {
        lat: 44.4270,
        lng: 26.1027
      },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.123456789!2d26.1027!3d44.4270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20123456789cd%3A0x1234567890abcdef!2sBd.%20Aerogarii%202-8%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1234567890!5m2!1sro!2sro"
    },
    {
      id: "bragadiru-laborator",
      name: "Bragadiru - Laborator",
      address: "Șos. Alexandriei 218, Bragadiru, Ilfov",
      type: "laborator",
      icon: "⚜️",
      coordinates: {
        lat: 44.3700,
        lng: 25.9700
      },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.123456789!2d25.9700!3d44.3700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20123456789ef%3A0x1234567890abcdef!2s%C8%98os.%20Alexandriei%20218%2C%20Bragadiru%2C%20Ilfov!5e0!3m2!1sro!2sro!4v1234567890!5m2!1sro!2sro"
    },
    {
      id: "bucuresti-nazuintei",
      name: "București - Nazuintei",
      address: "Str. Nazuintei 10, București",
      type: "magazin",
      icon: "📍",
      coordinates: {
        lat: 44.4280,
        lng: 26.1030
      },
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.123456789!2d26.1030!3d44.4280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20123456789gh%3A0x1234567890abcdef!2sStr.%20Nazuintei%2010%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1234567890!5m2!1sro!2sro"
    }
  ],
  
  // Produse populare pentru homepage
  featuredProducts: [
    {
      id: "tort-chocolate",
      name: "Tort Ciocolată",
      description: "Tort cu ciocolată belgiană și cremă de vanilie",
      price: "De la 120 lei",
      image: "/assets/images/products/tort-chocolate.jpg",
      category: "torturi"
    },
    {
      id: "briosa-fructe",
      name: "Brioșe cu Fructe",
      description: "Brioșe proaspete cu fructe de sezon",
      price: "8 lei/bucată",
      image: "/assets/images/products/briosa-fructe.jpg",
      category: "briose"
    },
    {
      id: "prajitura-cheesecake",
      name: "Cheesecake",
      description: "Cheesecake cu fructe de pădure",
      price: "25 lei/felie",
      image: "/assets/images/products/cheesecake.jpg",
      category: "prajituri"
    }
  ],
  
  // Categorii produse
  productCategories: [
    {
      id: "torturi",
      name: "Torturi",
      description: "Torturi personalizate pentru ocazii speciale"
    },
    {
      id: "prajituri",
      name: "Prăjituri",
      description: "Prăjituri tradiționale și moderne"
    },
    {
      id: "briose",
      name: "Brioșe",
      description: "Brioșe proaspete și aromate"
    },
    {
      id: "laborator",
      name: "Produse de Laborator",
      description: "Produse speciale din laboratorul nostru"
    }
  ],
  
  // Produse complete
  products: [
    // Torturi
    {
      id: "tort-chocolate",
      name: "Tort Ciocolată",
      description: "Tort cu ciocolată belgiană și cremă de vanilie",
      price: "De la 120 lei",
      image: "/assets/images/products/tort-chocolate.jpg",
      category: "torturi"
    },
    {
      id: "tort-fructe",
      name: "Tort cu Fructe",
      description: "Tort cu fructe proaspete și cremă de brânză",
      price: "De la 100 lei",
      image: "/assets/images/products/tort-fructe.jpg",
      category: "torturi"
    },
    {
      id: "tort-nunta",
      name: "Tort de Nuntă",
      description: "Tort elegant pentru nuntă cu design personalizat",
      price: "De la 300 lei",
      image: "/assets/images/products/tort-nunta.jpg",
      category: "torturi"
    },
    
    // Prăjituri
    {
      id: "prajitura-cheesecake",
      name: "Cheesecake",
      description: "Cheesecake cu fructe de pădure",
      price: "25 lei/felie",
      image: "/assets/images/products/cheesecake.jpg",
      category: "prajituri"
    },
    {
      id: "prajitura-tiramisu",
      name: "Tiramisu",
      description: "Tiramisu clasic cu cafea și mascarpone",
      price: "22 lei/felie",
      image: "/assets/images/products/tiramisu.jpg",
      category: "prajituri"
    },
    {
      id: "prajitura-carrot-cake",
      name: "Carrot Cake",
      description: "Tort cu morcovi și cremă de brânză",
      price: "20 lei/felie",
      image: "/assets/images/products/carrot-cake.jpg",
      category: "prajituri"
    },
    
    // Brioșe
    {
      id: "briosa-fructe",
      name: "Brioșe cu Fructe",
      description: "Brioșe proaspete cu fructe de sezon",
      price: "8 lei/bucată",
      image: "/assets/images/products/briosa-fructe.jpg",
      category: "briose"
    },
    {
      id: "briosa-ciocolata",
      name: "Brioșe cu Ciocolată",
      description: "Brioșe cu ciocolată și nuci",
      price: "7 lei/bucată",
      image: "/assets/images/products/briosa-ciocolata.jpg",
      category: "briose"
    },
    {
      id: "briosa-vanilie",
      name: "Brioșe cu Vanilie",
      description: "Brioșe aromate cu vanilie naturală",
      price: "6 lei/bucată",
      image: "/assets/images/products/briosa-vanilie.jpg",
      category: "briose"
    },
    
    // Produse de laborator
    {
      id: "macarons",
      name: "Macarons",
      description: "Macarons colorați cu diverse arome",
      price: "15 lei/bucată",
      image: "/assets/images/products/macarons.jpg",
      category: "laborator"
    },
    {
      id: "eclere",
      name: "Eclere",
      description: "Eclere cu cremă de vanilie și ciocolată",
      price: "12 lei/bucată",
      image: "/assets/images/products/eclere.jpg",
      category: "laborator"
    }
  ],
  
  // Articole blog
  blogPosts: [
    {
      id: "ingrediente-naturale",
      title: "Importanța Ingredientelor Naturale în Cofetărie",
      excerpt: "De ce alegem doar ingrediente naturale și de calitate superioară pentru produsele noastre.",
      content: "În lumea modernă, unde procesarea alimentelor a ajuns la extreme, noi la B&B Home Bakery credem că ingredientele naturale fac diferența...",
      image: "/assets/images/blog/ingrediente-naturale.jpg",
      date: "2024-01-15",
      author: "Echipa B&B Home Bakery",
      slug: "ingrediente-naturale"
    },
    {
      id: "istoria-cofetariei",
      title: "Povestea B&B Home Bakery",
      excerpt: "Cum a început totul și de ce am ales să ne dedicăm artei culinare.",
      content: "Totul a început cu o pasiune simplă pentru cofetărie și dorința de a aduce bucurie prin produse delicioase...",
      image: "/assets/images/blog/istoria-cofetariei.jpg",
      date: "2024-01-10",
      author: "Echipa B&B Home Bakery",
      slug: "istoria-cofetariei"
    },
    {
      id: "retete-traditionale",
      title: "Retete Tradiționale vs. Moderne",
      excerpt: "Cum combinăm tradiția cu inovația pentru a crea produse unice.",
      content: "În cofetăria noastră, respectăm tradițiile culinare românești, dar le adaptăm la gusturile moderne...",
      image: "/assets/images/blog/retete-traditionale.jpg",
      date: "2024-01-05",
      author: "Echipa B&B Home Bakery",
      slug: "retete-traditionale"
    }
  ]
}
