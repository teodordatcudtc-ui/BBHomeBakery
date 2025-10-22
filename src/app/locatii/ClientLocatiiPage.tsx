'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, ExternalLink, Navigation } from 'lucide-react'
import { siteConfig } from '@/config/site'

const ClientLocatiiPage = () => {
  const workingHours = {
    'Luni - Vineri': '08:00 - 20:00',
    'Sâmbătă': '09:00 - 18:00',
    'Duminică': '10:00 - 16:00'
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
              Locațiile Noastre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Găsește-ne în multiple locații din București și Ilfov. Fiecare locație oferă 
              aceeași calitate excepțională și servicii personalizate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteConfig.locations.map((location, index) => (
              <motion.div
                key={location.id}
                id={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                {/* Location Image */}
                <div className="relative h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-6xl opacity-50">{location.icon}</div>
                  <div className="absolute top-4 left-4">
                    <span className="text-2xl">{location.icon}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-secondary px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {location.type === 'magazin' ? 'Magazin' : 'Laborator'}
                    </span>
                  </div>
                </div>

                {/* Location Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-display font-bold text-secondary mb-3">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-primary mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-gray-600 font-medium">{location.address}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {location.type === 'magazin' 
                            ? 'Magazin cu produse proaspete' 
                            : 'Laborator de producție'
                          }
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="text-primary mt-1 flex-shrink-0" size={18} />
                      <div>
                        <p className="text-gray-600 font-medium">Program de lucru</p>
                        <div className="text-sm text-gray-500 space-y-1">
                          {Object.entries(workingHours).map(([day, hours]) => (
                            <p key={day}>{day}: {hours}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {siteConfig.phone && (
                      <div className="flex items-start space-x-3">
                        <Phone className="text-primary mt-1 flex-shrink-0" size={18} />
                        <div>
                          <p className="text-gray-600 font-medium">Telefon</p>
                          <a 
                            href={`tel:${siteConfig.phone}`}
                            className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
                          >
                            {siteConfig.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => {
                        const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`
                        window.open(mapUrl, '_blank')
                      }}
                      className="btn-primary flex-1 flex items-center justify-center"
                    >
                      <Navigation className="mr-2" size={18} />
                      Navighează
                    </button>
                    <button 
                      onClick={() => {
                        // Open Google Maps with directions
                        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address)}`
                        window.open(directionsUrl, '_blank')
                      }}
                      className="btn-outline flex-1 flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2" size={18} />
                      Direcții
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
              Harta Locațiilor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vezi toate locațiile noastre pe hartă și găsește cea mai apropiate de tine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2851.123456789!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b20123456789ab%3A0x1234567890abcdef!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1234567890!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harta locațiilor B&B Home Bakery"
            />
          </motion.div>
        </div>
      </section>

      {/* Special Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
                Despre Locațiile Noastre
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Toate locațiile noastre sunt echipate cu cele mai moderne tehnologii 
                  și respectă standardele stricte de igienă și calitate.
                </p>
                <p>
                  Magazinul nostru principal din București oferă o gamă completă de produse 
                  proaspete, în timp ce laboratorul din Bragadiru este inima producției noastre.
                </p>
                <p>
                  Fiecare locație are o echipă dedicată de profesioniști care își doresc 
                  să îți ofere cea mai bună experiență culinară.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-6xl opacity-50">🏢</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Gata să Ne Vizitezi?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Alege locația cea mai convenabilă pentru tine și bucură-te de produsele 
              noastre delicioase. Te așteptăm cu drag!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/comanda" className="btn-secondary text-lg px-8 py-4">
                Comandă Acum
              </Link>
              <Link href="/produse" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary">
                Vezi Produsele
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClientLocatiiPage
