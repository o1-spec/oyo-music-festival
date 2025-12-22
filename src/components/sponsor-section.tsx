import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  logo?: string;
}

const sponsors: Sponsor[] = [
  { name: "Oyo State Government", logo: "/oyo-state-government-logo.jpg" },
  { name: "University of Ibadan", logo: "/university-of-ibadan-logo.jpg" },
  { name: "Imperial 1629", logo: "/imperial-1629-media-logo.jpg" },
  { name: "Partner Company", logo: "/corporate-partner-logo.jpg" },
];

export function SponsorsSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#121212] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Elements */}
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
            Our <span className="text-[#52f3fe]">Sponsors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're grateful for the support of our partners who make this celebration of Yoruba culture possible.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-all duration-500 hover:bg-white/10 hover:scale-110 hover:shadow-2xl hover:shadow-[#52f3fe]/20 group"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ rotate: 5 }}
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
              />
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
            Become a Sponsor
          </button>
        </motion.div>
      </div>
    </section>
  );
}