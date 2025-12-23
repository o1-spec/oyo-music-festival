"use client";

import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}
      <section className="relative py-20 pb-10 px-4 text-center overflow-hidden">
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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-20 pt-10 px-4">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground mb-8">
              Last updated: December 23, 2025
            </p>

            <h2 className="text-2xl font-bold text-[#52f3fe] mb-4">1. Introduction</h2>
            <p className="mb-6">
              Welcome to the Oyo Music Festival website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our site or purchase tickets.
            </p>

            <h2 className="text-2xl font-bold text-[#52f3fe] mb-4">2. Information We Collect</h2>
            <p className="mb-6">
              We may collect personal information such as your name, email address, phone number, and payment details when you register for the festival or make a purchase. We also collect non-personal information like IP addresses and browsing data.
            </p>

            <h2 className="text-2xl font-bold text-[#52f3fe] mb-4">3. How We Use Your Information</h2>
            <p className="mb-6">
              Your information is used to process ticket orders, communicate festival updates, improve our services, and comply with legal obligations. We do not sell your data to third parties.
            </p>

            <h2 className="text-2xl font-bold text-[#52f3fe] mb-4">4. Sharing Your Information</h2>
            <p className="mb-6">
              We may share your information with trusted partners for payment processing or event logistics, but only as necessary and with your consent where required.
            </p>

            <h2 className="text-2xl font-bold text-[#52f3fe] mb-4">5. Data Security</h2>
            <p className="mb-6">
              We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-[#52f3fe] mb-4">6. Your Rights</h2>
            <p className="mb-6">
              You have the right to access, update, or delete your personal information. Contact us to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold text-[#52f3fe] mb-4">7. Contact Us</h2>
            <p className="mb-6">
              If you have questions about this Privacy Policy, please contact us at info@oyomusicfestival.com.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}