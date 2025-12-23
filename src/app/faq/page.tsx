"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is the Oyo Music Festival?",
    answer: "The Oyo Music Festival celebrates Yoruba culture through music, art, and entertainment. It's a 2-day event in March 2026 at the University of Ibadan, featuring live performances, art exhibitions, cultural games, and more."
  },
  {
    question: "When and where is the festival happening?",
    answer: "The festival runs for 2 days in March 2026 at the University of Ibadan in Oyo State, Nigeria. Day 1 focuses on live performances and speakers, while Day 2 includes cultural games and art exhibitions."
  },
  {
    question: "How can I buy tickets?",
    answer: "Tickets are available on our website with Early Bird, VIP, General Admission, and Student options. Visit our tickets page for pricing and to purchase securely."
  },
  {
    question: "What can I expect at the festival?",
    answer: "Expect electrifying live performances, art exhibitions, cultural games like Ewi poetry and DJ battles, food vendors with authentic Yoruba cuisine, and interactive sessions with speakers."
  },
  {
    question: "Are there food and vendor options?",
    answer: "Yes! Enjoy authentic Yoruba cuisine like pounded yam and egusi soup, plus handmade crafts and souvenirs from artisan vendors. Vegetarian options are available."
  },
  {
    question: "Who are the speakers and guests?",
    answer: "We have distinguished guests like Gov. Seyi Makinde and Prof. Kayode Adebowale, along with world-class artists honoring Yoruba music traditions."
  },
  {
    question: "Is there accommodation available?",
    answer: "Ibadan has plenty of hotels and guesthouses near the University. We recommend Premier Hotel or local stays. Book early as spots fill up!"
  },
  {
    question: "Are there age restrictions?",
    answer: "The festival is family-friendly! All ages are welcome, but some late-night events may have restrictions. Check our site for details."
  },
  {
    question: "What should I bring?",
    answer: "Wear comfortable Yoruba-inspired attire, bring water, sunscreen, and cash for vendors. No outside food or drinks allowed—enjoy our vendors!"
  },
  {
    question: "How can I contact you?",
    answer: "Email us at info@oyomusicfestival.com or call +234-XXX-XXX-XXXX. We're here to help with any questions!"
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about the Oyo Music Festival here.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 pt-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-[#52f3fe]/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#52f3fe]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#52f3fe]" />
                  )}
                </button>
                {openIndex === index && (
                  <motion.div
                    className="px-6 pb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#52f3fe]">Still have questions?</h2>
          <p className="text-muted-foreground mb-8">
            Can't find what you're looking for? Reach out to us directly.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
    </div>
  )
}