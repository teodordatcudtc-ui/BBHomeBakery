import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import { useState } from 'react'
import ClientMeniuPage from './ClientMeniuPage'

export const metadata: Metadata = {
  title: 'Meniu',
  description: 'Descoperă meniul nostru complet: torturi, prăjituri, brioșe și produse de laborator. Produse artizanale cu ingrediente naturale.',
  openGraph: {
    title: 'Meniu - B&B Home Bakery',
    description: 'Explorează toate produsele noastre delicioase: torturi personalizate, prăjituri tradiționale, brioșe proaspete și multe altele.',
  },
}

const MeniuPage = () => {
  return <ClientMeniuPage />
}

export default MeniuPage
