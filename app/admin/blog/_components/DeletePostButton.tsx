'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Trash2, Loader2 } from 'lucide-react'

export default function DeletePostButton({ postId }: { postId: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleDelete() {
    if (!confirm('Delete this post? This cannot be undone.')) return
    setLoading(true)
    await supabase.from('blog_posts').delete().eq('id', postId)
    router.refresh()
    setLoading(false)
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="p-1.5 rounded-lg text-brand-muted hover:text-red-500 hover:bg-red-50 transition-all"
      title="Delete post"
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
    </button>
  )
}
