import { type LucideIcon, ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant?: 'default' | 'dashed'
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  variant = 'default',
}: ServiceCardProps) {
  if (variant === 'dashed') {
    return (
      <div
        className="group h-full p-6 bg-white border-2 border-dashed border-slate-300 rounded-xl hover:border-brand-blue hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
        style={{ willChange: 'border-color, box-shadow' }}
      >
        <div>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 text-slate-500 mb-4 group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
          <h3 className="font-sora font-bold text-slate-900 text-base leading-snug mb-2">
            {title}
          </h3>
          <p className="text-slate-500 text-xs leading-[1.6]">{description}</p>
        </div>
        <div className="mt-6 flex items-center gap-1 text-xs font-bold text-slate-600 group-hover:text-brand-blue transition-colors">
          <span>Submit Request</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    )
  }

  return (
    <div
      className="group h-full p-6 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all duration-200 flex flex-col justify-between"
      style={{ willChange: 'border-color, box-shadow, transform' }}
    >
      <div>
        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-brand-blue/5 text-brand-blue mb-4 group-hover:bg-brand-blue/10 transition-colors">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </div>
        <h3 className="font-sora font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-xs leading-[1.6]">{description}</p>
      </div>
      <div className="mt-6 flex items-center gap-1 text-xs font-bold text-brand-blue/90 group-hover:text-brand-gold transition-colors">
        <span>Hire this Role</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </div>
  )
}
