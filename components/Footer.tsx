'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

const products = [
  'Agricultural Products',
  'Industrial Chemicals',
  'Scrap Materials',
]

const services = [
  'Import Services',
  'Export Services',
  'Supplier Network',
  'Logistics Coordination',
  'Product Sourcing',
]

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#060606] border-t border-white/5 overflow-hidden">
      {/* Top red accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Hqp6xFcxTpCvlOpKrEHiKsDTbjOdFB.png"
                alt="Empower Networks Logo"
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Global Import & Export solutions. Connecting businesses worldwide through reliable sourcing of agricultural, chemical, and scrap products.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <Globe size={12} className="text-[#E31E24]" />
              <a
                href="https://empowernetworks.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                empowernetworks.co.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase mb-5 red-underline">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/45 hover:text-[#E31E24] text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-[1px] bg-white/20 group-hover:bg-[#E31E24] group-hover:w-4 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase mb-5 red-underline">Products</h4>
            <ul className="space-y-2.5 mb-6">
              {products.map((item) => (
                <li key={item} className="text-white/45 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]/50" />
                  {item}
                </li>
              ))}
            </ul>
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase mb-4 red-underline">Services</h4>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item} className="text-white/45 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24]/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white tracking-wider uppercase mb-5 red-underline">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919712812881" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#E31E24]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E31E24]/20 transition-colors">
                    <Phone size={13} className="text-[#E31E24]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wider">Phone</p>
                    <p className="text-white/60 group-hover:text-white text-sm transition-colors">+91 9712812881</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@empowernetworks.co.in" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#E31E24]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E31E24]/20 transition-colors">
                    <Mail size={13} className="text-[#E31E24]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-wider">Email</p>
                    <p className="text-white/60 group-hover:text-white text-sm transition-colors break-all">info@empowernetworks.co.in</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E31E24]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={13} className="text-[#E31E24]" />
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">Address</p>
                  <p className="text-white/55 text-sm leading-relaxed">
                    A-317, MoneyPlant High Street,<br />Jagatpur, Gota, Ahmedabad – 382470
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Empower Networks Private Limited. All rights reserved.
          </p>
          <p className="text-white/25 text-xs flex items-center gap-1">
            <span>CIN:</span>
            <span className="text-white/35">Registered in India</span>
          </p>
          <p className="text-white/25 text-[11px]">
            IMPORT &bull; EXPORT &bull; GLOBAL CONNECT
          </p>
        </div>
      </div>
    </footer>
  )
}
