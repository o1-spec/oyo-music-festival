"use client"

import { motion } from 'framer-motion'
import { Check, CreditCard, Calendar, Shield } from 'lucide-react'

const ticketTiers = [
  {
    name: "Early Bird",
    price: "$50",
    originalPrice: "$70",
    description: "Limited time offer - Save 30%",
    features: [
      "Access to all festival areas",
      "Live performances",
      "Art exhibitions",
      "Cultural games",
      "Food vendors"
    ],
    popular: false
  },
  {
    name: "VIP",
    price: "$100",
    description: "Premium experience",
    features: [
      "All Early Bird benefits",
      "VIP seating",
      "Meet & greet with artists",
      "Exclusive merchandise",
      "Priority entry"
    ],
    popular: true
  },
  {
    name: "General Admission",
    price: "$70",
    description: "Standard entry",
    features: [
      "Access to all festival areas",
      "Live performances",
      "Art exhibitions",
      "Cultural games",
      "Food vendors"
    ],
    popular: false
  },
  {
    name: "Student",
    price: "$30",
    description: "Valid student ID required",
    features: [
      "Access to all festival areas",
      "Live performances",
      "Art exhibitions",
      "Cultural games",
      "Food vendors"
    ],
    popular: false
  }
]

const faqs = [
  {
    question: "When is the festival?",
    answer: "March 2026, 2 days at University of Ibadan."
  },
  {
    question: "Can I get a refund?",
    answer: "Tickets are non-refundable except for event cancellation."
  },
  {
    question: "How do I purchase?",
    answer: "Click 'Buy Now' and complete payment via our secure portal."
  }
]

export default function Tickets() {
  const handlePurchase = (tier: string) => {
    // Placeholder for payment integration (e.g., redirect to Stripe/Paystack)
    alert(`Redirecting to purchase ${tier} tickets...`)
  }

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
            Get Your Tickets
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for an unforgettable celebration of Yoruba culture. Early bird pricing ends soon!
          </p>
        </motion.div>
      </section>

      {/* Ticket Tiers */}
      <section className="py-10 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {ticketTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border transition-all duration-300 hover:scale-105 ${
                  tier.popular ? 'border-[#52f3fe] shadow-lg shadow-[#52f3fe]/20' : 'border-[#52f3fe]/20'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {tier.popular && (
                  <div className="bg-[#52f3fe] text-black text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl sm:text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="text-2xl sm:text-3xl font-bold text-[#52f3fe] mb-2">
                  {tier.price}
                  {tier.originalPrice && (
                    <span className="text-base sm:text-lg text-muted-foreground line-through ml-2">
                      {tier.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{tier.description}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#52f3fe]" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePurchase(tier.name)}
                  className="w-full bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50 text-sm sm:text-base"
                >
                  Buy Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Info */}
      <section className="py-10 sm:py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CreditCard className="w-10 h-10 sm:w-12 sm:h-12 text-[#52f3fe] mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Safe transactions via Paystack/Stripe</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-[#52f3fe] mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Early Bird Ends Soon</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Don't miss out on savings</p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-[#52f3fe] mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Refund Policy</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Non-refundable except for cancellation</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[#52f3fe]">Frequently Asked Questions</h2>
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#52f3fe]/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}