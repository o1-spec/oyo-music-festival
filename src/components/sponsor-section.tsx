import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  logo?: string;
}

const sponsors: Sponsor[] = [
  { name: "Oyo State Government", logo: "/images/oyo-state.png" },
  { name: "University of Ibadan", logo: "/images/university-ibadan.jpeg" },
  { name: "Imperial 1629", logo: undefined }, 
  { name: "Partner Company", logo: "/images/corporate-partner-logo.jpg" },
];

export function SponsorsSection() {
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
    <section className="py-12 md:py-16 px-4 pb-28 bg-gradient-to-b from-[#121212] to-[#0a0a0a] relative overflow-hidden"> 
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 border border-[#52f3fe]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border border-[#e223a5]/20 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            Our <span className="text-[#52f3fe]">Sponsors</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We're grateful for the support of our partners who make this celebration of Yoruba culture possible.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 items-center justify-items-center" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center p-2 md:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-all duration-500 hover:bg-white/10 hover:scale-110 hover:shadow-2xl hover:shadow-[#52f3fe]/20 group" 
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ rotate: 5 }}
            >
              {sponsor.logo ? (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                />
              ) : (
                <p className="text-white text-base md:text-lg font-semibold group-hover:text-[#52f3fe] transition-colors duration-300">
                  {sponsor.name}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50 text-sm md:text-base">
            Become a Sponsor
          </button>
        </motion.div>
      </div>
    </section>
  );
}