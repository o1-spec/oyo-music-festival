"use client";

import Image from "next/image";
import { Music, Users, Calendar, MapPin } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: <Music className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Live Performances",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Cultural Speakers",
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "2 Days of Fun",
    },
  ];

  const activities = [
    "Yoruba Music Showcase",
    "Interactive Workshops",
    "Cultural Games",
    "Art Marketplace",
    "Networking Events",
    "Fusion Performances",
    "Food & Drink Stalls",
    "Photo Booths",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      ref={sectionRef}
      className="min-h-screen text-white flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-b from-[#121212] to-[#0a0a0a]"
    >
      <div className="max-w-7xl w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-7 items-center">
          <div className="flex flex-col gap-4 sm:gap-6 w-full lg:basis-[50%] order-2 lg:order-1">
            <div
              className={`flex gap-3 sm:gap-4 lg:gap-5 items-center transition-all duration-1800 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <Image
                src="/images/festival-icon.png"
                alt="Oyo Music Festival"
                width={32}
                height={32}
                className={`sm:w-[36px] sm:h-[36px] lg:w-[40px] lg:h-[40px] transition-all duration-1200 ease-out ${
                  isVisible
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-180"
                }`}
                style={{ transitionDelay: "0.8s" }}
              />
             <span
                className={`font-semibold text-xl sm:text-2xl lg:text-[26px] transition-all duration-1600 ease-out bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "1.0s" }}
              >
                About the Festival
              </span>
            </div>

            <p
              className={`text-sm sm:text-base lg:text-[17px] pb-2 leading-relaxed transition-all duration-2000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: "1.4s" }}
            >
              Oyo Music Festival is a vibrant celebration of Yoruba culture, bringing together music, art, and tradition in a modern setting. Since its inception, we've been dedicated to showcasing the rich heritage of Yoruba culture through electrifying performances and immersive experiences that honor the past while embracing the future.
            </p>

            <p
              className={`text-sm sm:text-base lg:text-[17px] leading-relaxed transition-all duration-2000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: "2.0s" }}
            >
              Held at the University of Ibadan, this two-day event features distinguished speakers, emerging artists, and interactive workshops. Join us for a fusion of traditional rhythms and contemporary beats, cultural games, and a marketplace that connects communities and inspires creativity.
            </p>

            <div className="flex gap-4 pt-4 flex-wrap lg:flex-nowrap">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm w-[300px] md:w-[200px] rounded-xl p-4 py-4 border border-white/10 hover:bg-white/10 transition-all duration-1200 ease-out group hover:scale-105 hover:-translate-y-2 hover:shadow-2xl ${
                    isVisible
                      ? "opacity-100 translate-y-0 rotate-0"
                      : "opacity-0 translate-y-32 rotate-12"
                  }`}
                  style={{
                    transitionDelay: `${2.6 + index * 0.4}s`,
                    transformOrigin: "bottom center",
                  }}
                >
                  <div className="flex flex-col gap-3 sm:gap-4 text-left">
                    <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#52f3fe]">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg mb-1 group-hover:text-white transition-colors duration-300 leading-tight">
                        {highlight.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8 w-full lg:basis-[50%] lg:pl-6 xl:pl-10 order-1 lg:order-2">
            <div
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 flex justify-center transition-all duration-2200 ease-out ${
                isVisible
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-50 rotate-45"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="relative group max-w-sm w-full">
                <div
                  className={`absolute inset-0 bg-[#52f3fe]/30 rounded-xl blur-xl transition-all duration-1200 ${
                    isVisible ? "opacity-70" : "opacity-0"
                  } group-hover:opacity-100 group-hover:scale-110`}
                  style={{ transitionDelay: "1.6s" }}
                ></div>

                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20">
                  <Image
                    src="/images/festival-icon.png"
                    alt="Oyo Music Festival Icon"
                    width={300}
                    height={400}
                    className="rounded-lg object-cover w-full h-[280px] sm:h-[350px] lg:h-[400px] grayscale group-hover:grayscale-0 group-hover:-translate-y-2 group-hover:-translate-x-2 transition-all duration-500 ease-out group-hover:scale-105"
                  />
                </div>

                {/* <div
                  className={`absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-gradient-to-r from-[#52f3fe] to-[#e223a5] rounded-full p-2 sm:p-3 border-2 border-white/20 group-hover:-translate-y-2 transition-all duration-500 ease-out ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                  style={{
                    transitionDelay: "3.8s",
                    animation: isVisible
                      ? "bounce 2s ease-in-out infinite 4.5s"
                      : "none",
                  }}
                >
                  <span className="text-lg sm:text-xl">🎉</span>
                </div> */}
              </div>
            </div>

            <div
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 transition-all duration-1800 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
              style={{ transitionDelay: "2.4s" }}
            >
              <h3
                className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white transition-all duration-1400 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10"
                }`}
                style={{ transitionDelay: "2.8s" }}
              >
                Festival Activities
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {activities.map((activity, index) => (
                  <span
                    key={index}
                    className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-full text-xs sm:text-sm lg:text-[14px] border cursor-pointer transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:bg-white/20 hover:border-[#52f3fe] hover:text-[#52f3fe] ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    } ${
                      hoveredItem === index
                        ? "bg-gradient-to-r from-[#52f3fe]/20 to-[#e223a5]/20 border-[#52f3fe] text-[#52f3fe] scale-110 -translate-y-1 shadow-lg"
                        : "hover:bg-white/10"
                    }`}
                    style={{
                      transitionDelay: `${3.2 + index * 0.15}s`,
                      animation:
                        hoveredItem === index
                          ? "pulse 0.6s ease-in-out"
                          : "none",
                    }}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onTouchStart={() => setHoveredItem(index)}
                    onTouchEnd={() =>
                      setTimeout(() => setHoveredItem(null), 1000)
                    }
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}