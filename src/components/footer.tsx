import { Facebook, Twitter, Instagram, Youtube, Mail, ArrowUp, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-[#52f3fe]/20 bg-gradient-to-b from-[#0a0a0a] to-[#000000] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#52f3fe]/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#e223a5]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#52f3fe]/10 rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="flex justify-center items-center gap-4 mb-6" variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <Image
              src="/images/festival-icon.png" // Adjust path to your icon
              alt="Oyo Music Festival Icon"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h3 className="text-3xl font-bold text-[#52f3fe]">Oyo Music Festival</h3>
          </motion.div>
          <motion.p className="text-muted-foreground max-w-2xl mx-auto text-lg" variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            "Culture is the widening of the mind and of the spirit." – Jawaharlal Nehru
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Quick Links */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h4 className="font-semibold mb-6 text-[#e223a5] text-lg">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-[#52f3fe] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#52f3fe] rounded-full"></span> About
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-muted-foreground hover:text-[#52f3fe] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#52f3fe] rounded-full"></span> Schedule
                </a>
              </li>
              <li>
                <a href="#tickets" className="text-muted-foreground hover:text-[#52f3fe] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#52f3fe] rounded-full"></span> Tickets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-[#52f3fe] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#52f3fe] rounded-full"></span> Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h4 className="font-semibold mb-6 text-[#e223a5] text-lg">Get in Touch</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#52f3fe]" />
                University of Ibadan, Ibadan
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#52f3fe]" />
                <a href="tel:+234" className="hover:text-[#52f3fe] transition-colors">
                  +234 XXX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#52f3fe]" />
                <a href="mailto:info@oyomusicfest.com" className="hover:text-[#52f3fe] transition-colors">
                  info@oyomusicfest.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
            <h4 className="font-semibold mb-6 text-[#e223a5] text-lg">Follow Us</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 border border-[#52f3fe]/30 flex items-center justify-center hover:bg-[#52f3fe]/20 hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
                whileHover={{ rotate: 10 }}
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 border border-[#52f3fe]/30 flex items-center justify-center hover:bg-[#52f3fe]/20 hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
                whileHover={{ rotate: -10 }}
              >
                <Twitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 border border-[#52f3fe]/30 flex items-center justify-center hover:bg-[#52f3fe]/20 hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
                whileHover={{ rotate: 10 }}
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                className="h-12 w-12 rounded-full bg-white/10 border border-[#52f3fe]/30 flex items-center justify-center hover:bg-[#52f3fe]/20 hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
                whileHover={{ rotate: -10 }}
              >
                <Youtube className="h-6 w-6" />
              </motion.a>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-[#52f3fe]/20">
              <p className="text-sm text-muted-foreground mb-3">Stay updated with festival news!</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-[#52f3fe]/30 rounded-md text-white placeholder-muted-foreground focus:outline-none focus:border-[#52f3fe] text-sm"
                />
                <motion.button
                  className="px-3 py-2 bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black rounded-md hover:scale-105 transition-transform text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="h-4 w-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-[#52f3fe]/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p>&copy; 2025 Oyo Music Festival. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#52f3fe] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#52f3fe] transition-colors">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}