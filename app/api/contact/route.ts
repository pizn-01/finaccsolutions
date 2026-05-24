import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // Use the anon key with RLS — the INSERT policy allows anonymous submissions
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) { return cookieStore.get(name)?.value },
          set() {},
          remove() {},
        },
      }
    )

    const { error } = await supabase.from('contact_leads').insert({
      full_name:      name,
      business_email: email,
      company_name:   company,
      service_needed: service || null,
      message:        message || null,
      status:         'new',
    })

    if (error) {
      console.error('Supabase insert error:', error.message)
      return NextResponse.json({ error: 'Failed to save enquiry.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error.' }, { status: 500 })
  }
}
