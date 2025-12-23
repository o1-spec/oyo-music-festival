"use client";


import { motion } from 'framer-motion'

// ...existing imports...

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}
      <section className="relative py-20 pb-4 pt-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-[#52f3fe]/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-[#e223a5]/30 rounded-full animate-pulse"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our website or purchasing tickets.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-10 sm:py-20 pt-10 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert prose-sm sm:prose-base lg:prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8 text-sm sm:text-base">
              Last updated: December 23, 2025
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#52f3fe] mb-4">1. Introduction</h2>
            <p className="mb-6 text-sm sm:text-base">
              These Terms of Service govern your use of the Oyo Music Festival website and ticket purchases. By accessing our site, you agree to these terms.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#52f3fe] mb-4">2. Use of Site</h2>
            <p className="mb-6 text-sm sm:text-base">
              You may use our site for personal, non-commercial purposes. You agree not to misuse the site or violate any laws.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#52f3fe] mb-4">3. Ticket Purchases</h2>
            <p className="mb-6 text-sm sm:text-base">
              Tickets are non-refundable except in cases of event cancellation. Prices are subject to change. You are responsible for providing accurate information.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#52f3fe] mb-4">4. User Conduct</h2>
            <p className="mb-6 text-sm sm:text-base">
              You agree to behave respectfully at the festival. Disruptive behavior may result in removal without refund.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#52f3fe] mb-4">5. Intellectual Property</h2>
            <p className="mb-6 text-sm sm:text-base">
              All content on this site is owned by the Oyo Music Festival. You may not reproduce it without permission.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#52f3fe] mb-4">6. Limitation of Liability</h2>
            <p className="mb-6 text-sm sm:text-base">
              We are not liable for any damages arising from your use of the site or attendance at the festival.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#52f3fe] mb-4">7. Governing Law</h2>
            <p className="mb-6 text-sm sm:text-base">
              These terms are governed by the laws of Nigeria. Any disputes will be resolved in Nigerian courts.
            </p>

            <h2 className="text-xl sm:text-2xl font-bold text-[#52f3fe] mb-4">8. Contact Us</h2>
            <p className="mb-6 text-sm sm:text-base">
              If you have questions about these Terms, please contact us at info@oyomusicfestival.com.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}