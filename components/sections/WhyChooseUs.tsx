'use client'

import { GraduationCap, Globe, Layers, ShieldCheck, BarChart3, RefreshCw } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

const features = [
  {
    icon: GraduationCap,
    title: 'Big 4 & Big 10 Backgrounds',
    body: "Qualified professionals — not generalists. Our team includes accountants with experience at the world's leading audit and advisory firms.",
  },
  {
    icon: Globe,
    title: 'IFRS & US GAAP Expertise',
    body: 'International standards, applied correctly. We support global businesses and those with US clients, investors, or reporting obligations.',
  },
  {
    icon: Layers,
    title: 'Group Consolidation Specialists',
    body: 'Hands-on experience across LucaNet, SAP BPC, Hyperion, Tagetik, OneStream, and more. We integrate into your existing environment from day one.',
  },
  {
    icon: ShieldCheck,
    title: 'Tax-Ready Record Management',
    body: 'We clean up, organise, and structure your records so filing season is smooth, accurate, and stress-free — every time.',
  },
  {
    icon: BarChart3,
    title: 'Investor-Ready Financial Models',
    body: 'Fundraising-ready models built to withstand scrutiny from banks, angels, VCs, and grant bodies — grounded in real financial rigour.',
  },
  {
    icon: RefreshCw,
    title: 'Flexible Engagements',
    body: 'Per project, part-time, or full-time — scale your finance team exactly as needed, with no long-term lock-in.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-brand-navy py-20 lg:py-[120px] relative overflow-hidden">
      {/* Dot Grid background */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none" />

      {/* Radial Glow Overlay */}
      <div
        className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] left-[25%] top-[25%] rounded-full bg-brand-blue/15 blur-[120px] pointer-events-none animate-pulse-glow"
        style={{ willChange: 'transform, opacity' }}
      />

      <div className="max-w-content mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimateIn direction="up">
          <SectionHeader
            label="WHY FINACCSOLUTIONS"
            title="What Sets Us Apart"
            subtitle="Qualified finance professionals — not a software platform, not a call centre. Senior-level expertise at offshore economics."
            align="center"
            dark={true}
          />
        </AnimateIn>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon
            return (
              <AnimateIn
                key={feat.title}
                direction="up"
                delay={Math.min(index * 0.1, 0.4)}
                className="h-full"
              >
                <div
                  className="group h-full p-8 rounded-2xl transition-all duration-300 flex flex-col justify-start select-none"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                    willChange: 'transform, border-color',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.borderColor = 'rgba(27, 79, 216, 0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {/* Icon Container: 48x48px, rounded-xl */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-gold/10 text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                    <Icon className="w-5.5 h-5.5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-sora font-semibold text-lg text-white mb-3 group-hover:text-brand-gold transition-colors duration-200">
                    {feat.title}
                  </h3>

                  {/* Body */}
                  <p className="text-slate-300 text-sm font-dm-sans leading-relaxed">
                    {feat.body}
                  </p>
                </div>
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
