'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

const ClientContactPage = () => {
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
              Contact
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suntem aici pentru tine! Contactează-ne pentru comenzi, întrebări sau pentru a afla 
              mai multe despre produsele noastre delicioase.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display font-bold text-secondary mb-8">
                Informații de Contact
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                {siteConfig.phone && (
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary mb-2">Telefon</h3>
                      <a 
                        href={`tel:${siteConfig.phone}`}
                        className="text-gray-600 hover:text-primary transition-colors duration-200 text-lg"
                      >
                        {siteConfig.phone}
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Luni - Duminică: 08:00 - 20:00</p>
                    </div>
                  </div>
                )}

                {/* Quick Contact Options */}
                {siteConfig.phone && (
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-secondary mb-4">Contactează-ne Rapid</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Call Button */}
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl transition-colors duration-200 font-medium"
                      >
                        <Phone size={20} />
                        <span>Sună Acum</span>
                      </a>
                      
                      {/* WhatsApp Button */}
                      <a
                        href={`https://wa.me/${siteConfig.phone.replace(/\s/g, '')}?text=Salut! Vreau să comand produse de la B&B Home Bakery.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl transition-colors duration-200 font-medium"
                      >
                        <MessageCircle size={20} />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                    <p className="text-sm text-gray-500 mt-3 text-center">
                      Răspundem în maximum 2 ore
                    </p>
                  </div>
                )}

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Email</h3>
                    <a 
                      href="mailto:contact@bbhomebakery.ro"
                      className="text-gray-600 hover:text-primary transition-colors duration-200"
                    >
                      contact@bbhomebakery.ro
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Răspundem în 24 de ore</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Facebook className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Social Media</h3>
                    <div className="space-y-2">
                      <a 
                        href={siteConfig.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        Facebook - B&B Home Bakery
                      </a>
                      <a 
                        href={siteConfig.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        Instagram - @bbhomebakery
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Program de Lucru</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>Luni - Vineri: 08:00 - 20:00</p>
                      <p>Sâmbătă: 09:00 - 18:00</p>
                      <p>Duminică: 10:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 space-y-4">
                <Link href="/comanda" className="btn-primary w-full text-center block">
                  Comandă Acum
                </Link>
                <Link href="/produse" className="btn-outline w-full text-center block">
                  Vezi Produsele
                </Link>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <h2 className="text-2xl font-display font-bold text-secondary mb-6">
                Trimite-ne un Mesaj
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume *
                    </label>
                    <input
                      type="text"
                      id="nume"
                      name="nume"
                      required
                      className="input-field"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="input-field"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    className="input-field"
                    placeholder="07xx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="subiect" className="block text-sm font-medium text-gray-700 mb-2">
                    Subiect *
                  </label>
                  <select
                    id="subiect"
                    name="subiect"
                    required
                    className="input-field"
                  >
                    <option value="">Selectează subiectul</option>
                    <option value="comanda">Întrebare despre comandă</option>
                    <option value="produs">Întrebare despre produse</option>
                    <option value="locație">Întrebare despre locații</option>
                    <option value="eveniment">Eveniment special</option>
                    <option value="altul">Altele</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="mesaj"
                    name="mesaj"
                    rows={5}
                    required
                    className="input-field"
                    placeholder="Scrie mesajul tău aici..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Trimite Mesajul
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Locations */}
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
              Toate Locațiile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Găsește-ne în multiple locații din București și Ilfov. 
              Fiecare locație oferă aceeași calitate și servicii excepționale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{location.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-semibold text-secondary mb-2">
                      {location.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{location.address}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <MapPin size={16} />
                      <span className="capitalize">{location.type === 'magazin' ? 'Magazin' : 'Laborator'}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => {
                          const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`
                          window.open(mapUrl, '_blank')
                        }}
                        className="btn-primary text-sm"
                      >
                        Vezi pe Hartă
                      </button>
                      <Link 
                        href={`/locatii#${location.id}`}
                        className="btn-outline text-sm"
                      >
                        Detalii
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/locatii" className="btn-outline">
              Vezi Pagina Locații
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Ai Întrebări? Contactează-ne Acum!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Suntem aici să îți răspundem la orice întrebare despre produsele noastre sau să te ajutăm cu comanda
            </p>
            
            {siteConfig.phone && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                {/* Call Button */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center space-x-3 bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl transition-colors duration-200 font-semibold text-lg w-full sm:w-auto"
                >
                  <Phone size={24} />
                  <span>Sună Acum</span>
                </a>
                
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${siteConfig.phone.replace(/\s/g, '')}?text=Salut! Vreau să comand produse de la B&B Home Bakery.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl transition-colors duration-200 font-semibold text-lg w-full sm:w-auto"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </a>
              </div>
            )}
            
            <p className="text-white/70 mt-6 text-sm">
              Răspundem în maximum 2 ore • Disponibili Luni-Duminică 08:00-20:00
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClientContactPage
