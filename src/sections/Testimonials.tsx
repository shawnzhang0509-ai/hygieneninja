import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLang } from '@/hooks/useLang';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    zh: 'Hygiene Ninja 的团队太棒了！我们的办公室从来没这么干净过。他们动作很快，价格也很合理。强烈推荐给所有需要商业清洁的企业！',
    en: "Hygiene Ninja's team is amazing! Our office has never been this clean. They work fast and the price is very reasonable. Highly recommend to all businesses!",
    name: 'Mike Thompson',
    loc: 'Auckland CBD',
    role: 'Office Manager',
  },
  {
    zh: '我请了他们的住宅清洁服务，$99的价格真的物超所值。整个家焕然一新，连最难清理的厨房油污都处理得一干二净。',
    en: 'I hired their home cleaning service for $99 and it was worth every penny. The whole house feels brand new, even the toughest kitchen grease is gone.',
    name: 'Emily Watson',
    loc: 'Wellington',
    role: 'Homeowner',
  },
  {
    zh: '地毯清洁效果太惊人了！$1.59/㎡的价格，清洁后的地毯像新买的一样。之前的咖啡渍和宠物毛发全部消失，太满意了！',
    en: "The carpet cleaning results are incredible! At $1.59/㎡, my carpets look brand new. Coffee stains and pet hair completely gone. I'm so satisfied!",
    name: 'David Chen',
    loc: 'Christchurch',
    role: 'Property Owner',
  },
];

export default function Testimonials() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
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
      itemRefs.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(item, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.15,
          scrollTrigger: { trigger: item, start: 'top 88%', toggleActions: 'play none none none' },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative w-full"
      style={{ background: '#F8FBFF', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16" style={{ opacity: 0 }}>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#007ACC', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
            {t('客户评价', 'Testimonials')}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#002855', fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 800 }}>
            {t('客户怎么说', 'What Clients Say')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              ref={(el) => { if (el) itemRefs.current[index] = el; }}
              className="relative p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'white',
                borderRadius: '16px',
                border: '1px solid rgba(0,122,204,0.08)',
                boxShadow: '0 4px 24px rgba(0,40,85,0.04)',
                opacity: 0,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#FFC107">
                    <path d="M8 0l2.47 4.94L16 5.77l-4 3.87L12.94 16 8 13.27 3.06 16 4 9.64 0 5.77l5.53-.83L8 0z" />
                  </svg>
                ))}
              </div>

              <blockquote
                className="text-sm leading-relaxed mb-6"
                style={{ color: '#002855', opacity: 0.7, fontFamily: 'Inter, "Noto Sans SC", sans-serif', lineHeight: 1.75 }}
              >
                "{t(item.zh, item.en)}"
              </blockquote>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: '#007ACC' }}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#002855', fontFamily: 'Inter, sans-serif' }}>
                    {item.name}
                  </p>
                  <p className="text-xs" style={{ color: '#002855', opacity: 0.4, fontFamily: 'Inter, sans-serif' }}>
                    {item.role} — {item.loc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
