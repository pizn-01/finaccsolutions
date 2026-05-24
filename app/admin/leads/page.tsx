import { createServerClient } from '@/lib/supabase/server'
import { Inbox } from 'lucide-react'
import type { ContactLead } from '@/lib/supabase/types'
import LeadRow from './_components/LeadRow'

async function getLeads(): Promise<ContactLead[]> {
  try {
    const supabase = createServerClient()
    const { data } = await supabase
      .from('contact_leads')
      .select('*')
      .order('created_at', { ascending: false })
    return data ?? []
  } catch {
    return []
  }
}

const statusColors: Record<ContactLead['status'], string> = {
  new:       'bg-blue-50 text-blue-600 border-blue-200',
  contacted: 'bg-amber-50 text-amber-600 border-amber-200',
  qualified: 'bg-purple-50 text-purple-600 border-purple-200',
  closed:    'bg-emerald-50 text-emerald-600 border-emerald-200',
}

export { statusColors }

export default async function LeadsPage() {
  const leads = await getLeads()
  const newCount = leads.filter(l => l.status === 'new').length

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sora font-bold text-2xl text-brand-navy mb-1">Contact Leads</h1>
          <p className="text-brand-muted text-sm font-dm-sans">
            {leads.length} total lead{leads.length !== 1 ? 's' : ''}
            {newCount > 0 && <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-full text-xs font-bold">{newCount} new</span>}
          </p>
        </div>
      </div>

      {leads.length === 0 ? (
        <div className="bg-white border border-brand-border rounded-2xl p-12 text-center">
          <Inbox className="w-10 h-10 text-brand-muted mx-auto mb-3" />
          <h3 className="font-sora font-semibold text-brand-navy mb-1">No leads yet</h3>
          <p className="text-brand-muted text-sm font-dm-sans">When visitors submit the contact form, their enquiries will appear here.</p>
        </div>
      ) : (
        <div className="bg-white border border-brand-border rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-brand-border bg-brand-slate">
                <th className="text-left px-5 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wider text-brand-muted">Contact</th>
                <th className="text-left px-5 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wider text-brand-muted hidden md:table-cell">Service</th>
                <th className="text-left px-5 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wider text-brand-muted hidden sm:table-cell">Date</th>
                <th className="text-left px-5 py-3 font-dm-sans font-semibold text-xs uppercase tracking-wider text-brand-muted">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {leads.map(lead => (
                <LeadRow key={lead.id} lead={lead} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
