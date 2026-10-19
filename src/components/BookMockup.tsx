import React from 'react';
import { motion } from 'motion/react';

interface BookMockupProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BookMockup: React.FC<BookMockupProps> = ({ className = '', size = 'md' }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <div className={`relative select-none perspective-[1400px] flex items-center justify-center ${className}`}>
      
      {/* Dynamic ambient glow behind the book */}
      <motion.div 
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -inset-8 bg-gradient-to-tr from-emerald-500/25 via-emerald-400/20 to-amber-300/15 rounded-full blur-3xl -z-10 pointer-events-none" 
      />

      {/* 3D Book wrapper with subtle floating motion */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{
          rotateY: 0,
          rotateX: 0,
          scale: 1.03,
          transition: { duration: 0.3 }
        }}
        className="relative group rotate-y-[-9deg] rotate-x-[3deg] transition-all duration-500 cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Book Spine (left shadow edge) */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-stone-900/60 via-stone-700/30 to-transparent z-30 pointer-events-none rounded-l-sm"
        />

        {/* Paper stack thickness (right edge) */}
        <div 
          className="absolute -right-3.5 top-1.5 bottom-1.5 w-3.5 bg-[#EAE8E0] rounded-r-xs shadow-xl border-r border-t border-b border-stone-400/60 -z-10"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #F2EFEB 0px, #DDD9D0 1.5px, #F2EFEB 3px)',
          }}
        />

        {/* Bottom thickness */}
        <div 
          className="absolute left-2 -bottom-2 right-0 h-2 bg-[#DDD9D0] rounded-b-xs shadow-md -z-10"
        />

        {/* MAIN COVER CONTAINER - EXACT REPLICA OF USER ATTACHED COVER */}
        <div className={`relative bg-[#F7F6F1] border border-stone-300/80 rounded-r-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),0_10px_20px_-5px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-between ${
          isLarge 
            ? 'w-[320px] sm:w-[380px] h-[480px] sm:h-[550px]' 
            : isSmall 
              ? 'w-[210px] h-[300px]' 
              : 'w-[280px] sm:w-[320px] h-[410px] sm:h-[465px]'
        }`}>
          
          {/* Inset Framing Border - Identical to user's cover */}
          <div className="absolute inset-3 sm:inset-4 border border-[#8FA391]/50 rounded-xs pointer-events-none z-20" />

          {/* TOP COVER TEXT SECTION */}
          <div className="relative z-20 px-6 sm:px-7 pt-5 sm:pt-6 text-left">
            {/* Title: Fettleber */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[54px] font-normal tracking-tight text-[#526E59] leading-[1.05]">
              Fettleber
            </h1>

            {/* Delicate divider with center dot */}
            <div className="flex items-center gap-2 my-2.5 sm:my-3">
              <span className="w-10 sm:w-14 h-[1px] bg-[#8FA391]/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#526E59]" />
              <span className="w-10 sm:w-14 h-[1px] bg-[#8FA391]/60" />
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-medium text-stone-700 leading-snug tracking-normal max-w-[280px]">
              Risikofaktoren, Prävention und medizinische Nachsorge
            </p>

            {/* Second divider */}
            <div className="w-8 sm:w-10 h-[1.5px] bg-[#8FA391]/60 my-2.5 sm:my-3" />

            {/* Subtitle description */}
            <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed max-w-[270px]">
              Ein praktischer Leitfaden zur Überwachung und Verbesserung Ihrer Lebergesundheit.
            </p>
          </div>

          {/* CENTER & BOTTOM COVER PHOTOGRAPHY (Glass of water + cut lemon) */}
          <div className="relative flex-1 mt-2 min-h-[220px] sm:min-h-[260px] overflow-hidden">
            <img 
              src="/src/assets/images/water_glass_lemon_cut_1792273037817.jpg" 
              alt="Frisches Quellwasser und Zitrone auf hellem Marmor"
              className="w-full h-full object-cover object-bottom"
              referrerPolicy="no-referrer"
            />

            {/* Soft blend from cream header into photo */}
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#F7F6F1] via-[#F7F6F1]/70 to-transparent pointer-events-none" />

            {/* BOTTOM LEFT CORNER SAGE WAVE & LIVER ARTWORK - EXACT MATCH TO USER COVER */}
            <div className="absolute -bottom-1 -left-1 w-36 sm:w-44 h-36 sm:h-44 pointer-events-none z-20">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full fill-[#8FA391]"
              >
                {/* Elegant curved wave in bottom left corner */}
                <path d="M0,70 Q40,90 85,125 T160,200 L0,200 Z" />
              </svg>

              {/* Minimalist white liver line art */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-16 sm:w-20 h-16 sm:h-20">
                <svg 
                  viewBox="0 0 100 80" 
                  className="w-full h-full fill-none stroke-white/95 stroke-[2] drop-shadow-xs"
                >
                  <path d="M12,48 C10,28 32,14 58,16 C80,18 92,34 86,54 C80,72 64,72 44,68 C24,64 14,56 12,48 Z" />
                  <path d="M46,17 C46,36 46,54 44,68" strokeDasharray="2,2" />
                  <circle cx="33" cy="50" r="3" fill="white" />
                </svg>
              </div>
            </div>

          </div>

          {/* Book Sheen Lighting Glare Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none z-30" />
        </div>
      </motion.div>

      {/* Floating Pill Tag with Price & PDF indicator */}
      <div className="absolute -bottom-5 bg-[#0F2015] text-stone-100 text-xs font-semibold px-4 py-2 rounded-full shadow-2xl border border-emerald-500/30 flex items-center gap-2 z-30">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>30 Seiten PDF · Sofortzugang per E-Mail</span>
      </div>

    </div>
  );
};
