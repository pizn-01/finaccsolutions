'use client'

import SectionHeader from '@/components/ui/SectionHeader'
import AnimateIn from '@/components/ui/AnimateIn'

const LucaNetLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M3 3h6v12h12v6H3V3z" />
    <path d="M12 9h6v6h-6V9z" opacity="0.6" />
  </svg>
)

const SapLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 6.064v11.872h12.13L24 6.064zm3.264 2.208h.005c.863.001 1.915.245 2.676.633l-.82 1.43c-.835-.404-1.255-.442-1.73-.467-.708-.038-1.064.215-1.069.488-.007.332.669.633 1.305.838.964.306 2.19.715 2.377 1.9L7.77 8.437h2.046l2.064 5.576-.007-5.575h2.37c2.257 0 3.318.764 3.318 2.519 0 1.575-1.09 2.514-2.936 2.514h-.763l-.01 2.094-3.588-.003-.25-.908c-.37.122-.787.189-1.23.189-.456 0-.885-.071-1.263-.2l-.358.919-2 .006.09-.462c-.029.025-.057.05-.087.074-.535.43-1.208.629-2.037.644l-.213.002a5.075 5.075 0 0 1-2.581-.675l.73-1.448c.79.467 1.286.572 1.956.558.347-.007.598-.07.761-.239a.557.557 0 0 0 .156-.369c.007-.376-.53-.553-1.185-.756-.531-.164-1.135-.389-1.606-.735-.559-.41-.825-.924-.812-1.65a1.99 1.99 0 0 1 .566-1.377c.519-.537 1.357-.863 2.363-.863zm10.597 1.67v1.904h.521c.694 0 1.247-.23 1.248-.964 0-.709-.554-.94-1.248-.94zm-5.087.767l-.748 2.362c.223.085.481.133.757.133.268 0 .52-.047.742-.126l-.736-2.37z" />
  </svg>
)

const OracleLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z" />
  </svg>
)

const TagetikLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-4H7V9h4V5h2v4h4v3h-4v4z" />
  </svg>
)

const OneStreamLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23.457 8.42h-2.311a9.79 9.79 0 0 1 .676 3.58c0 5.425-4.397 9.822-9.822 9.822a9.767 9.767 0 0 1-4.98-1.357 9.12 9.12 0 0 0 5.625-6.457l.817-3.529a6.918 6.918 0 0 1 2.488-3.903 6.221 6.221 0 0 1 1.52-.87 7.616 7.616 0 0 1 2.765-.51l1.642-.003C19.711 2.063 16.094 0 12 0 5.372 0 0 5.373 0 12c0 1.247.19 2.448.543 3.579h2.31A9.79 9.79 0 0 1 2.179 12c0-5.424 4.398-9.822-9.822-9.822 1.819 0 3.52.495 4.98 1.357a9.118 9.118 0 0 0-5.625 6.457l-.816 3.53a6.917 6.917 0 0 1-2.488 3.903 6.22 6.22 0 0 1-1.52.869c-.737.295-1.655.51-2.887.51l-1.522.002C4.288 21.936 7.906 24 12 24c6.628 0 12-5.373 12-12a12 12 0 0 0-.543-3.58Z" />
  </svg>
)

const QuickBooksLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm.642 4.1335c.9554 0 1.7296.776 1.7296 1.7332v9.0667h1.6c1.614 0 2.9275-1.3156 2.9275-2.933 0-1.6173-1.3136-2.9333-2.9276-2.9333h-.6654V7.3334h.6654c2.5722 0 4.6577 2.0897 4.6577 4.667 0 2.5774-2.0855 4.6666-4.6577 4.6666H12.642zM7.9837 7.333h3.3291v12.533c-.9555 0-1.73-.7759-1.73-1.7332V9.0662H7.9837c-1.6146 0-2.9277 1.316-2.9277 2.9334 0 1.6175 1.3131 2.9333 2.9277 2.9333h.6654v1.7332h-.6654c-2.5725 0-4.6577-2.0892-4.6577-4.6665 0-2.5771 2.0852-4.6666 4.6577-4.6666Z" />
  </svg>
)

const XeroLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.585 14.655c-1.485 0-2.69-1.206-2.69-2.689 0-1.485 1.207-2.691 2.69-2.691 1.485 0 2.69 1.207 2.69 2.691s-1.207 2.689-2.69 2.689zM7.53 14.644c-.099 0-.192-.041-.267-.116l-2.043-2.04-2.052 2.047c-.069.068-.16.108-.258.108-.202 0-.368-.166-.368-.368 0-.099.04-.191.111-.263l2.04-2.05-2.038-2.047c-.075-.069-.113-.162-.113-.261 0-.203.166-.366.368-.366.098 0 .188.037.258.105l2.055 2.048 2.048-2.045c.069-.071.162-.108.26-.108.211 0 .375.165.375.366 0 .098-.029.188-.104.258l-2.056 2.055 2.055 2.051c.068.069.104.16.104.258 0 .202-.165.368-.365.368h-.01zm8.017-4.591c-.796.101-.882.476-.882 1.404v2.787c0 .202-.165.366-.366.366-.203 0-.367-.165-.368-.366v-4.53c0-.204.16-.366.362-.366.166 0 .316.125.346.289.27-.209.6-.317.93-.317h.105c.195 0 .359.165.359.368 0 .201-.164.352-.375.359 0 0-.09 0-.164.008l.053-.002zm-3.091 2.205H8.625c0 .019.003.037.006.057.02.105.045.211.083.31.194.531.765 1.275 1.829 1.29.33-.003.631-.086.9-.229.21-.12.391-.271.525-.428.045-.058.09-.112.12-.168.18-.229.405-.186.54-.083.164.135.18.391.045.57l-.016.016c-.21.27-.435.495-.689.66-.255.164-.525.284-.811.345-.33.09-.645.104-.975.06-1.095-.135-2.01-.93-2.28-2.01-.06-.21-.09-.42-.09-.645 0-.855.421-1.695 1.125-2.205.885-.615 2.085-.66 3-.075.63.405 1.035 1.021 1.185 1.771.075.419-.21.794-.734.81l.068-.046zm6.129-2.223c-1.064 0-1.931.865-1.931 1.931 0 1.064.866 1.931 1.931 1.931s1.931-.867 1.931-1.931c0-1.065-.866-1.933-1.931-1.933v.002zm0 2.595c-.367 0-.666-.297-.666-.666 0-.367.3-.665.666-.665.367 0 .667.299.667.665 0 .369-.3.667-.667.666zm-8.04-2.603c-.91 0-1.672.623-1.886 1.466v.03h3.776c-.203-.855-.973-1.494-1.891-1.494v-.002z" />
  </svg>
)

const ExcelLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85h2.16zM14.25 21v-3H7.5v3zm0-4.5v-3.75H12v3.75zm0-5.25V7.5H12v3.75zm0-5.25V3H7.5v3zm8.25 15v-3h-6.75v3zm0-4.5v-3.75h-6.75v3.75zm0-5.25V7.5h-6.75v3.75zm0-5.25V3h-6.75v3Z" />
  </svg>
)

const GustoLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M21.311 8.768c-1.482 0-2.69 1.212-2.69 2.702s1.208 2.701 2.69 2.701c1.483 0 2.689-1.212 2.689-2.701s-1.206-2.702-2.689-2.702Zm0 4.123a1.42 1.42 0 0 1-1.415-1.421 1.42 1.42 0 0 1 1.415-1.422c.78 0 1.415.638 1.415 1.422s-.635 1.42-1.415 1.42Zm-7.919-1.969-.47-.235c-.204-.102-.332-.18-.384-.239a.283.283 0 0 1-.078-.19c0-.091.04-.168.122-.228.08-.063.193-.091.338-.091.264 0 .556.16.878.48l.794-.797a2.09 2.09 0 0 0-.744-.63 2.06 2.06 0 0 0-.937-.22c-.484 0-.884.143-1.196.431a1.367 1.367 0 0 0-.468 1.04c0 .63.412 1.154 1.24 1.57l.433.218c.373.189.559.381.559.58 0 .108-.052.201-.155.284a.63.63 0 0 1-.409.122c-.156 0-.336-.054-.538-.163a1.81 1.81 0 0 1-.528-.427l-.79.864c.446.584 1.04.878 1.786.878.561 0 1.009-.153 1.34-.458.335-.304.502-.685.502-1.141 0-.342-.093-.642-.277-.897-.185-.255-.525-.504-1.018-.75Zm-7.985 2.66V8.876H4.131v.316a2.662 2.662 0 0 0-1.442-.423C1.206 8.768 0 9.98 0 11.47s1.206 2.701 2.689 2.701c.505 0 1-.142 1.427-.412l-.002.104a1.42 1.42 0 0 1-1.415 1.42c-.265 0-.524-.075-.748-.217l-.631 1.11c.416.255.894.39 1.382.39a2.713 2.713 0 0 0 2.705-2.702c0-.057.004-.227 0-.281ZM2.69 12.89a1.42 1.42 0 0 1-1.415-1.42c0-.784.636-1.422 1.415-1.422s1.415.638 1.415 1.422a1.42 1.42 0 0 1-1.415 1.42Zm7.803-4.016H9.21v2.568c.002.365.002.995-.265 1.264-.128.128-.269.245-.563.245a.707.707 0 0 1-.565-.245c-.269-.27-.266-.901-.265-1.264V8.874H6.27v2.56c-.004.528-.01 1.509.633 2.16.377.38.827.575 1.476.575.65 0 1.1-.193 1.477-.576.643-.65.637-1.633.633-2.159l.004-2.56Zm7.27 3.787c-.104.078-.353.253-.636.213-.23-.03-.418-.2-.447-.768v-2.13h1.507V8.87H16.68V7.434H15.4v.281h-.002v4.223c0 .671.17 2.231 1.726 2.231.788-.012 1.266-.441 1.467-.609l.026-.02-.767-.95a4.174 4.174 0 0 1-.089.07Z" />
  </svg>
)

