import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const MediterraneanSpotlight: React.FC = () => {
  return (
    <section id="ernaehrung" className="py-20 sm:py-28 bg-[#0A140E] relative overflow-hidden">
      
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Ernährung als stärkster Hebel</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 text-balance">
            Das mediterrane Prinzip: Leberentlastung ohne Hungerdiäten
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Eine Fettleber entsteht nicht allein durch Fett – oft sind es raffinierte Kohlenhydrate, versteckte Fructose und chronische Entzündungen. Der Ratgeber zeigt, wie Sie genussvoll gegensteuern.
          </p>
        </motion.div>

        {/* Feature Image & Core Insight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.7)] mb-14"
        >
          <div className="relative h-72 sm:h-96 md:h-[420px] w-full">
            <img 
              src="/src/assets/images/mediterranean_nutrition_guide_1792172159624.jpg" 
              alt="Mediterrane Lebensmittel für Lebergesundheit wie Olivenöl, Nüsse, Beeren und Blattgrün"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            {/* Scrim overlay for rich contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A140E] via-[#0A140E]/60 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 max-w-2xl text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 block font-mono">
                Aus Kapitel 3 des Ratgebers
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 text-balance">
                Warum Fructose & Fertigprodukte die Leber im Stillen überlasten
              </h3>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed max-w-xl">
                Fructose wird fast ausschließlich in der Leber verstoffwechselt. Zu viel davon wandelt die Leber direkt in Speicherfett (Triglyceride) um. Der Ratgeber deckt die versteckten Fallen in Smoothies, Saucen und vermeintlichen Fitness-Snacks auf.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Do's and Don'ts Comparison Table with animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          
          {/* Leber-Booster (DO'S) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-7 sm:p-8 border border-emerald-500/30 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center">
                <Check className="w-5 h-5 text-emerald-400" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Die Leber-Booster (Gezielt integrieren)
              </h4>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Natives Olivenöl extra & Omega-3:</strong> Entzündungshemmende Fettsäuren, die den Fettabtransport unterstützen.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Bitterstoffe & Kreuzblütler:</strong> Brokkoli, Rucola, Artischocken und Chicorée fördern den Gallenfluss.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Polyphenolreiche dunkle Beeren:</strong> Schützen Hepatozyten vor oxidativem Stress.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Kaffee & Quellwasser:</strong> Studien belegen den schützenden Effekt von 2-3 Tassen Kaffee auf Leberzellen.</span>
              </li>
            </ul>
          </motion.div>

          {/* Leber-Fallen (DON'TS) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-7 sm:p-8 border border-rose-500/30 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-400/40 text-rose-400 flex items-center justify-center">
                <X className="w-5 h-5 text-rose-400" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Die Leber-Fallen (Konsequent minimieren)
              </h4>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-stone-300">
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Fructose-Glukose-Sirup (HFCS):</strong> Der Haupttreiber für Fetteinlagerung in Leberzellen, oft versteckt in Fertigprodukten.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Fruchtsäfte & vermeintlich gesunde Smoothies:</strong> Konzentrierte Flüssigfructose ohne Sättigungsballaststoffe.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Transfette & gehärtete Öle:</strong> In ultra-verarbeiteten Fertigbackwaren und Fast Food.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Alkohol & ständiges Snacken:</strong> Nimmt der Leber die essenziellen Ruhepausen für die Eigenreinigung.</span>
              </li>
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
