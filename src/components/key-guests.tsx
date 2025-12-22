import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Guest {
  name: string
  role: string
  image?: string
}

const guests: Guest[] = [
  {
    name: "Gov. Seyi Makinde",
    role: "Executive Governor of Oyo State",
    image: "/governor-seyi-makinde-portrait.jpg",
  },
  {
    name: "Prof. Kayode Adebowale",
    role: "Vice-Chancellor, University of Ibadan",
    image: "/professor-kayode-adebowale-portrait.jpg",
  },
  {
    name: "Prof. Siyan Oyeweso",
    role: "Distinguished Academic",
    image: "/professor-siyan-oyeweso-portrait.jpg",
  },
  {
    name: "Tunde Kilani",
    role: "Renowned Filmmaker",
    image: "/tunde-kilani-filmmaker-portrait.jpg",
  },
]

export function KeyGuests() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Distinguished Guests</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Join us as we welcome prominent figures in culture, academia, and entertainment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guests.map((guest, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 group">
              <Avatar className="h-32 w-32 border-4 border-border transition-transform duration-300 group-hover:scale-105">
                <AvatarImage src={guest.image || "/placeholder.svg"} alt={guest.name} />
                <AvatarFallback className="text-2xl">
                  {guest.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg mb-1">{guest.name}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{guest.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
