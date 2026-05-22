'use client'

import { DollarSign, Zap, RefreshCw, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const features = [
  {
    icon: DollarSign,
    title: 'Cost-Effective at Scale',
    description:
      'Reduce hiring costs by up to 70% compared to building in-house staff — without sacrificing quality or capability.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description:
      'Pre-screened talent onboarded and fully productive within 5–7 business days. No lengthy recruitment cycles.',
  },
  {
    icon: RefreshCw,
    title: 'Total Flexibility',
    description:
      "Scale your team up or down instantly with just 1 month's notice. No long-term lock-in, no penalties, no friction.",
  },
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description:
      'Rigorous multi-stage vetting, background checks, and skills assessments on every professional we place.',
  },
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section id="why-us" className="relative bg-brand-navy py-20 lg:py-[120px] overflow-hidden">
      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      {/* Subtle blue glow top-right */}
      <div
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(27,79,216,0.12) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            label="Why Fin-Acc"
            title="Why Leading Businesses Choose Fin-Acc"
            dark
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={cardVariants}
                style={{
                  willChange: 'transform, border-color, box-shadow',
                }}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-card-dark transition-all duration-300 hover:border-brand-blue/60 hover:shadow-[0_8px_32px_rgba(27,79,216,0.25)] hover:-translate-y-1"
              >
                {/* Icon container with hover animation */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 bg-brand-blue/20 border border-brand-blue/30 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(27,79,216,0.4)]"
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-brand-sky transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </div>

                <h3
                  className="font-sora font-semibold text-white text-[1.25rem] mb-3"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {f.title}
                </h3>
                <p className="text-slate-300 text-sm leading-[1.7] font-dm-sans">{f.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
