'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'

const ClientBlogPage = () => {
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
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă articole despre cofetărie, ingrediente naturale, retete tradiționale 
              și sfaturi culinare de la echipa noastră de experți.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-secondary mb-8 text-center">
              Articolul Săptămânii
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center"
              >
                <div className="text-6xl opacity-50">📝</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Calendar size={16} />
                    <span className="text-sm">
                      {new Date(siteConfig.blogPosts[0].date).toLocaleDateString('ro-RO')}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <User size={16} />
                    <span className="text-sm">{siteConfig.blogPosts[0].author}</span>
                  </div>
                </div>

                <h3 className="text-2xl lg:text-3xl font-display font-bold text-secondary mb-4">
                  {siteConfig.blogPosts[0].title}
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {siteConfig.blogPosts[0].excerpt}
                </p>
                <Link 
                  href={`/blog/${siteConfig.blogPosts[0].slug}`}
                  className="btn-primary inline-flex items-center"
                >
                  Citește Articolul
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold text-secondary mb-4 text-center">
              Toate Articolele
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
              Explorează toate articolele noastre despre arta culinară și tradițiile cofetăriei
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="relative h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                  <div className="text-4xl opacity-50">📝</div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      <span>
                        {new Date(post.date).toLocaleDateString('ro-RO')}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 text-sm">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-secondary font-medium inline-flex items-center transition-colors duration-200"
                  >
                    Citește mai mult
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Abonează-te la Newsletter
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Primește cele mai noi articole, retete și oferte speciale direct în inbox-ul tău.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Adresa ta de email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                />
                <button className="btn-secondary px-6 py-3">
                  Abonează-te
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClientBlogPage
