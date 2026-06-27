import Link from 'next/link'
import { ArrowRight, Zap, Clock, TrendingUp } from 'lucide-react'
import AnimateIn from '@/components/ui/AnimateIn'

const highlights = [
  { icon: Clock, stat: '5 days', label: 'Month-end close (down from 21+)' },
  { icon: Zap, stat: '76%', label: 'Reduction in manual finance tasks' },
  { icon: TrendingUp, stat: 'Real-time', label: 'Financial visibility, always on' },
]

export default function AutomationTeaser() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute right-[-10%] top-[-20%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-blue/20 blur-[130px] pointer-events-none" />
      <div className="absolute left-[-5%] bottom-[-10%] w-[30vw] h-[30vw] max-w-[350px] max-h-[350px] rounded-full bg-brand-gold/8 blur-[100px] pointer-events-none" />

      <div className="max-w-content mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <AnimateIn direction="left">
            <span className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4">
              Now Offering
            </span>
            <h2
              className="font-sora font-bold text-white leading-[1.15] mb-5"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em' }}
            >
              Finance Automation — Built Around Your Business
            </h2>
            <p className="text-slate-300 font-dm-sans text-base leading-[1.8] mb-8">
              Beyond outsourcing, we now help businesses automate their entire finance function. Whether you want us to run it for you using automation tools, or build custom workflows for your in-house team — we deliver the same Big 4 rigour, engineered for speed.
            </p>
            <Link
              href="/automation"
              className="inline-flex items-center gap-2 font-dm-sans font-semibold text-brand-gold hover:text-amber-400 transition-colors duration-200 group"
            >
              Explore Finance Automation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </AnimateIn>

          {/* Right: stat cards */}
          <AnimateIn direction="right">
            <div className="space-y-4">
              {highlights.map((h, i) => {
                const Icon = h.icon
                return (
                  <div
                    key={h.label}
                    className="bg-white/5 border border-white/10 rounded-2xl px-7 py-5 flex items-center gap-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <div className="font-sora font-bold text-white text-xl leading-none mb-1">{h.stat}</div>
                      <div className="font-dm-sans text-slate-400 text-sm">{h.label}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </AnimateIn>

        </div>
      </div>
    </section>
  )
}
