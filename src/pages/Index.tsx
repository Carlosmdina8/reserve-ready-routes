import AuditHero from "@/components/AuditHero";
import SocialProof from "@/components/SocialProof";
import StateOfMind from "@/components/StateOfMind";
import QueRevisamos from "@/components/QueRevisamos";
import ComoFunciona from "@/components/ComoFunciona";
import ReservaAuditoria from "@/components/ReservaAuditoria";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import ChatPopup from "@/components/ChatPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <main>
        <AuditHero />
        <SocialProof />
        <StateOfMind />
        <QueRevisamos />
        <ComoFunciona />
        <ReservaAuditoria />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <ChatPopup />
    </div>
  );
};

export default Index;
