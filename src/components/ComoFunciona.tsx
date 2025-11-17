const ComoFunciona = () => {
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: "1",
      icon: "🔍",
      title: "Identificamos qué está fallando",
      description: "en tu visibilidad online"
    },
    {
      number: "2",
      icon: "💡",
      title: "Te explico en directo cómo solucionarlo",
      description: "sin pagar publicidad"
    },
    {
      number: "3",
      icon: "📊",
      title: "Te llevas un mini-informe",
      description: "que otros restaurantes pagan 200 €"
    }
  ];

  return (
    <section className="py-8 md:py-20 px-4 bg-white reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-[40px] font-semibold text-foreground text-center mb-6 md:mb-12 font-sora">
          3 pasos, <span className="highlight">sin rodeos</span>
        </h2>
        
        {/* Mobile: Horizontal scroll carousel */}
        <div className="md:hidden mb-4">
          <div 
            id="pasos-scroller"
            className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="paso-card flex-shrink-0 w-[70vw] bg-white rounded-xl shadow-sm border border-[#F2F2F2] p-5 snap-center hover:shadow-md transition-all duration-300"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-3xl mb-3 hover:scale-110 transition-transform duration-300">{step.icon}</div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-primary font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Active indicator */}
          <div className="flex justify-center gap-2">
            {steps.map((_, index) => (
              <span 
                key={index} 
                data-step-dot
                className="inline-block w-6 h-1 bg-border rounded-full transition-all duration-200"
              ></span>
            ))}
          </div>
        </div>
        
        {/* Desktop: 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="bg-white rounded-xl shadow-md border border-[#F2F2F2] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-stagger group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm md:text-lg text-muted-foreground mb-6 md:mb-8 font-inter">
          Sin coste. Sin permanencias.
        </p>
        
        <div className="text-center">
          <button
            onClick={scrollToReserva}
            className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-8 md:px-12 h-12 md:h-14 rounded-xl text-base md:text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 hover:scale-[1.02] hover:shadow-md active:scale-[0.99]"
            data-event="click_cta_comofunciona"
          >
            Reservar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
