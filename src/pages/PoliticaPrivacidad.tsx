import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";

const PoliticaPrivacidad = () => {
  const isMobile = useIsMobile();
  const [lastUpdated] = useState(new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }));

  useEffect(() => {
    document.title = "Política de Privacidad | Medina Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Política de privacidad de Medina Agency. Información sobre el tratamiento de datos personales conforme al RGPD, tus derechos y cómo ejercerlos.");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://medinaagency.es/politica-privacidad");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://medinaagency.es/politica-privacidad";
      document.head.appendChild(link);
    }
  }, []);

  const sections = [
    { id: "responsable", title: "1. Responsable del tratamiento" },
    { id: "datos", title: "2. Datos que tratamos" },
    { id: "finalidades", title: "3. Finalidades" },
    { id: "base-juridica", title: "4. Base jurídica" },
    { id: "destinatarios", title: "5. Destinatarios/encargados" },
    { id: "transferencias", title: "6. Transferencias internacionales" },
    { id: "plazos", title: "7. Plazos de conservación" },
    { id: "derechos", title: "8. Derechos" },
    { id: "seguridad", title: "9. Seguridad" },
    { id: "menores", title: "10. Menores" },
    { id: "cambios", title: "11. Cambios" },
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
          Política de Privacidad (RGPD)
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
            <SectionContent id="responsable" title="1. Responsable del tratamiento">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Responsable:</strong> {`{{RAZON_SOCIAL}}`} ({`{{NOMBRE_COMERCIAL}}`})</li>
                <li><strong>CIF/NIF:</strong> {`{{CIF_NIF}}`}</li>
                <li><strong>Domicilio:</strong> {`{{DOMICILIO}}`}</li>
                <li><strong>Email:</strong> <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34671765373" className="text-[#FF6A00] hover:underline">+34 671 765 373</a></li>
              </ul>
            </SectionContent>

            <SectionContent id="datos" title="2. Datos que tratamos">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Identificativos y de contacto:</strong> nombre, email, teléfono, restaurante (recogidos en formularios)</li>
                <li><strong>Datos de reserva:</strong> información proporcionada al usar Calendly para agendar la auditoría</li>
                <li><strong>Metadatos técnicos:</strong> dirección IP abreviada, identificador de sesión y otros datos técnicos mínimos necesarios para la seguridad y la analítica básica del sitio</li>
              </ul>
            </SectionContent>

            <SectionContent id="finalidades" title="3. Finalidades">
              <p><strong>a) Atender solicitudes:</strong> Responder a tus consultas y agendar la auditoría digital gratuita.</p>
              <p className="mt-3"><strong>b) Comunicaciones relacionadas:</strong> Enviarte información relacionada con la reserva o el servicio contratado.</p>
              <p className="mt-3"><strong>c) Mejora del sitio:</strong> Realizar análisis y estadísticas para optimizar la experiencia de usuario (analítica).</p>
            </SectionContent>

            <SectionContent id="base-juridica" title="4. Base jurídica">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Consentimiento:</strong> Aceptación de formularios y cookies no esenciales</li>
                <li><strong>Ejecución de contrato/medidas precontractuales:</strong> Agendar y realizar la auditoría solicitada</li>
                <li><strong>Interés legítimo:</strong> Seguridad del sitio y prevención de abusos</li>
              </ul>
            </SectionContent>

            <SectionContent id="destinatarios" title="5. Destinatarios/encargados">
              <p>
                Tus datos pueden ser comunicados a proveedores que nos prestan servicios de infraestructura, agenda y analítica, actuando como encargados del tratamiento (por ejemplo, Calendly para la gestión de citas).
              </p>
              <p className="mt-3">
                Con cada encargado se firma un contrato de encargo de tratamiento conforme al artículo 28 del RGPD. La lista completa de encargados está disponible bajo solicitud a {' '}
                <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a>.
              </p>
            </SectionContent>

            <SectionContent id="transferencias" title="6. Transferencias internacionales">
              <p>
                Si algún proveedor está ubicado fuera del Espacio Económico Europeo (EEE), nos aseguramos de que la transferencia esté cubierta por decisiones de adecuación de la Comisión Europea o por Cláusulas Contractuales Tipo aprobadas.
              </p>
            </SectionContent>

            <SectionContent id="plazos" title="7. Plazos de conservación">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Datos de contacto y agenda:</strong> Durante la relación comercial y hasta 24 meses tras la última interacción, o según obligaciones legales aplicables</li>
                <li><strong>Cookies:</strong> Según la vida útil de cada cookie (consulta nuestra <Link to="/cookies" className="text-[#FF6A00] hover:underline">Política de Cookies</Link>)</li>
              </ul>
            </SectionContent>

            <SectionContent id="derechos" title="8. Derechos">
              <p>Puedes ejercer los siguientes derechos:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Acceso:</strong> Conocer qué datos tratamos sobre ti</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                <li><strong>Oposición:</strong> Oponerte a determinados tratamientos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                <li><strong>Retirada de consentimiento:</strong> Retirar el consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-3">
                Para ejercer tus derechos, escribe a {' '}
                <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a>.
              </p>
              <p className="mt-3">
                También tienes derecho a reclamar ante la Agencia Española de Protección de Datos (AEPD): {' '}
                <a href="https://www.aepd.es" className="text-[#FF6A00] hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>
              </p>
            </SectionContent>

            <SectionContent id="seguridad" title="9. Seguridad">
              <p>
                Adoptamos medidas técnicas y organizativas razonables para proteger tus datos personales frente a accesos no autorizados, pérdida, alteración o divulgación.
              </p>
            </SectionContent>

            <SectionContent id="menores" title="10. Menores">
              <p>
                Nuestro servicio no está dirigido a menores de 14 años. Si tienes conocimiento de que un menor ha facilitado datos sin consentimiento parental, contacta con nosotros para proceder a su eliminación.
              </p>
            </SectionContent>

            <SectionContent id="cambios" title="11. Cambios">
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente. La fecha de última actualización aparece al inicio de este documento. Te recomendamos revisarla de forma regular.
              </p>
            </SectionContent>
          </Accordion>
        ) : (
          <>
            <SectionContent id="responsable" title="1. Responsable del tratamiento">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Responsable:</strong> {`{{RAZON_SOCIAL}}`} ({`{{NOMBRE_COMERCIAL}}`})</li>
                <li><strong>CIF/NIF:</strong> {`{{CIF_NIF}}`}</li>
                <li><strong>Domicilio:</strong> {`{{DOMICILIO}}`}</li>
                <li><strong>Email:</strong> <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a></li>
                <li><strong>Teléfono:</strong> <a href="tel:+34671765373" className="text-[#FF6A00] hover:underline">+34 671 765 373</a></li>
              </ul>
            </SectionContent>

            <SectionContent id="datos" title="2. Datos que tratamos">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Identificativos y de contacto:</strong> nombre, email, teléfono, restaurante (recogidos en formularios)</li>
                <li><strong>Datos de reserva:</strong> información proporcionada al usar Calendly para agendar la auditoría</li>
                <li><strong>Metadatos técnicos:</strong> dirección IP abreviada, identificador de sesión y otros datos técnicos mínimos necesarios para la seguridad y la analítica básica del sitio</li>
              </ul>
            </SectionContent>

            <SectionContent id="finalidades" title="3. Finalidades">
              <p><strong>a) Atender solicitudes:</strong> Responder a tus consultas y agendar la auditoría digital gratuita.</p>
              <p className="mt-3"><strong>b) Comunicaciones relacionadas:</strong> Enviarte información relacionada con la reserva o el servicio contratado.</p>
              <p className="mt-3"><strong>c) Mejora del sitio:</strong> Realizar análisis y estadísticas para optimizar la experiencia de usuario (analítica).</p>
            </SectionContent>

            <SectionContent id="base-juridica" title="4. Base jurídica">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Consentimiento:</strong> Aceptación de formularios y cookies no esenciales</li>
                <li><strong>Ejecución de contrato/medidas precontractuales:</strong> Agendar y realizar la auditoría solicitada</li>
                <li><strong>Interés legítimo:</strong> Seguridad del sitio y prevención de abusos</li>
              </ul>
            </SectionContent>

            <SectionContent id="destinatarios" title="5. Destinatarios/encargados">
              <p>
                Tus datos pueden ser comunicados a proveedores que nos prestan servicios de infraestructura, agenda y analítica, actuando como encargados del tratamiento (por ejemplo, Calendly para la gestión de citas).
              </p>
              <p className="mt-3">
                Con cada encargado se firma un contrato de encargo de tratamiento conforme al artículo 28 del RGPD. La lista completa de encargados está disponible bajo solicitud a {' '}
                <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a>.
              </p>
            </SectionContent>

            <SectionContent id="transferencias" title="6. Transferencias internacionales">
              <p>
                Si algún proveedor está ubicado fuera del Espacio Económico Europeo (EEE), nos aseguramos de que la transferencia esté cubierta por decisiones de adecuación de la Comisión Europea o por Cláusulas Contractuales Tipo aprobadas.
              </p>
            </SectionContent>

            <SectionContent id="plazos" title="7. Plazos de conservación">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Datos de contacto y agenda:</strong> Durante la relación comercial y hasta 24 meses tras la última interacción, o según obligaciones legales aplicables</li>
                <li><strong>Cookies:</strong> Según la vida útil de cada cookie (consulta nuestra <Link to="/cookies" className="text-[#FF6A00] hover:underline">Política de Cookies</Link>)</li>
              </ul>
            </SectionContent>

            <SectionContent id="derechos" title="8. Derechos">
              <p>Puedes ejercer los siguientes derechos:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Acceso:</strong> Conocer qué datos tratamos sobre ti</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                <li><strong>Oposición:</strong> Oponerte a determinados tratamientos</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                <li><strong>Retirada de consentimiento:</strong> Retirar el consentimiento en cualquier momento</li>
              </ul>
              <p className="mt-3">
                Para ejercer tus derechos, escribe a {' '}
                <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a>.
              </p>
              <p className="mt-3">
                También tienes derecho a reclamar ante la Agencia Española de Protección de Datos (AEPD): {' '}
                <a href="https://www.aepd.es" className="text-[#FF6A00] hover:underline" target="_blank" rel="noopener noreferrer">www.aepd.es</a>
              </p>
            </SectionContent>

            <SectionContent id="seguridad" title="9. Seguridad">
              <p>
                Adoptamos medidas técnicas y organizativas razonables para proteger tus datos personales frente a accesos no autorizados, pérdida, alteración o divulgación.
              </p>
            </SectionContent>

            <SectionContent id="menores" title="10. Menores">
              <p>
                Nuestro servicio no está dirigido a menores de 14 años. Si tienes conocimiento de que un menor ha facilitado datos sin consentimiento parental, contacta con nosotros para proceder a su eliminación.
              </p>
            </SectionContent>

            <SectionContent id="cambios" title="11. Cambios">
              <p>
                Podemos actualizar esta Política de Privacidad periódicamente. La fecha de última actualización aparece al inicio de este documento. Te recomendamos revisarla de forma regular.
              </p>
            </SectionContent>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;