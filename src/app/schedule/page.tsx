"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, Mic, Users, Palette, Trophy } from 'lucide-react'

const scheduleData = {
  day1: [
    { time: "10:00 AM", title: "Festival Opening", description: "Welcome ceremony and opening performance", type: "performance", location: "Main Stage" },
    { time: "11:00 AM", title: "Live Performances", description: "Traditional Yoruba music and fusion shows", type: "performance", location: "Main Stage" },
    { time: "2:00 PM", title: "Speaker Session: Gov. Seyi Makinde", description: "Keynote on cultural preservation", type: "speaker", location: "Auditorium" },
    { time: "3:00 PM", title: "Art Exhibition Opening", description: "Explore Yoruba art and contemporary pieces", type: "exhibition", location: "Gallery" },
    { time: "5:00 PM", title: "Cultural Games", description: "Interactive Ewi poetry and DJ battles", type: "activity", location: "Activity Area" },
    { time: "7:00 PM", title: "Evening Performances", description: "Sunset shows and interactive sessions", type: "performance", location: "Main Stage" }
  ],
  day2: [
    { time: "10:00 AM", title: "Morning Performances", description: "Continued live music and dance", type: "performance", location: "Main Stage" },
    { time: "12:00 PM", title: "Speaker Session: Prof. Kayode Adebowale", description: "Evolution of Yoruba heritage", type: "speaker", location: "Auditorium" },
    { time: "2:00 PM", title: "Food & Vendor Fair", description: "Taste authentic cuisine and shop crafts", type: "activity", location: "Vendor Area" },
    { time: "4:00 PM", title: "Cultural Competitions", description: "Cooking challenges and more games", type: "activity", location: "Activity Area" },
    { time: "6:00 PM", title: "Closing Ceremony", description: "Final performances and farewell", type: "performance", location: "Main Stage" }
  ]
}

const getIcon = (type: string) => {
  switch (type) {
    case 'performance': return <Mic className="w-5 h-5" />
    case 'speaker': return <Users className="w-5 h-5" />
    case 'exhibition': return <Palette className="w-5 h-5" />
    case 'activity': return <Trophy className="w-5 h-5" />
    default: return <Clock className="w-5 h-5" />
  }
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1')

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
            Festival Schedule
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your perfect festival experience. Detailed timings for all events, performances, and activities.
          </p>
        </motion.div>
      </section>

      {/* Day Tabs */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center mb-8 gap-2 sm:gap-0">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-1 border border-[#52f3fe]/20 flex flex-col sm:flex-row w-full sm:w-auto">
              <button
                onClick={() => setActiveDay('day1')}
                className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-colors text-sm sm:text-base ${
                  activeDay === 'day1' ? 'bg-[#52f3fe] text-black' : 'text-white hover:bg-white/10'
                }`}
              >
                Day 1 - March 2026
              </button>
              <button
                onClick={() => setActiveDay('day2')}
                className={`px-4 sm:px-6 py-3 rounded-md font-semibold transition-colors text-sm sm:text-base ${
                  activeDay === 'day2' ? 'bg-[#52f3fe] text-black' : 'text-white hover:bg-white/10'
                }`}
              >
                Day 2 - March 2026
              </button>
            </div>
          </div>

          {/* Schedule List */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {scheduleData[activeDay].map((event, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#52f3fe]/20 rounded-lg flex items-center justify-center">
                      {getIcon(event.type)}
                    </div>
                  </div>
                  <div className="flex-grow text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mb-2">
                      <div className="flex items-center gap-2 text-[#52f3fe] font-semibold text-sm sm:text-base">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Note */}
      <section className="py-20 px-4 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">
            Schedule is subject to change. Check back for updates or follow us on social media.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50 text-sm sm:text-base"
          >
            Contact Us for Updates
          </a>
        </motion.div>
      </section>
    </div>
  )
}