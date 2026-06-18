import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/hooks/useLang';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#007ACC" strokeWidth="2" />
        <path d="M10 16l4 4 8-8" stroke="#007ACC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    zhTitle: '价格透明',
    enTitle: 'Transparent Pricing',
    zhDesc: '无隐藏费用，无额外收费。名片上的价格就是您实际支付的价格。商业清洁$79起，住宅清洁$99起，地毯清洁$1.59/㎡。',
    enDesc: 'No hidden fees, no surprise charges. The price on the card is what you pay. Commercial $79, Home $99, Carpet $1.59/㎡.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l4 8 8 1-6 6 1.5 8.5L16 24l-7.5 3.5L10 19 4 13l8-1 4-8z" stroke="#FFC107" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    zhTitle: '闪电速度',
    enTitle: 'Lightning Fast',
    zhDesc: '我们的忍者团队训练有素，动作迅速高效。预约后24小时内即可上门服务，紧急清洁需求更能当天响应。',
    enDesc: 'Our ninja team is trained to be swift and efficient. Same-day service available for urgent cleaning needs.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="12" r="6" stroke="#007ACC" strokeWidth="2" />
        <path d="M6 30c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 7l2-2M12 7l-2-2" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    zhTitle: '专业认证',
    enTitle: 'Certified Pros',
    zhDesc: '所有清洁工均经过严格培训和背景审查，持有健康证明。我们使用环保认证清洁剂，对您和家人的健康安全负责。',
    enDesc: 'All cleaners are rigorously trained, background-checked and health-certified. We use eco-certified cleaning products.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="3" stroke="#007ACC" strokeWidth="2" />
        <path d="M12 12h8M12 17h6" stroke="#007ACC" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="24" r="2" stroke="#007ACC" strokeWidth="2" />
      </svg>
    ),
    zhTitle: '免费上门报价',
    enTitle: 'Free Onsite Quotes',
    zhDesc: '我们提供免费的上门评估和报价服务。根据您的空间大小和清洁需求，制定最适合您的清洁方案和合理报价。',
    enDesc: 'We offer free on-site assessment and quotes. Customized cleaning plans based on your space and needs.',
  },
];

export default function WhyChooseUs() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(el, { opacity: 0, x: i % 2 === 0 ? -30 : 30 }, {
          opacity: 1, x: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.12,
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });
      if (imageRef.current) {
        gsap.fromTo(imageRef.current, { opacity: 0, scale: 1.05 }, {
          opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: imageRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full"
      style={{ background: 'white', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">
          {/* Left - Reasons */}
          <div className="lg:w-1/2">
            <div ref={titleRef} className="mb-12" style={{ opacity: 0 }}>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#007ACC', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
                {t('为什么选择我们', 'Why Choose Us')}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#002855', fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 800, lineHeight: 1.15 }}>
                {t('忍者精神', 'The Ninja')}
                <br />
                <span style={{ color: '#007ACC' }}>{t('清洁之道', 'Difference')}</span>
              </h2>
            </div>

            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <div
                  key={reason.enTitle}
                  ref={(el) => { if (el) itemRefs.current[i] = el; }}
                  className="flex gap-5 items-start p-5 rounded-xl transition-all duration-300 hover:shadow-lg"
                  style={{ background: '#F8FBFF', opacity: 0, border: '1px solid rgba(0,122,204,0.06)' }}
                >
                  <div className="flex-shrink-0 mt-1">{reason.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: '#002855', fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 700 }}>
                      {t(reason.zhTitle, reason.enTitle)}
                    </h3>
                    <p className="text-sm" style={{ color: '#002855', opacity: 0.5, fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                      {t(reason.zhDesc, reason.enDesc)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image with price cards overlay */}
          <div className="lg:w-1/2 relative">
            <div ref={imageRef} className="relative" style={{ opacity: 0 }}>
              <img
                src="/images/showcase-commercial.jpg"
                alt="Commercial cleaning"
                className="w-full h-auto rounded-2xl object-cover"
                style={{ maxHeight: '560px' }}
                loading="lazy"
              />
              {/* Floating price cards */}
              <div
                className="absolute -bottom-6 -left-6 px-5 py-4 rounded-xl shadow-xl"
                style={{ background: '#007ACC' }}
              >
                <p className="text-xs font-semibold text-white/70 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Commercial</p>
                <p className="text-2xl font-extrabold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>$79+</p>
              </div>
              <div
                className="absolute -top-4 -right-4 px-5 py-4 rounded-xl shadow-xl"
                style={{ background: '#FFC107' }}
              >
                <p className="text-xs font-semibold text-[#002855]/60 uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>Home</p>
                <p className="text-2xl font-extrabold text-[#002855]" style={{ fontFamily: 'Inter, sans-serif' }}>$99+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
