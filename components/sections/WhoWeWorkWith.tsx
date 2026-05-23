'use client'

import { Building2, TrendingUp, Rocket, Globe, Users, Briefcase } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

const clients = [
  { icon: Building2, label: 'Group Holding Companies' },
  { icon: TrendingUp, label: 'Growing SMEs' },
  { icon: Rocket, label: 'Startups Seeking Funding' },
  { icon: Globe, label: 'Internationally Expanding Businesses' },
  { icon: Users, label: 'Finance Teams Needing Specialist Support' },
  { icon: Briefcase, label: 'Project-Based Accounting Needs' },
]

export default function WhoWeWorkWith() {
  return (
    <section id="clients" className="bg-brand-slate py-20 lg:py-[120px] relative">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <AnimateIn direction="up">
          <SectionHeader
            label="WHO WE SERVE"
            title="Built for Businesses That Mean Business"
            subtitle=""
            align="center"
          />
        </AnimateIn>

        {/* Clients Pill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {clients.map((client, index) => {
            const Icon = client.icon
            return (
              <AnimateIn
                key={client.label}
                direction="up"
                delay={Math.min(index * 0.08, 0.4)}
                className="h-full"
              >
                <div
                  className="bg-white border border-brand-border rounded-2xl p-5 flex items-center gap-4 shadow-[0_2px_12px_rgba(10,22,40,0.03)] h-full w-full select-none"
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    willChange: 'transform, box-shadow, border-color',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(10,22,40,0.06)'
                    e.currentTarget.style.borderColor = '#1B4FD8'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = '#E8ECF4'
                  }}
                >
                  {/* Icon Wrapper */}
                  <div className="w-8 h-8 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-dm-sans font-semibold text-brand-navy text-sm sm:text-base leading-tight">
                    {client.label}
                  </span>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
