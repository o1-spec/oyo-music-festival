'use client'

import { useState, useEffect } from 'react'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { EventHighlights } from '@/components/event-highlights'
import { KeyGuests } from '@/components/key-guests'
import { Footer } from '@/components/footer'
import { SponsorsSection } from '@/components/sponsor-section'
import { Navigation } from '@/components/navigation'

function Loading() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#161616] relative overflow-hidden">
      <div className="wave mb-8">
        <div className="bar bg-[#52f3fe]"></div>
        <div className="bar bg-[#e223a5]"></div>
        <div className="bar bg-[#52f3fe]"></div>
        <div className="bar bg-[#e223a5]"></div>
        <div className="bar bg-[#52f3fe]"></div>
        <div className="bar bg-[#e223a5]"></div>
        <div className="bar bg-[#52f3fe]"></div>
      </div>
      <p className="text-lg bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent font-semibold animate-pulse">
        Igniting the Festival Spirit...
      </p>
    </main>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000) 
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <main className="min-h-screen relative bg-[#121212] text-white fade-in">    
      {/* Static straight line on the right */}
      {/* <div className='w-75 bg-[#e223a5] h-2 fixed top-0 left-0'></div>
      <div className='w-75 bg-[#e223a5] h-2 fixed bottom-0 right-0'></div> */}
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventHighlights />
      <KeyGuests />
      <SponsorsSection />
      <Footer />
    </main>
  )
}