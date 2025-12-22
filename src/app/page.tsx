"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EventHighlights } from "@/components/event-highlights";
import { KeyGuests } from "@/components/key-guests";
import { Footer } from "@/components/footer";
import { SponsorsSection } from "@/components/sponsor-section";
import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function Loading() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 300);
    return () => clearInterval(interval);
  }, []);

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
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-[#52f3fe] to-[#e223a5] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-lg bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent font-semibold animate-pulse">
        Igniting the Festival Spirit...
      </p>
    </main>
  );
}

function ScrollingBanner() {
  return (
    <div className="fixed overflow-hidden bg-gradient-to-r from-[#52f3fe]/10 to-[#e223a5]/10 border-b border-[#52f3fe]/20 py-2 z-50">
      <div className="flex w-max animate-marquee">
        <span className="whitespace-nowrap px-4 text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 – University of Ibadan – Get Your Tickets Now!
        </span>
        <span className="whitespace-nowrap px-4 text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 – University of Ibadan – Get Your Tickets Now!
        </span>
        <span className="whitespace-nowrap px-4 text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 – University of Ibadan – Get Your Tickets Now!
        </span>
        <span className="whitespace-nowrap px-4 text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 – University of Ibadan – Get Your Tickets Now!
        </span>
        <span className="whitespace-nowrap px-4 text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 – University of Ibadan – Get Your Tickets Now!
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen relative bg-[#121212] text-white fade-in">
      <Navigation />
      <ScrollingBanner />
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <EventHighlights />
      <KeyGuests />
      <SponsorsSection />
      <Footer />
      {showTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </main>
  );
}