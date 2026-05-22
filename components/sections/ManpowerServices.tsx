'use client'

import { CheckCircle2, Video, Search, ShoppingBag, Megaphone, Globe, Plus } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import AnimateIn from '@/components/ui/AnimateIn'

const manpowerRoles = [
  {
    icon: Video,
    title: 'Video Editors',
    description:
      'Scale your content output. Get polished, fast-turnaround video editing for YouTube, short-form Reels, and marketing ads.',
  },
  {
    icon: Search,
    title: 'SEO Specialists',
    description:
      'Boost your search rankings. Experts in technical audits, on-page optimization, and high-quality backlink building.',
  },
  {
    icon: ShoppingBag,
    title: 'Amazon Store Managers',
    description:
      'Manage Amazon listings, track inventory levels, run PPC ad campaigns, and handle FBA seller dashboard ops.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Experts',
    description:
      'Plan and execute growth campaigns. Specialists in paid search, Facebook ads, copywriting, and funnel conversion.',
  },
  {
    icon: Globe,
    title: 'Social Media Managers',
    description:
      'Build your community. Creative designers who handle calendars, graphic assets, publishing, and comments.',
  },
  {
    icon: Plus,
    title: 'Custom Requirements',
    description:
      'Need a custom remote role? We source, vet, and onboard specialized talent tailored to your exact business workflow.',
    variant: 'dashed' as const,
  },
]

const uspPoints = ['1-Month Notice Period', 'Pre-vetted & Experienced', 'Dedicated Resources']

export default function ManpowerServices() {
  return (
    <section id="outsourcing" className="bg-slate-50 border-t border-slate-200/60 py-16 lg:py-20">
      <div className="max-w-content mx-auto px-6">
        <AnimateIn direction="up">
          <SectionHeader
            label="Manpower Outsourcing"
            title="Hire Virtual Assistants &amp; Specialists"
            subtitle="Fill crucial staffing gaps immediately with dedicated, tool-ready remote professionals."
          />
        </AnimateIn>

        {/* USP Badges Row */}
        <AnimateIn direction="up" delay={0.05}>
          <div className="flex flex-wrap justify-center gap-3.5 mb-12">
            {uspPoints.map((point) => (
              <div
                key={point}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="font-semibold text-slate-800 text-xs tracking-tight">{point}</span>
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* Compact Dense Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {manpowerRoles.map((role, i) => (
            <AnimateIn key={role.title} direction="up" delay={0.04 * i} className="h-full">
              <ServiceCard
                icon={role.icon}
                title={role.title}
                description={role.description}
                variant={role.variant}
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent('select-role', {
                      detail: { service: 'manpower', role: role.title },
                    })
                  )
                }}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
