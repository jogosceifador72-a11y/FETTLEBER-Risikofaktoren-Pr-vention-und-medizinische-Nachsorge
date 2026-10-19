import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { BookMockup } from './BookMockup';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, BookOpen, Clock, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenPreview: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPreview }) => {
  return (
    <section id="top" className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden bg-mesh-dark">
      
      {/* Dynamic ambient background orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Core Value Proposition & Conversion Action */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Category Label */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-5 shadow-inner"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Praktischer Ratgeber im PDF-Format · 30 Seiten</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.12] tracking-tight mb-5 text-balance">
              FETTLEBER: <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 font-normal italic">Risikofaktoren, Prävention</span> und Nachsorge
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-6 font-normal">
              {PRODUCT_DATA.tagline}
            </p>

            {/* Key Benefits List with scroll/entrance stagger */}
            <div className="space-y-3.5 mb-8 w-full">
              {[
                {
                  title: 'Keine lange Theorie:',
                  desc: 'Klare Erklärungen, Checklisten und alltagstaugliche Tipps zu Ernährung und Bewegung.'
                },
                {
                  title: 'Laborwerte entschlüsselt:',
                  desc: 'Beendet das Rätselraten um ALT, AST und GGT mit verständlichen Richtwerten.'
                },
                {
                  title: 'Fructose- & Fettfallen meiden:',
                  desc: 'Konkrete Do\'s & Don\'ts nach dem bewährten mediterranen Prinzip.'
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.03] border border-emerald-500/10 hover:border-emerald-500/30 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-stone-300">
                    <strong className="text-white font-semibold">{item.title}</strong> {item.desc}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Price Box & Primary CTA Decision Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="w-full glass-card rounded-2xl p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Card top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-editorial">
                      {PRODUCT_DATA.price} {PRODUCT_DATA.currency}
                    </span>
                    <span className="text-base text-stone-400 line-through">
                      {PRODUCT_DATA.originalPrice}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {PRODUCT_DATA.discountPercentage}
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1.5">
                    Einmalige Zahlung · Kein Abonnement · Sofortiger PDF-Download
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/40 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Sofortzugang per E-Mail</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={PRODUCT_DATA.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-all text-center border border-emerald-400/40"
                >
                  <Zap className="w-4 h-4 fill-amber-300 text-amber-300 animate-pulse" />
                  <span>Jetzt für {PRODUCT_DATA.price} € herunterladen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={onOpenPreview}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 text-sm font-semibold text-stone-200 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/15 hover:border-emerald-500/40"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Leseprobe ansehen</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center sm:justify-start gap-4 mt-5 pt-3.5 text-xs text-stone-400 border-t border-white/5 flex-wrap">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Hotmart Käuferschutz</span>
                </span>
                <span className="text-stone-600">•</span>
                <span>PDF für Smartphone, Tablet & PC</span>
                <span className="text-stone-600">•</span>
                <span className="text-stone-300">100% digital – keine Wartezeit</span>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Visual Book Mockup (Exact replica of attached cover) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center py-6"
          >
            <div className="relative">
              <BookMockup size="lg" />

              {/* Quick highlight callout under mockup */}
              <div className="mt-9 text-center">
                <p className="text-xs text-stone-400 max-w-xs mx-auto">
                  Originale Ratgeber-Ausgabe · 30 Seiten geballtes Praxiswissen · Leicht verständlich erklärt
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
