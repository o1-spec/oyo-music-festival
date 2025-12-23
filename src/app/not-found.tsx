"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent mb-8"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          404
        </motion.div>

        <motion.h1
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Oyo Music Festival
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Oops! This page seems to have wandered off like a lost drumbeat. Let's get you back to the rhythm.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link href="/">
            <button className="bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50 flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="border border-[#52f3fe]/50 text-[#52f3fe] px-6 py-3 rounded-lg font-semibold hover:bg-[#52f3fe]/10 transition-colors duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </motion.div>

        <motion.div
          className="mt-12 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-32 h-32 border border-[#52f3fe]/30 rounded-full mx-auto animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  )
}