import Header from '@/components/Header';
import AuditHero from '@/components/AuditHero';
import QueRevisamos from '@/components/QueRevisamos';
import ComoFunciona from '@/components/ComoFunciona';
import ReservaAuditoria from '@/components/ReservaAuditoria';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#fdfdfd]">
      <Header />
      <AuditHero />
      <QueRevisamos />
      <ComoFunciona />
      <ReservaAuditoria />
      <FAQ />
      <StickyCTA />
      <Footer />
    </div>
  );
};

export default Index;
