import { Metadata } from 'next'
import ClientBlogPage from './ClientBlogPage'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Descoperă articole despre cofetărie, ingrediente naturale, retete și sfaturi culinare de la echipa B&B Home Bakery.',
  openGraph: {
    title: 'Blog - B&B Home Bakery',
    description: 'Citește articolele noastre despre arta culinară, ingrediente naturale și tradițiile cofetăriei.',
  },
}

const BlogPage = () => {
  return <ClientBlogPage />
}

export default BlogPage
