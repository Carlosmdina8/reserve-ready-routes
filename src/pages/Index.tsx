import { useEffect } from 'react';
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
import ExitIntentModal from "@/components/ExitIntentModal";

const Index = () => {
  useEffect(() => {
    // Fade-in on scroll observer
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));

    // Calendly redirect to /gracias
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        window.location.href = '/gracias';
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    // Carousel indicator script
    const scroller = document.querySelector('#pasos-scroller');
    const dots = document.querySelectorAll('[data-step-dot]');
    
    const setActive = () => {
      const cards = document.querySelectorAll('.paso-card');
      const mid = (scroller as HTMLElement).scrollLeft + (scroller as HTMLElement).clientWidth / 2;
      let idx = 0;
      let min = Infinity;
      
      cards.forEach((c, i) => {
        const card = c as HTMLElement;
        const center = card.offsetLeft + card.offsetWidth / 2;
        const d = Math.abs(center - mid);
        if (d < min) {
          min = d;
          idx = i;
        }
      });
      
      dots.forEach((d, i) => {
        d.classList.toggle('active', i === idx);
      });
    };

    scroller?.addEventListener('scroll', setActive, { passive: true });
    setActive();

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
      scroller?.removeEventListener('scroll', setActive);
      revealElements.forEach((el) => observer.unobserve(el));
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
      <ExitIntentModal />
    </div>
  );
};

export default Index;
