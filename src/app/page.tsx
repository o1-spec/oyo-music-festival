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
import { EventHighlightsMobile } from "@/components/EventHighlightsMobile";
import { ScrollingBanner } from "@/components/ScrollingBanner";

function Loading() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#161616] relative overflow-hidden px-4">
      <div className="wave mb-5 md:mb-8">
        <div className="bar bg-[#52f3fe]"></div>
        <div className="bar bg-[#e223a5]"></div>
        <div className="bar bg-[#52f3fe]"></div>
        <div className="bar bg-[#e223a5]"></div>
        <div className="bar bg-[#52f3fe]"></div>
        <div className="bar bg-[#e223a5]"></div>
        <div className="bar bg-[#52f3fe]"></div>
      </div>
      <div className="w-full max-w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-3 md:mb-4">
        <div
          className="h-full bg-gradient-to-r from-[#52f3fe] to-[#e223a5] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-base md:text-lg bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent font-semibold animate-pulse text-center">
        Igniting the Festival Spirit...
      </p>
    </main>
  );
}


export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showTop, setShowTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen relative bg-[#121212] text-white fade-in">
      <Navigation/>
      <ScrollingBanner/>
      <HeroSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="highlights">
        {isMobile ? <EventHighlightsMobile /> : <EventHighlights />}
      </div>
      <div id="guests">
        <KeyGuests />
      </div>
      <div id="sponsors">
        <SponsorsSection />
      </div>
      <div id="footer">
        <Footer />
      </div>
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
