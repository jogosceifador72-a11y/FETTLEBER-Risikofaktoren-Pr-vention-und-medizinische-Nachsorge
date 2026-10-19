import React, { useState, useEffect } from 'react';
import { CheckCircle, X, Download } from 'lucide-react';

interface NotificationItem {
  id: number;
  timeAgo: string;
}

const mockPurchases: NotificationItem[] = [
  { id: 1, timeAgo: 'Vor 2 Minuten' },
  { id: 2, timeAgo: 'Vor 5 Minuten' },
  { id: 3, timeAgo: 'Vor 9 Minuten' },
  { id: 4, timeAgo: 'Vor 14 Minuten' },
  { id: 5, timeAgo: 'Vor 21 Minuten' },
];

export const PurchaseNotifications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Initial delay before first notification appears (3.5 seconds)
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    // Loop through notifications: show for 6 seconds, hide for 7 seconds, then next
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        if (!isDismissed) {
          setCurrentIndex((prev) => (prev + 1) % mockPurchases.length);
          setIsVisible(true);
        }
      }, 7000);

    }, 13000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  if (isDismissed) return null;

  const current = mockPurchases[currentIndex];

  return (
    <div className="fixed bottom-5 left-5 z-40 max-w-[340px] pointer-events-auto">
      <div 
        className={`transition-all duration-500 transform ${
          isVisible 
            ? 'translate-y-0 opacity-100 scale-100' 
            : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-[#0E1D14]/95 backdrop-blur-xl border border-emerald-500/40 rounded-2xl p-4 shadow-[0_20px_45px_rgba(0,0,0,0.8),0_0_20px_rgba(16,185,129,0.2)] flex items-start gap-3.5 relative overflow-hidden group">
          
          {/* Glowing green checkmark badge */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/40 shadow-[0_0_12px_rgba(16,185,129,0.5)]">
            <CheckCircle className="w-5 h-5 text-white" />
          </div>

          <div className="flex-1 min-w-0 pr-4">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-xs font-bold text-white tracking-tight">
                Kauf bestätigt
              </span>
              <span className="text-[10px] text-emerald-400">•</span>
              <span className="text-[11px] text-emerald-300 font-mono font-medium">
                {current.timeAgo}
              </span>
            </div>

            <p className="text-xs text-stone-200 font-medium truncate">
              Fettleber: Ratgeber & Nachsorge (PDF)
            </p>

            <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold mt-1">
              <Download className="w-3 h-3 text-emerald-400" />
              <span>Sofort-Download per E-Mail versendet</span>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            className="absolute top-2.5 right-2.5 text-stone-400 hover:text-white p-1 rounded-md transition-colors"
            title="Schließen"
            aria-label="Schließen"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Glowing bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 shadow-[0_0_8px_#34D399]" />
        </div>
      </div>
    </div>
  );
};
