import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/hooks/useLang';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="12" width="32" height="20" rx="3" stroke="#007ACC" strokeWidth="2" />
        <path d="M8 12V8a4 4 0 014-4h16a4 4 0 014 4v4" stroke="#007ACC" strokeWidth="2" />
        <circle cx="20" cy="22" r="4" stroke="#007ACC" strokeWidth="2" />
        <path d="M14 36v-4M26 36v-4" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    zhTitle: '商业清洁',
    enTitle: 'Commercial Cleaning',
    zhPrice: 'From $79',
    enPrice: 'From $79',
    zhDesc: '办公室、商铺、餐厅、健身房等商业空间的日常保洁和深度清洁。灵活的时间安排，不影响您的正常营业。',
    enDesc: 'Daily and deep cleaning for offices, shops, restaurants, gyms. Flexible scheduling that won\'t disrupt your business.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M8 36V16a4 4 0 014-4h16a4 4 0 014 4v20" stroke="#007ACC" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 36h32" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 12V8a6 6 0 0112 0v4" stroke="#007ACC" strokeWidth="2" />
        <circle cx="20" cy="26" r="2" stroke="#007ACC" strokeWidth="2" />
        <path d="M20 28v4" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    zhTitle: '住宅清洁',
    enTitle: 'Home Cleaning',
    zhPrice: 'From $99',
    enPrice: 'From $99',
    zhDesc: '全屋深度清洁，包括厨房、浴室、卧室、客厅。让您的家焕然一新，享受五星级酒店的洁净体验。',
    enDesc: 'Whole-house deep cleaning including kitchen, bathrooms, bedrooms, living areas. Five-star hotel level cleanliness.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="4" width="24" height="32" rx="4" stroke="#007ACC" strokeWidth="2" />
        <path d="M14 14h12M14 20h8" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="30" r="2" fill="#007ACC" />
        <circle cx="24" cy="30" r="2" stroke="#007ACC" strokeWidth="2" />
      </svg>
    ),
    zhTitle: '地毯清洁',
    enTitle: 'Carpet Cleaning',
    zhPrice: 'From $1.59/㎡',
    enPrice: 'From $1.59/㎡',
    zhDesc: '专业蒸汽深层清洁，去除顽固污渍、尘螨和异味。让地毯恢复柔软蓬松，延长使用寿命。',
    enDesc: 'Professional steam deep cleaning to remove stubborn stains, dust mites and odors. Restore softness and extend carpet life.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M12 36V18a8 8 0 0116 0v18" stroke="#007ACC" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="20" cy="10" r="4" stroke="#007ACC" strokeWidth="2" />
        <path d="M12 24h16M12 30h16" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="36" r="3" stroke="#007ACC" strokeWidth="2" />
      </svg>
    ),
    zhTitle: '定期维护',
    enTitle: 'Regular Upkeep',
    zhPrice: 'Custom Plans',
    enPrice: 'Custom Plans',
    zhDesc: '每周、双周或每月定期清洁计划。享受长期客户优惠，让清洁成为习惯而非负担。',
    enDesc: 'Weekly, bi-weekly or monthly cleaning plans. Long-term customer discounts. Make cleanliness a habit, not a burden.',
  },
];

export default function Services() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);

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
        gsap.fromTo(card, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.1,
          scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full"
      style={{ background: '#F8FBFF', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#007ACC', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
            {t('我们的服务', 'Our Services')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#002855', fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 800 }}>
            {t('忍者级清洁服务', 'Ninja-Level Cleaning')}
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: '#002855', opacity: 0.5, fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            {t(
              '无论商业空间还是温馨家园，我们的忍者团队都能给您带来闪电般的清洁体验。',
              'Whether commercial space or cozy home, our ninja team delivers lightning-fast cleaning.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={service.enTitle}
              ref={(el) => { if (el) cardsRef.current[index] = el; }}
              className="group relative p-8 transition-all duration-400 hover:-translate-y-2"
              style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid rgba(0,122,204,0.08)',
                boxShadow: '0 4px 24px rgba(0,40,85,0.04)',
                opacity: 0,
              }}
            >
              {/* Price badge */}
              <div
                className="absolute -top-3 right-6 px-3 py-1 text-xs font-bold rounded-full"
                style={{ background: '#007ACC', color: 'white', fontFamily: 'Inter, sans-serif' }}
              >
                {t(service.zhPrice, service.enPrice)}
              </div>

              <div className="mb-5">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#002855', fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 700 }}>
                {t(service.zhTitle, service.enTitle)}
              </h3>
              <p className="text-sm" style={{ color: '#002855', opacity: 0.45, fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                {t(service.zhDesc, service.enDesc)}
              </p>

              <div className="mt-5 flex items-center gap-1 text-sm font-semibold" style={{ color: '#007ACC' }}>
                <span>{t('了解更多', 'Learn more')}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
