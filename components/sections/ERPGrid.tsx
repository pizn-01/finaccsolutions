'use client'

import AnimateIn from '@/components/ui/AnimateIn'

interface Platform {
  name: string
  abbr: string
  color: string
}

const platforms: Platform[] = [
  { name: 'QuickBooks', abbr: 'QB',  color: '#2CA01C' },
  { name: 'NetSuite',   abbr: 'NS',  color: '#125580' },
  { name: 'Odoo',       abbr: 'OD',  color: '#714B67' },
  { name: 'SAP',        abbr: 'SAP', color: '#007DB8' },
  { name: 'Oracle',     abbr: 'ORC', color: '#E31836' },
]

const PlatformLogos: Record<string, React.ReactNode> = {
  QuickBooks: (
    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5" fill="currentColor">
      <path d="M12.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z" />
    </svg>
  ),
  NetSuite: (
    <svg viewBox="0 0 62 62" className="w-6.5 h-6.5" fill="none">
      <path d="M11.007 21.638h8.647v20.541h4.305v8.026H11.007V21.638zM51.03 40.537h-8.647V19.996h-4.305V11.97H51.03v28.567z" fill="currentColor" opacity="0.6" />
      <path d="M9 10h27.327v23.459L25.819 19.924H9V10zm44 42.212H25.673V28.753l10.507 13.536H53" fill="currentColor" />
    </svg>
  ),
  Odoo: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
      <path d="M21.1002 15.7957c-1.6015 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2979 2.8998-2.8998 2.8998zm0-1.2c.9388.0006 1.7003-.7601 1.7008-1.6989.0004-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zm-6.0655 1.2c-1.6014 0-2.8997-1.2983-2.8997-2.8998s1.2983-2.8997 2.8997-2.8997c1.6015 0 2.8998 1.2982 2.8998 2.8997 0 1.5999-1.2999 2.8998-2.8998 2.8998zm0-1.2c.9389.0006 1.7003-.7601 1.7008-1.6989.0005-.9388-.7602-1.7003-1.699-1.7007h-.0018c-.9388.0004-1.6994.7619-1.699 1.7007.0005.9381.761 1.6985 1.699 1.699zM11.865 12.858c0 1.6199-1.2979 2.9378-2.8977 2.9378s-2.8998-1.314-2.8998-2.9358 1.1799-2.8597 2.8998-2.8597c.6359 0 1.2239.134 1.6998.484v-1.68a.6.6 0 0 1 1.2 0v4.0537h-.002zm-2.8977 1.7399c.9388.0005 1.7002-.7602 1.7007-1.699.0005-.9388-.7602-1.7003-1.699-1.7007h-.0017c-.9389.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699zm-6.0675 1.1979C1.2983 15.7957 0 14.4974 0 12.8959s1.2983-2.8997 2.8998-2.8997 2.8997 1.2982 2.8997 2.8997c0 1.5999-1.2999 2.8998-2.8997 2.8998zm0-1.2c.9388.0006 1.7002-.7601 1.7007-1.699.0005-.9387-.7602-1.7002-1.699-1.7006h-.0017c-.9388.0004-1.6995.7619-1.699 1.7007.0004.9381.7608 1.6985 1.699 1.699z" />
    </svg>
  ),
  SAP: (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
      <path d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z" />
    </svg>
  ),
  Oracle: (
    <svg viewBox="0 0 24 24" className="w-5.5 h-5.5" fill="currentColor">
      <path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z" />
    </svg>
  )
}

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
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 flex-shrink-0"
                style={{
                  backgroundColor: `${p.color}26`, // 15% opacity BG
                  color: p.color,
                  border: `1px solid ${p.color}33`,
                }}
              >
                {PlatformLogos[p.name]}
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
