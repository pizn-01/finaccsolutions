'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Plus, Trash2, Loader2, Save, ToggleLeft, ToggleRight } from 'lucide-react'
import type { Testimonial } from '@/lib/supabase/types'

const emptyForm = { name: '', role: '', text: '', initials: '', sort_order: 0 }

export default function TestimonialsPage() {
  const supabase = createClient()
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyForm)
  const [formSaving, setFormSaving] = useState(false)

  useEffect(() => { load() }, [])

  async function load() {
    setLoading(true)
    const { data } = await supabase.from('testimonials').select('*').order('sort_order')
    setTestimonials(data ?? [])
    setLoading(false)
  }

  async function toggleActive(t: Testimonial) {
    setSaving(t.id)
    await supabase.from('testimonials').update({ is_active: !t.is_active }).eq('id', t.id)
    await load()
    setSaving(null)
  }

  async function deleteTestimonial(id: string) {
    if (!confirm('Delete this testimonial?')) return
    setSaving(id)
    await supabase.from('testimonials').delete().eq('id', id)
    await load()
    setSaving(null)
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setFormSaving(true)
    await supabase.from('testimonials').insert({
      ...form,
      is_active: true,
    })
    setForm(emptyForm)
    setShowForm(false)
    setFormSaving(false)
    await load()
  }

  const inputCls = 'w-full px-3 py-2.5 rounded-xl border border-brand-border bg-white text-brand-navy text-sm placeholder:text-brand-muted/60 focus:outline-none focus:border-brand-blue transition-colors'

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-sora font-bold text-2xl text-brand-navy mb-1">Testimonials</h1>
          <p className="text-brand-muted text-sm font-dm-sans">Manage client reviews shown on the homepage.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-4 py-2.5 bg-brand-blue hover:bg-brand-sky text-white rounded-xl text-sm font-semibold transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <form onSubmit={handleAdd} className="bg-white border border-brand-border rounded-2xl p-5 mb-6 space-y-4">
          <h2 className="font-sora font-semibold text-sm text-brand-navy">New Testimonial</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Client Name *</label>
              <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="James Morrison" className={inputCls} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Role & Company *</label>
              <input required value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} placeholder="CFO, Northgate Holdings" className={inputCls} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Initials *</label>
              <input required maxLength={2} value={form.initials} onChange={e => setForm({ ...form, initials: e.target.value.toUpperCase() })} placeholder="JM" className={inputCls} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Sort Order</label>
              <input type="number" value={form.sort_order} onChange={e => setForm({ ...form, sort_order: Number(e.target.value) })} className={inputCls} />
            </div>
            <div className="sm:col-span-2 space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-muted">Testimonial Text *</label>
              <textarea required rows={4} value={form.text} onChange={e => setForm({ ...form, text: e.target.value })} placeholder="What the client said…" className={`${inputCls} resize-none`} />
            </div>
          </div>
          <div className="flex gap-3">
            <button type="submit" disabled={formSaving} className="flex items-center gap-2 px-4 py-2 bg-brand-blue hover:bg-brand-sky text-white rounded-xl text-sm font-semibold transition-colors disabled:opacity-60">
              {formSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2 bg-brand-slate border border-brand-border text-brand-muted rounded-xl text-sm font-semibold hover:text-brand-navy transition-colors">
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* List */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-brand-muted" />
        </div>
      ) : testimonials.length === 0 ? (
        <div className="bg-white border border-brand-border rounded-2xl p-12 text-center">
          <p className="text-brand-muted font-dm-sans text-sm">No testimonials yet. Add your first one above.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {testimonials.map(t => (
            <div key={t.id} className={`bg-white border rounded-2xl p-5 transition-all ${t.is_active ? 'border-brand-border' : 'border-brand-border/50 opacity-60'}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue font-bold text-sm flex items-center justify-center shrink-0">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-sora font-semibold text-sm text-brand-navy">{t.name}</div>
                    <div className="text-xs text-brand-muted font-dm-sans mb-2">{t.role}</div>
                    <p className="text-sm text-brand-muted font-dm-sans leading-relaxed line-clamp-2 italic">"{t.text}"</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleActive(t)}
                    disabled={saving === t.id}
                    className="text-brand-muted hover:text-brand-blue transition-colors"
                    title={t.is_active ? 'Click to hide' : 'Click to show'}
                  >
                    {saving === t.id
                      ? <Loader2 className="w-5 h-5 animate-spin" />
                      : t.is_active
                        ? <ToggleRight className="w-6 h-6 text-emerald-500" />
                        : <ToggleLeft className="w-6 h-6" />
                    }
                  </button>
                  <button
                    onClick={() => deleteTestimonial(t.id)}
                    disabled={saving === t.id}
                    className="p-1.5 rounded-lg text-brand-muted hover:text-red-500 hover:bg-red-50 transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
