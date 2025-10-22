# B&B Home Bakery - Site Web Complet

Un site web modern și complet funcțional pentru cofetăria **B&B Home Bakery**, construit cu Next.js 14, Tailwind CSS și Framer Motion.

## 🚀 Caracteristici

- **Design Modern**: Interfață elegantă și profesională cu culori calde (#e9b8b8, #2a2b2a)
- **Responsive**: Optimizat pentru toate dispozitivele (mobile, tablet, desktop)
- **SEO Optimizat**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Performanță**: Optimizare imagini, lazy loading, preload fonts
- **Accesibilitate**: HTML semantic, contrast optim, navigare cu tastatura
- **Animații**: Framer Motion cu respectarea preferințelor de mișcare
- **PWA Ready**: Manifest web app, service worker ready

## 📁 Structura Proiectului

```
B&BHomeBakery/
├── public/
│   ├── assets/images/          # Imagini optimizate
│   │   ├── products/          # Imagini produse
│   │   ├── gallery/           # Galerie foto
│   │   ├── blog/              # Imagini articole blog
│   │   └── locations/         # Imagini locații
│   ├── favicon.ico            # Favicon principal
│   ├── manifest.json          # PWA manifest
│   └── robots.txt             # SEO robots
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── api/              # API routes
│   │   ├── meniu/            # Pagina meniu
│   │   ├── galerie/          # Pagina galerie
│   │   ├── despre/           # Pagina despre
│   │   ├── comanda/          # Pagina comandă
│   │   ├── blog/             # Pagina blog
│   │   ├── contact/          # Pagina contact
│   │   ├── locatii/          # Pagina locații
│   │   ├── globals.css       # Stiluri globale
│   │   ├── layout.tsx        # Layout principal
│   │   └── page.tsx          # Pagina principală
│   ├── components/           # Componente reutilizabile
│   │   ├── Header.tsx        # Header cu navigație
│   │   ├── Footer.tsx        # Footer cu informații
│   │   ├── ProductCard.tsx   # Card produs
│   │   └── LocationCard.tsx  # Card locație
│   ├── config/
│   │   └── site.js           # Configurație centralizată
│   └── lib/
│       └── structuredData.js # JSON-LD pentru SEO
├── scripts/
│   └── generate-sitemap.js   # Generator sitemap
├── package.json              # Dependențe și scripturi
├── tailwind.config.js        # Configurație Tailwind
├── next.config.js            # Configurație Next.js
└── tsconfig.json             # Configurație TypeScript
```

## 🛠️ Tehnologii Utilizate

- **Next.js 14** - Framework React cu App Router
- **React 18** - Biblioteca UI
- **TypeScript** - Tipizare statică
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animații și microinteracțiuni
- **Lucide React** - Iconuri SVG
- **Next/Image** - Optimizare imagini

## 📋 Instalare și Rulare

### 1. Instalare Dependențe

```bash
npm install
```

### 2. Configurare Telefon

**IMPORTANT**: Completează numărul de telefon în `src/config/site.js`:

```javascript
// În src/config/site.js
export const siteConfig = {
  // ... alte configurări
  phone: "07XX XXX XXX", // Completează aici numărul real
  // ...
}
```

### 3. Rulare în Modul Dezvoltare

```bash
npm run dev
```

Site-ul va fi disponibil la: `http://localhost:3000`

### 4. Build pentru Producție

```bash
npm run build
npm run start
```

### 5. Generare Sitemap

```bash
npm run generate-sitemap
```

## 🎨 Personalizare

### Culori

Culorile principale sunt definite în `tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#e9b8b8',  // Roz pal
    dark: '#d4a373',     // Accent cald
  },
  secondary: {
    DEFAULT: '#2a2b2a',  // Negru/graphite
    light: '#6B6B6B',    // Text secundar
  },
  background: '#FFFDFB', // Background crem
}
```

### Conținut

Toate datele site-ului sunt centralizate în `src/config/site.js`:

- **Locații**: Adrese, coordonate, tipuri
- **Produse**: Nume, descrieri, prețuri, categorii
- **Blog**: Articole, autori, date
- **Social Media**: Link-uri Facebook, Instagram
- **Contact**: Telefon, email, program

### Imagini

Înlocuiește imaginile placeholder din `public/assets/images/`:

1. **Produse**: `public/assets/images/products/`
2. **Galerie**: `public/assets/images/gallery/`
3. **Blog**: `public/assets/images/blog/`
4. **Locații**: `public/assets/images/locations/`

**Dimensiuni recomandate**:
- Produse: 400x400px
- Galerie: 600x600px
- Blog: 800x400px
- Locații: 600x400px

## 📱 Pagini Site

### 1. **Acasă** (`/`)
- Hero section cu CTA-uri
- Locații rapide (3 carduri)
- Produse populare
- Preview despre noi

### 2. **Meniu** (`/meniu`)
- Filtrare pe categorii
- Grid produse cu imagini
- Detalii produse
- CTA comandă

### 3. **Galerie** (`/galerie`)
- Grid responsive imagini
- Lightbox cu navigare
- Categorii produse
- Animații hover

### 4. **Despre** (`/despre`)
- Povestea cofetăriei
- Valorile companiei
- Statistici și realizări
- Informații laborator

### 5. **Comandă** (`/comanda`)
- Formular complet comandă
- Validare client-side
- Selectare locație
- API mock pentru trimitere

### 6. **Blog** (`/blog`)
- Articole cu meta SEO
- Layout responsive
- Newsletter signup
- Categorii și filtrare

### 7. **Contact** (`/contact`)
- Informații contact complete
- Formular mesaj
- Lista locații
- Social media links

### 8. **Locații** (`/locatii`)
- Toate locațiile cu detalii
- Hărți interactive
- Informații program
- Butoane navigare

## 🔧 API Routes

### POST `/api/submit-order`

Endpoint pentru trimiterea comenzilor:

**Request Body**:
```json
{
  "nume": "string (required)",
  "telefon": "string (required)",
  "email": "string (optional)",
  "locatie": "string (required)",
  "produs": "string (required)",
  "data": "string (required, YYYY-MM-DD)",
  "ora": "string (optional)",
  "observatii": "string (optional)"
}
```

**Response**:
```json
{
  "ok": true,
  "message": "Comanda a fost primită cu succes!",
  "orderId": "BB-1234567890"
}
```

## 🎯 SEO și Performance

### Structured Data (JSON-LD)
- **LocalBusiness** cu multiple locații
- **Organization** cu informații complete
- **WebSite** cu search action
- **FAQPage** cu întrebări frecvente

### Meta Tags
- Title și description per pagină
- Open Graph pentru social media
- Twitter Cards
- Canonical URLs
- Viewport și theme-color

### Performance
- Next.js Image Optimization
- Font preloading (Google Fonts)
- Lazy loading imagini
- Code splitting automat
- CSS purging (Tailwind)

### Sitemap și Robots
- Sitemap XML generat automat
- Robots.txt configurat
- URL-uri SEO-friendly
- Meta robots per pagină

## 📊 Analytics și Tracking

Pentru a adăuga Google Analytics sau alte servicii de tracking:

1. **Google Analytics**: Adaugă în `src/app/layout.tsx`
2. **Facebook Pixel**: Adaugă în `src/app/layout.tsx`
3. **Hotjar**: Adaugă în `src/app/layout.tsx`

## 🚀 Deployment

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Configurează variabilele de mediu
3. Deploy automat la push

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy automat

### Server tradițional
1. `npm run build`
2. `npm run start`
3. Configurează reverse proxy (Nginx)

## 📝 Checklist TO-DO

### ✅ Completat
- [x] Structura Next.js cu App Router
- [x] Configurație Tailwind CSS
- [x] Componente Header/Footer responsive
- [x] Toate paginile (8 pagini complete)
- [x] Componente reutilizabile
- [x] JSON-LD structured data
- [x] Sitemap generator + robots.txt
- [x] API route pentru comenzi
- [x] Imagini placeholder organizate
- [x] Animații Framer Motion
- [x] Accesibilitate și SEO

### 🔄 De Făcut
- [ ] **Completează numărul de telefon** în `src/config/site.js`
- [ ] **Înlocuiește imaginile placeholder** cu imagini reale
- [ ] **Configurează Google Analytics** (opțional)
- [ ] **Adaugă favicon real** în `public/`
- [ ] **Testează formularul de comandă** cu date reale
- [ ] **Configurează email notifications** pentru comenzi
- [ ] **Adaugă WhatsApp integration** (opțional)
- [ ] **Optimizează imagini** pentru performanță
- [ ] **Testează pe dispozitive reale**
- [ ] **Configurează backup** pentru comenzi

## 🆘 Suport și Contact

Pentru întrebări sau probleme:

1. **Documentație Next.js**: https://nextjs.org/docs
2. **Tailwind CSS**: https://tailwindcss.com/docs
3. **Framer Motion**: https://www.framer.com/motion/

## 📄 Licență

Acest proiect este creat pentru **B&B Home Bakery**. Toate drepturile rezervate.

---

**B&B Home Bakery** - Produse artizanale, proaspete, pentru fiecare zi! 🧁✨
