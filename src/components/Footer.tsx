import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Share2, 
  ExternalLink,
  ShieldAlert,
  ArrowUp
} from 'lucide-react';

// Custom SVG Icons for TikTok, Threads, and Kwai
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.3 6.3 0 0 0 1.87-4.49V8.65a8.28 8.28 0 0 0 3.9 1.15V6.7c-.01-.01 0 0 0-.01z"/>
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12.186 24C5.464 24 0 18.598 0 12S5.464 0 12.186 0c6.721 0 12.186 5.402 12.186 12 0 .564-.04 1.116-.118 1.658-.337 2.312-1.393 4.417-2.99 5.962-1.583 1.533-3.649 2.38-5.819 2.38-2.613 0-4.896-1.258-6.104-3.363l2.062-1.189c.813 1.415 2.348 2.26 4.042 2.26 1.455 0 2.84-.567 3.901-1.597 1.07-1.036 1.777-2.446 1.991-3.992-1.368.67-2.91 1.034-4.526 1.034-4.305 0-7.797-3.45-7.797-7.693 0-4.244 3.492-7.694 7.797-7.694 4.306 0 7.798 3.45 7.798 7.694 0 .37-.024.738-.073 1.101h-2.34c.026-.364.04-.73.04-1.101 0-2.92-2.42-5.32-5.425-5.32-3.004 0-5.425 2.4-5.425 5.32 0 2.92 2.421 5.32 5.425 5.32 1.343 0 2.618-.475 3.616-1.314-.492-1.688-1.89-2.946-3.616-2.946-2.14 0-3.875 1.716-3.875 3.829 0 .684.184 1.326.505 1.879l-2.062 1.189C6.012 17.065 5.5 15.602 5.5 14.004c0-3.684 3.03-6.677 6.686-6.677 3.655 0 6.685 2.993 6.685 6.677 0 .584-.075 1.157-.22 1.706C18.23 18.06 15.428 20 12.186 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8c0 .285-.015.568-.044.848h2.368c.03-.28.046-.563.046-.848 0-5.728-4.654-10.372-10.37-10.372C6.464 1.628 1.814 6.272 1.814 12c0 5.728 4.65 10.372 10.372 10.372 2.76 0 5.28-1.077 7.157-2.894 1.89-1.83 3.06-4.32 3.39-7.05.07-.58.11-1.17.11-1.77 0-7.94-6.46-14.372-14.47-14.372z"/>
  </svg>
);

const KwaiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm1.07-7.75l-.9.92C12.45 11.9 12 12.5 12 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'instagram':
        return <Instagram className="w-4 h-4" />;
      case 'facebook':
      case 'facebook-page':
        return <Facebook className="w-4 h-4" />;
      case 'youtube':
        return <Youtube className="w-4 h-4" />;
      case 'tiktok':
        return <TikTokIcon />;
      case 'threads':
        return <ThreadsIcon />;
      case 'kwai':
        return <KwaiIcon />;
      default:
        return <Share2 className="w-4 h-4" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060D08] text-stone-300 pt-16 pb-12 border-t border-emerald-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Footer: Brand & Social Channels */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="font-editorial text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
              <span>Fettleber Ratgeber</span>
            </span>
            <p className="text-stone-400 text-xs sm:text-sm mt-1.5 max-w-md">
              Risikofaktoren, Prävention und medizinische Nachsorge · Praxis-Leitfaden im PDF-Format
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs text-stone-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/15 shadow-sm"
          >
            <span>Nach oben</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Social Contact Buttons (Requested by user) */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Verbinden Sie sich mit uns / Redes Sociais
              </h4>
              <p className="text-xs text-stone-400 mt-1">
                Folgen Sie unseren Kanälen für regelmäßige Tipps zu Gesundheit, Vitalität und Leberpflege.
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/80 px-3 py-1 rounded-md border border-emerald-500/30">
              Offizielle Profile
            </span>
          </div>

          {/* Contact Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {PRODUCT_DATA.socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/[0.04] border border-white/10 text-stone-200 text-xs font-semibold transition-all hover:scale-105 hover:shadow-lg ${item.color} shadow-xs`}
              >
                <span className="shrink-0 group-hover:scale-110 transition-transform">
                  {getIcon(item.icon)}
                </span>
                <span className="truncate">{item.name}</span>
                <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Medical Legal Disclaimer (Important requirement) */}
        <div className="py-8 border-b border-white/10">
          <div className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-inner">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-stone-300 leading-relaxed space-y-1.5">
              <p className="font-bold text-amber-300">
                Wichtiger medizinischer Hinweis & Haftungsausschluss:
              </p>
              <p>
                {PRODUCT_DATA.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Security */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} Karin Zeit · Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Sicherer Checkout über Hotmart</span>
            <span className="text-stone-700">•</span>
            <span>PDF Sofort-Download (30 Seiten)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
