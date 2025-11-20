import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

const AvisoLegal = () => {
  const isMobile = useIsMobile();
  const [lastUpdated] = useState(new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }));

  useEffect(() => {
    document.title = "Aviso Legal | Medina Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Aviso legal de Medina Agency. Información sobre el titular del sitio web, condiciones de uso, propiedad intelectual y normativa aplicable.");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://medinaagency.es/aviso-legal");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://medinaagency.es/aviso-legal";
      document.head.appendChild(link);
    }
  }, []);

  const sections = [
    { id: "titular", title: "Titular del sitio" },
    { id: "objeto", title: "Objeto del sitio" },
    { id: "condiciones", title: "Condiciones de uso" },
    { id: "propiedad", title: "Propiedad intelectual e industrial" },
    { id: "enlaces", title: "Enlaces externos" },
    { id: "responsabilidad", title: "Responsabilidad" },
    { id: "datos", title: "Tratamiento de datos" },
    { id: "legislacion", title: "Legislación y fuero" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const SectionContent = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => {
    if (isMobile) {
      return (
        <AccordionItem value={id} className="border-[#E5E7EB]">
          <AccordionTrigger className="text-left font-semibold text-[#111111] hover:text-[#FF6A00] transition-colors">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-[#6B7280] leading-relaxed">
            {children}
          </AccordionContent>
        </AccordionItem>
      );
    }

    return (
      <section id={id} className="mb-8 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#111111] mb-4 font-sora">{title}</h2>
        <div className="text-[#6B7280] leading-relaxed space-y-3">
          {children}
        </div>
      </section>
    );
  };

  return (
    <div lang="es" className="min-h-screen bg-white">
      <div role="document" className="max-w-[840px] mx-auto px-4 py-12 md:py-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#FF6A00] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 font-sora">
          Aviso Legal
        </h1>
        
        <p className="text-sm text-[#6B7280] mb-8">
          Última actualización: {lastUpdated}
        </p>

        {/* Table of Contents */}
        {!isMobile && (
          <nav className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl p-6 mb-12">
            <h2 className="text-lg font-semibold text-[#111111] mb-4 font-sora">Índice</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className="text-[#6B7280] hover:text-[#FF6A00] transition-colors text-left"
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Content */}
        {isMobile ? (
          <Accordion type="single" collapsible className="space-y-2">
            <SectionContent id="titular" title="Titular del sitio">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Titular:</strong> Medina Agency</li>
                <li><strong>Email:</strong> <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34671765373" className="text-[#FF6A00] hover:underline">+34 671 765 373</a></li>
                <li><strong>Dominio:</strong> <a href="https://medinaagency.es" className="text-[#FF6A00] hover:underline" target="_blank" rel="noopener noreferrer">https://medinaagency.es</a></li>
              </ul>
            </SectionContent>

            <SectionContent id="objeto" title="Objeto del sitio">
              <p>
                Este sitio web tiene por objeto ofrecer información y facilitar la reserva de una auditoría digital gratuita para restaurantes, así como presentar los servicios de marketing gastronómico que ofrecemos.
              </p>
            </SectionContent>

            <SectionContent id="condiciones" title="Condiciones de uso">
              <p>
                El acceso y navegación por este sitio implica la aceptación de los términos y condiciones establecidos en este Aviso Legal, así como de la Política de Privacidad y la Política de Cookies.
              </p>
              <p className="mt-3">
                El usuario se compromete a hacer un uso lícito del sitio, a no realizar actividades que puedan dañar la imagen, los intereses o los derechos del titular o de terceros, y a facilitar información veraz y exacta en los formularios.
              </p>
            </SectionContent>

            <SectionContent id="propiedad" title="Propiedad intelectual e industrial">
              <p>
                Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño gráfico, código fuente, etc.) son propiedad de Medina Agency o de sus licenciantes y están protegidos por las leyes de propiedad intelectual e industrial.
              </p>
              <p className="mt-3">
                Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos sin autorización expresa y por escrito del titular.
              </p>
            </SectionContent>

            <SectionContent id="enlaces" title="Enlaces externos">
              <p>
                Este sitio puede contener enlaces a sitios web de terceros (por ejemplo, Calendly, redes sociales). No nos responsabilizamos del contenido, la disponibilidad, las políticas de privacidad o las prácticas de dichos sitios.
              </p>
            </SectionContent>

            <SectionContent id="responsabilidad" title="Responsabilidad">
              <p>
                El titular no garantiza la disponibilidad continua del sitio ni la ausencia de errores en el acceso al mismo o en su contenido.
              </p>
              <p className="mt-3">
                No nos hacemos responsables de los daños que pudieran derivarse del uso indebido del sitio por parte de terceros o de fallos técnicos ajenos a nuestra voluntad.
              </p>
            </SectionContent>

            <SectionContent id="datos" title="Tratamiento de datos">
              <p>
                El tratamiento de los datos personales que el usuario facilite a través de este sitio web se rige por lo establecido en nuestra <Link to="/politica-privacidad" className="text-[#FF6A00] hover:underline">Política de Privacidad</Link>.
              </p>
            </SectionContent>

            <SectionContent id="legislacion" title="Legislación y fuero">
              <p>
                Este Aviso Legal se rige por la normativa española aplicable, en particular por la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
              </p>
              <p className="mt-3">
                Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los tribunales competentes conforme a la legislación española vigente.
              </p>
            </SectionContent>
          </Accordion>
        ) : (
          <>
            <SectionContent id="titular" title="Titular del sitio">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Titular:</strong> Medina Agency</li>
                <li><strong>Email:</strong> <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34671765373" className="text-[#FF6A00] hover:underline">+34 671 765 373</a></li>
                <li><strong>Dominio:</strong> <a href="https://medinaagency.es" className="text-[#FF6A00] hover:underline" target="_blank" rel="noopener noreferrer">https://medinaagency.es</a></li>
              </ul>
            </SectionContent>

            <SectionContent id="objeto" title="Objeto del sitio">
              <p>
                Este sitio web tiene por objeto ofrecer información y facilitar la reserva de una auditoría digital gratuita para restaurantes, así como presentar los servicios de marketing gastronómico que ofrecemos.
              </p>
            </SectionContent>

            <SectionContent id="condiciones" title="Condiciones de uso">
              <p>
                El acceso y navegación por este sitio implica la aceptación de los términos y condiciones establecidos en este Aviso Legal, así como de la Política de Privacidad y la Política de Cookies.
              </p>
              <p className="mt-3">
                El usuario se compromete a hacer un uso lícito del sitio, a no realizar actividades que puedan dañar la imagen, los intereses o los derechos del titular o de terceros, y a facilitar información veraz y exacta en los formularios.
              </p>
            </SectionContent>

            <SectionContent id="propiedad" title="Propiedad intelectual e industrial">
              <p>
                Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño gráfico, código fuente, etc.) son propiedad de Medina Agency o de sus licenciantes y están protegidos por las leyes de propiedad intelectual e industrial.
              </p>
              <p className="mt-3">
                Queda prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos sin autorización expresa y por escrito del titular.
              </p>
            </SectionContent>

            <SectionContent id="enlaces" title="Enlaces externos">
              <p>
                Este sitio puede contener enlaces a sitios web de terceros (por ejemplo, Calendly, redes sociales). No nos responsabilizamos del contenido, la disponibilidad, las políticas de privacidad o las prácticas de dichos sitios.
              </p>
            </SectionContent>

            <SectionContent id="responsabilidad" title="Responsabilidad">
              <p>
                El titular no garantiza la disponibilidad continua del sitio ni la ausencia de errores en el acceso al mismo o en su contenido.
              </p>
              <p className="mt-3">
                No nos hacemos responsables de los daños que pudieran derivarse del uso indebido del sitio por parte de terceros o de fallos técnicos ajenos a nuestra voluntad.
              </p>
            </SectionContent>

            <SectionContent id="datos" title="Tratamiento de datos">
              <p>
                El tratamiento de los datos personales que el usuario facilite a través de este sitio web se rige por lo establecido en nuestra <Link to="/politica-privacidad" className="text-[#FF6A00] hover:underline">Política de Privacidad</Link>.
              </p>
            </SectionContent>

            <SectionContent id="legislacion" title="Legislación y fuero">
              <p>
                Este Aviso Legal se rige por la normativa española aplicable, en particular por la Ley 34/2002 de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
              </p>
              <p className="mt-3">
                Para la resolución de cualquier controversia derivada del acceso o uso de este sitio web, las partes se someten a los tribunales competentes conforme a la legislación española vigente.
              </p>
            </SectionContent>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AvisoLegal;