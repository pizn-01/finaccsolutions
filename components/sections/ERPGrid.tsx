'use client'

import AnimateIn from '@/components/ui/AnimateIn'

interface Platform {
  name: string
  abbr: string
  color: string
}

const platforms: Platform[] = [
  { name: 'QuickBooks', abbr: 'QB',  color: '#2CA01C' },
  { name: 'NetSuite',   abbr: 'NS',  color: '#E31836' },
  { name: 'Odoo',       abbr: 'OD',  color: '#714B67' },
  { name: 'SAP',        abbr: 'SAP', color: '#007DB8' },
  { name: 'Oracle',     abbr: 'ORC', color: '#F80000' },
]

export default function ERPGrid() {
  return (
    <div className="w-full">
      <p
        className="text-center text-brand-muted text-xs font-bold uppercase mb-10 tracking-wider font-sora"
        style={{ fontVariant: 'all-small-caps' }}
      >
        WE WORK WITH YOUR EXISTING FINANCIAL TECH STACK
      </p>

      {/* Grid container with responsive wrapping */}
      <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
        {platforms.map((p, i) => (
          <AnimateIn
            key={p.name}
            direction="up"
            delay={i * 0.08}
            className="w-full sm:w-[190px]"
          >
            <div
              style={{
                willChange: 'transform, box-shadow, border-color',
              }}
              className="flex items-center gap-4 px-5 py-4 bg-white border border-[#E8ECF4] rounded-2xl cursor-default shadow-card-light hover:-translate-y-1 hover:scale-[1.03] hover:shadow-card-light-hover hover:border-brand-blue/30 transition-all duration-300 group"
            >
              {/* Colored Badge - Pill shape with 15% opacity bg */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-sora font-bold text-xs uppercase transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                style={{
                  backgroundColor: `${p.color}26`, // 15% opacity BG
                  color: p.color,
                  border: `1px solid ${p.color}33`,
                }}
              >
                {p.abbr}
              </div>
              <span className="text-brand-navy text-sm font-bold whitespace-nowrap transition-colors duration-300 group-hover:text-brand-blue font-sora">
                {p.name}
              </span>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  )
}
