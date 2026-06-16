'use client'

import { useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  FlaskConical,
  Layers,
  ShoppingCart,
  ArrowUpRight,
} from 'lucide-react'

function AnimatedHeading({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

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
          transition={{
            duration: 0.7,
            delay: wi * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mr-[0.3em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  )
}

const productCategories = [
  {
    icon: Leaf,
    title: 'Agri Products',
    subtitle: 'For Export',
    image: '/images/fresh-fruits-vegetables.png',
    description:
      'Premium quality agricultural produce sourced directly from trusted Indian farms and cooperatives for global export markets.',
    items: [
      { name: 'Fresh Fruits & Vegetables', tag: 'Export' },
      { name: 'Frozen Fruits & Vegetables', tag: 'Export' },
      { name: 'Dehydrated Food', tag: 'Export' },
      { name: 'Spices', tag: 'Export' },
      { name: 'Pulses', tag: 'Import & Export' },
      { name: 'Grains', tag: 'Export' },
      { name: 'All Types of Flour', tag: 'Export' },
    ],
  },
  {
    icon: Layers,
    title: 'Scrap Materials',
    subtitle: 'For Import',
    image: '/images/ferrous-scrap.png',
    description:
      'High-grade ferrous and non-ferrous scrap materials for industrial and recycling applications across global markets.',
    items: [
      { name: 'Ferrous Scrap', tag: 'Import' },
      { name: 'Non-Ferrous Scrap', tag: 'Import' },
    ],
  },
  {
    icon: FlaskConical,
    title: 'Industrial Chemicals',
    subtitle: 'Import & Export',
    image: '/images/soda-ash-chemicals.png',
    description:
      'Diverse range of industrial chemicals sourced from trusted manufacturers and suppliers worldwide.',
    items: [
      { name: 'Sodium Sulphate', tag: 'Export' },
      { name: 'Caustic Soda Flakes', tag: 'Export' },
      { name: 'Copper Sulphate', tag: 'Export' },
      { name: 'Soda Ash Light', tag: 'Import & Export' },
      { name: 'Soda Ash Dense', tag: 'Import & Export' },
      { name: 'Sodium Nitrite', tag: 'Import & Export' },
      { name: 'Technical Grade Urea', tag: 'Import & Export' },
      { name: 'Potassium Chloride', tag: 'Import & Export' },
      { name: 'Para Phenylenediamine', tag: 'Export' },
      { name: 'Di Calcium Phosphate', tag: 'Import & Export' },
      { name: 'Sodium Chloride', tag: 'Export' },
    ],
  },
]

export default function ProductsSection() {

  const headerRef = useRef(null)

  const headerInView = useInView(headerRef, {

    once: true,

  })



  const autoplay = useRef(

    Autoplay({

      delay: 4500,

      stopOnInteraction: true,

    })

  )



  const [emblaRef, emblaApi] = useEmblaCarousel(

    {

      loop: true,

      align: 'start',

    },

    [autoplay.current]

  )



  const scrollPrev = useCallback(

    () => emblaApi?.scrollPrev(),

    [emblaApi]

  )



  const scrollNext = useCallback(

    () => emblaApi?.scrollNext(),

    [emblaApi]

  )



  return (

    <section

      id="products"

      className="relative overflow-hidden bg-[#0F0F0F] py-24 lg:py-32"

    >

      {/* Background glow */}

      <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[520px] rounded-full bg-[#E31E24]/5 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[420px] rounded-full bg-red-500/5 blur-[120px]" />



      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div

          ref={headerRef}

          className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"

        >

          <div>

            <div className="mb-4 flex items-center gap-3">

              <div className="h-[2px] w-8 bg-[#E31E24]" />

              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#E31E24]">

                What We Trade

              </span>

            </div>



            <AnimatedHeading

              text="Our Product Portfolio"

              className="text-3xl text-white sm:text-4xl lg:text-5xl"

            />



            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/45">

              Click any product to enquire — we handle sourcing,

              logistics and documentation end-to-end.

            </p>

          </div>



          {/* Navigation */}

          <div className="flex gap-3">

            <button

              onClick={scrollPrev}

              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-[#E31E24]/60 hover:bg-[#E31E24]/10 hover:text-white"

            >

              <ChevronLeft size={20} />

            </button>



            <button

              onClick={scrollNext}

              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-[#E31E24]/60 hover:bg-[#E31E24]/10 hover:text-white"

            >

              <ChevronRight size={20} />

            </button>

          </div>

        </div>



        {/* Carousel */}

        <div

          ref={emblaRef}

          className="overflow-hidden"

        >

          <div className="flex gap-5">

            {productCategories.map((cat, i) => {

              const Icon = cat.icon



              return (

                <div

                  key={cat.title}

                  className="min-w-0 flex-none w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"

                >

                  <motion.div

                    initial={{

                      opacity: 0,

                      y: 40,

                    }}

                    animate={

                      headerInView

                        ? {

                          opacity: 1,

                          y: 0,

                        }

                        : {}

                    }

                    transition={{

                      duration: 0.7,

                      delay: i * 0.12,

                    }}

                    className="group flex h-full min-h-[760px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#141414] transition-all duration-500 hover:-translate-y-2 hover:border-[#E31E24]/30 hover:shadow-[0_24px_60px_rgba(227,30,36,0.15)]"

                  >

                    {/* Image */}

                    <div className="relative h-56 overflow-hidden flex-shrink-0">

                      <Image

                        src={cat.image}

                        alt={cat.title}

                        fill

                        className="object-cover transition-transform duration-700 group-hover:scale-105"

                      />



                      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent" />



                      {/* Icon */}

                      <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl">

                        <Icon

                          size={18}

                          className="text-[#E31E24]"

                        />

                      </div>



                      {/* Badge */}

                      <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-xl">

                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">

                          {cat.subtitle}

                        </span>

                      </div>

                    </div>



                    {/* Content */}

                    <div className="flex flex-1 flex-col p-6">

                      <h3 className="mb-2 font-heading text-2xl font-bold text-white">

                        {cat.title}

                      </h3>



                      <p className="mb-5 text-sm leading-relaxed text-white/55">

                        {cat.description}

                      </p>



                      {/* FIXED PRODUCT BUTTONS */}

                      <div className="mb-6 grid flex-1 auto-rows-fr grid-cols-2 gap-3">

                        {cat.items.map((item) => {

                          const isImportExport =

                            item.tag ===

                            'Import & Export'



                          const isImport =

                            item.tag === 'Import'



                          return (

                            <Link

                              key={item.name}

                              href={`/contact?product=${encodeURIComponent(

                                item.name

                              )}`}

                              className="block"

                            >

                              <motion.div

                                whileHover={{

                                  scale: 1.03,

                                }}

                                whileTap={{

                                  scale: 0.98,

                                }}

                                className="flex min-h-[62px] w-full items-center justify-center rounded-[24px] border px-4 py-3 text-center text-sm font-semibold leading-tight transition-all duration-300 hover:shadow-lg"

                                style={{

                                  background:

                                    isImportExport

                                      ? 'rgba(227,30,36,0.12)'

                                      : isImport

                                        ? 'rgba(59,130,246,0.10)'

                                        : 'rgba(34,197,94,0.10)',



                                  borderColor:

                                    isImportExport

                                      ? 'rgba(227,30,36,0.28)'

                                      : isImport

                                        ? 'rgba(59,130,246,0.25)'

                                        : 'rgba(34,197,94,0.22)',



                                  color:

                                    isImportExport

                                      ? '#ff5c5c'

                                      : isImport

                                        ? '#60a5fa'

                                        : '#34d399',

                                }}

                              >

                                <span className="line-clamp-2">

                                  {item.name}

                                </span>

                              </motion.div>

                            </Link>

                          )

                        })}

                      </div>



                      {/* Premium CTA */}

                      <Link

                        href="/contact"

                        className="group relative mt-auto overflow-hidden rounded-2xl"

                      >

                        <div className="absolute inset-0 bg-gradient-to-r from-[#E31E24] via-[#d91c22] to-[#E31E24] opacity-100 transition-all duration-500 group-hover:scale-105" />



                        <div className="relative flex w-full items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-white transition-all duration-300 group-hover:tracking-wide">

                          <ShoppingCart size={16} />



                          <span>Enquire / Buy Now</span>



                          <ArrowUpRight

                            size={16}

                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"

                          />

                        </div>

                      </Link>

                    </div>



                    {/* Bottom accent line */}

                    <div className="h-[2px] w-0 bg-[#E31E24] transition-all duration-500 group-hover:w-full" />

                  </motion.div>

                </div>

              )

            })}

          </div>

        </div>



        {/* Bottom CTA */}

        <motion.div

          initial={{

            opacity: 0,

            y: 20,

          }}

          animate={

            headerInView

              ? {

                opacity: 1,

                y: 0,

              }

              : {}

          }

          transition={{

            duration: 0.6,

            delay: 0.5,

          }}

          className="mt-14 text-center"

        >

          <div className="mx-auto max-w-2xl rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

            <p className="mb-5 text-sm text-white/50">

              Looking for a specific product not listed above?

            </p>



            <Link

              href="/contact"

              className="group inline-flex items-center gap-2 rounded-full border border-[#E31E24]/40 px-7 py-3 text-sm font-semibold text-[#E31E24] transition-all duration-300 hover:border-[#E31E24] hover:bg-[#E31E24]/10 hover:shadow-[0_0_30px_rgba(227,30,36,0.15)]"

            >

              Contact us for custom sourcing



              <ArrowUpRight

                size={15}

                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"

              />

            </Link>

          </div>

        </motion.div>

      </div>

    </section>

  )

}