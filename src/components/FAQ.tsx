import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-muted/5">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-semibold text-foreground text-center mb-8 md:mb-12">
          Preguntas frecuentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          <AccordionItem value="item-1" className="bg-white rounded-xl border border-[#F2F2F2] px-4 md:px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm md:text-base py-3 md:py-4">
              ¿Tiene coste?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm md:text-base">
              No. La auditoría es completamente gratuita y sin compromiso.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-white rounded-xl border border-[#F2F2F2] px-4 md:px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm md:text-base py-3 md:py-4">
              ¿Qué necesito?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm md:text-base">
              Solo el nombre de tu restaurante. Nosotros nos encargamos del resto.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-white rounded-xl border border-[#F2F2F2] px-4 md:px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm md:text-base py-3 md:py-4">
              ¿Cuánto tarda?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm md:text-base">
              15 minutos de llamada y recibes el informe completo en 24 horas.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="bg-white rounded-xl border border-[#F2F2F2] px-4 md:px-6">
            <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline text-sm md:text-base py-3 md:py-4">
              ¿Hay algún compromiso?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm md:text-base">
              Ninguno. Es una auditoría gratuita sin permanencias ni obligaciones.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
