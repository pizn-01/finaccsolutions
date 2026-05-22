'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle2, UserCheck, ShieldCheck, DollarSign, Star } from 'lucide-react'
import { motion, animate } from 'framer-motion'

/* ── Snappy Motion Counter ─────────────────── */
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
      duration: 1.0, // fast snappy animate
      ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
      onUpdate(val) {
        const formatted = val.toFixed(decimals)
        const parts = formatted.split('.')
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        node.textContent = `${prefix}${parts.join('.')}${suffix}`
      },
    })

    return () => controls.stop()
  }, [value, prefix, suffix, decimals])

  return <span ref={nodeRef} className="tabular-nums">0</span>
}

/* ── Bright Mockup Card ──────────────────────────────── */
interface KPICardProps {
  icon: any
  label: string
  target: number
  prefix?: string
  suffix?: string
  decimals?: number
  color: string
}

function KPICard({ icon: Icon, label, target, prefix = '', suffix = '', decimals = 0, color }: KPICardProps) {
  return (
    <div className="rounded-xl p-3.5 bg-white border border-slate-200/80 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 flex items-center gap-3">
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color} bg-opacity-10 text-opacity-100`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-sora font-extrabold text-slate-900 text-base sm:text-lg leading-tight">
          <Counter value={target} prefix={prefix} suffix={suffix} decimals={decimals} />
        </div>
        <div className="text-slate-500 text-[11px] font-semibold mt-0.5 tracking-tight font-dm-sans">{label}</div>
      </div>
    </div>
  )
}

const BAR_HEIGHTS = [45, 60, 50, 80, 65, 90, 75, 100, 85, 95]

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // snappy transitions
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-slate-100/50 to-white overflow-hidden pt-28 lg:pt-36 pb-0">
      {/* Soft blue accent glow */}
      <div
        className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(13,88,202,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-content mx-auto px-6 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center pb-16 lg:pb-20">
          
          {/* Left Column - Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue font-bold text-xs tracking-wide uppercase mb-6 font-sora"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              Trusted Remote Talent Ecosystem
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="font-sora font-extrabold text-slate-900 leading-[1.1] mb-6 text-left"
              style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', letterSpacing: '-0.025em' }}
            >
              Hire Elite Finance &amp;<br />
              <span className="text-brand-blue">Manpower Experts.</span><br />
              Scale Instantly.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-base sm:text-lg leading-[1.65] mb-8 max-w-[620px] font-dm-sans"
            >
              A remote hiring ecosystem supporting businesses across all domains. Pre-vetted talent, 1-month notice period, zero hassle. Reduce your operational expenses by up to 70% without sacrificing output quality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-brand-gold hover:bg-amber-500 text-white rounded-xl shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold border border-slate-300 hover:border-slate-400 text-slate-700 bg-white rounded-xl hover:bg-slate-50 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                Explore All Roles
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Enterprise Dashboard Mockup (Bright Style) */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.97, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div
              className="w-full max-w-[420px] rounded-2xl p-6 md:p-7 bg-white border border-slate-200/80 shadow-lg relative overflow-hidden"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)',
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-slate-800 text-xs font-bold font-sora">Global Resource Pool</span>
                </div>
                <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider bg-brand-blue/10 text-brand-blue border border-brand-blue/20 font-sora">
                  1,200+ Staff
                </span>
              </div>

              {/* Grid of KPI Metrics (Utilitarian Clean) */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <KPICard icon={UserCheck}   label="Onboarded Talent" target={384} suffix="+" color="text-brand-blue bg-brand-blue" />
                <KPICard icon={DollarSign}  label="Avg. Cost Savings" target={70} suffix="%" color="text-brand-gold bg-brand-gold" />
                <KPICard icon={ShieldCheck} label="Vetting Rate"       target={2.4} suffix="%" decimals={1} color="text-emerald-500 bg-emerald-500" />
                <KPICard icon={Star}        label="CSAT Rating"        target={4.9} suffix="/5.0" decimals={1} color="text-amber-500 bg-amber-500" />
              </div>

              {/* Performance / Scaling Rate Chart */}
              <div className="rounded-xl p-4 bg-slate-50 border border-slate-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-slate-800 text-xs font-bold font-sora">Weekly Scaling Velocity</span>
                  <span className="text-emerald-500 text-[10px] font-bold">+18.5% MoM</span>
                </div>
                <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
                  {BAR_HEIGHTS.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t bg-brand-blue/80 hover:bg-brand-blue cursor-pointer transition-colors"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as const }}
                      title={`Week ${i + 1}: ${h}%`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Trust & Social Proof Strip (Standard B2B banner) */}
      <div className="bg-slate-100 border-t border-b border-slate-200/60 py-6">
        <div className="max-w-content mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider font-sora">
              Enterprise Grade Operations
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-slate-700 text-sm font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                <span>Trained on Real Decisions</span>
              </div>
              <div className="h-4 w-px bg-slate-300 hidden md:block" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                <span>10+ Years Experience</span>
              </div>
              <div className="h-4 w-px bg-slate-300 hidden md:block" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                <span>Frictionless Scaling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
