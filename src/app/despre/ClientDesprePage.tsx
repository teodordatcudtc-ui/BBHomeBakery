'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Award, Users, Clock, MapPin, Star, Leaf, ChefHat, Flame, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'

const ClientDesprePage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Pasiune',
      description: 'Fiecare produs este creat cu multă dragoste și atenție la detalii.'
    },
    {
      icon: Award,
      title: 'Calitate',
      description: 'Folosim doar ingrediente naturale și de cea mai bună calitate.'
    },
    {
      icon: Users,
      title: 'Comunitate',
      description: 'Construim relații durabile cu clienții noștri prin produse excepționale.'
    },
    {
      icon: Clock,
      title: 'Tradiție',
      description: 'Respectăm tehnici tradiționale dovedite în timp.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Clienți Mulțumiți' },
    { number: '50+', label: 'Produse Unice' },
    { number: '4', label: 'Locații' },
    { number: '5', label: 'Ani de Experiență' }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-6">
                Povestea Noastră
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                B&B Home Bakery s-a născut din pasiunea pentru cofetărie și dorința 
                de a aduce bucurie prin produse delicioase, create cu ingrediente naturale.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cu o echipă dedicată și un laborator modern în Bragadiru, ne-am propus 
                să creăm produse care să îmbine tradiția cu inovația, oferind clienților 
                noștri experiențe culinare de neuitat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-6xl opacity-50">👨‍🍳</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acestea sunt principiile care ne ghidează în fiecare zi și în fiecare produs pe care îl creăm.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-display font-semibold text-secondary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Laborator Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="text-6xl opacity-50">🏭</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
                Laboratorul Nostru
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Laboratorul nostru modern din Bragadiru este inima B&B Home Bakery. 
                Aici, folosind echipamente de ultimă generație și tehnici tradiționale, 
                creăm produsele noastre excepționale.
              </p>
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold text-secondary">Locația Laboratorului</p>
                  <p className="text-gray-600">Șos. Alexandriei 218, Bragadiru, Ilfov</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fiecare produs trece prin procese riguroase de control al calității, 
                asigurându-ne că ajunge la tine în condițiile optime de proaspăt și gust.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Echipa Noastră
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              În spatele fiecărui produs delicios stă o echipă dedicată de profesioniști 
              pasionați de arta culinară și de satisfacerea clienților noștri.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Cofetari Experți</h3>
                <p className="text-white/80">
                  Cofetari cu experiență de peste 10 ani în industria culinară
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Designeri Creativi</h3>
                <p className="text-white/80">
                  Specialiști în crearea de designuri unice și personalizate
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Echipa de Calitate</h3>
                <p className="text-white/80">
                  Responsabili pentru controlul calității și satisfacerea clienților
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
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
              Procesul Nostru de Lucru
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la selecția ingredientelor la livrarea produselor finale, fiecare pas este realizat cu grijă și pasiune
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Selecția Ingredientelor",
                description: "Alegem doar ingrediente de cea mai bună calitate, de la furnizori de încredere",
                icon: Leaf
              },
              {
                step: "02", 
                title: "Pregătirea",
                description: "Ingredientele sunt pregătite cu grijă și respectăm rețetele tradiționale",
                icon: ChefHat
              },
              {
                step: "03",
                title: "Coacerea",
                description: "Produsele sunt coapte la temperatură optimă pentru a păstra gustul și textura",
                icon: Flame
              },
              {
                step: "04",
                title: "Controlul Calității",
                description: "Fiecare produs este verificat înainte de ambalare și livrare",
                icon: CheckCircle
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-display font-semibold text-secondary mb-3">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mii de clienți mulțumiți ne-au ales pentru produsele noastre delicioase
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Popescu",
                location: "București",
                rating: 5,
                comment: "Cel mai bun tort de ciocolată pe care l-am mâncat vreodată! Ingredientele sunt de calitate superioară și gustul este de neuitat."
              },
              {
                name: "Ion Ionescu", 
                location: "Ilfov",
                rating: 5,
                comment: "Brioșele lor sunt absolut delicioase! Le comand regulat pentru micul dejun. Recomand cu încredere!"
              },
              {
                name: "Ana Dumitrescu",
                location: "București", 
                rating: 5,
                comment: "Serviciul este excepțional și produsele sunt întotdeauna proaspete. Am comandat pentru evenimente speciale și totul a fost perfect."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Vrei să Ne Cunoaștem Mai Bine?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru a discuta despre produsele noastre sau pentru a programa 
              o vizită în una din locațiile noastre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary text-lg px-8 py-4">
                Contactează-ne
              </a>
              <a href="/comanda" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary">
                Comandă Acum
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClientDesprePage
