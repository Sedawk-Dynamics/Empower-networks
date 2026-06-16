'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eye, Target, Heart } from 'lucide-react'

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

const missionPoints = [
  'To provide high-quality products and dependable sourcing solutions.',
  'To establish long-term partnerships built on trust and professionalism.',
  'To connect businesses with reliable suppliers and manufacturers worldwide.',
  'To ensure efficient procurement, logistics coordination, and customer support.',
]

const values = [
  { title: 'Reliability', desc: 'Consistent delivery and dependable business partnerships.' },
  { title: 'Professionalism', desc: 'Upholding the highest standards in every interaction.' },
  { title: 'Transparency', desc: 'Open, honest communication with all stakeholders.' },
  { title: 'Excellence', desc: 'Continuous improvement in all aspects of our operations.' },
  { title: 'Integrity', desc: 'Ethical practices and commitment to our word.' },
  { title: 'Growth', desc: 'Driving mutual success for clients, partners, and teams.' },
]

export default function VisionMissionSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Red glow top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#E31E24]/8 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-[#E31E24] text-xs font-bold tracking-[0.4em] uppercase">Our Foundation</span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>
          <AnimatedHeading
            text="Vision, Mission & Values"
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900"
          />
        </div>

        {/* Vision + Mission cards */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative group bg-white border border-black/[0.06] shadow-soft rounded-2xl p-8 overflow-hidden card-shine hover:border-[#E31E24]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(227,30,36,0.12)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E31E24]/5 blur-2xl rounded-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20 flex items-center justify-center mb-6">
                <Eye size={22} className="text-[#E31E24]" />
              </div>
              <p className="text-xs font-bold tracking-[0.3em] text-[#E31E24] uppercase mb-3">Our Vision</p>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-4">
                Globally Recognized Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To become a globally recognized organization delivering reliable sourcing
                and supply solutions while creating lasting value for customers, partners,
                and communities worldwide.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative group bg-[#E31E24] rounded-2xl p-8 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(227,30,36,0.3)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-black/10 blur-2xl rounded-full" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-6">
                <Target size={22} className="text-white" />
              </div>
              <p className="text-xs font-bold tracking-[0.3em] text-white/70 uppercase mb-3">Our Mission</p>
              <h3 className="font-heading text-xl font-bold text-white mb-4">
                Empowering Global Trade
              </h3>
              <ul className="space-y-2">
                {missionPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/85 text-sm leading-relaxed">
                    <span className="text-white font-bold mt-0.5 flex-shrink-0">0{i + 1}.</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Heart size={16} className="text-[#E31E24]" />
            <span className="text-[#E31E24] text-xs font-bold tracking-[0.4em] uppercase">Core Values</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              className="group bg-white border border-black/[0.06] shadow-soft rounded-xl p-4 text-center hover:border-[#E31E24]/40 hover:bg-[#FAF9F7] transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-8 h-8 rounded-lg bg-[#E31E24]/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-[#E31E24]/20 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
              </div>
              <p className="font-heading text-sm font-bold text-gray-900 mb-1">{val.title}</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
