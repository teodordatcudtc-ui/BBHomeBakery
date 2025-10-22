'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'
import ProductCard from '@/components/ProductCard'

const ClientMeniuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('toate')

  const filteredProducts = selectedCategory === 'toate' 
    ? siteConfig.products 
    : siteConfig.products.filter(product => product.category === selectedCategory)

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
              Meniul Nostru
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă toate produsele noastre delicioase, create cu ingrediente naturale 
              și multă dragoste în laboratorul nostru din Bragadiru.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('toate')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === 'toate'
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toate Produsele
            </button>
            {siteConfig.productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {selectedCategory !== 'toate' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-display font-semibold text-secondary mb-2">
                {siteConfig.productCategories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {siteConfig.productCategories.find(cat => cat.id === selectedCategory)?.description}
              </p>
            </motion.div>
          )}

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">
                Nu există produse în această categorie momentan.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ai Găsit Ce Căutai?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru comenzi personalizate sau pentru mai multe detalii despre produsele noastre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/comanda" className="btn-primary text-lg px-8 py-4">
                Comandă Acum
              </a>
              <a href="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary">
                Contactează-ne
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClientMeniuPage
