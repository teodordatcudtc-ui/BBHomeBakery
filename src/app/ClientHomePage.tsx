'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Star, Clock, Leaf, ChefHat, Zap, Palette, CheckCircle, Heart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import LocationCard from '@/components/LocationCard'

const ClientHomePage = () => {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start pt-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight text-secondary">
                  B&B Home Bakery
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700 font-light">
                  Produse artizanale, proaspete, pentru fiecare zi
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  Descoperă gustul autentic al cofetăriei tradiționale cu ingrediente naturale. 
                  Fiecare produs este creat cu pasiune și dragoste pentru arta culinară.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/comanda" className="btn-primary text-lg px-8 py-4 whitespace-nowrap flex items-center justify-center">
                  Comandă Acum
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/produse" className="btn-outline text-lg px-8 py-4 border-secondary text-secondary hover:bg-secondary hover:text-white whitespace-nowrap">
                  Vezi Produsele
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Clienți Mulțumiți</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-gray-600">Produse Unice</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Ani Experiență</div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                {/* Image Carousel */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-8xl opacity-30">🍰</div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm font-semibold">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-600">Rating Clienți</p>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={16} />
                    <span className="text-sm font-semibold">100%</span>
                  </div>
                  <p className="text-xs text-gray-600">Calitate Garantată</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Locații Rapide */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              Locațiile Noastre
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Găsește-ne în multiple locații din București și Ilfov
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.locations.slice(0, 3).map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <LocationCard location={location} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link href="/locatii" className="btn-outline whitespace-nowrap inline-flex items-center">
              Vezi Toate Locațiile
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Produse Populare */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              Produse Populare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descoperă produsele noastre cele mai apreciate de clienți
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group hover:shadow-xl transition-all duration-300"
              >
                {/* Product Image Placeholder */}
                <div className="relative h-48 bg-gray-200 rounded-t-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-6xl opacity-50">🍰</div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="text-yellow-400" size={16} />
                      <span className="text-sm font-medium">4.8</span>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary">
                      {product.price} RON
                    </div>
                  </div>

                  <Link href="/comanda" className="btn-primary w-full group-hover:bg-secondary transition-colors duration-200 flex items-center justify-center">
                    Comandă Acum
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/produse" className="btn-primary whitespace-nowrap inline-flex items-center">
              Vezi Toate Produsele
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Despre Noi Preview */}
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
                Despre B&B Home Bakery
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Cu o pasiune pentru cofetărie și dorința de a aduce bucurie prin produse delicioase, 
                B&B Home Bakery s-a născut din dragostea pentru ingrediente naturale și tehnici tradiționale.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Fiecare produs este creat cu grijă în laboratorul nostru din Bragadiru, folosind doar 
                ingrediente de cea mai bună calitate și tehnici artizanale dovedite.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/despre" className="btn-primary">
                  Află Mai Multe
                </Link>
                <Link href="/galerie" className="btn-outline">
                  Vezi Galeria
                </Link>
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
                <div className="text-6xl opacity-50">🏪</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-300" size={24} />
                  <div>
                    <p className="text-2xl font-bold">4.9</p>
                    <p className="text-sm">Rating clienți</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
              De Ce Să Ne Alegi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suntem mai mult decât o simplă cofetărie - suntem o experiență culinară completă
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Ingrediente Naturale",
                description: "Folosim doar ingrediente 100% naturale, fără conservanți sau aditivi artificiali"
              },
              {
                icon: ChefHat,
                title: "Cofetari Experți",
                description: "Echipa noastră de cofetari are peste 10 ani de experiență în industria culinară"
              },
              {
                icon: Zap,
                title: "Livrare Rapidă",
                description: "Livrăm produsele proaspete în maximum 2 ore în București și Ilfov"
              },
              {
                icon: Palette,
                title: "Personalizare",
                description: "Creăm torturi și produse personalizate pentru orice ocazie specială"
              },
              {
                icon: CheckCircle,
                title: "Calitate Garantată",
                description: "Fiecare produs trece prin controlul strict al calității înainte de livrare"
              },
              {
                icon: Heart,
                title: "Pasiune & Dragoste",
                description: "Fiecare produs este creat cu multă pasiune și dragoste pentru arta culinară"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold text-secondary mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Gata să Comanzi?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru comenzi personalizate sau vizitează-ne în una din locațiile noastre
            </p>
            <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
              <Link href="/comanda" className="btn-secondary text-lg px-8 py-4 whitespace-nowrap">
                Comandă Acum
              </Link>
              <Link href="/produse" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary whitespace-nowrap">
                Vezi Produsele
              </Link>
              {siteConfig.phone && (
                <a 
                  href={`tel:${siteConfig.phone}`}
                  className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary whitespace-nowrap flex items-center"
                >
                  <Clock className="mr-2" size={20} />
                  Sună Acum
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClientHomePage
