import { Mic2, Palette, Users, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Mic2,
    title: "Live Performances",
    description:
      "Dive into electrifying live performances by world-class artists who honor Yoruba music traditions. Experience fusion shows that blend ancient rhythms with contemporary beats, interactive sessions where the audience participates in call-and-response, and unforgettable moments that celebrate the soul of Yoruba culture through dance, song, and storytelling, creating an atmosphere of joy and connection.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
  },
  {
    icon: Users,
    title: "Distinguished Speakers",
    description:
      "Engage with academic leaders and cultural experts who delve into the evolution of Yoruba heritage and its global impact. Discover inspiring talks on tradition, innovation, and the future of cultural preservation, followed by interactive Q&A sessions that encourage dialogue, foster learning, and highlight the importance of safeguarding Yoruba traditions for generations to come.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    icon: Palette,
    title: "Art Exhibitions",
    description:
      "Explore immersive art exhibitions that seamlessly blend traditional Yoruba art with contemporary expressions in stunning galleries. Admire intricate sculptures, vibrant paintings, and interactive installations that tell compelling stories of heritage and creativity, offering visitors a visual journey through Yoruba history, symbolism, and artistic innovation.",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
  },
  {
    icon: Trophy,
    title: "Cultural Games",
    description:
      "Participate in interactive cultural games featuring competitions in Ewi (Yoruba poetry), DJ mixing battles, and cooking challenges that showcase talent and community spirit. Enjoy fun challenges with prizes, collaborative activities, and opportunities to celebrate Yoruba creativity, unity, and playful traditions in a lively, inclusive environment.",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Food & Vendors",
    description:
      "Indulge in authentic Yoruba cuisine at vibrant food stalls offering traditional dishes like pounded yam, egusi soup, and refreshing beverages infused with local flavors. Browse artisan marketplaces with handmade crafts, souvenirs, and unique cultural items, while engaging in immersive vendor interactions that highlight Yoruba craftsmanship and culinary heritage.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
  },
];

export function EventHighlightsMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".highlight-item");

      gsap.set(items, {
        opacity: 0,
        y: (i) => i * 100,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      });

      gsap.set(items[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${items.length * 10}%`,
          scrub: true,
          pin: true,
        },
      });

      items.forEach((item, i) => {
        if (i === 0) return;

        tl.to(items[i - 1], {
          opacity: 0,
          y: -100,
          ease: "power2.out",
        }).to(
          item,
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
          },
          "<"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="event-highlights-mobile py-20 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden">
      {" "}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#52f3fe]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#e223a5]/30 rounded-full animate-pulse"></div>
      </div>
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent">
          Experience the Festival
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Two days of culture, music, and celebration that bring Yoruba heritage
          to life.
        </p>
      </motion.div>
      <div
        ref={containerRef}
        className="relative z-10"
        style={{ position: "relative", height: "100vh" }}
      >
        {highlights.map((highlight, index) => (
          <div
            key={index}
            className="highlight-item flex flex-col items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-all duration-500 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#52f3fe]/20"
            style={{ position: "absolute", top: 0, width: "100%" }}
          >
            <div
              className="w-full h-72 bg-cover bg-center rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              style={{ backgroundImage: `url(${highlight.image})` }}
            />
            <div className="text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#52f3fe]/30 to-[#e223a5]/30 flex items-center justify-center mx-auto shadow-lg">
                  <highlight.icon className="w-8 h-8 text-[#52f3fe]" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                {highlight.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
                {highlight.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <motion.div
        className="text-center mt-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1] as any,
          delay: 0.5,
        }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => router.push("/schedule")}
          className="bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50 text-sm md:text-base"
        >
          Explore the Schedule
        </button>
      </motion.div>
    </section>
  );
}
