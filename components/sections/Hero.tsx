'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, animate } from 'framer-motion'

/* ── Optimized Framer Motion Counter ─────────────────── */
interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function Counter({ value, prefix = '', suffix = '', decimals = 0 }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const controls = animate(0, value, {
      duration: 2.0,
      ease: [0.16, 1, 0.3, 1] as const, // premium easeOutExpo
      onUpdate(val) {
        const formatted = val.toFixed(decimals)
        // Format with thousands separators
        const parts = formatted.split('.')
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        node.textContent = `${prefix}${parts.join('.')}${suffix}`
      },
    })

    return () => controls.stop()
  }, [value, prefix, suffix, decimals])

  return <span ref={nodeRef} className="tabular-nums">0</span>
}

/* ── Dashboard KPI Card ──────────────────────────────── */
interface KPICardProps {
  label: string
  change: string
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
}

function KPICard({ label, change, target, prefix = '', suffix = '', decimals = 0 }: KPICardProps) {
  return (
    <div
      className="rounded-xl p-4 bg-slate-900/60 border border-white/10 transition-all duration-300 hover:border-brand-blue/30 hover:shadow-[0_0_15px_rgba(27,79,216,0.15)] group"
    >
      <div className="font-sora font-bold text-white text-lg sm:text-xl leading-tight">
        <Counter value={target} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      <div className="text-slate-400 text-xs mt-1 font-dm-sans">{label}</div>
      <div className="text-emerald-400 text-xs font-semibold mt-2 flex items-center gap-1.5 font-dm-sans">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        {change}
      </div>
    </div>
  )
}

const BAR_HEIGHTS = [35, 55, 45, 75, 60, 85, 70, 95, 80, 100, 90, 95]

const TRUST_STATS = [
  { stat: '500+', label: 'Clients Served' },
  { stat: '10+', label: 'Years Experience' },
  { stat: '30+', label: 'Countries Reached' },
]

export default function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen bg-brand-navy overflow-hidden flex items-center pt-28 lg:pt-36 pb-20 lg:pb-28">
      {/* Background Grid and Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Radial glows */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(27,79,216,0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,158,11,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-brand-gold font-bold text-xs tracking-wider uppercase mb-5 font-sora"
              style={{ fontVariant: 'all-small-caps' }}
            >
              Finance & Remote Talent Outsourcing
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-sora font-bold text-white leading-[1.08] mb-6 text-left"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.025em' }}
            >
              Elite Finance Solutions.{' '}
              <span className="text-brand-sky">Effortless</span>
              <br />
              Global Talent.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-base sm:text-lg leading-[1.75] mb-9 max-w-[565px] font-dm-sans"
            >
              Your fully managed accounting and remote talent partners. We handle the
              complexity so you can focus on growth. Low-cost, no-hassle, built for scale.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl shadow-glow-blue transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore Finance Services
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#outsourcing"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold border-2 border-white/20 hover:border-white/40 text-white rounded-xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Hire Remote Talent
              </a>
            </motion.div>

            {/* Bottom Trust Metrics Row */}
            <motion.div
              variants={itemVariants}
              className="w-full pt-8 border-t border-white/10 flex flex-wrap gap-x-12 gap-y-6"
            >
              {TRUST_STATS.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-sora font-bold text-3xl text-white tracking-tight">
                    {item.stat}
                  </span>
                  <span className="text-slate-400 text-sm mt-1 font-dm-sans">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Premium Dashboard Mockup */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div
              className="w-full max-w-[420px] rounded-2xl p-6 md:p-8 bg-slate-950/40 border border-white/10 backdrop-blur-xl shadow-card-dark relative overflow-hidden"
              style={{
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Subtle top sheen */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-slate-300 text-sm font-semibold font-sora">Financial Overview</span>
                <span
                  className="text-brand-gold text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 font-sora"
                >
                  Live Dashboard
                </span>
              </div>

              {/* Grid of KPI Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <KPICard label="Monthly Revenue" change="+12.4% vs last month" target={324500} prefix="$" />
                <KPICard label="Net Profit"       change="+8.1% vs last month"  target={98200}  prefix="$" />
                <KPICard label="Cost Ratio"       change="-3.2% vs last month"  target={28.4}   decimals={1} suffix="%" />
                <KPICard label="Active Clients"   change="+5.7% vs last month"  target={162} />
              </div>

              {/* Year-over-Year Growth Chart */}
              <div className="rounded-xl p-4 bg-brand-blue/10 border border-brand-blue/20">
                <div className="text-slate-300 text-xs mb-3 font-semibold font-sora tracking-wide">
                  Year-over-Year Growth
                </div>
                <div className="flex items-end justify-between gap-1 h-16 pt-2">
                  {BAR_HEIGHTS.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm bg-brand-sky/70 hover:bg-brand-sky cursor-pointer transition-colors"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + i * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                      style={{
                        boxShadow: '0 0 10px rgba(59, 130, 246, 0.2)',
                      }}
                      title={`Month ${i + 1}: ${h}%`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
