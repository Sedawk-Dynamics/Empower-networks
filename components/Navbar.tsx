'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/#services' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Team', href: '/#team' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    
    // If link is to a different page or has a hash on another page
    if (href.startsWith('/') && !href.startsWith('/#')) {
      // Full page navigation (e.g., /products)
      router.push(href)
    } else if (href.includes('#')) {
      // Hash link - handle scroll smoothly
      const [path, hash] = href.split('#')
      const currentPathname = pathname || '/'
      
      // If navigating to a different page with hash
      if ((path && path !== currentPathname && path !== '') || currentPathname !== '/' && path === '') {
        // Navigate to different page with hash
        router.push(href)
        // Scroll after navigation completes
        setTimeout(() => {
          const el = document.querySelector(`#${hash}`)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 500)
      } else {
        // Same page - scroll to element directly
        setTimeout(() => {
          const el = document.querySelector(`#${hash}`)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 0)
      }
    } else {
      router.push(href)
    }
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white shadow-md border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick('/')}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Hqp6xFcxTpCvlOpKrEHiKsDTbjOdFB.png"
              alt="Empower Networks Logo"
              width={72}
              height={72}
              className="object-contain"
            />
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#E31E24] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[2px] bg-[#E31E24] transition-all duration-300 rounded-full" />
              </motion.button>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+919712812881"
              className="hidden sm:flex items-center gap-2 bg-[#E31E24] hover:bg-[#c01a1f] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(227,30,36,0.4)] hover:scale-105"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-[#E31E24]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-[#E31E24] hover:bg-red-50 rounded-lg transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
              <a
                href="tel:+919712812881"
                className="mt-2 flex items-center justify-center gap-2 bg-[#E31E24] text-white font-semibold px-4 py-3 rounded-full"
              >
                <Phone size={16} />
                +91 9712812881
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
