import HeroPersonal from "@/components/personal/HeroPersonal";
import StorySection from "@/components/personal/StorySection";
import CTASection from "@/components/personal/CTASection";
import FooterPersonal from "@/components/personal/FooterPersonal";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import CookieConsent from "@/components/CookieConsent";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Carlos Medina",
      "url": "https://medinaagency.es",
      "jobTitle": "Experto en Marketing Gastronómico e IA",
      "description": "Especialista en marketing digital para restaurantes y hostelería.",
      "sameAs": []
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      
      <main>
        <HeroPersonal />
        
        {/* Sección 1: Déjame explicarte algo */}
        <StorySection 
          title="Déjame explicarte algo"
          subtitle="Introducción"
        >
          <p>
            Durante mucho tiempo he visto siempre lo mismo en hostelería: agencias prometiendo clientes, influencers cobrando miles de euros por un vídeo y restaurantes que, al final, se quedan igual o peor que antes.
          </p>
          <p>
            No porque el restaurante sea malo, sino porque el planteamiento está mal desde el principio.
          </p>
        </StorySection>

        {/* Sección 2: Lo que te venden */}
        <StorySection 
          title="Lo que te venden no es mentira, pero tampoco es verdad"
          subtitle="La realidad del sector"
          alternate
        >
          <p>
            Seguro que te han dicho alguna vez eso de: "Con nosotros vas a conseguir más clientes".
          </p>
          <p>
            No digo que sea mentira, pero es una frase vacía. Nadie te explica cómo, por qué ni qué pasa después.
          </p>
          <p>
            Y al final el restaurante paga, prueba, se cansa… y llega a la conclusión de que "las redes no funcionan".
          </p>
        </StorySection>

        {/* Sección 3: Por qué me especialicé */}
        <StorySection 
          title="Por qué me especialicé solo en restaurantes"
          subtitle="Mi decisión"
        >
          <p>
            Llegué a un punto en el que entendí una cosa muy simple: o te especializas, o no entiendes nada de verdad.
          </p>
          <p>
            La hostelería no funciona como otros negocios. Un restaurante no vende por anuncios bonitos; vende porque la gente lo ve, se acuerda, le entra hambre y decide ir.
          </p>
          <p>
            Y eso no se consigue con campañas puntuales. Se consigue estando presente.
          </p>
        </StorySection>

        {/* Sección 4: Error de influencers */}
        <StorySection 
          title="El error de depender de influencers"
          subtitle="Crítica constructiva"
          alternate
        >
          <p>
            Hoy muchos restaurantes se llenan porque va un influencer. Pagan 1.500, 2.000 euros. Un vídeo, un pico de gente… ¿y después qué?
          </p>
          <p>
            Mi visión es justo la contraria: que el restaurante no dependa de nadie.
          </p>
          <p>
            Que el propio restaurante sea el que genera contenido, aparece en redes y la gente reconoce.
          </p>
        </StorySection>

        {/* Sección 5: Lo que funciona */}
        <StorySection 
          title="Lo que realmente funciona en redes"
          subtitle="Mi método"
        >
          <p>
            A base de prueba y error empecé a entender algo muy claro: no es solo grabar platos bonitos.
          </p>
          <p>
            Hay que contar historias reales:
          </p>
          <ul className="list-none space-y-2 my-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>De dónde viene un producto</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>Cómo lo trabajáis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>Por qué es especial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">→</span>
              <span>Qué no sabe la gente cuando se lo come</span>
            </li>
          </ul>
          <p>
            Eso es lo que crea comunidad. Y una comunidad es gente que vuelve.
          </p>
        </StorySection>

        {/* Sección 6: París */}
        <StorySection 
          title="París me lo dejó claro"
          subtitle="Una experiencia personal"
          alternate
        >
          <p>
            Hace poco estuve varios días en París.
          </p>
          <p>
            Un par de días decidimos ir a restaurantes y pastelerías muy virales en redes sociales. No exagero: colas de una hora, hora y media, dos horas. Locales llenos, gente esperando.
          </p>
          <p>
            No estaban ahí por casualidad. Estaban ahí porque los habían visto antes.
          </p>
          <p className="font-medium text-foreground">
            Eso fue la prueba definitiva.
          </p>
        </StorySection>

        {/* Sección 7: Las redes posicionan */}
        <StorySection 
          title="Las redes no venden, posicionan"
          subtitle="La diferencia clave"
        >
          <p>
            Las redes sociales no hacen milagros.
          </p>
          <p>
            Pero hacen algo muy poderoso: te colocan en la cabeza de la gente.
          </p>
          <p>
            Cuando alguien piensa "¿Dónde comemos hoy?" y tú llevas meses apareciendo en su Instagram o TikTok, ya has ganado.
          </p>
        </StorySection>

        {/* Sección 8: Constancia */}
        <StorySection 
          title="Esto no va de viralidad, va de constancia"
          subtitle="Mi filosofía"
          alternate
        >
          <p>
            No busco un vídeo viral y desaparecer.
          </p>
          <p>
            Busco que el restaurante esté presente, sea reconocible, tenga una imagen coherente y aporte valor constantemente.
          </p>
          <p className="font-medium text-foreground">
            Eso es lo que convierte un restaurante en referencia local.
          </p>
        </StorySection>

        {/* Sección 9: No trabajo con cualquiera */}
        <StorySection 
          title="Por eso no trabajo con cualquiera"
          subtitle="Mi filtro"
        >
          <p>
            Esto no funciona con todos los restaurantes, y no pasa nada.
          </p>
          <p>
            Para que funcione tiene que haber:
          </p>
          <ul className="list-none space-y-2 my-4">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Buen producto</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Ganas de hacer las cosas bien</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Compromiso real</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">✓</span>
              <span>Constancia</span>
            </li>
          </ul>
          <p>
            Si no hay base, no hay marketing que lo arregle. Prefiero decir que no antes que hacer algo mal.
          </p>
        </StorySection>

        {/* Sección 10: Por qué funciona */}
        <StorySection 
          title="Por qué sé que funciona"
          subtitle="Experiencia propia"
          alternate
        >
          <p>
            Sé que funciona porque ya lo he visto funcionar.
          </p>
          <p>
            Con restaurantes que tenían buen producto y solo necesitaban mostrarse mejor.
          </p>
          <p>
            No se cambia la cocina ni el concepto; se cambia cómo se enseña.
          </p>
          <p className="font-medium text-foreground">
            Y cuando eso pasa, la gente responde.
          </p>
        </StorySection>

        {/* Sección 11: CTA final */}
        <CTASection />
      </main>
      
      <FooterPersonal />
      <CookieConsent />
    </div>
  );
};

export default Index;
