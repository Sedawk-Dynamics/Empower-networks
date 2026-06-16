import Navbar from '@/components/Navbar'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contact Us | Empower Networks Private Limited',
  description: 'Get in touch with Empower Networks for import, export, and global trade enquiries. Phone: +91 9712812881 | Email: info@empowernetworks.co.in',
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
