import { useState, useEffect } from 'react';

const AuditHero = () => {
  const [availableSlots, setAvailableSlots] = useState(5);
  
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Check for saved slots count
    const saved = localStorage.getItem('availableSlots');
    if (saved) {
      setAvailableSlots(parseInt(saved));
    }
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 py-16 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-[10px]"></div>
      
      {/* Content Card */}
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
        <div className="bg-white rounded-2xl shadow-lg border border-[#F2F2F2] p-6 md:p-12 relative pb-24 md:pb-16">
          {/* Logo Badge */}
          <img 
            src="/brand/medina-logo.png" 
            alt="Medina Agency" 
            className="absolute bottom-4 right-4 h-16 w-16 md:bottom-5 md:right-5 md:h-20 md:w-20 rounded-full shadow-md drop-shadow-sm"
          />
          
          <div className="text-center md:pr-0">
            <h1 className="text-[28px] leading-[1.2] md:text-5xl lg:text-[56px] font-bold text-foreground mb-3 md:mb-6 font-sora">
              <span className="highlight">Auditoría Digital</span> Gratuita
            </h1>
            
            <p className="text-base md:text-2xl text-muted-foreground mb-4 md:mb-8 leading-[1.4] md:leading-relaxed">
              15 minutos para detectar <span className="font-inter font-semibold text-foreground">por qué no te encuentran</span> y cómo llenar más mesas. Informe en 24 h.
            </p>
            
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center mb-5 md:mb-8 text-xs md:text-lg text-foreground">
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
            
            {/* Urgency Chip */}
            <div className="mb-4 md:mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF5EE] rounded-full text-sm">
                <span className="text-[#FF6A00]">⚠️</span>
                <span className="text-foreground">
                  Quedan <strong className="text-[#FF6A00]">{availableSlots} plazas</strong> esta semana
                </span>
              </div>
            </div>
            
            <button
              onClick={scrollToReserva}
              className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-8 md:px-12 h-12 md:h-14 rounded-xl text-base md:text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 hover:scale-[1.02] hover:shadow-md active:scale-[0.99]"
              data-event="click_cta_hero"
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
