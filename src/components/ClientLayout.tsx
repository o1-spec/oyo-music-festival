"use client"

import { usePathname } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ScrollingBanner } from "@/components/ScrollingBanner"

export function ClientLayout() {
  const pathname = usePathname()

  if (pathname === "/") {
    return null
  }

  return (
    <>
      <Navigation />
      <ScrollingBanner />
    </>
  )
}