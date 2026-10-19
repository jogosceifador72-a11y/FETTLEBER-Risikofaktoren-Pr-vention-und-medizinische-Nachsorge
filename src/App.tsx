/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { LabValuesGuide } from './components/LabValuesGuide';
import { ContentModules } from './components/ContentModules';
import { MediterraneanSpotlight } from './components/MediterraneanSpotlight';
import { AudienceCheck } from './components/AudienceCheck';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PurchaseNotifications } from './components/PurchaseNotifications';
import { SamplePreviewModal } from './components/SamplePreviewModal';
import { PRODUCT_DATA } from './data/productData';
import { ArrowRight, Zap } from 'lucide-react';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show mobile bottom CTA only after scrolling past 450px
      setShowMobileStickyBar(window.scrollY > 450);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A140E] text-[#E6EFE8] flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Bar Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with 3D Book Cover replica & instant checkout */}
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* What Does It Solve (4 Core Pillars with animations) */}
        <ProblemSolution />

        {/* Interactive Lab Values Guide (ALT, AST, GGT) */}
        <LabValuesGuide />

        {/* 30-Page Content Modules Breakdown */}
        <ContentModules onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* Mediterranean Nutrition & Fructose Traps Spotlight */}
        <MediterraneanSpotlight />

        {/* Audience Check (Für wen / Für wen nicht) */}
        <AudienceCheck />

        {/* Pricing Offer & Hotmart Checkout Section (27,81 €) */}
        <PricingSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer with requested social buttons & medical disclaimer */}
      <Footer />

      {/* Real-time styled confirmed purchase notification (bottom-left, without names) */}
      <PurchaseNotifications />

      {/* Interactive Sample Reader Modal */}
      <SamplePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />

      {/* Mobile Sticky Action Bar (Strictly complies with <=15% mobile viewport height) */}
      {showMobileStickyBar && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0C1A11]/95 backdrop-blur-xl border-t border-emerald-500/30 p-3 shadow-[0_-10px_25px_rgba(0,0,0,0.7)] flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex flex-col pl-1">
            <span className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">
              Ratgeber (PDF)
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-white font-editorial">
                {PRODUCT_DATA.price} {PRODUCT_DATA.currency}
              </span>
              <span className="text-xs text-stone-500 line-through">
                {PRODUCT_DATA.originalPrice}
              </span>
            </div>
          </div>

          <a
            href={PRODUCT_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-bold rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all text-center border border-emerald-400/30"
          >
            <Zap className="w-3.5 h-3.5 fill-amber-300 text-amber-300 animate-pulse" />
            <span>Jetzt herunterladen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

    </div>
  );
}
