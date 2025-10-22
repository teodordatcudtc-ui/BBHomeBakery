'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'

type Location = {
  id: string
  name: string
  address: string
  type: string
  icon: string
  coordinates?: {
    lat: number
    lng: number
  }
  mapEmbed?: string
}

interface LocationCardProps {
  location: Location
}

const LocationCard = ({ location }: LocationCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card group"
    >
      <div className="p-6">
        <div className="flex items-start space-x-3 mb-4">
          <div className="text-2xl">{location.icon}</div>
          <div>
            <h3 className="text-lg font-display font-semibold text-secondary mb-1">
              {location.name}
            </h3>
            <p className="text-sm text-gray-500 capitalize">
              {location.type === 'magazin' ? 'Magazin' : 'Laborator'}
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-2 mb-4">
          <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
          <p className="text-gray-600 text-sm leading-relaxed">
            {location.address}
          </p>
        </div>
        
        <div className="flex space-x-2">
          <Link 
            href={`/locatii#${location.id}`}
            className="btn-outline text-sm flex-1 text-center"
          >
            Detalii
          </Link>
          <button 
            onClick={() => {
              // Open map in new tab
              const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`
              window.open(mapUrl, '_blank')
            }}
            className="btn-primary text-sm flex-1 flex items-center justify-center"
          >
            <ExternalLink size={14} className="mr-1" />
            Hartă
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default LocationCard
