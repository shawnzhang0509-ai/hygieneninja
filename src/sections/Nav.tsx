import { useRef, useState } from 'react';
import { useLang } from '@/hooks/useLang';

export default function Nav() {
  const { lang, toggleLang, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      style={{ background: 'rgba(0,100,200,0.9)', backdropFilter: 'blur(12px)' }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/ninja-mascot.png" alt="Hygiene Ninja" className="h-10 w-auto" />
          <span
            className="text-xl font-bold tracking-tight text-white"
            style={{ fontFamily: '"Inter", sans-serif', fontWeight: 800 }}
          >
            HYGIENE <span style={{ color: '#FFC107' }}>NINJA</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { zh: '服务', en: 'Services', id: 'services' },
            { zh: '价格', en: 'Pricing', id: 'pricing' },
            { zh: '关于', en: 'About', id: 'about' },
            { zh: '评价', en: 'Reviews', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="relative text-sm text-white/80 tracking-wide group hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, letterSpacing: '0.02em' }}
            >
              {t(item.zh, item.en)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFC107] transition-all duration-300 group-hover:w-full rounded-full" />
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs tracking-widest uppercase transition-colors duration-200 text-white/60 hover:text-white border border-white/20 rounded px-2 py-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {lang === 'zh' ? 'EN' : '中文'}
          </button>

          <button
            onClick={() => handleScroll('contact')}
            className="hidden md:block px-5 py-2 text-xs tracking-wider uppercase font-semibold transition-all duration-300 hover:brightness-110"
            style={{
              background: '#FFC107',
              color: '#002855',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.05em',
              borderRadius: '6px',
            }}
          >
            {t('免费报价', 'Free Quote')}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: 'rgba(0,100,200,0.95)' }}>
          {[
            { zh: '服务', en: 'Services', id: 'services' },
            { zh: '价格', en: 'Pricing', id: 'pricing' },
            { zh: '关于', en: 'About', id: 'about' },
            { zh: '评价', en: 'Reviews', id: 'testimonials' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-left text-sm text-white/80"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
            >
              {t(item.zh, item.en)}
            </button>
          ))}
          <button
            onClick={() => handleScroll('contact')}
            className="mt-2 px-5 py-3 text-xs tracking-wider uppercase font-bold text-center"
            style={{ background: '#FFC107', color: '#002855', borderRadius: '6px', fontFamily: 'Inter, sans-serif' }}
          >
            {t('免费报价', 'Free Quote')}
          </button>
        </div>
      )}
    </nav>
  );
}
