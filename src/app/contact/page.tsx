import { Metadata } from 'next'
import ClientContactPage from './ClientContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează B&B Home Bakery pentru comenzi, întrebări sau informații. Găsește-ne în multiple locații din București și Ilfov.',
  openGraph: {
    title: 'Contact - B&B Home Bakery',
    description: 'Informații de contact, locații și program de lucru pentru toate punctele noastre de lucru.',
  },
}

const ContactPage = () => {
  return <ClientContactPage />
}

export default ContactPage
