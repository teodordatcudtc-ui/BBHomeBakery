'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ShoppingCart } from 'lucide-react'
import { siteConfig } from '@/config/site'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Acasă', href: '/' },
    { name: 'Produse', href: '/produse' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Despre', href: '/despre' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Locații', href: '/locatii' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full overflow-x-hidden ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 ml-2 lg:ml-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl lg:text-3xl font-display font-bold text-secondary"
            >
              B&B Home Bakery
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200"
              >
                <Phone size={18} />
                <span className="font-medium">Sună</span>
              </a>
            )}
            <Link href="/comanda" className="btn-primary flex items-center">
              <ShoppingCart size={18} className="mr-2" />
              Comandă
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg text-gray-800 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary mr-2 lg:mr-0 bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 relative z-[101]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  {siteConfig.phone && (
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors duration-200 py-2"
                    >
                      <Phone size={18} />
                      <span className="font-medium">Sună</span>
                    </a>
                  )}
                  <Link 
                    href="/comanda" 
                    className="btn-primary w-full text-center flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingCart size={18} className="mr-2" />
                    Comandă
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