const AdpLogo = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M15.08584 11.9999a3.13031 3.13031 0 0 1-3.12003 3.12002h-1.2v-1.37144h1.2a1.74859 1.74859 0 1 0 0-3.49717h-1.2V8.87987h1.2a3.13031 3.13031 0 0 1 3.12003 3.12002M8.43436 8.87987v2.53716H6.27434l-.78858 1.37144H9.8058v-3.9086Zm15.56584 1.9543a4.28575 4.28575 0 0 1-4.28575 4.28575v2.33145h-3.70289V15.6342a5.36233 5.36233 0 0 1-4.08003 1.81716H8.43436v-2.33145H5.69148l-1.37144 2.33145H0L6.34291 6.54842h5.6229a5.59548 5.59548 0 0 1 4.08004 1.81716V6.54842h3.70289a4.2789 4.2789 0 0 1 4.25146 4.28575m-12.03439 5.24576a4.09032 4.09032 0 0 0 3.7029-2.33145h1.74858v2.33145h.96v-2.33145h1.37145a2.91088 2.91088 0 0 0 2.9143-2.91431 2.94174 2.94174 0 0 0-2.94859-2.91431H17.383v3.49717h-1.37144a4.11432 4.11432 0 0 0-4.04575-3.49717H7.16577l-4.76575 8.16007h1.13144l1.37144-2.33145h4.9029v2.33145zm7.74864-7.20006h-1.37144v1.37144h1.37144a.57943.57943 0 0 1 .58286.58286.6.6 0 0 1-.58286.58286h-1.37144v1.37144h1.37144a1.9543 1.9543 0 0 0 1.9543-1.9543 1.97487 1.97487 0 0 0-1.9543-1.9543 M21.63447 16.76565a.54858.54858 0 1 1-.54858-.54858.54172.54172 0 0 1 .54858.54858m.13714 0a.68572.68572 0 1 0-.68572.68572.68572.68572 0 0 0 .68572-.68572 M21.12018 16.45707a.13714.13714 0 1 1 0 .2743h-.13715v-.2743zm.17143-.03428a.26057.26057 0 0 0-.17143-.06857h-.2743v.82286h.10287v-.30857h.13714l.17143.30857h.13714l-.20571-.34286c.03428 0 .06857-.03429.10286-.06857a.20572.20572 0 0 0 .03428-.13715.192.192 0 0 0-.03428-.20571" />
  </svg>
)

const row1Tools = [
  { name: 'LucaNet', color: '#005CA9', logo: LucaNetLogo },
  { name: 'SAP BPC', color: '#0070F2', logo: SapLogo },
  { name: 'Hyperion', color: '#C74634', logo: OracleLogo },
  { name: 'Tagetik', color: '#6B21A8', logo: TagetikLogo },
  { name: 'OneStream', color: '#1D4ED8', logo: OneStreamLogo },
]

const row2Tools = [
  { name: 'QuickBooks', color: '#2CA01C', logo: QuickBooksLogo },
  { name: 'Xero', color: '#13B5EA', logo: XeroLogo },
  { name: 'Excel / Sheets', color: '#217346', logo: ExcelLogo },
  { name: 'Gusto', color: '#F45D48', logo: GustoLogo },
  { name: 'ADP', color: '#D0021B', logo: AdpLogo },
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
            <div className="space-y-5">
              <h3 className="font-sora font-semibold text-xs uppercase tracking-wider text-brand-navy/60 text-center">
                Group Consolidation &amp; Financial Planning
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {row1Tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-white border border-brand-border rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[0_2px_12px_rgba(10,22,40,0.03)] select-none"
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      willChange: 'transform, box-shadow, border-color',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(10,22,40,0.08)'
                      e.currentTarget.style.borderColor = '#1B4FD8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#E8ECF4'
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${tool.color}15`,
                        color: tool.color,
                        border: `1px solid ${tool.color}25`,
                      }}
                    >
                      {tool.logo}
                    </div>
                    <span className="font-dm-sans font-bold text-brand-navy text-sm sm:text-base leading-tight">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Row 2: Bookkeeping, Payroll & Reporting */}
          <AnimateIn direction="up" delay={0.2}>
            <div className="space-y-5">
              <h3 className="font-sora font-semibold text-xs uppercase tracking-wider text-brand-navy/60 text-center">
                Bookkeeping, Payroll &amp; Reporting
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {row2Tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="bg-white border border-brand-border rounded-2xl px-5 py-4 flex items-center gap-4 shadow-[0_2px_12px_rgba(10,22,40,0.03)] select-none"
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      willChange: 'transform, box-shadow, border-color',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(10,22,40,0.08)'
                      e.currentTarget.style.borderColor = '#1B4FD8'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.borderColor = '#E8ECF4'
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${tool.color}15`,
                        color: tool.color,
                        border: `1px solid ${tool.color}25`,
                      }}
                    >
                      {tool.logo}
                    </div>
                    <span className="font-dm-sans font-bold text-brand-navy text-sm sm:text-base leading-tight">
                      {tool.name}
                    </span>
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
