import { useLang } from '@/hooks/useLang';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact" style={{ background: '#002855', paddingTop: '80px', paddingBottom: '32px' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div
          className="relative -mt-36 mb-16 p-10 md:p-14 rounded-2xl text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #007ACC 0%, #0099E8 100%)',
            boxShadow: '0 20px 60px rgba(0,40,85,0.3)',
          }}
        >
          <div className="relative z-10">
            <h3
              className="text-3xl md:text-4xl font-extrabold text-white mb-3"
              style={{ fontFamily: '"Inter", "Noto Sans SC", sans-serif', fontWeight: 800 }}
            >
              {t('准备好体验忍者级清洁了吗？', 'Ready for Ninja-Level Clean?')}
            </h3>
            <p className="text-base text-white/70 mb-8 max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
              {t(
                '立即预约免费上门报价！商业清洁$79起，住宅清洁$99起。',
                'Book your free on-site quote now! Commercial from $79, Home from $99.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:chenxiuxiu1220@gmail.com"
                className="inline-block px-8 py-4 text-sm font-bold tracking-wider uppercase transition-all duration-300 hover:brightness-110 hover:scale-105"
                style={{ background: '#FFC107', color: '#002855', borderRadius: '10px', fontFamily: 'Inter, sans-serif' }}
              >
                {t('立即预约', 'Book Now')}
              </a>
              <a
                href="tel:0212986511"
                className="inline-block px-8 py-4 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-white/20"
                style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white', borderRadius: '10px', fontFamily: 'Inter, sans-serif' }}
              >
                0212986511
              </a>
            </div>
          </div>
          {/* Decorative ninja stars */}
          <div className="absolute top-4 right-8 opacity-10">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="white">
              <path d="M40 0l8 28L80 40l-28 8L40 80l-8-28L0 40l28-8L40 0z" />
            </svg>
          </div>
          <div className="absolute bottom-4 left-8 opacity-10">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="white">
              <path d="M25 0l5 17.5L50 25l-17.5 5L25 50l-5-17.5L0 25l17.5-5L25 0z" />
            </svg>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/ninja-mascot.png" alt="Hygiene Ninja" className="h-12 w-auto" />
              <span className="text-xl font-extrabold text-white" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 800 }}>
                HYGIENE <span style={{ color: '#FFC107' }}>NINJA</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', lineHeight: 1.75 }}>
              {t(
                'Where Cleanliness Meets Ninja! 新西兰最专业的清洁团队，以忍者般的速度和质量为您服务。',
                'Where Cleanliness Meets Ninja! New Zealand\'s most professional cleaning team, serving you with ninja speed and quality.'
              )}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#FFC107', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
              {t('服务项目', 'Services')}
            </h4>
            <ul className="space-y-3">
              {[
                { zh: '商业清洁 $79起', en: 'Commercial $79+' },
                { zh: '住宅清洁 $99起', en: 'Home Cleaning $99+' },
                { zh: '地毯清洁 $1.59/㎡', en: 'Carpet $1.59/㎡' },
                { zh: '定期清洁计划', en: 'Regular Plans' },
                { zh: '免费上门报价', en: 'Free Quotes' },
              ].map((item) => (
                <li key={item.en} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                  {t(item.zh, item.en)}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#FFC107', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
              {t('服务区域', 'Service Areas')}
            </h4>
            <ul className="space-y-3">
              {['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Queenstown'].map((city) => (
                <li key={city} className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#FFC107', fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em' }}>
              {t('联系我们', 'Contact')}
            </h4>
            <ul className="space-y-3">
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                chenxiuxiu1220@gmail.com
              </li>
              <li className="text-sm font-semibold" style={{ color: 'white', fontFamily: 'Inter, sans-serif' }}>
                0212986511
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}>
                hygiene.ninja
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-wider transition-opacity duration-300 hover:opacity-60"
                  style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.1em' }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            &copy; 2026 Hygiene Ninja. {t('版权所有', 'All Rights Reserved')}.
          </p>
          <p className="text-xs flex items-center gap-1" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ color: '#FFC107' }}>{t('忍者', 'Ninja')}</span>
            <span>{t('清洁，闪电服务', 'Clean, Lightning Service')}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
