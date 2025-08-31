import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Problem from '@/components/Problem';
import Method from '@/components/Method';
import Benefits from '@/components/Benefits';
import ImpulsoLocal from '@/components/ImpulsoLocal';
import Process from '@/components/Process';
import Authority from '@/components/Authority';
import Vision from '@/components/Vision';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <Problem />
      <Method />
      <Benefits />
      <ImpulsoLocal />
      <Process />
      <Authority />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
