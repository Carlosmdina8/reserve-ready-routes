const AuditHero = () => {
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          Auditoría Digital Gratuita para tu restaurante
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          15 minutos para detectar por qué no te encuentran y cómo llenar más mesas. Informe en 24 h.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 text-lg text-foreground">
          <span className="flex items-center gap-2">
            <span className="text-primary">✓</span> Sin coste
          </span>
          <span className="hidden sm:inline text-muted-foreground">·</span>
          <span className="flex items-center gap-2">
            <span className="text-primary">✓</span> Sin permanencias
          </span>
          <span className="hidden sm:inline text-muted-foreground">·</span>
          <span className="flex items-center gap-2">
            <span className="text-primary">✓</span> Diagnóstico accionable
          </span>
        </div>
        
        <button
          onClick={scrollToReserva}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4 rounded-[14px] text-lg transition-all duration-300 hover:shadow-glow transform hover:scale-105"
        >
          Agendar auditoría gratis
        </button>
        
        <p className="text-sm text-muted-foreground mt-6">
          Al enviar aceptas nuestra{' '}
          <a href="#" className="text-primary hover:underline">
            Política de privacidad
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default AuditHero;
