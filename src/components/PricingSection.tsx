import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { Check, ArrowRight, ShieldCheck, Mail, Smartphone, Award, Lock, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const PricingSection: React.FC = () => {
  return (
    <section id="preise" className="py-20 sm:py-28 bg-[#09130D] relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-amber-500/10 rounded-full blur-[160px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Ihr Sofortzugang</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Investieren Sie jetzt in Ihre Lebergesundheit
          </h2>
          <p className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Erhalten Sie den kompletten 30-Seiten Praxis-Leitfaden sofort nach der Bestellung direkt in Ihr E-Mail-Postfach.
          </p>
        </motion.div>

        {/* Conversion Offer Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="glass-card border-2 border-emerald-500/50 rounded-3xl p-7 sm:p-11 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative"
        >
          {/* Top highlight ribbon */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-xs font-bold px-5 py-2 rounded-full shadow-lg border border-emerald-400/40 flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Digitaler Ratgeber · 30 Seiten Praxiswissen · Sofort-Download</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
            
            {/* Left: Summary and benefits */}
            <div className="md:col-span-7">
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white mb-2">
                Fettleber: Leitfaden & Nachsorge
              </h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                Der kompakte PDF-Begleiter für Betroffene und gesundheitsbewusste Menschen.
              </p>

              <ul className="space-y-3.5 mb-7">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Vollständiger 30-Seiten Ratgeber:</strong> Keine Schnörkel, 100% Praxis</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Laborwerte-Spickzettel:</strong> ALT, AST, GGT & De-Ritis-Quotient</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Mediterranes Ernährungskonzept:</strong> Do\'s & Don\'ts & Fructose-Fallen</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Alltags-Checklisten:</strong> Direkt anwenden in Ihrem eigenen Tempo</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Format:</strong> Hochwertiges PDF, lesbar auf Handy, Tablet & PC</span>
                </li>
              </ul>

              <div className="flex items-center gap-4 text-xs text-stone-400 pt-5 border-t border-white/10 flex-wrap">
                <span className="flex items-center gap-1.5 text-stone-300">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Sofort per E-Mail</span>
                </span>
                <span className="text-stone-600">•</span>
                <span className="flex items-center gap-1.5 text-stone-300">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Alle Geräte</span>
                </span>
                <span className="text-stone-600">•</span>
                <span className="flex items-center gap-1.5 text-stone-300">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Einmalzahlung</span>
                </span>
              </div>
            </div>

            {/* Right: Checkout Box & Action */}
            <div className="md:col-span-5 bg-gradient-to-br from-black/60 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 sm:p-7 text-center flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  Einführungspreis
                </span>
                
                <div className="flex items-baseline justify-center gap-2 mb-1.5">
                  <span className="font-editorial text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {PRODUCT_DATA.price} {PRODUCT_DATA.currency}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 mb-5">
                  <span className="text-stone-500 line-through text-sm">
                    {PRODUCT_DATA.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-emerald-300 bg-emerald-900/60 px-2.5 py-0.5 rounded border border-emerald-500/30">
                    {PRODUCT_DATA.discountPercentage}
                  </span>
                </div>

                <p className="text-[11px] text-stone-400 mb-6">
                  Inkl. digitaler Auslieferung. Keine Folgekosten, kein Abonnement.
                </p>
              </div>

              <div>
                <a
                  href={PRODUCT_DATA.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group inline-flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] transition-all text-sm sm:text-base text-center border border-emerald-400/40"
                >
                  <span>Jetzt sicher bestellen</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-stone-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>256-Bit SSL Verschlüsselung via Hotmart</span>
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
