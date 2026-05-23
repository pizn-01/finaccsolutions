interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  dark?: boolean
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-left sm:text-center sm:mx-auto' : 'text-left'
  const titleColor = dark ? 'text-white' : 'text-brand-navy'
  const subtitleColor = dark ? 'text-slate-300' : 'text-brand-muted'

  return (
    <div className={`max-w-3xl mb-16 ${alignClass}`}>
      {label && (
        <span
          className="inline-block text-brand-gold font-dm-sans font-medium text-[0.72rem] uppercase tracking-[0.12em] mb-4"
        >
          {label}
        </span>
      )}
      <h2
        className={`font-sora font-bold leading-[1.2] mb-4 ${titleColor}`}
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base font-dm-sans leading-[1.7] ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
