'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

type GalleryImage = {
  id: number
  alt: string
  category: string
}

const ClientGaleriePage = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Galerie de imagini placeholder
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      alt: 'Tort cu ciocolată belgiană',
      category: 'Torturi'
    },
    {
      id: 2,
      alt: 'Cheesecake cu fructe de pădure',
      category: 'Prăjituri'
    },
    {
      id: 3,
      alt: 'Brioșe cu fructe proaspete',
      category: 'Brioșe'
    },
    {
      id: 4,
      alt: 'Tort elegant de nuntă',
      category: 'Torturi'
    },
    {
      id: 5,
      alt: 'Tiramisu clasic cu cafea',
      category: 'Prăjituri'
    },
    {
      id: 6,
      alt: 'Macarons colorați',
      category: 'Laborator'
    },
    {
      id: 7,
      alt: 'Eclere cu cremă de vanilie',
      category: 'Laborator'
    },
    {
      id: 8,
      alt: 'Carrot cake cu cremă de brânză',
      category: 'Prăjituri'
    },
    {
      id: 9,
      alt: 'Tort cu fructe proaspete',
      category: 'Torturi'
    },
    {
      id: 10,
      alt: 'Brioșe cu ciocolată și nuci',
      category: 'Brioșe'
    },
    {
      id: 11,
      alt: 'Brioșe cu vanilie naturală',
      category: 'Brioșe'
    },
    {
      id: 12,
      alt: 'Laboratorul nostru din Bragadiru',
      category: 'Laborator'
    }
  ]

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (selectedIndex + 1) % galleryImages.length
    setSelectedIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
    setSelectedIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
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
              Galeria Noastră
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Admiră produsele noastre în toată splendoarea lor. Fiecare imagine 
              spune o poveste despre pasiunea noastră pentru cofetărie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-square relative bg-gray-200 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📸</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                      <p className="text-lg font-semibold mb-1">{image.category}</p>
                      <p className="text-sm opacity-90">Click pentru a mări</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <X size={32} />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <ChevronRight size={32} />
              </button>

              {/* Image */}
              <div className="relative bg-gray-200 rounded-lg flex items-center justify-center" style={{ width: '800px', height: '600px' }}>
                <div className="text-8xl opacity-50">📸</div>
                
                {/* Image info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                  <p className="text-lg font-semibold">{selectedImage.alt}</p>
                  <p className="text-sm opacity-90">{selectedImage.category}</p>
                </div>
              </div>

              {/* Image counter */}
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Îți Plac Produsele Noastre?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru a comanda produsele tale preferate sau pentru a discuta 
              despre o comandă personalizată.
            </p>
            <div className="flex flex-row gap-4 justify-center items-center flex-wrap">
              <a href="/comanda" className="btn-secondary text-lg px-8 py-4 whitespace-nowrap">
                Comandă Acum
              </a>
              <a href="/produse" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-secondary whitespace-nowrap">
                Vezi Produsele
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ClientGaleriePage
