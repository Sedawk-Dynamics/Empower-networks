import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import VisionMissionSection from '@/components/VisionMissionSection'
import FounderMessage from '@/components/FounderMessage'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import TeamSection from '@/components/TeamSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <FounderMessage />
      <ServicesSection />
      <WhyChooseUs />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
