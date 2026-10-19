import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { Check, X, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export const AudienceCheck: React.FC = () => {
  return (
    <section id="zielgruppe" className="py-20 sm:py-28 bg-[#0C1710] border-y border-emerald-950/80 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Passgenauigkeit</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            Für wen ist dieser Ratgeber geeignet – und für wen nicht?
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Transparenz und Ehrlichkeit stehen an erster Stelle. Prüfen Sie bitte vor dem Kauf, ob der Ratgeber zu Ihren Erwartungen passt.
          </p>
        </motion.div>

        {/* Two-Column Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card: Für Sie */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-10 border border-emerald-500/40 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center font-bold shadow-lg border border-emerald-400/40">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Das E-Book ist für Sie, wenn:
                  </h3>
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                    Klare Empfehlung
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {PRODUCT_DATA.targetAudience.forYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-stone-200 text-sm sm:text-base leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 text-xs text-emerald-400/90 font-medium">
              Ideal für Betroffene mit Verdacht auf Steatosis hepatis oder erhöhten Enzymwerten.
            </div>
          </motion.div>

          {/* Card: Nicht für Sie */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card rounded-3xl p-8 sm:p-10 border border-rose-500/30 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-7">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-700 to-rose-900 text-white flex items-center justify-center font-bold shadow-lg border border-rose-400/40">
                  <X className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Das E-Book ist NICHT für Sie, wenn:
                  </h3>
                  <span className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                    Keine Empfehlung
                  </span>
                </div>
              </div>

              <ul className="space-y-4">
                {PRODUCT_DATA.targetAudience.notForYou.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-stone-300 text-sm sm:text-base leading-relaxed">
                    <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10 text-xs text-stone-400 font-medium">
              Ernsthafte Lebererkrankungen erfordern immer eine direkte ärztliche Begleitung.
            </div>
          </motion.div>

        </div>

        {/* Medical Notice Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-amber-950/40 border border-amber-500/30 rounded-2xl p-5 sm:p-6 flex items-start gap-4 max-w-3xl mx-auto shadow-lg"
        >
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
            <strong className="text-amber-300 font-semibold">Wichtiger Hinweis:</strong> Dieser Ratgeber dient der eigenverantwortlichen Information und Prävention und ersetzt keinesfalls die persönliche Diagnose oder Behandlung durch einen Arzt.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
