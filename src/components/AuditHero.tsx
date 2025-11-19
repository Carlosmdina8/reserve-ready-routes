import { useState, useEffect } from 'react';

const AuditHero = () => {
  const [availableSlots, setAvailableSlots] = useState(5);
  
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
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
        backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[14px]"></div>
      
      {/* Content Card with floating effect */}
      <div className="relative z-10 max-w-4xl mx-auto animate-fade-up">
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[#F2F2F2] p-6 md:p-12 relative pb-24 md:pb-16 hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500"
          style={{
            transform: `translateY(${Math.sin(Date.now() / 1000) * 2}px)`,
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          {/* Logo Badge */}
          <img 
            src="/brand/medina-logo.png" 
            alt="Medina Agency" 
            className="absolute bottom-4 right-4 h-16 w-16 md:bottom-5 md:right-5 md:h-20 md:w-20 rounded-full shadow-md drop-shadow-sm hover:scale-110 transition-transform duration-300"
          />
          
          <div className="text-center md:pr-0">
            {/* Stars */}
            <div className="text-[#FF6A00] text-base md:text-lg mb-1 animate-fade-up" style={{ animationDelay: '0.05s' }}>
              ★★★★★
            </div>
            
            {/* Micro writing */}
            <p className="text-[14px] md:text-[16px] text-muted-foreground mb-3 md:mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Restauradores valoran nuestra auditoría gratuita
            </p>
            
            <h1 className="text-[28px] leading-[1.2] md:text-5xl lg:text-[56px] font-bold text-foreground mb-3 md:mb-6 font-sora animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="highlight">Auditoría Digital</span> Gratuita
            </h1>
            
            <p className="text-base md:text-2xl text-muted-foreground mb-4 md:mb-8 leading-[1.4] md:leading-relaxed animate-fade-up" style={{ animationDelay: '0.3s' }}>
              En <span className="font-inter font-semibold text-foreground">15 minutos</span> detectamos <span className="font-inter font-semibold text-foreground">por qué no te encuentran</span> y te damos un plan para <span className="font-inter font-semibold text-foreground">llenar más mesas</span>. Informe en <span className="font-inter font-semibold text-foreground">24 h</span>.
            </p>
            
            <div className="flex flex-wrap gap-2 md:gap-4 justify-center items-center mb-5 md:mb-8 text-xs md:text-lg text-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <span className="flex items-center gap-1.5 animate-pulse-subtle">
                <span className="text-primary font-bold">✓</span> Sin coste
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="flex items-center gap-1.5 animate-pulse-subtle" style={{ animationDelay: '0.2s' }}>
                <span className="text-primary font-bold">✓</span> Sin permanencias
              </span>
              <span className="text-muted-foreground">·</span>
              <span className="flex items-center gap-1.5 animate-pulse-subtle" style={{ animationDelay: '0.4s' }}>
                <span className="text-primary font-bold">✓</span> Diagnóstico accionable
              </span>
            </div>
            
            {/* Urgency Chip with FOMO */}
            <div className="mb-4 md:mb-6 flex justify-center animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF5EE] rounded-full text-sm border border-primary/20 shadow-sm animate-pulse-glow">
                <span className="text-[#FF6A00] animate-bounce-subtle">⚠️</span>
                <span className="text-foreground">
                  Quedan <strong className="text-[#FF6A00] font-bold">{availableSlots} plazas</strong> esta semana
                </span>
              </div>
            </div>
            
            <button
              onClick={scrollToReserva}
              className="group relative bg-primary hover:opacity-90 text-primary-foreground font-bold px-8 md:px-12 h-12 md:h-14 rounded-xl text-base md:text-lg transition-all duration-300 shadow-lg focus:ring-2 focus:ring-primary/40 hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] active:scale-[0.98] overflow-hidden animate-fade-up"
              data-event="click_cta_hero"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="relative z-10">Agendar auditoría gratis</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
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
