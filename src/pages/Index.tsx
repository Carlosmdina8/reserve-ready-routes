import { Helmet } from 'react-helmet-async';
import HeaderDark from '@/components/landing/HeaderDark';
import HeroDark from '@/components/landing/HeroDark';
import HistoriaSection from '@/components/landing/HistoriaSection';
import ParisSection from '@/components/landing/ParisSection';
import ServiciosSection from '@/components/landing/ServiciosSection';
import CasoLoreaSection from '@/components/landing/CasoLoreaSection';
import CartaDigitalSection from '@/components/landing/CartaDigitalSection';
import FiltroSection from '@/components/landing/FiltroSection';
import PorQueHablarSection from '@/components/landing/PorQueHablarSection';
import ProcesoSection from '@/components/landing/ProcesoSection';
import ContactoSection from '@/components/landing/ContactoSection';
import FooterDark from '@/components/landing/FooterDark';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Carlos Medina | Marketing e IA</title>
        <meta name="description" content="Marca personal. Redes, web y automatizaciones. Primero hablamos y vemos si encaja." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://medinaagency.es" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Carlos Medina | Marketing e IA" />
        <meta property="og:description" content="Marca personal. Redes, web y automatizaciones. Primero hablamos y vemos si encaja." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://medinaagency.es" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carlos Medina | Marketing e IA" />
        <meta name="twitter:description" content="Marca personal. Redes, web y automatizaciones. Primero hablamos y vemos si encaja." />
        
        {/* Person Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Carlos Medina",
            "jobTitle": "Marketing e IA",
            "description": "Experto en marketing digital, redes sociales y automatizaciones para marcas y negocios.",
            "url": "https://medinaagency.es",
            "sameAs": [
              "https://www.instagram.com/marketing_bymedina"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Alicante",
              "addressCountry": "ES"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <HeaderDark />
        
        <main>
          <HeroDark />
          <HistoriaSection />
          <ParisSection />
          <ServiciosSection />
          <CasoLoreaSection />
          <CartaDigitalSection />
          <FiltroSection />
          <PorQueHablarSection />
          <ProcesoSection />
          <ContactoSection />
        </main>
        
        <FooterDark />
      </div>
    </>
  );
};

export default Index;
