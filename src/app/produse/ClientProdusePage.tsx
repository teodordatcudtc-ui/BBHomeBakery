'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Clock, ShoppingCart } from 'lucide-react'
import { siteConfig } from '@/config/site'

const ClientProdusePage = () => {
  const [activeCategory, setActiveCategory] = useState('toate')

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    // Scroll to products section after a short delay to allow state update
    setTimeout(() => {
      const productsSection = document.getElementById('products-section')
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const categories = [
    { id: 'toate', name: 'Toate Produsele', icon: '🍰' },
    { id: 'torturi', name: 'Torturi', icon: '🎂' },
    { id: 'prajituri', name: 'Prăjituri', icon: '🧁' },
    { id: 'altele', name: 'Altele', icon: '🍪' }
  ]

  const products = [
    // Torturi
    { id: 1, name: 'Tort Ciocolată', price: '120', category: 'torturi', description: 'Tort cu ciocolată belgiană și cremă de vanilie', rating: 4.9, prepTime: '2-3 ore' },
    { id: 2, name: 'Tort Fructe', price: '100', category: 'torturi', description: 'Tort cu fructe proaspete și cremă de brânză', rating: 4.8, prepTime: '2-3 ore' },
    { id: 3, name: 'Tort Carrot Cake', price: '110', category: 'torturi', description: 'Tort tradițional cu morcovi și nucă', rating: 4.7, prepTime: '2-3 ore' },
    { id: 4, name: 'Tort Red Velvet', price: '130', category: 'torturi', description: 'Tort Red Velvet cu cremă de brânză', rating: 4.9, prepTime: '2-3 ore' },
    { id: 5, name: 'Tort de Nuntă', price: '200', category: 'torturi', description: 'Tort elegant de nuntă cu design personalizat', rating: 4.9, prepTime: '3-4 ore' },
    { id: 6, name: 'Tort de Ziua de Naștere', price: '90', category: 'torturi', description: 'Tort colorat cu glazură și decorațiuni speciale', rating: 4.8, prepTime: '2-3 ore' },
    { id: 7, name: 'Tort Tiramisu', price: '140', category: 'torturi', description: 'Tort Tiramisu cu cafea și mascarpone', rating: 4.9, prepTime: '3 ore' },
    { id: 8, name: 'Tort Lemon', price: '95', category: 'torturi', description: 'Tort cu aromă de lămâie și cremă de brânză', rating: 4.7, prepTime: '2 ore' },
    
    // Prăjituri
    { id: 9, name: 'Cupcakes Vanilie', price: '25', category: 'prajituri', description: 'Cupcakes cu cremă de vanilie și glazură colorată', rating: 4.8, prepTime: '30 min' },
    { id: 10, name: 'Eclairs Ciocolată', price: '20', category: 'prajituri', description: 'Eclairs cu cremă de ciocolată și glazură', rating: 4.9, prepTime: '45 min' },
    { id: 11, name: 'Profiterole', price: '18', category: 'prajituri', description: 'Profiterole cu cremă de vanilie și ciocolată', rating: 4.7, prepTime: '40 min' },
    { id: 12, name: 'Muffins cu Ciocolată', price: '15', category: 'prajituri', description: 'Muffins proaspete cu ciocolată chips', rating: 4.6, prepTime: '25 min' },
    { id: 13, name: 'Cupcakes Red Velvet', price: '28', category: 'prajituri', description: 'Cupcakes Red Velvet cu cremă de brânză', rating: 4.8, prepTime: '35 min' },
    { id: 14, name: 'Eclairs Vanilie', price: '22', category: 'prajituri', description: 'Eclairs cu cremă de vanilie și glazură albă', rating: 4.7, prepTime: '45 min' },
    { id: 15, name: 'Cupcakes Carrot', price: '26', category: 'prajituri', description: 'Cupcakes cu morcovi și nucă', rating: 4.6, prepTime: '30 min' },
    { id: 16, name: 'Muffins cu Fructe', price: '17', category: 'prajituri', description: 'Muffins cu fructe proaspete de sezon', rating: 4.5, prepTime: '25 min' },
    
    // Altele (Brioșe, Biscuiți, Tarturi, Specialități)
    { id: 17, name: 'Brioșe Clasice', price: '15', category: 'altele', description: 'Brioșe proaspete cu unt și ou', rating: 4.8, prepTime: '2 ore' },
    { id: 18, name: 'Croissants', price: '12', category: 'altele', description: 'Croissants cu unt și ciocolată', rating: 4.9, prepTime: '3 ore' },
    { id: 19, name: 'Macarons', price: '35', category: 'altele', description: 'Macarons cu diverse arome și culori', rating: 4.9, prepTime: '1 oră' },
    { id: 20, name: 'Tart cu Fructe', price: '45', category: 'altele', description: 'Tart cu fructe de sezon și cremă de vanilie', rating: 4.8, prepTime: '1 oră' },
    { id: 21, name: 'Tiramisu', price: '60', category: 'altele', description: 'Tiramisu tradițional cu cafea și mascarpone', rating: 4.9, prepTime: '2 ore' },
    { id: 22, name: 'Cheesecake', price: '55', category: 'altele', description: 'Cheesecake cu fructe de pădure', rating: 4.8, prepTime: '2 ore' },
    { id: 23, name: 'Pain au Chocolat', price: '14', category: 'altele', description: 'Pain au chocolat cu ciocolată belgiană', rating: 4.8, prepTime: '3 ore' },
    { id: 24, name: 'Biscuiți cu Ciocolată', price: '8', category: 'altele', description: 'Biscuiți crocanti cu ciocolată chips', rating: 4.6, prepTime: '20 min' },
    { id: 25, name: 'Tart cu Ciocolată', price: '50', category: 'altele', description: 'Tart cu ciocolată neagră și fructe', rating: 4.9, prepTime: '1 oră' },
    { id: 26, name: 'Brioșe cu Fructe', price: '18', category: 'altele', description: 'Brioșe cu fructe proaspete și glazură', rating: 4.7, prepTime: '2 ore' },
    { id: 27, name: 'Biscuiți cu Nucă', price: '10', category: 'altele', description: 'Biscuiți tradiționali cu nucă și miere', rating: 4.7, prepTime: '25 min' },
    { id: 28, name: 'Croissants cu Fructe', price: '16', category: 'altele', description: 'Croissants cu fructe proaspete și cremă', rating: 4.8, prepTime: '3 ore' }
  ]

  const popularProducts = [
    { id: 1, name: 'Tort Ciocolată', price: '120', description: 'Tort cu ciocolată belgiană și cremă de vanilie', rating: 4.9 },
    { id: 5, name: 'Cupcakes Vanilie', price: '25', description: 'Cupcakes cu cremă de vanilie și glazură colorată', rating: 4.8 },
    { id: 11, name: 'Macarons', price: '35', description: 'Macarons cu diverse arome și culori', rating: 4.9 },
    { id: 13, name: 'Tiramisu', price: '60', description: 'Tiramisu tradițional cu cafea și mascarpone', rating: 4.9 }
  ]

  const filteredProducts = activeCategory === 'toate' 
    ? products 
    : products.filter(product => product.category === activeCategory)

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
              Produsele Noastre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă gama noastră completă de produse artizanale, create cu ingrediente naturale 
              și multă pasiune. Fiecare produs este o operă de artă culinară.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">
              Alege Categoria
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`w-full p-8 rounded-2xl transition-all duration-300 text-left h-full ${
                      activeCategory === category.id
                        ? 'bg-primary text-white shadow-xl'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center space-x-6 mb-6">
                        {/* Category Image */}
                        <div className="w-24 h-24 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl">{category.icon}</span>
                        </div>
                        
                        {/* Category Title */}
                        <div className="flex-grow">
                          <h3 className="text-3xl font-display font-bold mb-2">
                            {category.name}
                          </h3>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Star className="text-yellow-400" size={16} />
                              <span className="text-sm font-medium">4.9/5</span>
                            </div>
                            <div className="text-sm opacity-80">
                              {category.id === 'toate' && '28+ Produse'}
                              {category.id === 'torturi' && '8 Produse'}
                              {category.id === 'prajituri' && '8 Produse'}
                              {category.id === 'altele' && '12 Produse'}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-6">
                        <p className="text-base opacity-90 leading-relaxed">
                          {category.id === 'toate' && 'Explorează toate produsele noastre delicioase, create cu ingrediente naturale și multă pasiune. De la torturi personalizate la prăjituri fine, găsești tot ce îți trebuie pentru momente dulci.'}
                          {category.id === 'torturi' && 'Torturi personalizate pentru orice ocazie specială. De la torturi de nuntă elegante la torturi de ziua de naștere colorate, creăm designuri unice care să reflecte personalitatea ta.'}
                          {category.id === 'prajituri' && 'Prăjituri fine și delicate pentru momente dulci. Cupcakes, eclairs, profiterole și multe altele, toate create cu ingrediente de calitate superioară.'}
                          {category.id === 'altele' && 'Brioșe, biscuiți, tarturi și specialități culinare. O varietate mare de produse tradiționale și moderne, perfecte pentru orice moment al zilei.'}
                        </p>
                      </div>
                      
                      {/* Features */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {category.id === 'toate' && (
                          <>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">50+ Produse</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Ingrediente Naturale</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Proaspete Zilnic</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Livrare Rapidă</span>
                          </>
                        )}
                        {category.id === 'torturi' && (
                          <>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Personalizate</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Pentru Evenimente</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Design Unic</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Consultanță Gratuită</span>
                          </>
                        )}
                        {category.id === 'prajituri' && (
                          <>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Fine & Delicate</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Arome Diverse</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Perfecte pentru Cafea</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Glazură Artizanală</span>
                          </>
                        )}
                        {category.id === 'altele' && (
                          <>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Varietate Mare</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Tradiționale</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Specialități</span>
                            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">Rețete Secrete</span>
                          </>
                        )}
                      </div>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-sm opacity-80">
                          {category.id === 'toate' && 'Click pentru a vedea toate produsele'}
                          {category.id === 'torturi' && 'Click pentru a vedea torturile'}
                          {category.id === 'prajituri' && 'Click pentru a vedea prăjiturile'}
                          {category.id === 'altele' && 'Click pentru a vedea alte produse'}
                        </div>
                        <ArrowRight size={24} className={activeCategory === category.id ? 'text-white' : 'text-gray-400'} />
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            id="products-section"
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-6xl opacity-50">🍰</div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="text-yellow-400" size={16} />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{product.prepTime}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {product.price} RON
                    </div>
                  </div>

                  <Link href="/comanda" className="btn-primary w-full group-hover:bg-secondary transition-colors duration-200 whitespace-nowrap flex items-center justify-center">
                    <ShoppingCart className="mr-2" size={18} />
                    Comandă Acum
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Nu am găsit produse în această categorie
              </h3>
              <p className="text-gray-500">
                Încearcă să selectezi o altă categorie sau vezi toate produsele
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Popular Products Section */}
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
              Cele Mai Iubite Produse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acestea sunt produsele noastre cele mai apreciate de clienți
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-6xl opacity-50">🍰</div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="text-yellow-400" size={16} />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-display font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary">
                      {product.price} RON
                    </div>
                  </div>

                  <Link href="/comanda" className="btn-primary w-full group-hover:bg-secondary transition-colors duration-200 whitespace-nowrap flex items-center justify-center">
                    <ShoppingCart className="mr-2" size={18} />
                    Comandă Acum
                  </Link>
                </div>
              </motion.div>
            ))}
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
              Nu Găsești Ce Cauți?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru produse personalizate sau comenzi speciale. 
              Suntem aici să îți realizăm orice dorință culinară!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/comanda" className="btn-secondary text-lg px-8 py-4">
                Comandă Personalizată
              </Link>
              <Link href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary">
                Contactează-ne
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClientProdusePage
