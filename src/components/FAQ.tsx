import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "¿Tiene coste?",
      answer: "No. La auditoría es completamente gratuita y sin compromiso."
    },
    {
      question: "¿Qué necesito para la llamada?",
      answer: "Solo el nombre de tu restaurante. Nosotros nos encargamos del resto."
    },
    {
      question: "¿Cuánto tarda el informe?",
      answer: "15 minutos de llamada y recibes el informe completo en 24 horas."
    },
    {
      question: "¿Hay compromiso después?",
      answer: "Ninguno. Es una auditoría gratuita sin permanencias ni obligaciones."
    },
    {
      question: "¿Qué revisáis exactamente?",
      answer: "Google Maps, TripAdvisor, búsquedas locales, fotos, menús, reservas, reseñas e Instagram completo."
    },
    {
      question: "¿Incluye revisión de Instagram?",
      answer: "Sí, revisamos bio, highlights y los últimos 9 posts para darte recomendaciones específicas."
    },
    {
      question: "¿Podemos ver ejemplos?",
      answer: "Durante la llamada te mostramos ejemplos reales y comparativas con tu competencia local."
    }
  ];

  return (
    <section className="py-8 md:py-20 px-4 bg-white reveal">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-[40px] font-semibold text-foreground text-center mb-6 md:mb-12 font-sora">
          Preguntas <span className="highlight">frecuentes</span>
        </h2>
        
        {/* Mobile: Grid 2x2 for first 4, then expand for more */}
        <div className="md:hidden grid grid-cols-1 gap-3 mb-4">
          <Accordion type="single" collapsible className="space-y-3">
            {faqData.slice(0, 4).map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white rounded-xl border border-[#F2F2F2] px-4"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm py-3">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Desktop: All questions */}
        <Accordion type="single" collapsible className="hidden md:block space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-white rounded-xl border border-[#F2F2F2] px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-base py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
};

export default FAQ;
