'use client'

import { CheckCircle, Video, Search, ShoppingBag, Megaphone, Globe, Plus, type LucideIcon } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import AnimateIn from '@/components/ui/AnimateIn'

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  variant: 'default' | 'dashed'
}

const services: ServiceItem[] = [
  {
    icon: Video,
    title: 'Video Editors',
    description:
      'Short-form, long-form, motion graphics, and branded content — delivered fast, polished, and on-brand.',
    variant: 'default',
  },
  {
    icon: Search,
    title: 'SEO Specialists',
    description:
      'On-page optimization, technical SEO, and white-hat link building to drive sustainable organic growth.',
    variant: 'default',
  },
  {
    icon: ShoppingBag,
    title: 'Amazon Store Managers',
    description:
      'Expert listings, PPC campaign management, and FBA logistics to maximize your Amazon revenue.',
    variant: 'default',
  },
  {
    icon: Megaphone,
    title: 'Marketing Experts',
    description:
      'Paid ad strategy, performance analytics, and full-funnel campaign execution across all major channels.',
    variant: 'default',
  },
  {
    icon: Globe,
    title: 'Social Media Managers',
    description:
      'Content calendars, community engagement, and audience growth strategies across all major platforms.',
    variant: 'default',
  },
  {
    icon: Plus,
    title: 'Custom Requirements',
    description:
      "Don't see your role? We source and vet custom talent for your specific needs — tell us what you're looking for.",
    variant: 'dashed',
  },
]

const uspPoints = ['1-Month Notice Period', 'Pre-vetted & Experienced', 'Dedicated Resources']

export default function ManpowerServices() {
  return (
    <section id="outsourcing" className="bg-white border-t border-slate-100 py-20 lg:py-[120px]">
      <div className="max-w-content mx-auto px-6">
        <AnimateIn direction="up">
          <SectionHeader
            label="Manpower Outsourcing"
            title="Hassle-Free Manpower Outsourcing"
            subtitle="The most cost-effective way to hire and scale your business or team with just a 1-month notice."
          />
        </AnimateIn>

        {/* USP banner */}
        <AnimateIn direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {uspPoints.map((point) => (
              <div
                key={point}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-white rounded-full border border-slate-200/60 shadow-[0_4px_20px_rgba(10,22,40,0.04)] hover:shadow-card-light hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                <CheckCircle className="w-4 h-4 text-brand-blue flex-shrink-0" aria-hidden="true" />
                <span className="font-semibold text-brand-navy text-sm">{point}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

        <div className="flex flex-col gap-8 lg:gap-12">
          {/* Row 1 (first 3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((s, i) => (
              <AnimateIn key={s.title} direction="up" delay={0.05 * i} className="h-full">
                <ServiceCard
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  variant={s.variant}
                />
              </AnimateIn>
            ))}
          </div>

          {/* Premium Row Divider */}
          <div className="hidden lg:block border-t border-slate-100 max-w-6xl mx-auto w-full opacity-60" />

          {/* Row 2 (last 3 cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(3, 6).map((s, i) => (
              <AnimateIn key={s.title} direction="up" delay={0.05 * (i + 3)} className="h-full">
                <ServiceCard
                  icon={s.icon}
                  title={s.title}
                  description={s.description}
                  variant={s.variant}
                />
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
