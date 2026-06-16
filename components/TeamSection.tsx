'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase } from 'lucide-react'

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

const team = [
  {
    name: 'Ravikumar Sabhani',
    designation: 'Co-Founder',
    role: 'Drives the company vision and global business strategy with deep industry expertise.',
    initial: 'R',
  },
  {
    name: 'Bonykumar Patel',
    designation: 'Co-Founder',
    role: 'Oversees operations, supplier relationships, and strategic growth initiatives.',
    initial: 'B',
  },
  {
    name: 'Dhruv Sathwara',
    designation: 'Export Head',
    role: 'Manages all export consignments, ensuring smooth shipment and logistics coordination.',
    initial: 'D',
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="team" className="relative bg-[#141414] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E31E24]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-[#E31E24] text-xs font-bold tracking-[0.4em] uppercase">The People Behind</span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>
          <AnimatedHeading
            text="Meet Our Team"
            className="text-3xl sm:text-4xl lg:text-5xl text-white"
          />
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-[#0F0F0F] border border-white/5 rounded-2xl p-7 text-center overflow-hidden hover:border-[#E31E24]/30 hover:bg-[#131313] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(227,30,36,0.1)] card-shine cursor-default"
            >
              {/* Glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#E31E24]/5 blur-2xl group-hover:bg-[#E31E24]/10 transition-colors duration-500 pointer-events-none" />

              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="w-full h-full rounded-full bg-[#E31E24]/10 border-2 border-[#E31E24]/25 group-hover:border-[#E31E24]/60 transition-all duration-500 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(227,30,36,0.2)]">
                  <span className="text-[#E31E24] font-heading font-black text-3xl">
                    {member.initial}
                  </span>
                </div>
              </div>

              <h3 className="font-heading text-base font-bold text-white mb-1">{member.name}</h3>

              <div className="flex items-center justify-center gap-1.5 mb-3">
                <Briefcase size={11} className="text-[#E31E24]" />
                <span className="text-xs text-[#E31E24] font-semibold tracking-wider">{member.designation}</span>
              </div>

              <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/65 transition-colors">
                {member.role}
              </p>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[#E31E24] transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
