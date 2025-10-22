import { Metadata } from 'next'
import ClientGaleriePage from './ClientGaleriePage'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Admiră produsele noastre în galeria foto. Torturi, prăjituri, brioșe și multe altele, toate create cu multă dragoste.',
  openGraph: {
    title: 'Galerie - B&B Home Bakery',
    description: 'Explorează galeria noastră de imagini cu produsele noastre delicioase și creațiile noastre artizanale.',
  },
}

const GaleriePage = () => {
  return <ClientGaleriePage />
}

export default GaleriePage
