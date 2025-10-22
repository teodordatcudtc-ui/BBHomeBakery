'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, AlertCircle, ShoppingCart, Clock, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'

const ClientComandaPage = () => {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    email: '',
    locatie: '',
    produs: '',
    data: '',
    ora: '',
    observatii: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null) // 'success', 'error', null

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.ok) {
        setSubmitStatus('success')
        setFormData({
          nume: '',
          telefon: '',
          email: '',
          locatie: '',
          produs: '',
          data: '',
          ora: '',
          observatii: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
              Comandă Acum
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Completează formularul de mai jos pentru a comanda produsele tale preferate. 
              Ne vom contacta în cel mai scurt timp pentru a confirma comanda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Order Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-8"
              >
                <h2 className="text-2xl font-display font-bold text-secondary mb-6">
                  Detalii Comandă
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-2">
                        Nume complet *
                      </label>
                      <input
                        type="text"
                        id="nume"
                        name="nume"
                        value={formData.nume}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="Introdu numele tău complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                        Număr de telefon *
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                        placeholder="07xx xxx xxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Adresă de email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="email@exemplu.com"
                    />
                  </div>

                  {/* Location Selection */}
                  <div>
                    <label htmlFor="locatie" className="block text-sm font-medium text-gray-700 mb-2">
                      Locația de ridicare *
                    </label>
                    <select
                      id="locatie"
                      name="locatie"
                      value={formData.locatie}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    >
                      <option value="">Selectează locația</option>
                      {siteConfig.locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.icon} {location.name} - {location.address}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Product Selection */}
                  <div>
                    <label htmlFor="produs" className="block text-sm font-medium text-gray-700 mb-2">
                      Produs dorit *
                    </label>
                    <select
                      id="produs"
                      name="produs"
                      value={formData.produs}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    >
                      <option value="">Selectează produsul</option>
                      {siteConfig.products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name} - {product.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="data" className="block text-sm font-medium text-gray-700 mb-2">
                        Data dorită *
                      </label>
                      <input
                        type="date"
                        id="data"
                        name="data"
                        value={formData.data}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="ora" className="block text-sm font-medium text-gray-700 mb-2">
                        Ora preferată
                      </label>
                      <select
                        id="ora"
                        name="ora"
                        value={formData.ora}
                        onChange={handleInputChange}
                        className="input-field"
                      >
                        <option value="">Selectează ora</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label htmlFor="observatii" className="block text-sm font-medium text-gray-700 mb-2">
                      Observații speciale
                    </label>
                    <textarea
                      id="observatii"
                      name="observatii"
                      value={formData.observatii}
                      onChange={handleInputChange}
                      rows={4}
                      className="input-field"
                      placeholder="Dacă ai cerințe speciale, alergii sau preferințe, scrie-le aici..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
                    >
                      <CheckCircle size={20} />
                      <span>Comanda a fost trimisă cu succes! Te vom contacta în curând.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
                    >
                      <AlertCircle size={20} />
                      <span>A apărut o eroare. Te rugăm să încerci din nou sau să ne contactezi direct.</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Se trimite...
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={20} className="mr-2" />
                        Trimite Comanda
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Contact Info */}
                <div className="card p-6">
                  <h3 className="text-lg font-display font-semibold text-secondary mb-4">
                    Informații Contact
                  </h3>
                  <div className="space-y-3">
                    {siteConfig.phone && (
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">📞</span>
                        </div>
                        <a 
                          href={`tel:${siteConfig.phone}`}
                          className="text-gray-600 hover:text-primary transition-colors duration-200"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    )}
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✉️</span>
                      </div>
                      <span className="text-gray-600">contact@bbhomebakery.ro</span>
                    </div>
                  </div>
                </div>

                {/* Locații */}
                <div className="card p-6">
                  <h3 className="text-lg font-display font-semibold text-secondary mb-4">
                    Locațiile Noastre
                  </h3>
                  <div className="space-y-3">
                    {siteConfig.locations.slice(0, 3).map((location) => (
                      <div key={location.id} className="flex items-start space-x-2">
                        <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-secondary">{location.name}</p>
                          <p className="text-xs text-gray-500">{location.address}</p>
                        </div>
                      </div>
                    ))}
                    <a 
                      href="/locatii" 
                      className="text-primary hover:text-secondary transition-colors duration-200 text-sm font-medium"
                    >
                      Vezi toate locațiile →
                    </a>
                  </div>
                </div>

                {/* Order Info */}
                <div className="card p-6">
                  <h3 className="text-lg font-display font-semibold text-secondary mb-4">
                    Despre Comenzi
                  </h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <Clock size={16} className="text-primary mt-1 flex-shrink-0" />
                      <p>Comanda minimă: 50 lei</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                      <p>Ridicare din locațiile noastre</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary mt-1">⏰</span>
                      <p>Confirmare în 2-4 ore</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ClientComandaPage
