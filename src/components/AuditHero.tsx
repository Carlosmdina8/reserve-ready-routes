const AuditHero = () => {
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 py-20 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[10px]"></div>
      
      {/* Content Card */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-[#F2F2F2] p-6 md:p-16 relative pb-20 md:pb-16">
          {/* Logo Badge - moved to avoid overlap */}
          <img 
            src="/brand/medina-logo.png" 
            alt="Medina Agency" 
            className="absolute bottom-4 right-4 h-12 w-12 md:bottom-5 md:right-5 md:h-20 md:w-20 rounded-full shadow-md"
          />
          
          <div className="text-center pr-16 md:pr-0">
            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-foreground mb-4 md:mb-6 leading-tight">
              Auditoría Digital Gratuita para tu restaurante
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              15 minutos para detectar por qué no te encuentran y cómo llenar más mesas. Informe en 24 h.
            </p>
            
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center mb-6 md:mb-10 text-sm md:text-lg text-foreground">
              <span className="flex items-center gap-1.5">
                <span className="text-primary font-bold">✓</span> Sin coste
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-primary font-bold">✓</span> Sin permanencias
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="flex items-center gap-1.5">
                <span className="text-primary font-bold">✓</span> Diagnóstico accionable
              </span>
            </div>
            
            <button
              onClick={scrollToReserva}
              className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-8 md:px-12 h-12 md:h-14 rounded-xl text-base md:text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 transform hover:scale-105"
            >
              Agendar auditoría gratis
            </button>
            
            <p className="text-xs md:text-[13px] text-muted-foreground mt-4 md:mt-6">
              Al enviar aceptas nuestra{' '}
              <a href="/politica-privacidad" className="text-primary hover:underline">
                Política de privacidad
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditHero;
