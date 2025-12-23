import { Mic2, Palette, Users, Sparkles, Trophy } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Mic2,
    title: "Live Performances",
    description:
      "World-class artists celebrating Yoruba music traditions with electrifying shows and fusion performances.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
  },
  {
    icon: Users,
    title: "Distinguished Speakers",
    description:
      "Academic leaders and cultural experts discussing the evolution of Yoruba heritage and its global impact.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: Palette,
    title: "Art Exhibitions",
    description:
      "Immersive displays blending traditional Yoruba art with contemporary expressions in stunning galleries.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
  },
  {
    icon: Trophy,
    title: "Cultural Games",
    description:
      "Interactive competitions in Ewi, DJ mixing, and cooking, showcasing talent and community spirit.",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Food & Vendors",
    description:
      "Authentic Yoruba cuisine, artisan marketplaces, and vibrant stalls offering unique cultural experiences.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
  },
];

export function EventHighlights() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const currentIndex = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const texts = textRefs.current;
    const images = imageRefs.current;

    gsap.set(texts.slice(1), { opacity: 0, y: 50 });
    gsap.set(images.slice(1), { opacity: 0, scale: 1.1 });

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=800vh",
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const progress = self.progress;
        const newIndex = Math.floor(progress * highlights.length);

        if (newIndex !== currentIndex.current && newIndex < highlights.length) {
          gsap.to(texts[currentIndex.current], {
            opacity: 0,
            y: -50,
            duration: 0.5,
          });
          gsap.to(images[currentIndex.current], {
            opacity: 0,
            scale: 1.1,
            duration: 0.5,
          });

          gsap.to(texts[newIndex], { opacity: 1, y: 0, duration: 0.5 });
          gsap.to(images[newIndex], { opacity: 1, scale: 1, duration: 0.5 });

          currentIndex.current = newIndex;
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-[#52f3fe]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-[#e223a5]/20 rounded-full"></div>
      </div>

      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Experience the Festival
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Two days of culture, music, and celebration that bring Yoruba heritage
          to life.
        </p>
      </div>

      <div className="flex w-full h-screen">
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="relative w-full">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                ref={(el) => {
                  textRefs.current[index] = el;
                }}
                className="absolute inset-0 flex flex-col pl-40 justify-center"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#52f3fe]/20 to-[#e223a5]/20 flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-[#52f3fe]" />
                  </div>
                </div>
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  {highlight.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/2 relative flex items-center justify-center p-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              className="absolute top-1/4 bottom-1/4 left-0 right-30 p-1 bg-gradient-to-r from-[#52f3fe] to-[#e223a5] rounded-lg"
            >
              <div
                className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
                style={{ backgroundImage: `url(${highlight.image})` }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0a0a0a]/50 rounded-lg" />
        </div>
      </div>

      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 z-10">
        <button className="bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50">
          Explore the Schedule
        </button>
      </div>
    </section>
  );
}
