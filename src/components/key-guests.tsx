import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, type Variants } from "framer-motion";
import { Star } from "lucide-react"; 

interface Guest {
  name: string;
  role: string;
  image?: string;
}

const guests: Guest[] = [
  {
    name: "Gov. Seyi Makinde",
    role: "Executive Governor of Oyo State",
    image: "/images/seyi-makinde.webp",
  },
  {
    name: "Prof. Kayode Adebowale",
    role: "Vice-Chancellor, University of Ibadan",
    image: "/images/kayode-adebowale.webp",
  },
  {
    name: "Prof. Siyan Oyeweso",
    role: "Distinguished Academic",
    image: "/images/oyeweso.jpg",
  },
  {
    name: "Tunde Kilani",
    role: "Renowned Filmmaker",
    image: "/images/tunde-kilani.webp",
  },
];

export function KeyGuests() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, 
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -50 }, 
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 10, 
        duration: 0.8 
      } 
    }, 
  };

  return (
    <motion.section
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#121212] relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 border border-[#e223a5]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-[#52f3fe]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#52f3fe]/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-white">
            Distinguished <span className="text-[#52f3fe]">Guests</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us as we welcome prominent figures in culture, academia, and entertainment who will inspire and celebrate with us.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {guests.map((guest, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center gap-4 md:gap-6 group p-4 md:p-8 py-8 md:py-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#52f3fe]/20 hover:border-[#52f3fe]/50 transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-[#52f3fe]/20 relative overflow-hidden"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#52f3fe]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <Avatar className="h-32 w-32 md:h-44 md:w-44 border-4 border-[#52f3fe]/30 transition-all duration-300 group-hover:border-[#52f3fe] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#52f3fe]/50 rounded-lg">
                  <AvatarImage src={guest.image || "/placeholder.svg"} alt={guest.name} className="object-cover" />
                  <AvatarFallback className="text-xl md:text-2xl bg-gradient-to-br from-[#52f3fe]/20 to-[#e223a5]/20 rounded-lg">
                    {guest.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -top-2 -right-2 bg-[#52f3fe] rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Star className="w-4 h-4 text-black" />
                </div>
              </div>
              
              <div className="relative z-10">
                <h3 className="font-semibold text-lg md:text-xl mb-2 text-white group-hover:text-[#52f3fe] transition-colors duration-300">
                  {guest.name}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground text-pretty group-hover:text-white/80 transition-colors duration-300 leading-relaxed">
                  {guest.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true }}
        >
          <button className="bg-gradient-to-r from-[#52f3fe] to-[#e223a5] text-black px-6 md:px-10 py-3 md:py-5 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-[#52f3fe]/50 text-base md:text-lg">
            Meet All Guests
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}