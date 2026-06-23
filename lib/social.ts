import type { ComponentType, SVGProps } from 'react'
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from '@/components/brand-icons'

export type SocialIcon = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>

export type SocialLink = {
  label: string
  href: string
  icon: SocialIcon
  /** Brand color used on hover */
  color: string
}

/**
 * "Follow us" links. Replace the placeholder profile URLs with your real
 * handles — WhatsApp is already wired to the business number.
 */
export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/empower-networks-private-limited',
    icon: LinkedInIcon,
    color: '#0A66C2',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/empower_networks',
    icon: InstagramIcon,
    color: '#E4405F',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/empowernetworks',
    icon: FacebookIcon,
    color: '#1877F2',
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/empowernetworks',
    icon: XIcon,
    color: '#111111',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@empowernetworks',
    icon: YouTubeIcon,
    color: '#FF0000',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/919712812881',
    icon: WhatsAppIcon,
    color: '#25D366',
  },
]
