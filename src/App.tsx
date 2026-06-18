import { LangProvider } from '@/hooks/useLang';
import { useLenis } from '@/hooks/useLenis';
import Nav from '@/sections/Nav';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import WhyChooseUs from '@/sections/WhyChooseUs';
import Showcase from '@/sections/Showcase';
import Testimonials from '@/sections/Testimonials';
import Footer from '@/sections/Footer';

function AppContent() {
  useLenis();

  return (
    <div style={{ background: '#F8FBFF' }}>
      <Nav />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Showcase />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  );
}
