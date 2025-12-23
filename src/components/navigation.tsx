'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      })
    }
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/tickets', label: 'Tickets' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/contact', label: 'Contact' },
  ]

  const mobileNavLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/tickets', label: 'Tickets' },
    { href: '#guests', label: 'Guests' },
    { href: '/sponsors', label: 'Sponsors' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-40 hidden lg:block">
        {/* Thread with subtle swing */}
        <div
          className={`w-0.5 bg-gradient-to-b from-[#52f3fe] to-[#e223a5] mx-auto transition-all duration-1500 ease-out ${
            isVisible ? 'h-10' : 'h-0'
          }`}
          style={{
            animation: isVisible ? 'threadSwing 4s ease-in-out infinite' : 'none',
            transformOrigin: 'top center',
          }}
        />

        <div
          className={`bg-[#121212]/95 backdrop-blur-sm rounded-lg shadow-2xl px-6 py-3 border border-[#52f3fe]/20 relative transition-all duration-1000 ease-out w-[700px] ${
            isVisible
              ? 'translate-y-0 opacity-100 rotate-0'
              : '-translate-y-8 opacity-0 rotate-3'
          }`}
          style={{
            transformOrigin: 'top center',
            animation: isVisible ? 'navSwing 4s ease-in-out infinite' : 'none',
          }}
        >
          {/* Connection point */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#52f3fe] rounded-full border-2 border-[#e223a5] shadow-inner" />
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#121212] rounded-full" />

          <div className="flex items-center justify-between space-x-10">
            <div className="text-xl font-bold text-[#52f3fe] font-serif tracking-wider">
              Oyo Music Festival
            </div>

            <div className="flex space-x-8 relative">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      handleScrollToSection(e, link.href)
                    }
                  }}
                  className="relative text-muted-foreground font-medium transition-all text-[15px] duration-300 ease-out group overflow-hidden"
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {/* Main text - no scale or translate */}
                  <span className="relative z-10 block transition-colors duration-300 ease-out group-hover:text-[#52f3fe]">
                    {link.label}
                  </span>

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#52f3fe] to-[#e223a5] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Button */}
      <div className="fixed top-4 right-4 z-50 lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-[#121212]/95 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-[#52f3fe]/20"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`bg-[#52f3fe] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
              }`}
            ></span>
            <span
              className={`bg-[#52f3fe] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`bg-[#52f3fe] block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 right-0 bg-[#121212]/95 backdrop-blur-sm rounded-lg shadow-2xl border border-[#52f3fe]/20 py-4 px-6 min-w-[200px]">
            <div className="text-xl font-bold text-[#52f3fe] font-serif mb-4">Oyo Music Festival</div>
            <div className="space-y-3">
              {mobileNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      handleScrollToSection(e, link.href)
                    }
                    setIsMobileMenuOpen(false) 
                  }}
                  className="block text-muted-foreground font-medium text-[14px] hover:text-[#52f3fe] transition-colors duration-200 py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}