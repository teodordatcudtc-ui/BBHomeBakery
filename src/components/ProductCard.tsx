'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'

type Product = {
  id: string | number
  name: string
  description: string
  price: string
  image: string
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card group"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href="/comanda" className="btn-primary">
            <ShoppingCart size={18} className="mr-2" />
            Comandă
          </Link>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-secondary mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400" size={16} />
            <span className="text-sm text-gray-600">4.9</span>
          </div>
          <span className="text-lg font-semibold text-primary">
            {product.price}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
