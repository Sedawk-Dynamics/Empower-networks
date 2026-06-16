'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
  animate,
  useInView,
} from 'framer-motion'
import { ArrowDown, Globe, TrendingUp, Shield } from 'lucide-react'

const BRAND = '#E31E24'
const ACCENT = '#FF8A3D'
const BASE = '#070710'

const WORDS = ['IMPORT', 'EXPORT', 'GLOBAL CONNECT']

const stats = [
  { icon: Globe, to: 50, suffix: '+', label: 'Countries Served' },
  { icon: TrendingUp, to: 500, suffix: '+', label: 'Successful Shipments' },
  { icon: Shield, to: 100, suffix: '%', label: 'Quality Assured' },
]

/* ----------------------------------------------------------------------------
 * Signature: a live, mouse-reactive trade-route network.
 * Nodes drift, link to nearby nodes, and reach toward the cursor — so the
 * background is in constant gentle motion instead of a frozen photo.
 * ------------------------------------------------------------------------- */
function NetworkCanvas({ reduce }: { reduce: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let raf = 0
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    type P = { x: number; y: number; vx: number; vy: number; r: number }
    let points: P[] = []

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * DPR
      canvas.height = height * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
      const count = Math.min(90, Math.max(28, Math.floor((width * height) / 15000)))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
        r: Math.random() * 1.6 + 0.6,
      }))
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const { x: mx, y: my } = mouse.current

      for (const p of points) {
        if (!reduce) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,138,61,0.6)'
        ctx.fill()
      }

      for (let i = 0; i < points.length; i++) {
        const a = points[i]
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 130) {
            ctx.strokeStyle = `rgba(227,30,36,${(1 - dist / 130) * 0.32})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const dm = Math.hypot(a.x - mx, a.y - my)
        if (dm < 190) {
          ctx.strokeStyle = `rgba(255,138,61,${(1 - dm / 190) * 0.7})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mx, my)
          ctx.stroke()
        }
      }
    }

    const loop = () => {
      draw()
      raf = requestAnimationFrame(loop)
    }

    if (reduce) {
      draw() // one static frame, no animation
    } else {
      loop()
    }

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 }
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [reduce])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
}

