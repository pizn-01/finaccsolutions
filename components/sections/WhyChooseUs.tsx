'use client'

import { TrendingUp, Award, Settings, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '@/components/ui/SectionHeader'

const features = [
  {
    icon: TrendingUp,
    title: 'Frictionless Scaling',
    description:
      'Expand or adjust your remote department instantly without hiring friction, HR overhead, or legal liabilities.',
  },
  {
    icon: Award,
    title: 'Pre-Vetted Niche Skills',
    description:
      'Every resource undergoes a rigorous screening process, ensuring you only work with highly skilled specialists.',
  },
  {
    icon: Settings,
    title: 'Tool-Ready from Day One',
    description:
      'Our experts are already certified in standard industry software: QuickBooks, NetSuite, SAP, Odoo, and HubSpot.',
  },
  {
    icon: ShieldCheck,
    title: 'Ultimate Flexibility',
    description:
      'We offer low-risk engagement models with a straightforward 1-month notice period and zero setup fees.',
  },
]

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section id="why-us" className="relative bg-white py-16 lg:py-20 border-t border-slate-200/60 overflow-hidden">
      <div className="relative max-w-content mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeader
            label="Why Choose Us"
            title="What Makes Fin-Acc The Better Choice"
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={cardVariants}
                className="group p-6 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200"
              >
                {/* Small blue icon box */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-brand-blue/5 text-brand-blue transition-colors group-hover:bg-brand-blue/10"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <h3
                  className="font-sora font-bold text-slate-900 text-base mb-2 group-hover:text-brand-blue transition-colors"
                >
                  {f.title}
                </h3>
                <p className="text-slate-500 text-xs leading-[1.65] font-dm-sans">{f.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
