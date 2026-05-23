'use client'

import { BookOpen, Users, TrendingUp, LineChart, Building2, ClipboardCheck } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import AnimateIn from '@/components/ui/AnimateIn'

const services = [
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    tagline: 'Accurate, organised, always ready.',
    bullets: [
      'Monthly reconciliation & ledger management',
      'Accounts payable & receivable tracking',
      'Financial statement preparation',
      'Cloud-based bookkeeping solutions',
    ],
    value: 'Bookkeeping',
  },
  {
    icon: Users,
    title: 'Payroll Services',
    tagline: 'Accurate, on-time payroll — every cycle.',
    bullets: [
      'Payroll processing & salary disbursement',
      'Tax withholding & statutory deductions',
      'Payroll reporting & compliance filings',
      'Employee records & payslip management',
    ],
    value: 'Payroll Services',
  },
  {
    icon: TrendingUp,
    title: 'Budgeting & Forecasting',
    tagline: 'Know your numbers before they happen.',
    bullets: [
      'Revenue & expense forecasting (best / base / worst case)',
      'Annual & rolling budgets aligned to business goals',
      'Cash flow forecasting',
      'KPI dashboards for real-time tracking',
    ],
    value: 'Budgeting & Forecasting',
  },
  {
    icon: LineChart,
    title: 'Fundraising Support',
    tagline: 'The numbers that make investors say yes.',
    bullets: [
      'Investor-ready three-statement financial models',
      'Business plans & financial narratives',
      'Pitch deck financial slides',
      'Valuation support (DCF, comparables, asset-based)',
    ],
    value: 'Fundraising Support',
  },
  {
    icon: Building2,
    title: 'Group Consolidation',
    tagline: 'Multi-entity reporting, handled with precision.',
    bullets: [
      'Multi-entity & multi-currency consolidation',
      'Intercompany eliminations',
      'Consolidation under IFRS 10 & US GAAP ASC 810',
      'Group reporting packages',
    ],
    value: 'Group Consolidation',
  },
  {
    icon: ClipboardCheck,
    title: 'Tax Records & Compliance',
    tagline: 'Get your records straight — before it becomes a problem.',
    bullets: [
      'Organising and reconciling historical financial records',
      'Identifying and resolving discrepancies before filing season',
      'Preparing supporting schedules and documentation',
      'Aligning records to IFRS or US GAAP as required',
    ],
    value: 'Tax Records & Compliance',
  },
]

export default function CoreServices() {
  const handleCardClick = (serviceValue: string) => {
    window.dispatchEvent(
      new CustomEvent('select-role', {
        detail: { service: serviceValue, role: serviceValue },
      })
    )
  }

  return (
    <section id="services" className="bg-white py-20 lg:py-[120px] relative">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <AnimateIn direction="up">
          <SectionHeader
            label="CORE SERVICES"
            title="Everything Your Finance Function Needs"
            subtitle="From day-to-day bookkeeping to complex group consolidation — we cover the full spectrum of finance and accounting for businesses at every stage."
            align="center"
          />
        </AnimateIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimateIn
              key={service.title}
              direction="up"
              delay={Math.min(index * 0.1, 0.4)}
              className="h-full"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                tagline={service.tagline}
                bullets={service.bullets}
                onClick={() => handleCardClick(service.value)}
              />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
