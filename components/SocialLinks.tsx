'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/lib/social'

type Variant = 'light' | 'dark' | 'solid'

interface SocialLinksProps {
  /** 'light' = for light backgrounds, 'dark' = for dark backgrounds, 'solid' = filled red chips */
  variant?: Variant
  /** Icon size in px */
  size?: number
  /** Show the "Follow Us" label above the icons */
  showLabel?: boolean
  className?: string
  align?: 'start' | 'center'
}

const base =
  'group relative flex items-center justify-center rounded-full border transition-all duration-300 hover:-translate-y-1'

const variants: Record<Variant, string> = {
  light:
    'h-10 w-10 border-black/10 bg-black/[0.03] text-gray-500 hover:text-white hover:shadow-lg',
  dark: 'h-10 w-10 border-white/10 bg-white/[0.04] text-white/60 hover:text-white hover:shadow-lg',
  solid:
    'h-10 w-10 border-transparent bg-[#E31E24] text-white hover:shadow-[0_8px_24px_rgba(227,30,36,0.35)]',
}

export default function SocialLinks({
  variant = 'light',
  size = 18,
  showLabel = false,
  className = '',
  align = 'start',
}: SocialLinksProps) {
  return (
    <div className={`flex flex-col ${align === 'center' ? 'items-center' : 'items-start'} gap-3 ${className}`}>
      {showLabel && (
        <div className="flex items-center gap-2">
          <span className="h-[2px] w-6 bg-[#E31E24]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#E31E24]">
            Follow Us
          </span>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-3">
        {socialLinks.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`${base} ${variants[variant]}`}
              style={{ ['--hover-bg' as string]: s.color }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = s.color
                ;(e.currentTarget as HTMLElement).style.borderColor = s.color
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.backgroundColor = ''
                ;(e.currentTarget as HTMLElement).style.borderColor = ''
              }}
            >
              <Icon size={size} />
            </motion.a>
          )
        })}
      </div>
    </div>
  )
}
