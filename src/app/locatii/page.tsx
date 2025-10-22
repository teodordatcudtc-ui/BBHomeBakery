import { Metadata } from 'next'
import ClientLocatiiPage from './ClientLocatiiPage'

export const metadata: Metadata = {
  title: 'Locații',
  description: 'Descoperă toate locațiile B&B Home Bakery din București și Ilfov. Magazine și laborator cu produse artizanale de calitate.',
  openGraph: {
    title: 'Locații - B&B Home Bakery',
    description: 'Găsește cele mai apropiate locații B&B Home Bakery. Multiple puncte de lucru în București și laborator în Bragadiru.',
  },
}

const LocatiiPage = () => {
  return <ClientLocatiiPage />
}

export default LocatiiPage
