import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Tiene coste?",
      answer: "No. La auditoría digital es completamente gratuita y sin compromiso."
    },
    {
      question: "¿Qué necesito?",
      answer: "Solo el nombre de tu restaurante. Nosotros nos encargamos del resto."
    },
    {
      question: "¿Cuánto tarda?",
      answer: "La llamada dura 15 minutos y recibirás el informe completo en 24 horas."
    },
    {
      question: "¿Hay algún compromiso?",
      answer: "Ninguno. Es una auditoría gratuita para ayudarte a detectar oportunidades de mejora."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Preguntas frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
