'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Loader2 } from 'lucide-react'

export default function ToggleStatusButton({
  postId,
  status,
}: {
  postId: string
  status: 'draft' | 'published'
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function toggle() {
    setLoading(true)
    const newStatus = status === 'published' ? 'draft' : 'published'
    await supabase
      .from('blog_posts')
      .update({
        status: newStatus,
        published_at: newStatus === 'published' ? new Date().toISOString() : null,
      })
      .eq('id', postId)
    router.refresh()
    setLoading(false)
  }

  if (loading) {
    return <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-muted" />
  }

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide transition-all ${
        status === 'published'
          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100'
          : 'bg-amber-50 text-amber-600 border border-amber-200 hover:bg-amber-100'
      }`}
    >
      {status === 'published' ? 'Published' : 'Draft'}
    </button>
  )
}
