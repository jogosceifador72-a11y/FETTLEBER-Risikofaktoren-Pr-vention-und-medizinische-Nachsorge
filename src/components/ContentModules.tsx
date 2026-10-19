import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { ChevronDown, BookOpen, CheckCircle, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface ContentModulesProps {
  onOpenPreview: () => void;
}

export const ContentModules: React.FC<ContentModulesProps> = ({ onOpenPreview }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="inhalt" className="py-20 sm:py-28 bg-[#0C1911] border-y border-emerald-950/80 relative overflow-hidden">
      
      {/* Background illumination */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

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
            <span>Aufbau & Struktur</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            Was ist im 30-Seiten Ratgeber enthalten?
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Strukturiert in 5 praxisnahe Kernmodule – konzipiert für schnelles Verständnis und sofortige Umsetzung im täglichen Alltag.
          </p>
        </motion.div>

        {/* Modules Accordion & Preview Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {PRODUCT_DATA.modules.map((mod, idx) => {
              const isOpen = openIdx === idx;
              return (
                <motion.div 
                  key={mod.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`border rounded-2xl transition-all overflow-hidden ${
                    isOpen 
                      ? 'border-emerald-500/50 bg-[#162A1E]/90 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' 
                      : 'border-white/10 bg-white/[0.03] hover:border-emerald-500/30 hover:bg-white/[0.05]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-emerald-300 bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                        MODUL {mod.number}
                      </span>
                      <h3 className="font-bold text-white text-base sm:text-lg">
                        {mod.title}
                      </h3>
                    </div>

                    <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-400' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-stone-300 border-t border-white/10">
                      <p className="font-semibold text-emerald-300 mb-2">
                        {mod.focus}
                      </p>
                      <p className="text-stone-300 leading-relaxed mb-4">
                        {mod.details}
                      </p>

                      <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-500/20">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>Inklusive Checklisten & Handlungsanweisungen</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: eBook Features & Live Sneak Peek Card */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-emerald-500/30 shadow-2xl"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-4 uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Format- & Lieferdetails</span>
              </div>

              <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-3">
                Direkt nach dem Kauf lesen
              </h4>

              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Kein langes Warten auf die Post. Sie erhalten das vollständige PDF direkt nach Zahlungseingang per E-Mail zugestellt.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3.5 bg-black/30 rounded-xl border border-emerald-500/20 text-xs sm:text-sm text-stone-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34D399]" />
                  <span><strong>30 Seiten</strong> präzise auf den Punkt zusammengefasst</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-black/30 rounded-xl border border-emerald-500/20 text-xs sm:text-sm text-stone-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34D399]" />
                  <span><strong>PDF-Format:</strong> Lesbar auf Handy, iPad & PC</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 bg-black/30 rounded-xl border border-emerald-500/20 text-xs sm:text-sm text-stone-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 shadow-[0_0_8px_#34D399]" />
                  <span><strong>Checklisten:</strong> Zum Ausdrucken oder digital Ausfüllen</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenPreview}
              className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] border border-emerald-400/40"
            >
              <BookOpen className="w-4 h-4 text-emerald-200" />
              <span>Leseprobe & Inhaltsverzeichnis öffnen</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
