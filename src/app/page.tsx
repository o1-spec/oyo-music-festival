'use client'

import { useState, useEffect } from 'react'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { EventHighlights } from '@/components/event-highlights'
import { KeyGuests } from '@/components/key-guests'
import { Footer } from '@/components/footer'
import { SponsorsSection } from '@/components/sponsor-section'

function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground text-lg">Loading Oyo Music Festival...</p>
      </div>
    </main>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <EventHighlights />
      <KeyGuests />
      <SponsorsSection />
      <Footer />
    </main>
  )
}