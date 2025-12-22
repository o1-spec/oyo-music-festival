import { Button } from '@/components/ui/button'
import { Calendar, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-primary rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary/30 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo/Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-8">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm uppercase tracking-wider text-muted-foreground">March 2025</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif font-black text-6xl md:text-8xl lg:text-9xl mb-6 leading-none text-balance">
          Oyo Music
          <br />
          <span className="text-primary">Festival 2025</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
          A celebration of Yoruba culture through music, art, and entertainment
        </p>

        {/* Date & Location */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">2 Days | March 2025</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-lg font-medium">University of Ibadan</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="text-lg px-8 py-6 h-auto font-semibold">
            Get Tickets
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto font-semibold border-primary/30 hover:bg-primary/10">
            Partner With Us
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
