import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://empowernetworks.co.in'),
  title: 'Empower Networks Private Limited | Global Import • Export • Trade Sourcing',
  description:
    'Empower Networks Private Limited is an ISO certified global import & export partner specializing in agricultural products (spices, grains, fruits), industrial chemicals (soda ash), and scrap materials. Streamlining international trade from Ahmedabad, India.',
  keywords: [
    'Empower Networks Private Limited',
    'import export company India',
    'global trade partner',
    'agricultural products exporter',
    'spices and grains exporter',
    'fresh fruits export',
    'soda ash chemicals supplier',
    'scrap materials importer',
    'ferrous scrap trade',
    'non-ferrous scrap exporter',
    'international logistics India',
    'Ahmedabad trade company',
    'reliable sourcing solutions'
  ].join(', '),
  authors: [{ name: 'Empower Networks Private Limited', url: 'https://empowernetworks.co.in' }],
  creator: 'Empower Networks Private Limited',
  publisher: 'Empower Networks Private Limited',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Empower Networks Private Limited | Global Import • Export',
    description:
      'ISO certified global import & export partner specializing in agricultural products, industrial chemicals, and scrap materials. Connecting local markets to global demands.',
    url: 'https://empowernetworks.co.in',
    siteName: 'Empower Networks',
    type: 'website',
    images: [
      {
        url: '/Empower Logo white red Horizontal png.png',
        width: 1200,
        height: 630,
        alt: 'Empower Networks Private Limited - Import Export Global Connect',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empower Networks Private Limited | Global Import • Export',
    description:
      'ISO certified global import & export partner specializing in agricultural products, industrial chemicals, and scrap materials.',
    images: ['/Empower Logo white red Horizontal png.png'],
    creator: '@empowernetworks',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#E31E24',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} bg-background`}    >
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': 'Empower Networks Private Limited',
              'alternateName': 'Empower Networks',
              'description': 'Empower Networks Private Limited is a premier ISO certified global import and export company specializing in agricultural products, industrial chemicals, and scrap materials.',
              'url': 'https://empowernetworks.co.in',
              'logo': 'https://empowernetworks.co.in/Empower%20Logo%20white%20red%20Horizontal%20png.png',
              'contactPoint': [
                {
                  '@type': 'ContactPoint',
                  'telephone': '+91-9712812881',
                  'contactType': 'customer service',
                  'areaServed': 'Worldwide',
                  'availableLanguage': ['en', 'Hindi', 'Gujarati']
                }
              ],
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Ahmedabad',
                'addressRegion': 'Gujarat',
                'addressCountry': 'India'
              },
              'sameAs': [
                'https://www.linkedin.com/company/empower-networks-private-limited',
                'https://www.instagram.com/empower_networks',
                'https://www.facebook.com/empowernetworks',
                'https://twitter.com/empowernetworks',
                'https://www.youtube.com/@empowernetworks'
              ]
            })
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
