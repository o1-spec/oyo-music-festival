"use client"

import { motion } from 'framer-motion'
import { Crown, Star, Award, Heart } from 'lucide-react'

const sponsors = [
  { name: "Oyo State Government", logo: "/images/oyo-state.png", tier: "Platinum" },
  { name: "University of Ibadan", logo: "/images/university-ibadan.jpeg", tier: "Gold" },
  { name: "Imperial 1629", logo: undefined, tier: "Silver" },
  { name: "Partner Company", logo: "/images/corporate-partner-logo.jpg", tier: "Bronze" },
]

const sponsorTiers = [
  {
    name: "Platinum",
    price: "Contact for pricing",
    benefits: [
      "Prime logo placement on all materials",
      "VIP access for executives",
      "Speaking opportunity",
      "Exclusive branding rights",
      "Social media shoutouts"
    ],
    icon: <Crown className="w-8 h-8" />
  },
  {
    name: "Gold",
    price: "$5,000+",
    benefits: [
      "Logo on festival website and materials",
      "VIP tickets for team",
      "Booth space at event",
      "Social media recognition",
      "Event program mention"
    ],
    icon: <Star className="w-8 h-8" />
  },
  {
    name: "Silver",
    price: "$2,500+",
    benefits: [
      "Logo on website and select materials",
      "General admission tickets",
      "Social media mention",
      "Event program listing",
      "Networking opportunities"
    ],
    icon: <Award className="w-8 h-8" />
  },
  {
    name: "Bronze",
    price: "$1,000+",
    benefits: [
      "Logo on website",
      "General admission tickets",
      "Event program mention",
      "Basic recognition"
    ],
    icon: <Heart className="w-8 h-8" />
  }
]

export default function Sponsors() {
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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent mb-6">
            Our Sponsors
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're honored to partner with these organizations to bring the Oyo Music Festival to life. Join them in supporting Yoruba culture.
          </p>
        </motion.div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#52f3fe]">Our Valued Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#52f3fe]/20 text-center hover:border-[#52f3fe]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {sponsor.logo ? (
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-16 w-auto object-contain mx-auto mb-4 grayscale hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <div className="h-16 flex items-center justify-center mb-4">
                    <p className="text-white text-lg font-semibold">{sponsor.name}</p>
                  </div>
                )}
                <p className="text-[#52f3fe] font-semibold">{sponsor.tier} Sponsor</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#52f3fe]">Sponsorship Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className="bg-[#121212] rounded-2xl p-6 border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-[#52f3fe]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#52f3fe]">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-2xl font-bold text-[#52f3fe]">{tier.price}</p>
                </div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#52f3fe] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#52f3fe]">Become a Sponsor</h2>
          <p className="text-muted-foreground mb-8">
            Partner with us to support cultural preservation and reach thousands of attendees. Contact us to discuss sponsorship opportunities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  )
}