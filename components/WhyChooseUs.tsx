'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Truck, Star, Users, Package, Shield } from 'lucide-react'

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

const reasons = [
  {
    icon: Globe,
    title: 'Global Network',
    desc: 'Access to a broad network of suppliers, manufacturers, and business partners across international markets.',
    number: '01',
  },
  {
    icon: Truck,
    title: 'Efficient Sourcing',
    desc: 'Streamlined procurement processes that ensure consistency, availability, and competitive pricing.',
    number: '02',
  },
  {
    icon: Star,
    title: 'Quality Focus',
    desc: 'Commitment to delivering products that meet customer expectations and industry standards.',
    number: '03',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    desc: 'Dedicated support and customized solutions designed around individual client requirements.',
    number: '04',
  },
  {
    icon: Package,
    title: 'Product Range',
    desc: 'Comprehensive solutions across agricultural products, industrial chemicals, and scrap materials.',
    number: '05',
  },
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'Transparent communication, ethical business practices, and a commitment to long-term relationships.',
    number: '06',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="why-us" className="relative bg-[#FAF9F7] py-24 lg:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#E31E24]/6 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#C9A84C]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Horizontal rule top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E31E24]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-[#E31E24] text-xs font-bold tracking-[0.4em] uppercase">Our Edge</span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>
          <AnimatedHeading
            text="Why Choose Empower Networks?"
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-500 max-w-2xl mx-auto text-base"
          >
            We combine global reach with local expertise to deliver unmatched value
            in every trade relationship.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-white border border-black/[0.06] shadow-soft rounded-2xl p-7 overflow-hidden hover:border-[#E31E24]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(227,30,36,0.15)] card-shine cursor-default"
              >
                {/* Number */}
                <span className="absolute top-5 right-6 text-4xl font-black font-heading text-black/[0.04] group-hover:text-[#E31E24]/10 transition-colors duration-500">
                  {reason.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20 flex items-center justify-center mb-5 group-hover:bg-[#E31E24]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon size={22} className="text-[#E31E24]" />
                </div>

                <h3 className="font-heading text-lg font-bold text-gray-900 mb-3 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {reason.desc}
                </p>

                {/* Bottom border animate */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#E31E24] transition-all duration-500 rounded-b-2xl" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
