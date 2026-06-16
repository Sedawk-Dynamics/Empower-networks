'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-[2px] bg-[#E31E24]" />
      <span className="text-[#E31E24] text-xs font-bold tracking-[0.4em] uppercase">{children}</span>
    </div>
  )
}

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

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative bg-[#0F0F0F] py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E31E24]/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#E31E24]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/about-global.png"
                alt="Empower Networks global trade network"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 bg-[#E31E24] text-white rounded-2xl px-6 py-4 shadow-2xl"
            >
              <p className="text-3xl font-black font-heading leading-none">2024</p>
              <p className="text-xs font-semibold tracking-wider mt-1 text-white/80">FOUNDED</p>
            </motion.div>
            {/* Corner accent */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#E31E24]/60 rounded-tl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#E31E24]/60 rounded-br-2xl mt-12 mr-4" />
          </motion.div>

          {/* Content side */}
          <div>
            <SectionLabel>About Us</SectionLabel>
            <AnimatedHeading
              text="Your Trusted Global Trade Partner"
              className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/60 leading-relaxed mb-4 text-base"
            >
              Empower Networks Private Limited is a global import and export company
              specializing in agricultural products, industrial chemicals, and scrap
              materials. We help businesses access quality products through an extensive
              network of suppliers, manufacturers, and strategic partners across
              international markets.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/60 leading-relaxed mb-8 text-base"
            >
              Driven by reliability, professionalism, and customer satisfaction, we provide
              efficient sourcing, procurement, and supply solutions tailored to the evolving
              needs of businesses worldwide. With a focus on excellence and continuous growth,
              we serve as a trusted business partner for organizations seeking dependable
              product sourcing and international supply solutions.
            </motion.p>

            {/* Key points */}
            {[
              'Extensive global supplier & manufacturer network',
              'Specialized in Agri, Chemicals & Scrap Materials',
              'End-to-end procurement & logistics coordination',
              'Transparent, ethical business practices',
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="flex items-start gap-3 mb-3"
              >
                <div className="w-5 h-5 rounded-full bg-[#E31E24]/15 border border-[#E31E24]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E31E24]" />
                </div>
                <p className="text-white/75 text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
