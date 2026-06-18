import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useLang } from '@/hooks/useLang';

export default function Hero() {
  const { t } = useLang();
  const heroRef = useRef<HTMLElement>(null);
  const mascotRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sloganRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (mascotRef.current) {
      tl.fromTo(mascotRef.current, { opacity: 0, scale: 0.6, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, 0.2);
    }
    if (titleRef.current) {
      tl.fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5);
    }
    if (sloganRef.current) {
      tl.fromTo(sloganRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.7);
    }
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.9);
    }

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden flex items-center"
      style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #003d7a 0%, #007ACC 40%, #0099E8 100%)' }}
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10" style={{ background: 'white', filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10" style={{ background: '#FFC107', filter: 'blur(80px)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5" style={{ background: 'white', filter: 'blur(100px)' }} />
      </div>

      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-4">
              <span
                className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#FFC107', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em', border: '1px solid rgba(255,193,7,0.3)' }}
              >
                {t('新西兰专业清洁', 'NZ Professional Cleaning')}
              </span>
            </div>

            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
              style={{ opacity: 0, fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              HYGIENE
              <br />
              <span style={{ color: '#FFC107' }}>NINJA</span>
            </h1>

            <p
              ref={sloganRef}
              className="text-lg md:text-xl text-white/70 mb-2"
              style={{ opacity: 0, fontFamily: '"Bodoni Moda", "Noto Serif SC", serif', fontStyle: 'italic' }}
            >
              Where Cleanliness Meets Ninja!
            </p>

            <p
              className="text-base text-white/60 mb-8 max-w-md mx-auto lg:mx-0"
              style={{ fontFamily: 'Inter, "Noto Sans SC", sans-serif', lineHeight: 1.7 }}
            >
              {t(
                '商业清洁$79起 · 住宅清洁$99起 · 地毯清洁$1.59/㎡ · 免费上门报价',
                'Commercial from $79 · Home from $99 · Carpet $1.59/㎡ · Free Onsite Quotes'
              )}
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start" style={{ opacity: 0 }}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:brightness-110 hover:scale-105"
                style={{ background: '#FFC107', color: '#002855', borderRadius: '8px', fontFamily: 'Inter, sans-serif' }}
              >
                {t('立即获取免费报价', 'Get Free Quote Now')}
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-white/20"
                style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', borderRadius: '8px', fontFamily: 'Inter, sans-serif' }}
              >
                {t('了解服务', 'Our Services')}
              </button>
            </div>
          </div>

          {/* Right - Mascot */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              ref={mascotRef}
              src="/images/ninja-mascot.png"
              alt="Hygiene Ninja Mascot"
              className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl"
              style={{ opacity: 0, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white/40">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>
    </section>
  );
}
