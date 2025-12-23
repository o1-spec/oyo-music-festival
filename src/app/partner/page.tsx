"use client"

import { motion } from 'framer-motion'
import { Handshake, Users, Megaphone, Heart } from 'lucide-react'

const partnershipBenefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Reach Thousands",
    description: "Connect with a diverse audience of music lovers, cultural enthusiasts, and community members."
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Brand Visibility",
    description: "Showcase your brand through logos, mentions, and exclusive activations at the festival."
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Networking Opportunities",
    description: "Build relationships with other sponsors, artists, and festival organizers."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Community Impact",
    description: "Support the celebration of Yoruba culture and contribute to cultural preservation."
  }
]

const partnershipTiers = [
  {
    name: "Bronze Partner",
    price: "$1,000+",
    benefits: [
      "Logo on festival website",
      "Social media shoutout",
      "Event program mention",
      "Basic networking access"
    ]
  },
  {
    name: "Silver Partner",
    price: "$5,000+",
    benefits: [
      "All Bronze benefits",
      "Booth space at the event",
      "VIP event access",
      "Featured in press releases"
    ]
  },
  {
    name: "Gold Partner",
    price: "$10,000+",
    benefits: [
      "All Silver benefits",
      "Speaking opportunity",
      "Exclusive branding rights",
      "Custom partnership activation"
    ]
  },
  {
    name: "Platinum Partner",
    price: "Contact for pricing",
    benefits: [
      "All Gold benefits",
      "Title sponsorship potential",
      "Executive meet & greet",
      "Full marketing campaign integration"
    ]
  }
]

export default function Partner() {
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
            Partner With Us
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in celebrating Yoruba culture. Become a partner and connect with thousands while making a lasting impact.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#52f3fe]">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#52f3fe]/20 text-center hover:border-[#52f3fe]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#52f3fe]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#52f3fe]">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-10 sm:py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#52f3fe]">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {partnershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className="bg-[#121212] rounded-2xl p-4 sm:p-6 border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-xl sm:text-2xl font-bold text-[#52f3fe]">{tier.price}</p>
                </div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#52f3fe] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 sm:py-20 px-4 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#52f3fe]">Ready to Partner?</h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Let's discuss how we can work together to make the Oyo Music Festival unforgettable. Contact our partnership team today.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50 text-sm sm:text-base"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  )
}