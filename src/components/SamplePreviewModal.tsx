import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { X, ArrowRight, ChevronRight, ChevronLeft, ShieldCheck } from 'lucide-react';

interface SamplePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const previewPages = [
  {
    title: 'Inhaltsverzeichnis (30 Seiten Leitfaden)',
    pageNumber: 'Seite 3',
    subtitle: 'Kompakte Übersicht aller 5 Module',
    content: (
      <div className="space-y-3.5 text-xs sm:text-sm text-stone-200">
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="font-semibold text-white">1. Was ist eine Fettleber? Anatomie & stille Symptome</span>
          <span className="text-emerald-400 font-mono font-bold">S. 04</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="font-semibold text-white">2. Risikofaktoren: Warum es nicht nur am Alkohol liegt</span>
          <span className="text-emerald-400 font-mono font-bold">S. 08</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="font-semibold text-white">3. Das Labor-Handbuch: ALT (GPT), AST (GOT) & GGT</span>
          <span className="text-emerald-400 font-mono font-bold">S. 12</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="font-semibold text-white">4. Die Mediterrane Leberküche: Do\'s & Don\'ts</span>
          <span className="text-emerald-400 font-mono font-bold">S. 18</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="font-semibold text-white">5. Fructose-Fallen im Alltag & Einkaufsführer</span>
          <span className="text-emerald-400 font-mono font-bold">S. 22</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="font-semibold text-white">6. Kontrollplan für den Arzttermin & Checklisten</span>
          <span className="text-emerald-400 font-mono font-bold">S. 27</span>
        </div>
      </div>
    )
  },
  {
    title: 'Auszug: Stumme Warnsignale erkennen',
    pageNumber: 'Seite 6',
    subtitle: 'Warum die Leber nicht schmerzt, aber stumm leidet',
    content: (
      <div className="space-y-3.5 text-xs sm:text-sm text-stone-200 leading-relaxed">
        <p className="italic bg-emerald-950/60 p-4 rounded-xl border border-emerald-500/30 text-emerald-300">
          „Die Leber besitzt keine Schmerzrezeptoren im eigentlichen Lebergewebe. Deshalb spürt man eine Fetteinlagerung in den ersten Stadien kaum als Schmerz – sondern als stumme Erschöpfung."
        </p>
        <p>
          Oft berichten Betroffene über unspezifische Symptome, die leicht mit Alltagsstress verwechselt werden:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
          <li>Diffuses Druckgefühl im rechten Oberbauch (durch Anschwellen der Leberkapsel)</li>
          <li>Unerklärliche Müdigkeit nach Mahlzeiten (besonders nach kohlenhydratreichen Speisen)</li>
          <li>Verminderte Konzentrationsfähigkeit und träger Stoffwechsel</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Auszug: Der Laborwerte-Spickzettel',
    pageNumber: 'Seite 14',
    subtitle: 'Transaminasen & De-Ritis-Quotient im Überblick',
    content: (
      <div className="space-y-3.5 text-xs sm:text-sm text-stone-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-white/10 rounded-xl overflow-hidden">
            <thead className="bg-emerald-950/90 text-white border-b border-white/10">
              <tr>
                <th className="p-2.5">Enzym</th>
                <th className="p-2.5">Bedeutung</th>
                <th className="p-2.5">Tendenz bei Fettleber</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-black/40">
              <tr>
                <td className="p-2.5 font-mono font-bold text-emerald-400">ALT (GPT)</td>
                <td className="p-2.5">Leberspezifisches Zytoplasma-Enzym</td>
                <td className="p-2.5 text-amber-400 font-semibold">Oft als erstes erhöht</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-emerald-400">AST (GOT)</td>
                <td className="p-2.5">Mitochondriales Enzym</td>
                <td className="p-2.5 text-stone-300">Normal oder leicht erhöht</td>
              </tr>
              <tr>
                <td className="p-2.5 font-mono font-bold text-emerald-400">AST/ALT &lt; 1</td>
                <td className="p-2.5">Typischer Quotient bei NAFLD</td>
                <td className="p-2.5 text-emerald-400 font-semibold">Wichtiges Unterscheidungsmerkmal</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-stone-400">
          * Der Ratgeber liefert Ihnen eine ausfüllbare Tabelle für Ihre eigenen Laborverläufe zum Ausdrucken.
        </p>
      </div>
    )
  }
];

export const SamplePreviewModal: React.FC<SamplePreviewModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  const page = previewPages[currentPage];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0F2016] rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.9)] border border-emerald-500/40 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1710] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950 px-3 py-1 rounded-md border border-emerald-500/30">
              Leseprobe
            </span>
            <span className="text-xs text-stone-300 font-medium">
              {page.pageNumber} · Fettleber Ratgeber (PDF)
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Page Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <div className="glass-card rounded-2xl p-6 sm:p-7 border border-emerald-500/30 shadow-inner">
            <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-white/10">
              <div>
                <h4 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                  {page.title}
                </h4>
                <p className="text-xs text-stone-400 mt-0.5">{page.subtitle}</p>
              </div>
              <span className="text-xs font-mono bg-black/40 px-2.5 py-1 rounded-md border border-white/10 text-emerald-400 font-bold">
                {page.pageNumber}
              </span>
            </div>

            {page.content}
          </div>

          {/* Navigation Controls between preview pages */}
          <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/10">
            <button
              type="button"
              disabled={currentPage === 0}
              onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-emerald-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Vorherige Seite</span>
            </button>

            <span className="text-xs text-stone-400 font-medium font-mono">
              Vorschau {currentPage + 1} von {previewPages.length}
            </span>

            <button
              type="button"
              disabled={currentPage === previewPages.length - 1}
              onClick={() => setCurrentPage(p => Math.min(previewPages.length - 1, p + 1))}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-300 hover:text-emerald-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <span>Nächste Seite</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Footer / Direct CTA */}
        <div className="px-6 py-4 bg-[#0B1710] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3.5">
          <div className="flex items-center gap-2 text-xs text-stone-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Alle 30 Seiten direkt nach dem Kauf als PDF freigeschaltet</span>
          </div>

          <a
            href={PRODUCT_DATA.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs sm:text-sm font-bold rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all border border-emerald-400/40"
          >
            <span>Komplettes Buch für {PRODUCT_DATA.price} € sichern</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
