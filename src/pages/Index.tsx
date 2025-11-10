import Header from '@/components/Header';
import AuditHero from '@/components/AuditHero';
import QueRevisamos from '@/components/QueRevisamos';
import ComoFunciona from '@/components/ComoFunciona';
import TrustSection from '@/components/TrustSection';
import ReservaAuditoria from '@/components/ReservaAuditoria';
import FAQ from '@/components/FAQ';
import StickyCTA from '@/components/StickyCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AuditHero />
      <QueRevisamos />
      <ComoFunciona />
      <TrustSection />
      <ReservaAuditoria />
      <FAQ />
      <StickyCTA />
      <Footer />
    </div>
  );
};

export default Index;
