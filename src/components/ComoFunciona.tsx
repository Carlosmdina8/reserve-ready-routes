const ComoFunciona = () => {
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      number: '1',
      title: 'Agenda tu franja de 15 min',
      description: 'Elige el día y hora que mejor te venga'
    },
    {
      number: '2',
      title: 'Analizamos y te damos el diagnóstico en llamada',
      description: 'Revisamos tu presencia digital durante la llamada'
    },
    {
      number: '3',
      title: 'Recibes un mini-informe con acciones claras',
      description: 'Plan concreto para mejorar tu visibilidad'
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          3 pasos, sin rodeos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xl font-semibold text-foreground mb-8">
          Sin coste. Sin permanencias.
        </p>
        
        <div className="text-center">
          <button
            onClick={scrollToReserva}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4 rounded-[14px] text-lg transition-all duration-300 hover:shadow-glow transform hover:scale-105"
          >
            Reservar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
