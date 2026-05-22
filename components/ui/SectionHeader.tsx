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
  // If centered, make it left-aligned on mobile (sm:text-center) to avoid centering headers on mobile
  // when the body elements (like cards) contain left-aligned text.
  const alignClass = align === 'center' ? 'text-left sm:text-center sm:mx-auto' : 'text-left'
  const titleColor = dark ? 'text-white' : 'text-brand-navy'
  const subtitleColor = dark ? 'text-slate-300' : 'text-brand-muted'

  return (
    <div className={`max-w-2xl mb-16 ${alignClass}`}>
      {label && (
        <span
          className="inline-block text-brand-gold font-bold text-[0.75rem] uppercase mb-4"
          style={{
            letterSpacing: '0.12em',
            fontVariant: 'all-small-caps'
          }}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-sora font-bold leading-[1.15] mb-5 ${titleColor}`}
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base sm:text-lg leading-[1.7] ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  )
}
