// ...existing code...
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const container = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };
  return (
    <footer className="relative border-t border-[#52f3fe]/20 bg-gradient-to-b from-[#0a0a0a] to-[#000000] text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-6 mix-blend-overlay">
        <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200">
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#ffffff"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={container}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-serif uppercase text-2xl lg:text-3xl font-extrabold tracking-wider mb-3 text-white">
              Sign up for the Oyo Festival newsletter
            </h3>
            <p className="text-[#FFFFFF] max-w-xl mb-6">
              Be first to know line-up announcements, ticket releases, competitions and more.
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-center max-w-2xl">
              <label className="sr-only" htmlFor="firstName">First name</label>
              <input
                id="firstName"
                type="text"
                placeholder="First name"
                className="px-3 py-3 rounded-md bg-[#52f3fe]/5 border border-[#FFFFFF]/30 placeholder-[#FFFFFF] text-white focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]/50"
              />
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className="px-3 py-3 rounded-md bg-[#52f3fe]/5 border border-[#FFFFFF]/30 placeholder-[#FFFFFF] text-white focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]/50"
              />

              <div className="sm:col-span-2 mt-2 flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-6 py-3 rounded-md font-semibold shadow-md hover:scale-[1.02] transition-transform"
                >
                  Sign Up
                </button>
                <p className="text-xs text-[#FFFFFF]/70">
                  By signing up you consent to receive email updates. Unsubscribe anytime.
                </p>
              </div>
            </form>
          </motion.div>

          {/* Links & follow (right) */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={container}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h4 className="font-serif uppercase text-lg font-bold mb-4 text-[#FFFFFF]">Quick Links</h4>
              <ul className="space-y-3 text-[#FFFFFF]">
                <li><a href="#about" className="hover:text-[#52f3fe]">About</a></li>
                <li><a href="#schedule" className="hover:text-[#52f3fe]">Schedule</a></li>
                <li><a href="#tickets" className="hover:text-[#52f3fe]">Tickets</a></li>
                <li><a href="#contact" className="hover:text-[#52f3fe]">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif uppercase text-lg font-bold mb-4 text-[#FFFFFF]">Follow Us</h4>
              <div className="flex items-center gap-3 mb-4">
                <a className="w-10 h-10 rounded-full bg-[#52f3fe]/10 flex items-center justify-center hover:bg-[#52f3fe]/30 transition-colors" href="#" aria-label="Facebook">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a className="w-10 h-10 rounded-full bg-[#52f3fe]/10 flex items-center justify-center hover:bg-[#52f3fe]/30 transition-colors" href="#" aria-label="Twitter">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a className="w-10 h-10 rounded-full bg-[#e223a5]/10 flex items-center justify-center hover:bg-[#e223a5]/30 transition-colors" href="#" aria-label="Instagram">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a className="w-10 h-10 rounded-full bg-[#e223a5]/10 flex items-center justify-center hover:bg-[#e223a5]/30 transition-colors" href="#" aria-label="YouTube">
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>

              <div className="bg-[#000000]/10 rounded-md p-3 border border-[#52f3fe]/20">
                <p className="text-sm text-[#d6c7e6] mb-2">Subscribe quickly</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="flex-1 px-2 py-2 rounded-md bg-[#52f3fe]/5 border border-[#FFFFFF]/30 placeholder-[#FFFFFF] text-white focus:outline-none focus:ring-2 focus:ring-[#FFFFFF]/50"
                  />
                  <button className="px-3 py-2 rounded-md bg-[#52f3fe] text-black font-semibold">Go</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#] my-8" />      

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <div className="flex items-center gap-4">
            <Image src="/images/festival-icon.png" width={140} height={48} alt="logo" />
            <div className="hidden md:block text-[#FFFFFF] text-sm">
              &copy; 2025 Oyo Music Festival
              <div className="mt-1"><a className="hover:text-[#52f3fe]" href="#">Made by Project</a></div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#cdb9d9]">
            <a className="hover:text-[#52f3fe]" href="#">Privacy</a>
            <a className="hover:text-[#52f3fe]" href="#">Cookies</a>
            <a className="hover:text-[#52f3fe]" href="#">Terms</a>
            <a className="hover:text-[#52f3fe]" href="#">Accessibility</a>
          </div>
        </div>
      </div>

      {/* Help floating button like image */}
      {/* <button
        aria-label="Help"
        className="fixed right-6 bottom-6 bg-[#ff7b6b] text-white rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform z-50"
      >
        Help
      </button> */}
    </footer>
  );
}
// ...existing code...