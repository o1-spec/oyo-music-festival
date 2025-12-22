import { Mic2, Palette, Users, Sparkles, Trophy } from 'lucide-react'

const highlights = [
  {
    icon: Mic2,
    title: 'Live Performances',
    description: 'World-class artists celebrating Yoruba music traditions'
  },
  {
    icon: Users,
    title: 'Distinguished Speakers',
    description: 'Academic leaders discussing cultural evolution'
  },
  {
    icon: Palette,
    title: 'Art Exhibitions',
    description: 'Immersive displays of traditional and contemporary art'
  },
  {
    icon: Trophy,
    title: 'Cultural Games',
    description: 'Interactive Ewi, DJ mix, and cooking competitions'
  },
  {
    icon: Sparkles,
    title: 'Food & Vendors',
    description: 'Authentic Yoruba cuisine and artisan marketplace'
  }
]

export function EventHighlights() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4">
            Experience the <span className="text-primary">Festival</span>
          </h2>
          <p className="text-lg text-muted-foreground">Two days of culture, music, and celebration</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="group p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:bg-secondary/30"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
