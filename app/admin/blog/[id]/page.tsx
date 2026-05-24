import { createServerClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import BlogEditor from '../_components/BlogEditor'

export default async function EditPostPage({ params }: { params: { id: string } }) {
  const supabase = createServerClient()
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!post) notFound()

  return <BlogEditor post={post} />
}
