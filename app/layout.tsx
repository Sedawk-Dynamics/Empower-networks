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
  title: 'Empower Networks Private Limited | Import • Export • Global Connect',
  description:
    'Empower Networks Private Limited is a global import and export company specializing in agricultural products, industrial chemicals, and scrap materials. Reliable sourcing and supply solutions worldwide.',
  keywords:
    'import export, agri products, industrial chemicals, scrap materials, global trade, Ahmedabad, India',
  authors: [{ name: 'Empower Networks Private Limited' }],
  openGraph: {
    title: 'Empower Networks Private Limited',
    description:
      'Global Import & Export — Agricultural Products, Industrial Chemicals, Scrap Materials',
    url: 'https://empowernetworks.co.in',
    siteName: 'Empower Networks',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#FFFFFF',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
