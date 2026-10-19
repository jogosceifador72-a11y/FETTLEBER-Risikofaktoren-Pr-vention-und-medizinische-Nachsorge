import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#0B160F] border-t border-emerald-950/80 relative overflow-hidden">
      
      {/* Background illumination */}
      <div className="absolute bottom-10 left-1/3 w-[450px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-4 h-4 text-emerald-400" />
            <span>Häufige Fragen</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Alles, was Sie vor dem Kauf wissen müssen
          </h2>
          <p className="text-stone-300 text-base leading-relaxed">
            Haben Sie noch offene Fragen zum Ratgeber oder Bestellablauf? Hier finden Sie schnelle Antworten.
          </p>
        </motion.div>

        {/* FAQs Accordion */}
        <div className="space-y-3.5">
          {PRODUCT_DATA.faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen 
                    ? 'border-emerald-500/50 bg-[#16291C]/90 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' 
                    : 'border-white/10 bg-white/[0.03] hover:border-emerald-500/30 hover:bg-white/[0.05]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base sm:text-lg"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform shrink-0 ${
                    isOpen ? 'rotate-180 text-emerald-400' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-stone-300 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
