import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { HelpCircle, Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const LabValuesGuide: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = PRODUCT_DATA.labValues[selectedIdx];

  return (
    <section id="laborwerte" className="py-20 sm:py-28 bg-[#0A150F] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Laborwerte Entschlüsselt</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            Schluss mit dem Rätselraten um Ihre Leberwerte
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Haben Sie kürzlich einen Blutbefund erhalten und fragen sich, was die Abkürzungen bedeuten? Der Ratgeber erklärt Ihnen die wichtigsten Leberenzyme verständlich und ohne Medizinjargon.
          </p>
        </motion.div>

        {/* Interactive Lab Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl relative"
        >
          
          {/* Tab Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-2 bg-black/40 rounded-2xl mb-8 border border-white/5">
            {PRODUCT_DATA.labValues.map((item, idx) => (
              <button
                key={item.code}
                onClick={() => setSelectedIdx(idx)}
                className={`py-3.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                  selectedIdx === idx
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg border border-emerald-400/40'
                    : 'text-stone-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="block">{item.code}</span>
              </button>
            ))}
          </div>

          {/* Active Value Card with animation */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={current.code}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-xs font-bold tracking-wider uppercase text-emerald-300 bg-emerald-950/90 px-3 py-1 rounded-md border border-emerald-500/30">
                    {current.role}
                  </span>
                  <span className="text-xs text-stone-400">Offizielle Referenz</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {current.name} ({current.code})
                </h3>

                <div className="p-4 bg-black/30 border border-emerald-500/20 rounded-xl mb-5 inline-block w-full">
                  <div className="flex items-center gap-2 text-xs text-stone-400 mb-1">
                    <Info className="w-4 h-4 text-emerald-400" />
                    <span>Typischer Referenzbereich:</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-emerald-300 font-mono">
                    {current.normal}
                  </div>
                </div>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                  {current.explanation}
                </p>

                {/* What the eBook covers for this value */}
                <div className="space-y-2.5 bg-white/[0.04] p-5 rounded-2xl border border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Im 30-Seiten Ratgeber enthalten:</span>
                  </h4>
                  <ul className="text-xs sm:text-sm text-stone-300 space-y-2 pl-5 list-disc marker:text-emerald-400">
                    <li>Wie Sie Schwankungen und Verläufe über Wochen richtig dokumentieren</li>
                    <li>Welche Begleitwerte (z. B. Cholesterin, Triglyceride, Ferritin) für das Gesamtbild nötig sind</li>
                    <li>Konkrete Fragen, die Sie Ihrem Arzt beim nächsten Kontrolltermin stellen sollten</li>
                  </ul>
                </div>
              </div>

              {/* Visual Callout Column */}
              <div className="lg:col-span-5 bg-gradient-to-br from-emerald-950/80 via-[#102419] to-emerald-900/50 border border-emerald-500/30 rounded-2xl p-7 shadow-xl">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5 border border-emerald-400/30">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-2xl font-bold text-white mb-2">
                  Kontrollplan & Nachsorge
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-5">
                  Eine Fettleber verläuft oft symptomlos. Regelmäßige Nachkontrollen der Leberwerte und des Ultraschalls sind der sicherste Weg, um Regenerationserfolge schwarz auf weiß zu sehen.
                </p>
                <div className="p-4 bg-black/40 rounded-xl text-xs text-stone-300 border border-emerald-500/20 space-y-1.5">
                  <p className="font-bold text-emerald-300">Wussten Sie schon?</p>
                  <p className="leading-relaxed">
                    Die Leber ist eines der wenigen Organe mit enormer Regenerationsfähigkeit. Bei rechtzeitiger Umstellung sinken erhöhte Enzyme oft schon nach wenigen Wochen messbar ab.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};
