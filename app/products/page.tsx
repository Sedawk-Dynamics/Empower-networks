'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'
import { Layers, Users, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import ProductsSection from '@/components/ProductsSection'
import Footer from '@/components/Footer'

const BRAND = '#E31E24'
const ACCENT = '#FF8A3D'
const BASE = '#070710'

const stats = [
  { icon: Layers, to: 20, suffix: '+', label: 'Product Categories' },
  { icon: Users, to: 50, suffix: '+', label: 'Global Partners' },
  { icon: ShieldCheck, to: 100, suffix: '%', label: 'Quality Assured' },
]

function CountUp({ to, suffix, run }: { to: number; suffix: string; run: boolean }) {
  const reduce = useReducedMotion() ?? false
  const [val, setVal] = useState(reduce ? to : 0)
  useEffect(() => {
    if (!run || reduce) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    })
    return () => controls.stop()
  }, [run, to, reduce])
  return (
    <span>
      {val}
      {suffix}
    </span>
  )
}

function ProductsHero() {
  const reduce = useReducedMotion() ?? false
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      ref={ref}
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pb-20 pt-28"
      style={{ backgroundColor: BASE }}
    >
      {/* Drifting aurora light */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/3 right-0 h-[60vw] w-[60vw] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(227,30,36,0.30), transparent 70%)' }}
          animate={reduce ? undefined : { x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
          transition={reduce ? undefined : { duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-1/4 left-0 h-[50vw] w-[50vw] rounded-full blur-[130px]"
          style={{ background: 'radial-gradient(circle, rgba(255,138,61,0.24), transparent 70%)' }}
          animate={reduce ? undefined : { x: [0, 60, 0], y: [0, -40, 0], scale: [1.1, 1, 1.1] }}
          transition={reduce ? undefined : { duration: 19, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Slowly panning grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        animate={reduce ? undefined : { backgroundPosition: ['0px 0px', '56px 56px'] }}
        transition={reduce ? undefined : { duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Animated top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, ease: 'easeInOut' }}
        className="absolute left-0 right-0 top-0 z-20 h-[2px] origin-left"
        style={{ background: `linear-gradient(90deg, ${BRAND}, ${ACCENT}, ${BRAND})` }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
            <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: BRAND }}>
              Our Portfolio
            </span>
            <motion.span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: BRAND }}
              animate={reduce ? undefined : { opacity: [0.4, 1, 0.4], scale: [0.85, 1.15, 0.85] }}
              transition={reduce ? undefined : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Headline with shimmering gradient word */}
          <h1 className="font-heading mb-5 text-balance text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Global Trade{' '}
            <motion.span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(110deg, #E31E24 20%, #FF8A3D 50%, #E31E24 80%)',
                backgroundSize: '250% 100%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
              animate={reduce ? undefined : { backgroundPosition: ['200% 0', '-200% 0'] }}
              transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: 'linear' }}
            >
              Products
            </motion.span>
          </h1>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/65 sm:text-lg">
            Premium agricultural produce, industrial chemicals, and scrap materials sourced
            and exported globally. We handle sourcing, quality assurance, logistics, and
            documentation for seamless international trade.
          </p>
        </motion.div>

        {/* Stats — equal-width cells with dividers so sizing stays even */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map(({ icon: Icon, to, suffix, label }, i) => (
            <div key={label} className="flex flex-col items-center gap-2 px-6 py-7">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border"
                style={{ backgroundColor: 'rgba(227,30,36,0.1)', borderColor: 'rgba(227,30,36,0.25)' }}
              >
                <Icon size={18} style={{ color: BRAND }} />
              </div>
              <div className="font-heading text-3xl font-black sm:text-4xl" style={{ color: BRAND }}>
                <CountUp to={to} suffix={suffix} run={inView} />
              </div>
              <p className="text-sm font-medium text-white/55">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: BASE }}>
      <Navbar />
      <ProductsHero />
      <ProductsSection />
      <Footer />
    </main>
  )
}