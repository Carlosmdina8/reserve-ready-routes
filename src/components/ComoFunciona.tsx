const ComoFunciona = () => {
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="como-funciona" className="py-20 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-foreground text-center mb-16">
          3 pasos, sin rodeos
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-10 rounded-2xl shadow-md border border-[#F2F2F2] text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Agenda tu franja de 15 min
            </h3>
            <p className="text-muted-foreground">
              Elige el mejor momento para ti
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-md border border-[#F2F2F2] text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Analizamos y te damos el diagnóstico en llamada
            </h3>
            <p className="text-muted-foreground">
              Revisión completa de tu presencia digital
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-md border border-[#F2F2F2] text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Recibes un mini-informe con acciones claras
            </h3>
            <p className="text-muted-foreground">
              Plan de acción personalizado en 24 h
            </p>
          </div>
        </div>
        
        <p className="text-center text-lg text-foreground mb-8 font-semibold">
          Sin coste. Sin permanencias.
        </p>
        
        <div className="text-center">
          <button
            onClick={scrollToReserva}
            className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-12 h-14 rounded-xl text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 transform hover:scale-105"
          >
            Reservar ahora
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
