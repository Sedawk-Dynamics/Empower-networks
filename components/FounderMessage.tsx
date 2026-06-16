'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

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

export default function FounderMessage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-[#FAF9F7] py-24 lg:py-32 overflow-hidden">
      {/* Red accent left */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#E31E24]/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] bg-[#E31E24]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-[#E31E24] text-xs font-bold tracking-[0.4em] uppercase">Leadership</span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>
          <AnimatedHeading
            text="Message From Our Founders"
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900"
          />
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white border border-black/[0.06] shadow-soft rounded-3xl p-8 sm:p-12 overflow-hidden"
        >
          {/* Red corner accent */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#E31E24]/8 blur-2xl rounded-full -translate-x-8 -translate-y-8" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#C9A84C]/10 blur-3xl rounded-full translate-x-12 translate-y-12" />

          {/* Quote icon */}
          <div className="flex justify-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#E31E24]/10 border border-[#E31E24]/20 flex items-center justify-center">
              <Quote size={26} className="text-[#E31E24]" />
            </div>
          </div>

          <blockquote className="relative z-10 text-center">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              At Empower Networks Private Limited, our vision is to build strong global
              partnerships through reliability, professionalism, and quality-driven solutions.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              We are committed to connecting businesses with trusted sourcing and import-export
              opportunities while creating long-term value for our customers and partners.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
              As we continue to grow, our focus remains on delivering excellence, fostering
              meaningful relationships, and expanding our reach across international markets.
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex-1 max-w-[80px] h-[1px] bg-black/10" />
              <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
              <div className="flex-1 max-w-[80px] h-[1px] bg-black/10" />
            </div>

            {/* Founders */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              {['Ravikumar Sabhani', 'Bonykumar Patel'].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                  className="flex flex-col items-center"
                >
                  {/* Avatar placeholder */}
                  <div className="w-16 h-16 rounded-full bg-[#E31E24]/15 border-2 border-[#E31E24]/30 flex items-center justify-center mb-3">
                    <span className="text-[#E31E24] font-heading font-black text-xl">
                      {name.charAt(0)}
                    </span>
                  </div>
                  <p className="font-heading font-bold text-gray-900 text-base">{name}</p>
                  <p className="text-xs text-[#E31E24] font-semibold tracking-wider mt-1">FOUNDER</p>
                </motion.div>
              ))}
            </div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
