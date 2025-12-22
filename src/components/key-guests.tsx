import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface Guest {
  name: string;
  role: string;
  image?: string;
}

const guests: Guest[] = [
  {
    name: "Gov. Seyi Makinde",
    role: "Executive Governor of Oyo State",
    image: "/governor-seyi-makinde-portrait.jpg",
  },
  {
    name: "Prof. Kayode Adebowale",
    role: "Vice-Chancellor, University of Ibadan",
    image: "/professor-kayode-adebowale-portrait.jpg",
  },
  {
    name: "Prof. Siyan Oyeweso",
    role: "Distinguished Academic",
    image: "/professor-siyan-oyeweso-portrait.jpg",
  },
  {
    name: "Tunde Kilani",
    role: "Renowned Filmmaker",
    image: "/tunde-kilani-filmmaker-portrait.jpg",
  },
];

export function KeyGuests() {
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
    <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border border-[#e223a5]/20 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-[#52f3fe]/20 rounded-full"></div>
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
            Distinguished <span className="text-[#52f3fe]">Guests</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us as we welcome prominent figures in culture, academia, and entertainment who will inspire and celebrate with us.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {guests.map((guest, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center gap-4 group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-[#52f3fe]/20"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <Avatar className="h-32 w-32 border-4 border-[#52f3fe]/30 transition-all duration-300 group-hover:border-[#52f3fe] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#52f3fe]/50">
                <AvatarImage src={guest.image || "/placeholder.svg"} alt={guest.name} />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-[#52f3fe]/20 to-[#e223a5]/20">
                  {guest.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg mb-1 text-white group-hover:text-[#52f3fe] transition-colors duration-300">
                  {guest.name}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty group-hover:text-white/80 transition-colors duration-300">
                  {guest.role}
                </p>
              </div>
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
            Meet All Guests
          </button>
        </motion.div>
      </div>
    </section>
  );
}