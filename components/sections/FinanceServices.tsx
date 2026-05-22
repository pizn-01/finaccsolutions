'use client'

import { BookOpen, BarChart2, Building2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import ERPGrid from '@/components/sections/ERPGrid'
import AnimateIn from '@/components/ui/AnimateIn'

const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping & Reconciliation',
    description:
      'Accurate, timely books every month. We handle transaction categorization, bank reconciliation, and monthly close so you always know exactly where you stand.',
  },
  {
    icon: BarChart2,
    title: 'Financial Statements & Reporting',
    description:
      'Clear, decision-ready P&L statements, balance sheets, and cash flow reports — delivered on schedule and tailored to your stakeholders and investors.',
  },
  {
    icon: Building2,
    title: 'Outsourced Finance Department',
    description:
      'From CFO-level strategy to day-to-day AP/AR execution — a complete virtual finance team without the overhead of building one in-house.',
  },
]

export default function FinanceServices() {
  return (
    <section id="services" className="bg-white overflow-hidden">
      <div className="max-w-content mx-auto px-6 py-20 lg:py-[120px]">
        <AnimateIn direction="up">
          <SectionHeader
            label="Our Services"
            title="Finance & Accounting, Done Right"
            subtitle="End-to-end financial operations management for modern businesses."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <AnimateIn key={s.title} direction="up" delay={0.1 + i * 0.12} className="h-full">
              <ServiceCard icon={s.icon} title={s.title} description={s.description} />
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Full-bleed ERP band with off-white background */}
      <div className="py-20 lg:py-[120px]" style={{ backgroundColor: '#F4F6FA' }}>
        <div className="max-w-content mx-auto px-6">
          <ERPGrid />
        </div>
      </div>
    </section>
  )
}
