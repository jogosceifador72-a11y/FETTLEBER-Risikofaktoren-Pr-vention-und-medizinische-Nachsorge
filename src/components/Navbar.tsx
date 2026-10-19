import React, { useState, useEffect } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { ArrowRight, ShieldCheck, Download, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Top micro ribbon */}
      <div className="bg-[#08100B] text-emerald-300 text-[11px] sm:text-xs py-1.5 px-4 text-center border-b border-emerald-950/80">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3 sm:gap-6 flex-wrap font-medium">
          <span className="flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-stone-300">Sofortiger PDF-Download (30 Seiten)</span>
          </span>
          <span className="hidden md:inline text-emerald-800">•</span>
          <span className="hidden md:flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-stone-300">Medizinischer Praxis-Leitfaden</span>
          </span>
          <span className="text-emerald-800">•</span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-stone-300">Sicherer 256-Bit SSL Checkout via Hotmart</span>
          </span>
        </div>
      </div>

      {/* Main Top Bar adhering to Top Bar Contract */}
      <header className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0D1A12]/95 backdrop-blur-md shadow-2xl border-b border-emerald-500/20 py-3' 
          : 'bg-[#0A140E]/80 backdrop-blur-sm border-b border-emerald-950/60 py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Brand title, single element, wordmark */}
          <a 
            href="#top" 
            className="font-editorial text-xl sm:text-2xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-emerald-300 transition-colors flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
            <span>Fettleber Ratgeber</span>
          </a>

          {/* Zone 2: 4-5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            <a 
              href="#loesung" 
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Vorteile
            </a>
            <a 
              href="#laborwerte" 
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Laborwerte-Guide
            </a>
            <a 
              href="#inhalt" 
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Buch-Inhalt
            </a>
            <a 
              href="#ernaehrung" 
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Ernährung
            </a>
            <a 
              href="#zielgruppe" 
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              Für wen?
            </a>
            <a 
              href="#faq" 
              className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={PRODUCT_DATA.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 rounded-xl transition-all shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:shadow-[0_4px_22px_rgba(16,185,129,0.5)] hover:translate-y-[-1px] whitespace-nowrap shrink-0 border border-emerald-400/30"
            >
              <span>Jetzt für {PRODUCT_DATA.price} € sichern</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
