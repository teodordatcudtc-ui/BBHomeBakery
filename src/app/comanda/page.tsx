import { Metadata } from 'next'
import ClientComandaPage from './ClientComandaPage'

export const metadata: Metadata = {
  title: 'Comandă',
  description: 'Comandă produsele tale preferate de la B&B Home Bakery. Formular simplu și rapid pentru comenzi personalizate.',
  openGraph: {
    title: 'Comandă - B&B Home Bakery',
    description: 'Completează formularul de comandă pentru produsele noastre delicioase. Livrare în toate locațiile noastre.',
  },
}

const ComandaPage = () => {
  return <ClientComandaPage />
}

export default ComandaPage
