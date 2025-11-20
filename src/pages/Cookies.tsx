import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useIsMobile } from "@/hooks/use-mobile";
const Cookies = () => {
  const isMobile = useIsMobile();
  const [lastUpdated] = useState(new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }));
  useEffect(() => {
    document.title = "Política de Cookies | Medina Agency";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Política de cookies de Medina Agency. Información sobre qué cookies utilizamos, cómo gestionarlas y cómo controlar tu preferencia de privacidad.");
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://medinaagency.es/cookies");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://medinaagency.es/cookies";
      document.head.appendChild(link);
    }
  }, []);
  const sections = [{
    id: "que-son",
    title: "1. ¿Qué son las cookies?"
  }, {
    id: "tipos",
    title: "2. Tipos que usamos"
  }, {
    id: "gestion",
    title: "3. Gestión del consentimiento"
  }, {
    id: "navegador",
    title: "4. Cambiar cookies en el navegador"
  }, {
    id: "tabla",
    title: "5. Cookies que puede instalar el sitio"
  }, {
    id: "mas-info",
    title: "6. Más información"
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };
  const SectionContent = ({
    id,
    title,
    children
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => {
    if (isMobile) {
      return <AccordionItem value={id} className="border-[#E5E7EB]">
          <AccordionTrigger className="text-left font-semibold text-[#111111] hover:text-[#FF6A00] transition-colors">
            {title}
          </AccordionTrigger>
          <AccordionContent className="text-[#6B7280] leading-relaxed">
            {children}
          </AccordionContent>
        </AccordionItem>;
    }
    return <section id={id} className="mb-8 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[#111111] mb-4 font-sora">{title}</h2>
        <div className="text-[#6B7280] leading-relaxed space-y-3">
          {children}
        </div>
      </section>;
  };
  return <div lang="es" className="min-h-screen bg-white">
      <div role="document" className="max-w-[840px] mx-auto px-4 py-12 md:py-16">
        <Link to="/" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#FF6A00] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4 font-sora">
          Política de Cookies
        </h1>
        
        <p className="text-sm text-[#6B7280] mb-8">
          Última actualización: {lastUpdated}
        </p>

        {/* Table of Contents */}
        {!isMobile && <nav className="bg-[#FAFAFA] border border-[#E5E7EB] rounded-xl p-6 mb-12">
            <h2 className="text-lg font-semibold text-[#111111] mb-4 font-sora">Índice</h2>
            <ul className="space-y-2">
              {sections.map(section => <li key={section.id}>
                  <button onClick={() => scrollToSection(section.id)} className="text-[#6B7280] hover:text-[#FF6A00] transition-colors text-left">
                    {section.title}
                  </button>
                </li>)}
            </ul>
          </nav>}

        {/* Content */}
        {isMobile ? <Accordion type="single" collapsible className="space-y-2">
            <SectionContent id="que-son" title="1. ¿Qué son las cookies?">
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Permiten al sitio recordar información sobre tu visita, como tus preferencias de idioma, sesión o configuración, lo que mejora tu experiencia de navegación.
              </p>
            </SectionContent>

            <SectionContent id="tipos" title="2. Tipos que usamos">
              <p>En este sitio web podemos utilizar los siguientes tipos de cookies:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Técnicas/necesarias:</strong> Imprescindibles para el funcionamiento del sitio y para recordar tu configuración de cookies. No puedes desactivarlas.</li>
                <li><strong>Analíticas:</strong> Nos permiten medir y analizar de forma anónima o agrupada el uso del sitio para mejorarlo.</li>
                <li><strong>De preferencias:</strong> Guardan tus opciones (idioma, región, configuración visual, etc.) para ofrecerte una experiencia personalizada.</li>
              </ul>
            </SectionContent>

            <SectionContent id="gestion" title="3. Gestión del consentimiento">
              <p>
                Al acceder por primera vez a nuestro sitio, se te presenta un banner donde puedes elegir entre:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Aceptar:</strong> Autorizas todas las cookies</li>
                <li><strong>Rechazar:</strong> Solo se instalan las cookies técnicas necesarias</li>
                <li><strong>Configurar:</strong> Eliges qué tipos de cookies aceptas</li>
              </ul>
              <p className="mt-3">
                Puedes modificar tu elección en cualquier momento desde el enlace "Configurar cookies" del footer.
              </p>
            </SectionContent>

            <SectionContent id="navegador" title="4. Cambiar cookies en el navegador">
              <p>Puedes configurar o bloquear cookies directamente en tu navegador:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
                <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies</li>
                <li><strong>Edge:</strong> Configuración &gt; Privacidad, búsqueda y servicios &gt; Cookies</li>
              </ul>
              <p className="mt-3 text-sm">
                Ten en cuenta que bloquear todas las cookies puede afectar a la funcionalidad del sitio.
              </p>
            </SectionContent>

            <SectionContent id="tabla" title="5. Cookies que puede instalar el sitio">
              <p className="mb-4">
                A continuación se muestra una tabla editable con las cookies que puede utilizar este sitio. Esta información se completará con los datos específicos de las cookies instaladas.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-[#E5E7EB] text-sm">
                  <thead className="bg-[#FAFAFA]">
                    <tr>
                      <th className="border border-[#E5E7EB] p-3 text-left font-semibold">Nombre</th>
                      <th className="border border-[#E5E7EB] p-3 text-left font-semibold">Tipo</th>
                      <th className="border border-[#E5E7EB] p-3 text-left font-semibold">Proveedor</th>
                      <th className="border border-[#E5E7EB] p-3 text-left font-semibold">Finalidad</th>
                      <th className="border border-[#E5E7EB] p-3 text-left font-semibold">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-[#E5E7EB] p-3">{`{{NOMBRE_COOKIE_1}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{TIPO_1}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{PROVEEDOR_1}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{FINALIDAD_1}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{DURACION_1}}`}</td>
                    </tr>
                    <tr className="bg-[#FAFAFA]">
                      <td className="border border-[#E5E7EB] p-3">{`{{NOMBRE_COOKIE_2}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{TIPO_2}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{PROVEEDOR_2}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{FINALIDAD_2}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{DURACION_2}}`}</td>
                    </tr>
                    <tr>
                      <td className="border border-[#E5E7EB] p-3">{`{{NOMBRE_COOKIE_3}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{TIPO_3}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{PROVEEDOR_3}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{FINALIDAD_3}}`}</td>
                      <td className="border border-[#E5E7EB] p-3">{`{{DURACION_3}}`}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm italic">
                Nota: Esta tabla es editable. Añade o elimina filas según las cookies reales que utilice el sitio.
              </p>
            </SectionContent>

            <SectionContent id="mas-info" title="6. Más información">
              <p>
                Para obtener más información sobre cómo tratamos tus datos personales y cómo ejercer tus derechos, consulta nuestra{' '}
                <Link to="/politica-privacidad" className="text-[#FF6A00] hover:underline">Política de Privacidad</Link>.
              </p>
              <p className="mt-3">
                Si tienes dudas, escríbenos a{' '}
                <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a>.
              </p>
            </SectionContent>
          </Accordion> : <>
            <SectionContent id="que-son" title="1. ¿Qué son las cookies?">
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Permiten al sitio recordar información sobre tu visita, como tus preferencias de idioma, sesión o configuración, lo que mejora tu experiencia de navegación.
              </p>
            </SectionContent>

            <SectionContent id="tipos" title="2. Tipos que usamos">
              <p>En este sitio web podemos utilizar los siguientes tipos de cookies:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Técnicas/necesarias:</strong> Imprescindibles para el funcionamiento del sitio y para recordar tu configuración de cookies. No puedes desactivarlas.</li>
                <li><strong>Analíticas:</strong> Nos permiten medir y analizar de forma anónima o agrupada el uso del sitio para mejorarlo.</li>
                <li><strong>De preferencias:</strong> Guardan tus opciones (idioma, región, configuración visual, etc.) para ofrecerte una experiencia personalizada.</li>
              </ul>
            </SectionContent>

            <SectionContent id="gestion" title="3. Gestión del consentimiento">
              <p>
                Al acceder por primera vez a nuestro sitio, se te presenta un banner donde puedes elegir entre:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Aceptar:</strong> Autorizas todas las cookies</li>
                <li><strong>Rechazar:</strong> Solo se instalan las cookies técnicas necesarias</li>
                <li><strong>Configurar:</strong> Eliges qué tipos de cookies aceptas</li>
              </ul>
              <p className="mt-3">
                Puedes modificar tu elección en cualquier momento desde el enlace "Configurar cookies" del footer.
              </p>
            </SectionContent>

            <SectionContent id="navegador" title="4. Cambiar cookies en el navegador">
              <p>Puedes configurar o bloquear cookies directamente en tu navegador:</p>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li><strong>Chrome:</strong> Configuración &gt; Privacidad y seguridad &gt; Cookies</li>
                <li><strong>Firefox:</strong> Opciones &gt; Privacidad y seguridad &gt; Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies</li>
                <li><strong>Edge:</strong> Configuración &gt; Privacidad, búsqueda y servicios &gt; Cookies</li>
              </ul>
              <p className="mt-3 text-sm">
                Ten en cuenta que bloquear todas las cookies puede afectar a la funcionalidad del sitio.
              </p>
            </SectionContent>

            

            <SectionContent id="mas-info" title="6. Más información">
              <p>
                Para obtener más información sobre cómo tratamos tus datos personales y cómo ejercer tus derechos, consulta nuestra{' '}
                <Link to="/politica-privacidad" className="text-[#FF6A00] hover:underline">Política de Privacidad</Link>.
              </p>
              <p className="mt-3">
                Si tienes dudas, escríbenos a{' '}
                <a href="mailto:info.contact@medinaagency.es" className="text-[#FF6A00] hover:underline">info.contact@medinaagency.es</a>.
              </p>
            </SectionContent>
          </>}
      </div>
      <Footer />
    </div>;
};
export default Cookies;