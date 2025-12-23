import { Button } from "@/components/ui/button";
import { Calendar, MapPin, MessageCircle, X, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hi! How can we help you with questions about the Oyo Music Festival?",
      sender: "bot",
    },
  ]);

  useEffect(() => {
    const targetDate = new Date("2026-03-01T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollClick = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    if (lowerMessage.includes("ticket") || lowerMessage.includes("buy") || lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "Tickets are available on our website! Early bird pricing ends soon—grab yours for the best deals. VIP, General Admission, and Student options available.";
    } else if (
      lowerMessage.includes("schedule") ||
      lowerMessage.includes("time") ||
      lowerMessage.includes("when") ||
      lowerMessage.includes("date")
    ) {
      return "The festival runs for 2 days in March 2026 at the University of Ibadan. Day 1: Live performances and speakers. Day 2: Cultural games and art exhibitions. Check our schedule page for full details!";
    } else if (
      lowerMessage.includes("location") ||
      lowerMessage.includes("where") ||
      lowerMessage.includes("venue") ||
      lowerMessage.includes("address")
    ) {
      return "We're at the University of Ibadan in Oyo State, Nigeria. Easy to access with great parking! Use Google Maps for directions or take public transport from Ibadan city center.";
    } else if (
      lowerMessage.includes("speaker") ||
      lowerMessage.includes("guest") ||
      lowerMessage.includes("performer") ||
      lowerMessage.includes("artist")
    ) {
      return "We have distinguished guests like Gov. Seyi Makinde and Prof. Kayode Adebowale, plus world-class artists honoring Yoruba music traditions. Meet them all on our site!";
    } else if (
      lowerMessage.includes("food") ||
      lowerMessage.includes("vendor") ||
      lowerMessage.includes("eat") ||
      lowerMessage.includes("drink")
    ) {
      return "Enjoy authentic Yoruba cuisine and artisan vendors—pounded yam, egusi soup, fresh beverages, and handmade crafts! Vegetarian options available.";
    } else if (
      lowerMessage.includes("highlight") ||
      lowerMessage.includes("what to expect") ||
      lowerMessage.includes("experience")
    ) {
      return "Expect electrifying live performances, art exhibitions, cultural games, and interactive sessions celebrating Yoruba heritage. It's a mix of music, art, and community fun!";
    } else if (
      lowerMessage.includes("activity") ||
      lowerMessage.includes("what to do") ||
      lowerMessage.includes("event")
    ) {
      return "Join live performances, art exhibitions, cultural games like Ewi poetry and DJ battles, food vendors, and Q&A sessions with speakers. Something for everyone!";
    } else if (
      lowerMessage.includes("contact") ||
      lowerMessage.includes("help") ||
      lowerMessage.includes("support") ||
      lowerMessage.includes("email")
    ) {
      return "Contact us at info@oyomusicfestival.com or call +234-XXX-XXX-XXXX. We're here to help with any questions!";
    } else if (
      lowerMessage.includes("accommodation") ||
      lowerMessage.includes("hotel") ||
      lowerMessage.includes("stay") ||
      lowerMessage.includes("lodging")
    ) {
      return "Ibadan has plenty of hotels and guesthouses near the University. Book early! We can recommend options like Premier Hotel or local stays.";
    } else if (
      lowerMessage.includes("age") ||
      lowerMessage.includes("kid") ||
      lowerMessage.includes("child") ||
      lowerMessage.includes("family")
    ) {
      return "The festival is family-friendly! All ages welcome, but some areas may have age restrictions for late-night events. Check our site for details.";
    } else if (
      lowerMessage.includes("bring") ||
      lowerMessage.includes("what to wear") ||
      lowerMessage.includes("prepare")
    ) {
      return "Wear comfortable Yoruba-inspired attire, bring water, sunscreen, and cash for vendors. No outside food/drinks allowed—enjoy our vendors!";
    } else if (
      lowerMessage.includes("transport") ||
      lowerMessage.includes("parking") ||
      lowerMessage.includes("get there")
    ) {
      return "Drive or take public transport. Free parking at the University. Airport shuttles available from Ibadan Airport.";
    } else if (
      lowerMessage.includes("about") ||
      lowerMessage.includes("what is") ||
      lowerMessage.includes("festival")
    ) {
      return "The Oyo Music Festival celebrates Yoruba culture through music, art, and entertainment. A 2-day event in March 2026 at University of Ibadan!";
    } else {
      return "Thank you for your question! We'll get back to you soon, or check our FAQ for more info. Ask about tickets, schedule, or highlights!";
    }
  };

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    const input = document.querySelector(
      'input[placeholder="Type your question..."]'
    ) as HTMLInputElement;
    const messageText = input.value.trim();
    if (!messageText) return;

    setMessages((prev) => [...prev, { text: messageText, sender: "user" }]);
    input.value = "";

    const botResponse = getBotResponse(messageText);

    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <motion.div
        className="fixed bottom-5 md:bottom-8 left-4 md:left-10 opacity-60 z-40"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/talking-drum.png"
          width={120}
          height={120}
          alt="Talking Drum"
          className="transform rotate-0 w-[50px] h-[50px] md:w-[150px] md:h-[150px]"
        />
        <div className="absolute inset-0 -top-15">
          <span
            className="absolute text-2xl md:text-4xl text-[#52f3fe] font-bold animate-drum-hit transform -rotate-12"
            style={{ top: "10%", left: "15%", animationDelay: "0s" }}
          >
            !
          </span>
          <span
            className="absolute text-2xl md:text-4xl text-[#e223a5] font-bold animate-drum-hit transform"
            style={{ top: "10%", right: "56%", animationDelay: "1s" }}
          >
            !
          </span>
          <span
            className="absolute text-2xl md:text-4xl text-[#52f3fe] font-bold animate-drum-hit transform rotate-20"
            style={{ top: "10%", right: "35%", animationDelay: "2s" }}
          >
            !
          </span>
        </div>
      </motion.div>
      <motion.div
        className="fixed bottom-5 md:bottom-8 right-4 md:right-10 opacity-60 z-40"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.6 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      >
        <Image
          src="/images/biwa.png"
          width={130}
          height={130}
          alt="Biwa"
          className="transform rotate-0 w-[50px] h-[50px] md:w-[160px] md:h-[160px]"
        />
        <div className="absolute inset-0 -top-5">
          <span
            className="absolute text-2xl md:text-4xl text-[#52f3fe] font-bold animate-drum-hit transform rotate-60"
            style={{ top: "40%", right: "15%", animationDelay: "0s" }}
          >
            !
          </span>
          <span
            className="absolute text-2xl md:text-4xl text-[#e223a5] font-bold animate-drum-hit transform"
            style={{ top: "15%", right: "56%", animationDelay: "1s" }}
          >
            !
          </span>
          <span
            className="absolute text-2xl md:text-4xl text-[#52f3fe] font-bold animate-drum-hit transform rotate-20"
            style={{ top: "10%", right: "40%", animationDelay: "2s" }}
          >
            !
          </span>
        </div>
      </motion.div>
      <div className="absolute top-10 right-4 md:top-16 md:right-6 z-20 flex gap-2 md:gap-4">
        <a
          href="https://instagram.com/oyomusicfestival"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52f3fe] hover:text-[#e223a5] transition-colors duration-300"
          aria-label="Follow us on Instagram"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/oyomusicfestival"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52f3fe] hover:text-[#e223a5] transition-colors duration-300"
          aria-label="Follow us on Twitter"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a
          href="https://facebook.com/oyomusicfestival"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#52f3fe] hover:text-[#e223a5] transition-colors duration-300"
          aria-label="Follow us on Facebook"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
      </div>

      <div className="absolute inset-0 opacity-10 bg-gradient-radial from-[#52f3fe]/10 to-transparent">
        <div className="particles">
          <div
            className="particle"
            style={{ left: "15%", top: "20%", animationDelay: "0s" }}
          ></div>
          <div
            className="particle"
            style={{ left: "70%", top: "40%", animationDelay: "1s" }}
          ></div>
          <div
            className="particle"
            style={{ left: "50%", top: "70%", animationDelay: "2s" }}
          ></div>
          <div
            className="particle"
            style={{ left: "85%", top: "60%", animationDelay: "3s" }}
          ></div>
        </div>
        <svg
          className="cultural-icon"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 10 C30 10 20 25 20 40 L20 70 C20 85 30 95 50 95 C70 95 80 85 80 70 L80 40 C80 25 70 10 50 10 Z M35 40 L65 40 L65 70 L35 70 Z"
            fill="rgba(82, 243, 254, 0.1)"
          />
          <circle cx="50" cy="55" r="5" fill="rgba(226, 35, 165, 0.1)" />
        </svg>
        <div className="absolute top-20 left-10 w-64 h-64 border-2 border-[#52f3fe] rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-[#52f3fe]/30 rounded-full" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#52f3fe]/30 mb-8"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-2 h-2 bg-[#52f3fe] rounded-full animate-pulse" />
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            March 2026
          </span>
        </motion.div>

        <motion.h1
          className="font-serif font-black text-5xl xs:text-6xl md:text-8xl text-[#52f3fe] lg:text-9xl mb-6 leading-none text-balance"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Oyo Music
          <br />
          <span className="text-[#e223a5]">Festival 2026</span>
        </motion.h1>

        <motion.p
          className="text-lg xs:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          A celebration of Yoruba culture through music, art, and entertainment
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mb-8"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-[#52f3fe]">
              {timeLeft.days}
            </div>
            <div className="text-sm text-muted-foreground">Days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#e223a5]">
              {timeLeft.hours}
            </div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#52f3fe]">
              {timeLeft.minutes}
            </div>
            <div className="text-sm text-muted-foreground">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#e223a5]">
              {timeLeft.seconds}
            </div>
            <div className="text-sm text-muted-foreground">Seconds</div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 xs:gap-6 mb-12 text-foreground"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="w-4 xs:w-5 h-4 xs:h-5 text-primary" />
            <span className="text-base xs:text-lg font-medium">
              2 Days | March 2026
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full" />
          <div className="flex items-center gap-2">
            <MapPin className="w-4 xs:w-5 h-4 xs:h-5 text-primary" />
            <span className="text-base xs:text-lg font-medium">
              University of Ibadan
            </span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="text-base xs:text-lg px-6 xs:px-8 py-4 xs:py-6 h-auto font-semibold hover:scale-105 hover:shadow-glow transition-all duration-300"
          >
            Get Tickets
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base xs:text-lg px-6 xs:px-8 py-4 xs:py-6 h-auto font-semibold border-primary/30 hover:bg-primary/10 hover:scale-105 hover:shadow-glow transition-all duration-300"
          >
            Partner With Us
          </Button>
        </motion.div>

        <motion.div
          className="absolute left-1/2 translate-y-20 cursor-pointer -translate-x-1/2"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={handleScrollClick}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
            </div>
            <span className="text-xs xs:text-sm uppercase tracking-wider">
              Scroll
            </span>
          </div>
        </motion.div>
      </motion.div>
      <motion.button
        className="fixed bottom-6 right-6 bg-[#e223a5] text-black rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        onClick={() => setChatOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {chatOpen && (
        <motion.div
          className="fixed bottom-20 right-4 md:right-6 z-50 bg-[#0a0a0a] border border-[#52f3fe]/30 rounded-lg shadow-lg p-4 w-80 max-w-[90vw] flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-semibold">Festival Chat</h3>
            <button
              onClick={() => setChatOpen(false)}
              className="text-muted-foreground hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2 mb-4 max-h-40 overflow-y-auto flex-1">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`text-sm p-2 rounded-md max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-[#52f3fe] text-black self-end ml-auto"
                    : "bg-[#52f3fe]/10 text-white self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 rounded-md bg-[#52f3fe]/5 border border-[#52f3fe]/30 text-white placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#52f3fe]/50"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="px-3 py-2 bg-[#52f3fe] text-black rounded-md hover:bg-[#e223a5] transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}

      <style jsx>{`
        @keyframes drum-hit {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animate-drum-hit {
          animation: drum-hit 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
