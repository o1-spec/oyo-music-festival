import { Mic2, Palette, Users, Sparkles, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Mic2,
    title: 'Live Performances',
    description: 'World-class artists celebrating Yoruba music traditions with electrifying shows and fusion performances.'
  },
  {
    icon: Users,
    title: 'Distinguished Speakers',
    description: 'Academic leaders and cultural experts discussing the evolution of Yoruba heritage and its global impact.'
  },
  {
    icon: Palette,
    title: 'Art Exhibitions',
    description: 'Immersive displays blending traditional Yoruba art with contemporary expressions in stunning galleries.'
  },
  {
    icon: Trophy,
    title: 'Cultural Games',
    description: 'Interactive competitions in Ewi, DJ mixing, and cooking, showcasing talent and community spirit.'
  },
  {
    icon: Sparkles,
    title: 'Food & Vendors',
    description: 'Authentic Yoruba cuisine, artisan marketplaces, and vibrant stalls offering unique cultural experiences.'
  }
];

export function EventHighlights() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-[#52f3fe]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-[#e223a5]/20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4 text-white">
            Experience the <span className="text-[#52f3fe]">Festival</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two days of culture, music, and celebration that bring Yoruba heritage to life.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-[#52f3fe]/20"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#52f3fe]/20 to-[#e223a5]/20 flex items-center justify-center group-hover:from-[#52f3fe]/30 group-hover:to-[#e223a5]/30 transition-all duration-300 group-hover:scale-110">
                  <highlight.icon className="w-8 h-8 text-[#52f3fe] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#52f3fe] transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50">
            Explore the Schedule
          </button>
        </motion.div>
      </div>
    </section>
  );
}