import { Button } from '@/components/ui/button'
import { Calendar, MapPin } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-gradient-radial from-[#52f3fe]/10 to-transparent">
        <div className="particles">
          <div className="particle" style={{ left: '15%', top: '20%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '70%', top: '40%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ left: '50%', top: '70%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ left: '85%', top: '60%', animationDelay: '3s' }}></div>
        </div>
        <svg className="cultural-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 C30 10 20 25 20 40 L20 70 C20 85 30 95 50 95 C70 95 80 85 80 70 L80 40 C80 25 70 10 50 10 Z M35 40 L65 40 L65 70 L35 70 Z" fill="rgba(82, 243, 254, 0.1)" />
          <circle cx="50" cy="55" r="5" fill="rgba(226, 35, 165, 0.1)" />
        </svg>
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[#52f3fe] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-[#52f3fe]/30 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#52f3fe]/30 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-[#52f3fe] rounded-full animate-pulse" />
          <span className="text-sm uppercase tracking-wider text-muted-foreground">March 2025</span>
        </div>

        <h1 className="font-serif font-black text-5xl xs:text-6xl md:text-8xl text-[#52f3fe] lg:text-9xl mb-6 leading-none text-balance animate-slide-up">
          Oyo Music
          <br />
          <span className="text-[#e223a5]">Festival 2025</span>
        </h1>

        <p className="text-lg xs:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance animate-fade-in" style={{ animationDelay: '0.5s' }}>
          A celebration of Yoruba culture through music, art, and entertainment
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-6 mb-12 text-foreground animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 xs:w-5 h-4 xs:h-5 text-primary" />
            <span className="text-base xs:text-lg font-medium">2 Days | March 2025</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 xs:w-5 h-4 xs:h-5 text-primary" />
            <span className="text-base xs:text-lg font-medium">University of Ibadan</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button size="lg" className="text-base xs:text-lg px-6 xs:px-8 py-4 xs:py-6 h-auto font-semibold hover:scale-105 hover:shadow-glow transition-all duration-300">
            Get Tickets
          </Button>
          <Button size="lg" variant="outline" className="text-base xs:text-lg px-6 xs:px-8 py-4 xs:py-6 h-auto font-semibold border-primary/30 hover:bg-primary/10 hover:scale-105 hover:shadow-glow transition-all duration-300" style={{ animationDelay: '0.1s' }}>
            Partner With Us
          </Button>
        </div>

        <div className="absolute left-1/2 translate-y-20 cursor-pointer -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs xs:text-sm uppercase tracking-wider">Scroll</span>
            <div className="w-px h-8 xs:h-12 bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}