const ComoFunciona = () => {
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "1",
      title: "Agenda 15 min",
      description: "Escoge tu horario"
    },
    {
      number: "2",
      title: "Diagnóstico en llamada",
      description: "Revisión en directo"
    },
    {
      number: "3",
      title: "Mini-informe claro",
      description: "Acciones priorizadas"
    }
  ];

  return (
    <section id="como-funciona" className="py-12 md:py-20 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-semibold text-foreground text-center mb-8 md:mb-16">
          3 pasos, sin rodeos
        </h2>
        
        {/* Mobile: horizontal scroll, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory md:snap-none">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-xl shadow-md border border-[#F2F2F2] p-5 md:p-8 min-w-[280px] md:min-w-0 snap-center flex-shrink-0">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 md:mb-6">
                  <span className="text-2xl md:text-3xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-6 md:mb-8">
          <p className="text-base md:text-lg text-muted-foreground font-medium">
            Sin coste. Sin permanencias.
          </p>
        </div>
        
        <div className="text-center">
          <button
            onClick={scrollToReserva}
            className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-8 md:px-12 h-12 md:h-14 rounded-xl text-base md:text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 transform hover:scale-105"
          >
            Reservar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
