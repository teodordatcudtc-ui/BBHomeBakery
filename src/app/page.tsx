import { Metadata } from 'next'
import ClientHomePage from './ClientHomePage'

export const metadata: Metadata = {
  title: 'Acasă',
  description: 'B&B Home Bakery - Produse artizanale, proaspete, pentru fiecare zi. Cofetărie cu multiple locații în București și Ilfov.',
  openGraph: {
    title: 'B&B Home Bakery - Produse Artizanale',
    description: 'Descoperă produsele noastre delicioase: torturi, prăjituri, brioșe și multe altele. Multiple locații în București și Ilfov.',
  },
}

const HomePage = () => {
  return <ClientHomePage />
}

export default HomePage
