export function AboutSection() {
  return (
    <section className="py-24 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-balance">
              Where culture
              <br />
              meets <span className="text-primary">innovation</span>
            </h2>
          </div>

          {/* Right column */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Oyo Music Festival is a global celebration showcasing the evolution of Yoruba culture through contemporary music, traditional art forms, and immersive experiences.
            </p>
            <p>
              Over two transformative days, witness distinguished speakers, live performances, cultural games, and a vibrant marketplace that brings together tradition and modernity.
            </p>
            <p className="text-foreground font-medium">
              Join us in celebrating heritage, inspiring creativity, and building community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
