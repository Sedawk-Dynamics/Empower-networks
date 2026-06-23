import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Global Trade Enquiries | Empower Networks',
  description:
    'Get in touch with Empower Networks Private Limited for reliable import, export, and global trade sourcing enquiries. Contact our Ahmedabad, India headquarters at +91 9712812881 or email us at info@empowernetworks.co.in.',
  keywords:
    'contact Empower Networks, global trade enquiries, import export contact India, Ahmedabad import export office, partner with us, agricultural trade contact, industrial chemicals enquiries',
  alternates: {
    canonical: 'https://empowernetworks.co.in/contact',
  },
  openGraph: {
    title: 'Contact Us | Global Trade Enquiries | Empower Networks',
    description:
      'Partner with Empower Networks Private Limited for streamlined import & export solutions. Reach out via phone or email for enquiries.',
    url: 'https://empowernetworks.co.in/contact',
    siteName: 'Empower Networks',
    type: 'website',
    images: [
      {
        url: '/Empower Logo white red Horizontal png.png',
        width: 1200,
        height: 630,
        alt: 'Contact Empower Networks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Global Trade Enquiries | Empower Networks',
    description:
      'Partner with Empower Networks Private Limited for streamlined import & export solutions.',
    images: ['/Empower Logo white red Horizontal png.png'],
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
