"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center px-4 py-20 pt-32">
      <div className="text-center max-w-md mx-auto">
        <motion.div
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent mb-6 sm:mb-8"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4" />
          Oops!
        </motion.div>

        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Something Went Wrong
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          We're experiencing some technical difficulties. Don't worry, our team is on it. Try refreshing or head back home.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <button
            onClick={reset}
            className="bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50 flex items-center gap-2 text-sm sm:text-base"
          >
            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
            Try Again
          </button>
          <Link href="/">
            <button className="border border-[#52f3fe]/50 text-[#52f3fe] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#52f3fe]/10 transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base">
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Home
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 sm:mt-12 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border border-[#52f3fe]/30 rounded-full mx-auto animate-pulse"></div>
        </motion.div>
      </div>
    </div>
  )
}