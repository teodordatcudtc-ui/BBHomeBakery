import Link from 'next/link'
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { siteConfig } from '@/config/site'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-display font-bold mb-4">
              B&B Home Bakery
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Produse artizanale, proaspete, pentru fiecare zi. 
              Cofetărie cu multiple locații în București și Ilfov.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link-uri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/meniu" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Meniu
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/despre" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locații */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Locații</h4>
            <ul className="space-y-3">
              {siteConfig.locations.slice(0, 3).map((location) => (
                <li key={location.id} className="flex items-start space-x-2">
                  <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">{location.address}</p>
                    <span className="text-xs text-gray-400">{location.icon} {location.name}</span>
                  </div>
                </li>
              ))}
              <li>
                <Link 
                  href="/locatii" 
                  className="text-primary hover:text-white transition-colors duration-200 text-sm font-medium"
                >
                  Vezi toate locațiile →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              {siteConfig.phone && (
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-primary flex-shrink-0" />
                  <a 
                    href={`tel:${siteConfig.phone}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-gray-300">contact@bbhomebakery.ro</span>
              </div>
              <div className="pt-2">
                <Link 
                  href="/comanda" 
                  className="btn-primary text-sm"
                >
                  Comandă Acum
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} B&B Home Bakery. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-confidentialitate" className="text-gray-400 hover:text-white transition-colors duration-200">
                Politica de Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="text-gray-400 hover:text-white transition-colors duration-200">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