/* Drifting colored light blobs — kills the "flat dark" feeling. */
function Aurora({ reduce }: { reduce: boolean }) {
  const blob = (className: string, color: string, anim: object, dur: number) => (
    <motion.div
      className={`absolute rounded-full blur-[120px] ${className}`}
      style={{ background: `radial-gradient(circle, ${color}, transparent 70%)` }}
      animate={reduce ? undefined : anim}
      transition={reduce ? undefined : { duration: dur, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {blob('-top-1/4 -left-1/4 w-[60vw] h-[60vw]', 'rgba(227,30,36,0.38)', { x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }, 15)}
      {blob('top-1/4 right-0 w-[52vw] h-[52vw]', 'rgba(255,138,61,0.28)', { x: [0, -70, 0], y: [0, 60, 0], scale: [1.1, 1, 1.1] }, 18)}
      {blob('bottom-0 left-1/3 w-[46vw] h-[46vw]', 'rgba(168,40,90,0.26)', { x: [0, 50, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }, 21)}
    </div>
  )
}

/* Stat numbers that count up when they scroll into view. */
function CountUp({ to, suffix, reduce }: { to: number; suffix: string; reduce: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [val, setVal] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    })
    return () => controls.stop()
  }, [inView, to, reduce])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

export default function HeroSection() {
  const reduce = useReducedMotion() ?? false
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Cursor-following spotlight that adds light where the mouse is.
  const rawX = useMotionValue(-1000)
  const rawY = useMotionValue(-1000)
  const sx = useSpring(rawX, { stiffness: 150, damping: 30, mass: 0.4 })
  const sy = useSpring(rawY, { stiffness: 150, damping: 30, mass: 0.4 })
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${sx}px ${sy}px, rgba(227,30,36,0.16), rgba(255,138,61,0.06) 42%, transparent 66%)`

  const handleMouse = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    rawX.set(e.clientX - rect.left)
    rawY.set(e.clientY - rect.top)
  }

  // Cycle a highlight across the IMPORT • EXPORT • GLOBAL CONNECT words.
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setActive((a) => (a + 1) % WORDS.length), 2000)
    return () => clearInterval(id)
  }, [reduce])

  const title = 'EMPOWER NETWORKS'

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouse}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
      style={{ backgroundColor: BASE }}
    >
      {/* ---------- Background stack (parallax) ---------- */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {/* Optional photo — now a faint texture, not the whole mood */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
        />
        {/* Legibility + tint overlays (lighter than before) */}
        <div className="absolute inset-0" style={{ backgroundColor: BASE, opacity: 0.55 }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070710] via-[#070710]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070710] via-transparent to-transparent" />

        <Aurora reduce={reduce} />

        {/* Slowly panning grid */}
        <motion.div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
          animate={reduce ? undefined : { backgroundPosition: ['0px 0px', '56px 56px'] }}
          transition={reduce ? undefined : { duration: 9, repeat: Infinity, ease: 'linear' }}
        />

        <NetworkCanvas reduce={reduce} />
      </motion.div>

      {/* Cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[6]"
        style={{ background: spotlight, mixBlendMode: 'screen' }}
        aria-hidden
      />

      {/* Animated top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: 'easeInOut' }}
        className="absolute left-0 right-0 top-0 z-20 h-[2px] origin-left"
        style={{ background: `linear-gradient(90deg, ${BRAND}, ${ACCENT}, ${BRAND})` }}
      />

      {/* ---------- Content ---------- */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex items-center gap-3"
        >
          <motion.span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: BRAND }}
            animate={reduce ? undefined : { opacity: [0.4, 1, 0.4], scale: [0.85, 1.15, 0.85] }}
            transition={reduce ? undefined : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="h-[2px] w-8" style={{ backgroundColor: BRAND }} />
          <span className="text-xs font-bold uppercase tracking-[0.4em]" style={{ color: BRAND }}>
            Global Trade Solutions
          </span>
        </motion.div>

        {/* Headline — per-letter rise + shimmering gradient fill */}
        <motion.h1
          className="font-heading mb-4 bg-clip-text text-5xl font-black leading-none tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          style={{
            backgroundImage:
              'linear-gradient(110deg, #ffffff 30%, #ffd9b3 44%, #E31E24 52%, #ffd9b3 60%, #ffffff 74%)',
            backgroundSize: '250% 100%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 40px rgba(227,30,36,0.35))',
          }}
          animate={reduce ? undefined : { backgroundPosition: ['200% 0', '-200% 0'] }}
          transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: 'linear' }}
        >
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle words with a cycling highlight */}
        <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-6">
          {WORDS.map((word, i) => {
            const isActive = active === i
            return (
              <div key={word} className="flex items-center gap-3 sm:gap-6">
                {i > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: BRAND }}
                  />
                )}
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="font-heading text-base font-bold tracking-[0.2em] transition-all duration-500 sm:text-xl md:text-2xl"
                  style={{
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.45)',
                    textShadow: isActive ? `0 0 24px ${ACCENT}` : 'none',
                  }}
                >
                  {word}
                </motion.span>
              </div>
            )
          })}
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mb-10 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
        >
          Connecting businesses worldwide through reliable sourcing of agricultural
          products, industrial chemicals, and scrap materials. Your trusted partner
          in international trade.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mb-16 flex flex-col gap-4 sm:flex-row"
        >
          {/* Primary with pulsing glow + shine sweep */}
          <div className="relative inline-flex">
            <motion.span
              className="absolute -inset-2 rounded-full blur-xl"
              style={{ backgroundColor: BRAND, opacity: 0.4 }}
              animate={reduce ? undefined : { opacity: [0.25, 0.6, 0.25], scale: [0.96, 1.04, 0.96] }}
              transition={reduce ? undefined : { duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            />
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 text-sm font-bold tracking-wider text-white transition-transform duration-300 hover:scale-105 sm:text-base"
              style={{ backgroundColor: BRAND }}
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Get In Touch
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
              {!reduce && (
                <motion.span
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)',
                  }}
                  initial={{ x: '-130%' }}
                  animate={{ x: ['-130%', '130%'] }}
                  transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: 'easeInOut' }}
                  aria-hidden
                />
              )}
            </a>
          </div>

          <a
            href="#products"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold tracking-wider text-white/80 transition-all duration-300 hover:border-[#FF8A3D]/60 hover:bg-white/5 hover:text-white sm:text-base"
          >
            Our Products
          </a>
        </motion.div>

        {/* Stats — counting numbers + gently floating icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="flex flex-wrap gap-8 sm:gap-12"
        >
          {stats.map(({ icon: Icon, to, suffix, label }, i) => (
            <div key={label} className="flex items-center gap-3">
              <motion.div
                className="flex h-10 w-10 items-center justify-center rounded-full border"
                style={{ backgroundColor: 'rgba(227,30,36,0.1)', borderColor: 'rgba(227,30,36,0.25)' }}
                animate={reduce ? undefined : { y: [0, -6, 0] }}
                transition={reduce ? undefined : { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
              >
                <Icon size={18} style={{ color: BRAND }} />
              </motion.div>
              <div>
                <p className="font-heading text-xl font-black leading-none text-white">
                  <CountUp to={to} suffix={suffix} reduce={reduce} />
                </p>
                <p className="mt-0.5 text-xs text-white/55">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={reduce ? undefined : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-white/30" />
        </motion.div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">Scroll</span>
      </motion.div>
    </section>
  )
}