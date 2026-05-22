'use client'

import { BookOpen, Calculator, BarChart3, Database } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import ServiceCard from '@/components/ui/ServiceCard'
import ERPGrid from '@/components/sections/ERPGrid'
import AnimateIn from '@/components/ui/AnimateIn'

const financeRoles = [
  {
    icon: BookOpen,
    title: 'Bookkeepers',
    description:
      'Maintain daily logs, bank reconciliations, accounts payable/receivable management, and accurate monthly ledger close.',
  },
  {
    icon: Calculator,
    title: 'Accountants',
    description:
      'Manage general accounting tasks, local compliance compliance, payroll processing, and audit preparation.',
  },
  {
    icon: Database,
    title: 'QuickBooks & ERP Experts',
    description:
      'Deploy, configure, and maintain your accounting tech stack, including NetSuite, Odoo, SAP, and QuickBooks.',
  },
  {
    icon: BarChart3,
    title: 'Financial Analysts',
    description:
      'Deliver decision-ready reports, budget variance analysis, cash flow forecasting, and investor-ready models.',
  },
]

export default function FinanceServices() {
  return (
    <section id="services" className="bg-white overflow-hidden pt-16 pb-0">
      <div className="max-w-content mx-auto px-6 mb-16">
        <AnimateIn direction="up">
          <SectionHeader
            label="Finance &amp; Accounts"
            title="Services That You Need"
            subtitle="Hire dedicated remote professionals to manage your complete financial operations at a fraction of the cost."
          />
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {financeRoles.map((role, i) => (
            <AnimateIn key={role.title} direction="up" delay={0.05 * i} className="h-full">
              <ServiceCard icon={role.icon} title={role.title} description={role.description} />
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Tech Stack Band */}
      <div className="py-16 border-t border-b border-slate-200/60 bg-slate-50">
        <div className="max-w-content mx-auto px-6">
          <ERPGrid />
        </div>
      </div>
    </section>
  )
}
