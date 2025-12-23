export function ScrollingBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 overflow-hidden bg-gradient-to-r from-[#52f3fe]/10 to-[#e223a5]/10 border-b border-[#52f3fe]/20 py-1 md:py-2 z-50">
      <div className="flex w-max animate-marquee">
        <span className="whitespace-nowrap px-2 md:px-4 text-xs md:text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 –
          University of Ibadan – Get Your Tickets Now!
        </span>
        <span className="whitespace-nowrap px-2 md:px-4 text-xs md:text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 –
          University of Ibadan – Get Your Tickets Now!
        </span>
        <span className="whitespace-nowrap px-2 md:px-4 text-xs md:text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 –
          University of Ibadan – Get Your Tickets Now!
        </span>
        <span className="whitespace-nowrap px-2 md:px-4 text-xs md:text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 –
          University of Ibadan – Get Your Tickets Now!
        </span>
        <span className="whitespace-nowrap px-2 md:px-4 text-xs md:text-sm font-medium text-white">
          🎉 Oyo Music Festival 2026 – Celebrating Yoruba Culture – March 2026 –
          University of Ibadan – Get Your Tickets Now!
        </span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 120s linear infinite; /* Slower on mobile */
          }
        }
      `}</style>
    </div>
  );
}
