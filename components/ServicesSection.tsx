'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, PackageOpen, PackageCheck, Link2, MapPin, Search } from 'lucide-react'

function AnimatedHeading({ text, className = '' }: { text: string; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <h2
      ref={ref}
      className={`font-heading font-black leading-tight text-balance ${className}`}
    >
      {text.split(' ').map((word, wi) => (
        <motion.span
          key={wi}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: wi * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  )
}

const services = [
  {
    icon: PackageOpen,
    title: 'Import Services',
    desc: 'Efficient procurement and sourcing solutions for businesses seeking quality products from global markets.',
    highlight: true,
  },
  {
    icon: PackageCheck,
    title: 'Export Services',
    desc: 'Reliable supply of agricultural products and industrial chemicals to international customers worldwide.',
    highlight: false,
  },
  {
    icon: Link2,
    title: 'Supplier Network Development',
    desc: 'Connecting businesses with reliable manufacturers and suppliers across various industries globally.',
    highlight: false,
  },
  {
    icon: MapPin,
    title: 'Logistics Coordination',
    desc: 'Supporting smooth movement of goods through effective shipment and supply chain coordination.',
    highlight: false,
  },
  {
    icon: Search,
    title: 'Product Sourcing',
    desc: 'Identification and procurement of products based on specific customer requirements and specifications.',
    highlight: false,
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="services" className="relative bg-white py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#E31E24]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#E31E24]" />
              <span className="text-[#E31E24] text-xs font-bold tracking-[0.4em] uppercase">What We Do</span>
            </div>
            <AnimatedHeading
              text="Our Core Services"
              className="text-3xl sm:text-4xl lg:text-5xl text-gray-900"
            />
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed lg:text-right">
            End-to-end trade solutions from sourcing to delivery, designed to power your global business.
          </p>
        </div>

        {/* Services list — alternating layout */}
        <div ref={ref} className="space-y-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border transition-all duration-400 cursor-default
                  ${service.highlight
                    ? 'bg-[#E31E24] border-transparent hover:shadow-[0_20px_60px_rgba(227,30,36,0.25)]'
                    : 'bg-white border-black/[0.06] shadow-soft hover:border-[#E31E24]/30 hover:bg-[#FAF9F7] hover:shadow-[0_18px_50px_rgba(227,30,36,0.12)]'
                  } hover:-translate-y-0.5`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                  ${service.highlight
                    ? 'bg-white/15'
                    : 'bg-[#E31E24]/10 border border-[#E31E24]/20 group-hover:bg-[#E31E24]/20'
                  } transition-colors`}
                >
                  <Icon size={22} className={service.highlight ? 'text-white' : 'text-[#E31E24]'} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-heading text-base sm:text-lg font-bold mb-1 ${service.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${service.highlight ? 'text-white/80' : 'text-gray-500 group-hover:text-gray-700'} transition-colors`}>
                    {service.desc}
                  </p>
                </div>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
                  ${service.highlight ? 'bg-white/15' : 'bg-black/[0.04] group-hover:bg-[#E31E24]/15'} transition-all group-hover:scale-110`}
                >
                  <ArrowUpRight size={16} className={service.highlight ? 'text-white' : 'text-gray-400 group-hover:text-[#E31E24]'} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
