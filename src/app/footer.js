'use client'

import { usePathname } from "next/navigation"

export default function Footer() {
  const currentUrl = usePathname()

  if (currentUrl == '/mindtest')
    return <></> 
  return (
    <div className="w-full h-9 bg-black">
      <h1 className="text-white">Footer here</h1>
    </div>
  )
}