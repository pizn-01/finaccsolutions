'use client'

import { useState } from 'react'

interface Props {
  name: string
  abbr: string
  color: string
  iconSlug?: string
  darkText?: boolean
}

export default function ToolBadge({ name, abbr, color, iconSlug, darkText }: Props) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <span
      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 p-[8px]"
      style={{ backgroundColor: color }}
    >
      {iconSlug && !imgFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${iconSlug}/ffffff`}
          alt={name}
          className="w-full h-full object-contain block"
          loading="lazy"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span
          className="font-sora font-bold text-[0.6rem] tracking-tight leading-none"
          style={{ color: darkText ? '#1a1a1a' : '#ffffff' }}
        >
          {abbr}
        </span>
      )}
    </span>
  )
}
