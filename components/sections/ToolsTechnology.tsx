'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

const row1Tools = [
  { name: 'LucaNet', color: '#005CA9' },
  { name: 'SAP BPC', color: '#0070F2' },
  { name: 'Hyperion', color: '#C74634' },
  { name: 'Tagetik', color: '#6B21A8' },
  { name: 'OneStream', color: '#1D4ED8' },
]

const row2Tools = [
  { name: 'QuickBooks', color: '#2CA01C' },
  { name: 'Xero', color: '#13B5EA' },
  { name: 'Excel / Sheets', color: '#217346' },
  { name: 'Gusto', color: '#F45D48' },
  { name: 'ADP', color: '#D0021B' },
]

export default function ToolsTechnology() {
  return (
    <section id="technology" className="bg-brand-slate py-20 lg:py-[120px] relative">
      <div className="max-w-content mx-auto px-6">
        {/* Section Header */}
        <AnimateIn direction="up">
          <SectionHeader
            label="TOOLS &amp; TECHNOLOGY"
            title="We Work With the Tools You Already Use"
            subtitle="We adapt to your stack — not the other way around."
            align="center"
          />
        </AnimateIn>

        <div className="space-y-12">
          {/* Row 1: Consolidation & Planning */}
          <AnimateIn direction="up" delay={0.1}>
            <div className="space-y-4">
              <h3 className="font-sora font-semibold text-xs uppercase tracking-wider text-brand-navy/60 text-center">
                Group Consolidation &amp; Financial Planning
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {row1Tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-white border border-brand-border rounded-xl p-5 flex items-center justify-between shadow-sm select-none"
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      willChange: 'transform, box-shadow',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)'
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(10,22,40,0.1)'
                      e.currentTarget.style.borderColor = '#1B4FD8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#E8ECF4'
                    }}
                  >
                    <span className="font-dm-sans font-semibold text-brand-navy text-sm sm:text-base">
                      {tool.name}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tool.color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Row 2: Bookkeeping, Payroll & Reporting */}
          <AnimateIn direction="up" delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-sora font-semibold text-xs uppercase tracking-wider text-brand-navy/60 text-center">
                Bookkeeping, Payroll &amp; Reporting
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {row2Tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-white border border-brand-border rounded-xl p-5 flex items-center justify-between shadow-sm select-none"
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      willChange: 'transform, box-shadow',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.04)'
                      e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(10,22,40,0.1)'
                      e.currentTarget.style.borderColor = '#1B4FD8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#E8ECF4'
                    }}
                  >
                    <span className="font-dm-sans font-semibold text-brand-navy text-sm sm:text-base">
                      {tool.name}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: tool.color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Subtle Note */}
          <AnimateIn direction="up" delay={0.3}>
            <p className="text-center text-brand-muted italic text-xs sm:text-sm font-dm-sans pt-4">
              Working with a different platform? We adapt to your stack.
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
