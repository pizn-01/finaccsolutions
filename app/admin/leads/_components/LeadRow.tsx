'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { ChevronDown, ChevronUp, Loader2 } from 'lucide-react'
import type { ContactLead } from '@/lib/supabase/types'

const statusOptions: ContactLead['status'][] = ['new', 'contacted', 'qualified', 'closed']

const statusColors: Record<ContactLead['status'], string> = {
  new:       'bg-blue-50 text-blue-600 border-blue-200',
  contacted: 'bg-amber-50 text-amber-600 border-amber-200',
  qualified: 'bg-purple-50 text-purple-600 border-purple-200',
  closed:    'bg-emerald-50 text-emerald-600 border-emerald-200',
}

export default function LeadRow({ lead }: { lead: ContactLead }) {
  const [expanded, setExpanded] = useState(lead.status === 'new')
  const [status, setStatus] = useState(lead.status)
  const [notes, setNotes] = useState(lead.notes ?? '')
  const [saving, setSaving] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function saveChanges() {
    setSaving(true)
    await supabase.from('contact_leads').update({ status, notes }).eq('id', lead.id)
    router.refresh()
    setSaving(false)
  }

  return (
    <>
      <tr className={`hover:bg-brand-slate/50 transition-colors ${lead.status === 'new' ? 'bg-blue-50/30' : ''}`}>
        <td className="px-5 py-4">
          <div className="font-dm-sans font-semibold text-sm text-brand-navy">{lead.full_name}</div>
          <div className="text-xs text-brand-muted">{lead.business_email}</div>
          <div className="text-xs text-brand-muted">{lead.company_name}</div>
        </td>
        <td className="px-5 py-4 hidden md:table-cell">
          <span className="text-xs text-brand-navy font-dm-sans">{lead.service_needed ?? '—'}</span>
        </td>
        <td className="px-5 py-4 hidden sm:table-cell">
          <span className="text-xs text-brand-muted font-dm-sans">
            {new Date(lead.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
          </span>
        </td>
        <td className="px-5 py-4">
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border ${statusColors[status]}`}>
            {status}
          </span>
        </td>
        <td className="px-5 py-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg text-brand-muted hover:text-brand-blue hover:bg-brand-blue/5 transition-all"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </td>
      </tr>

      {expanded && (
        <tr className="bg-brand-slate/40">
          <td colSpan={5} className="px-5 py-4">
            <div className="space-y-4 max-w-2xl">
              {lead.message && (
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">Message</div>
                  <p className="text-sm text-brand-navy font-dm-sans leading-relaxed bg-white border border-brand-border rounded-xl px-4 py-3">
                    {lead.message}
                  </p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1.5">Status</div>
                  <div className="flex flex-wrap gap-1.5">
                    {statusOptions.map(s => (
                      <button
                        key={s}
                        onClick={() => setStatus(s)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide border transition-all capitalize ${
                          status === s ? statusColors[s] : 'bg-white text-brand-muted border-brand-border hover:border-brand-blue'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1.5">Notes</div>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Internal notes…"
                    className="w-full px-3 py-2 rounded-xl border border-brand-border bg-white text-brand-navy text-sm focus:outline-none focus:border-brand-blue transition-colors resize-none font-dm-sans"
                  />
                </div>
              </div>

              <button
                onClick={saveChanges}
                disabled={saving}
                className="flex items-center gap-2 px-4 py-2 bg-brand-blue hover:bg-brand-sky text-white rounded-xl text-xs font-semibold transition-colors disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : null}
                Save Changes
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  )
}
