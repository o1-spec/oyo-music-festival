interface Sponsor {
  name: string
  logo?: string
}

const sponsors: Sponsor[] = [
  { name: "Oyo State Government", logo: "/oyo-state-government-logo.jpg" },
  { name: "University of Ibadan", logo: "/university-of-ibadan-logo.jpg" },
  { name: "Imperial 1629", logo: "/imperial-1629-media-logo.jpg" },
  { name: "Partner Company", logo: "/corporate-partner-logo.jpg" },
]

export function SponsorsSection() {
  return (
    <section className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Proudly Supported By
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <img src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
