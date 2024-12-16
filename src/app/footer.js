'use client'

import { usePathname } from "next/navigation"

export default function Footer() {
  const currentUrl = usePathname()

  return (
    <div className="absolute bottom-0 w-full py-5 bg-black">
      <h1 className="text-white opacity-80 text-center">@Copyright</h1>
    </div>
  )
}