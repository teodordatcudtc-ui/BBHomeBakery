import { Metadata } from 'next'
import ClientDesprePage from './ClientDesprePage'

export const metadata: Metadata = {
  title: 'Despre Noi',
  description: 'Descoperă povestea B&B Home Bakery: de la pasiunea pentru cofetărie la crearea produselor artizanale cu ingrediente naturale.',
  openGraph: {
    title: 'Despre B&B Home Bakery',
    description: 'Află mai multe despre echipa noastră, valorile noastre și laboratorul din Bragadiru unde creăm produsele noastre delicioase.',
  },
}

const DesprePage = () => {
  return <ClientDesprePage />
}

export default DesprePage
