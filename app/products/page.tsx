import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Global Products Portfolio | Import & Export | Empower Networks',
  description:
    'Explore the comprehensive global trade portfolio of Empower Networks Private Limited. We specialize in importing and exporting premium agricultural products (grains, spices, fruits), industrial chemicals (soda ash), and high-grade ferrous and non-ferrous scrap materials with complete quality assurance.',
  keywords:
    'agricultural products, grains, spices, fresh fruits, vegetables, industrial chemicals, soda ash, ferrous scrap, non-ferrous scrap, import export portfolio, global trade sourcing, India export, Empower Networks products',
  alternates: {
    canonical: 'https://empowernetworks.co.in/products',
  },
  openGraph: {
    title: 'Global Products Portfolio | Import & Export | Empower Networks',
    description:
      'Explore the agricultural products, industrial chemicals, and scrap metal portfolio of Empower Networks Private Limited. Reliable sourcing and global supply solutions.',
    url: 'https://empowernetworks.co.in/products',
    siteName: 'Empower Networks',
    type: 'website',
    images: [
      {
        url: '/Empower Logo white red Horizontal png.png',
        width: 1200,
        height: 630,
        alt: 'Empower Networks Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Products Portfolio | Import & Export | Empower Networks',
    description:
      'Explore the agricultural products, industrial chemicals, and scrap metal portfolio of Empower Networks Private Limited.',
    images: ['/Empower Logo white red Horizontal png.png'],
  },
}

export default function Page() {
  return <ProductsClient />
}