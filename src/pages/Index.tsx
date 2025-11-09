import AuditHero from '@/components/AuditHero';
import QueRevisamos from '@/components/QueRevisamos';
import ComoFunciona from '@/components/ComoFunciona';
import ReservaAuditoria from '@/components/ReservaAuditoria';
import MobileCtaButton from '@/components/MobileCtaButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <AuditHero />
      <QueRevisamos />
      <ComoFunciona />
      <ReservaAuditoria />
      <MobileCtaButton />
      <Footer />
    </div>
  );
};

export default Index;
