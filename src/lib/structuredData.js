import { siteConfig } from '@/config/site'

// Generate JSON-LD for LocalBusiness with multiple locations
export function generateLocalBusinessJSONLD() {
  const baseBusiness = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "telephone": siteConfig.phone || undefined,
    "email": "contact@bbhomebakery.ro",
    "foundingDate": "2019",
    "slogan": "Produse artizanale, proaspete, pentru fiecare zi",
    "priceRange": "$$",
    "servesCuisine": "Romanian",
    "hasMenu": `${siteConfig.url}/meniu`,
    "acceptsReservations": true,
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "RON",
    "openingHours": [
      "Mo-Fr 08:00-20:00",
      "Sa 09:00-18:00", 
      "Su 10:00-16:00"
    ],
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RO",
      "addressRegion": "București",
      "addressLocality": "București"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.4268,
      "longitude": 26.1025
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Produse Cofetărie",
      "itemListElement": siteConfig.products.map((product, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "name": product.name,
        "description": product.description,
        "price": product.price,
        "priceCurrency": "RON",
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "category": product.category
        }
      }))
    }
  }

  // Add multiple locations as branches
  if (siteConfig.locations.length > 0) {
    baseBusiness.hasPOS = siteConfig.locations.map(location => ({
      "@type": "Place",
      "name": location.name,
      "description": `${siteConfig.name} - ${location.type === 'magazin' ? 'Magazin' : 'Laborator'}`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.address,
        "addressCountry": "RO",
        "addressRegion": location.address.includes('București') ? 'București' : 'Ilfov',
        "addressLocality": location.address.includes('București') ? 'București' : 'Bragadiru'
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": location.coordinates.lat,
        "longitude": location.coordinates.lng
      },
      "openingHours": [
        "Mo-Fr 08:00-20:00",
        "Sa 09:00-18:00",
        "Su 10:00-16:00"
      ],
      "telephone": siteConfig.phone || undefined,
      "url": `${siteConfig.url}/locatii#${location.id}`
    }))
  }

  return baseBusiness
}

// Generate JSON-LD for Organization
export function generateOrganizationJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/assets/images/logo.png`,
    "description": siteConfig.description,
    "foundingDate": "2019",
    "founders": [
      {
        "@type": "Person",
        "name": "Echipa B&B Home Bakery"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone || undefined,
      "contactType": "customer service",
      "email": "contact@bbhomebakery.ro",
      "availableLanguage": "Romanian"
    },
    "sameAs": [
      siteConfig.social.facebook,
      siteConfig.social.instagram
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "RO",
      "addressRegion": "București",
      "addressLocality": "București"
    }
  }
}

// Generate JSON-LD for BreadcrumbList
export function generateBreadcrumbJSONLD(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }
}

// Generate JSON-LD for WebSite
export function generateWebSiteJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "description": siteConfig.description,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/meniu?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }
}

// Generate JSON-LD for FAQPage
export function generateFAQJSONLD() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ce produse oferiți?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oferim o gamă largă de produse artizanale: torturi personalizate, prăjituri tradiționale, brioșe proaspete și produse speciale din laboratorul nostru."
        }
      },
      {
        "@type": "Question", 
        "name": "Unde vă găsiți?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avem multiple locații în București (Str. Mihail Sebastian 37C, Bd. Aerogarii 2-8, Str. Nazuintei 10) și un laborator în Bragadiru, Ilfov (Șos. Alexandriei 218)."
        }
      },
      {
        "@type": "Question",
        "name": "Cum pot comanda?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Poți comanda prin formularul de pe site, prin telefon sau vizitându-ne în una din locațiile noastre. Comanda minimă este de 50 lei."
        }
      },
      {
        "@type": "Question",
        "name": "Folosiți ingrediente naturale?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da, folosim doar ingrediente naturale și de cea mai bună calitate. Nu folosim conservanți artificiali sau coloranți sintetici."
        }
      }
    ]
  }
}
