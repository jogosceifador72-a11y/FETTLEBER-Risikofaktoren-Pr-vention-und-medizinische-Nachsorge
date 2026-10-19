import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { Activity, FileSpreadsheet, Utensils, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const icons = [Activity, FileSpreadsheet, Utensils, Award];

export const ProblemSolution: React.FC = () => {
  return (
    <section id="loesung" className="py-20 sm:py-28 bg-[#0C1710] relative overflow-hidden border-y border-emerald-950/80">
      
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Konkrete Unterstützung</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            Was löst dieser Ratgeber für Sie?
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Dieses E-Book räumt typische Verunsicherungen aus dem Weg und verwandelt medizinisches Fachwissen in einen leicht umsetzbaren Alltagskompass.
          </p>
        </motion.div>

        {/* 4 Core Pillars Grid with scroll animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PRODUCT_DATA.solves.map((item, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative glass-card glass-card-hover rounded-2xl p-7 sm:p-9 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-emerald-900/90 to-emerald-950 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400/80 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/20">
                      Säule 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm font-semibold text-emerald-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{item.highlight}</span>
                  </p>

                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-300">
                  <span>{item.metric}</span>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What Is It Box (Section 1 of Prompt) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 glass-card rounded-2xl p-7 sm:p-10 border border-emerald-500/30 relative overflow-hidden"
        >
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-4">
              Auf 30 Seiten direkt auf den Punkt gebracht
            </h4>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
              {PRODUCT_DATA.description.whatIsIt}
            </p>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/80 px-4 py-2 rounded-xl border border-emerald-500/40">
              <span>Keine Fachbegriff-Flut · Sofort umsetzbar · In Ihrem eigenen Tempo</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
