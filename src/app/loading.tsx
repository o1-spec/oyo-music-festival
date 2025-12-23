"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Loading() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a minimum delay of 3 seconds to show the loading screen
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Adjust this value (in milliseconds) as needed

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) {
    return (
      <main className="min-h-screen bg-[#121212] flex items-center justify-center relative overflow-hidden">
        {/* Show a simple spinner while waiting */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-[#52f3fe] border-r-[#e223a5] rounded-full animate-spin"></div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#121212] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 border border-[#52f3fe]/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 border border-[#e223a5]/30 rounded-full animate-pulse"></div>
      </div>

      <div className="text-center relative z-10 px-4">
        <motion.div
          className="relative mx-auto mb-6 sm:mb-8"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-transparent border-t-[#52f3fe] border-r-[#e223a5] rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-2 border-transparent border-b-[#52f3fe] rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </motion.div>

        <motion.h1
          className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#52f3fe] to-[#e223a5] bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Oyo Music Festival
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base sm:text-lg animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Preparing the rhythm...
        </motion.p>

        <motion.div
          className="mt-6 sm:mt-8 flex justify-center space-x-3 sm:space-x-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#52f3fe] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#e223a5] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#52f3fe] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </motion.div>
      </div>
    </main>
  )
}