import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/hooks/useLang';

gsap.registerPlugin(ScrollTrigger);

const showcaseImages = [
  { src: '/images/showcase-commercial.jpg', zh: '商业清洁', en: 'Commercial Cleaning' },
  { src: '/images/showcase-home.jpg', zh: '住宅清洁', en: 'Home Cleaning' },
  { src: '/images/showcase-carpet.jpg', zh: '地毯清洁', en: 'Carpet Cleaning' },
  { src: '/images/showcase-0.jpg', zh: '客厅清洁', en: 'Living Room' },
  { src: '/images/showcase-1.jpg', zh: '厨房清洁', en: 'Kitchen Deep Clean' },
  { src: '/images/showcase-2.jpg', zh: '卫浴清洁', en: 'Bathroom Sparkle' },
];

export default function Showcase() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.08,
          scrollTrigger: { trigger: card, start: 'top 92%', toggleActions: 'play none none none' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #002855 0%, #003d7a 50%, #007ACC 100%)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10" style={{ background: '#FFC107', filter: 'blur(60px)' }} />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10" style={{ background: 'white', filter: 'blur(50px)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#FFC107', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
            {t('实景展示', 'Our Work')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 800 }}>
            {t('清洁前后对比', 'Before \& After')}
          </h2>
          <p className="text-base text-white/50 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            {t('看看我们的忍者团队如何施展清洁魔法', 'See our ninja team work their cleaning magic')}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {showcaseImages.map((img, i) => (
            <div
              key={img.en}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{ opacity: 0 }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={img.src}
                  alt={t(img.zh, img.en)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t(img.zh, img.en)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Price highlight */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'Commercial Cleaning', price: '$79', sub: '起/From' },
            { label: 'Home Cleaning', price: '$99', sub: '起/From' },
            { label: 'Carpet Cleaning', price: '$1.59', sub: '/㎡' },
          ].map((item) => (
            <div
              key={item.label}
              className="text-center px-8 py-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
            >
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item.label}
              </p>
              <p className="text-3xl font-extrabold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                {item.price}<span className="text-base font-medium text-white/40 ml-1">{item.sub}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
