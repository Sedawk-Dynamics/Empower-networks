'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'
import SocialLinks from '@/components/SocialLinks'

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

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9712812881',
    href: 'tel:+919712812881',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 9712812881',
    href: 'https://wa.me/919712812881',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@empowernetworks.co.in',
    href: 'mailto:info@empowernetworks.co.in',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon – Sat: 10:00 AM – 7:00 PM',
    href: null,
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'A-317, MoneyPlant High Street, Jagatpur, Gota, Ahmedabad – 382470',
    href: 'https://maps.google.com/?q=A-317+MoneyPlant+High+Street+Jagatpur+Gota+Ahmedabad',
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = `Enquiry from ${form.name} - Empower Networks Website`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:info@empowernetworks.co.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative bg-[#FAF9F7] py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#E31E24]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#E31E24]/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E31E24]" />
            <span className="text-[#E31E24] text-xs font-bold tracking-[0.4em] uppercase">Get In Touch</span>
            <div className="w-8 h-[2px] bg-[#E31E24]" />
          </div>
          <AnimatedHeading
            text="Let&apos;s Connect"
            className="text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4"
          />
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Ready to explore trade opportunities? Reach out to us and our team will respond promptly.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              const content = (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex items-start gap-4 p-5 bg-white border border-black/[0.06] shadow-soft rounded-2xl hover:border-[#E31E24]/30 hover:bg-[#FAF9F7] transition-all duration-300 hover:-translate-x-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#E31E24]/10 border border-[#E31E24]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#E31E24]/20 transition-colors">
                    <Icon size={18} className="text-[#E31E24]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">{item.label}</p>
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              )

              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}

            {/* Map embed */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="rounded-2xl overflow-hidden border border-black/[0.06] shadow-soft h-48"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.8!2d72.5560!3d23.0753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzMxLjEiTiA3MsKwMzMnMjEuNiJF!5e0!3m2!1sen!2sin!4v1622222222222!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Empower Networks Office Location"
              />
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white border border-black/[0.06] shadow-soft rounded-2xl p-7 sm:p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <Send size={18} className="text-[#E31E24]" />
              <h3 className="font-heading text-lg font-bold text-gray-900">Send an Enquiry</h3>
            </div>

            {submitted ? (
              <div className="flex items-center justify-center h-48">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#E31E24]/10 border border-[#E31E24]/30 flex items-center justify-center mx-auto mb-3">
                    <Send size={22} className="text-[#E31E24]" />
                  </div>
                  <p className="text-gray-900 font-semibold">Message Sent!</p>
                  <p className="text-gray-500 text-sm mt-1">We&apos;ll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider uppercase block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full bg-[#FAF9F7] border border-black/10 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E31E24]/50 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 font-semibold tracking-wider uppercase block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-[#FAF9F7] border border-black/10 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E31E24]/50 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/40 font-semibold tracking-wider uppercase block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-[#FAF9F7] border border-black/10 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E31E24]/50 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 font-semibold tracking-wider uppercase block mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    className="w-full bg-[#FAF9F7] border border-black/10 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:border-[#E31E24]/50 focus:bg-white transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#E31E24] hover:bg-[#c01a1f] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(227,30,36,0.4)] hover:scale-[1.02] text-sm tracking-wider"
                >
                  <Send size={16} />
                  Send Enquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Follow Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex flex-col items-center gap-5 rounded-2xl border border-black/[0.06] bg-white shadow-soft px-6 py-10 text-center"
        >
          <div>
            <h3 className="font-heading text-xl font-bold text-gray-900">Stay Connected</h3>
            <p className="mt-1 text-sm text-gray-500">
              Follow Empower Networks for trade updates, new products & opportunities.
            </p>
          </div>
          <SocialLinks variant="light" size={20} align="center" />
        </motion.div>
      </div>
    </section>
  )
}
