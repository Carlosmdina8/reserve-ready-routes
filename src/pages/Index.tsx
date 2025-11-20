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
import CookieConsent from "@/components/CookieConsent";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add WebSite JSON-LD with legal page references
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Medina Agency",
      "url": "https://medinaagency.es",
      "description": "Auditoría Digital Gratuita para restaurantes. Marketing gastronómico para aumentar tu visibilidad y reservas.",
      "privacyPolicy": "https://medinaagency.es/politica-privacidad",
      "termsOfService": "https://medinaagency.es/aviso-legal"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
      <CookieConsent />
    </div>
  );
};

export default Index;
