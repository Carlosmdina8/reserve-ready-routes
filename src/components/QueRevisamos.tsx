import { MapPin, Star, Image, Link2, MessageSquare, Instagram } from 'lucide-react';

const QueRevisamos = () => {
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  const items = [
    {
      icon: MapPin,
      text: 'Ficha de Google Maps y TripAdvisor'
    },
    {
      icon: Star,
      text: 'Búsquedas de marca y keywords locales'
    },
    {
      icon: Image,
      text: 'Fotos, menús y coherencia visual'
    },
    {
      icon: Link2,
      text: 'Reservas y enlaces rotos'
    },
    {
      icon: MessageSquare,
      text: 'Reseñas y respuestas'
    },
    {
      icon: Instagram,
      text: 'Instagram: bio, highlights y últimos 9 posts'
    }
  ];

  return (
    <section id="que-revisamos" className="py-8 md:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-[40px] font-semibold text-foreground text-center mb-6 md:mb-12 font-sora">
          Esto miramos en tu <span className="highlight">auditoría</span>
        </h2>
        
        {/* Mobile: 2x3 grid, Desktop: side by side */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-start mb-6 md:mb-12">
          {/* Left: 6 items in compact grid */}
          <div className="bg-white rounded-xl shadow-md border border-[#F2F2F2] p-4 md:p-6">
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg border border-[#E5E7EB] p-3 md:p-5 hover:shadow-sm transition-all animate-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="flex-shrink-0 w-7 h-7 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center hover:rotate-3 transition-transform">
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <p className="text-xs md:text-sm text-foreground font-medium leading-tight">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: What you get - hidden on mobile, shown on desktop */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-[#F2F2F2] p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Checklist priorizado
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Acciones de alto impacto ordenadas por prioridad
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md border border-[#F2F2F2] p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      3 acciones rápidas
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Cambios inmediatos aplicables hoy
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md border border-[#F2F2F2] p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Benchmark local
                    </h3>
                    <p className="text-base text-muted-foreground">
                      Compara tu presencia con la competencia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Urgency band */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-xs md:text-sm">
            <span className="text-foreground font-semibold">Cupo semanal: 8 auditorías</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-primary font-semibold">Aún disponibles hoy</span>
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={scrollToReserva}
            className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-8 md:px-12 h-12 md:h-14 rounded-xl text-base md:text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 hover:scale-[1.02] hover:shadow-md active:scale-[0.99]"
            data-event="click_cta_revisamos"
          >
            Quiero mi auditoría gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default QueRevisamos;
