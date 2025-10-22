import { Metadata } from 'next'
import ClientProdusePage from './ClientProdusePage'

export const metadata: Metadata = {
  title: 'Produse',
  description: 'Descoperă toate produsele noastre delicioase: torturi, prăjituri, brioșe și produse de laborator. Produse artizanale cu ingrediente naturale.',
  openGraph: {
    title: 'Produse - B&B Home Bakery',
    description: 'Explorează toate produsele noastre delicioase: torturi personalizate, prăjituri tradiționale, brioșe proaspete și multe altele.',
  },
}

const ProdusePage = () => {
  return <ClientProdusePage />
}

export default ProdusePage
