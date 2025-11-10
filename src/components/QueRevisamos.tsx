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
    <section id="que-revisamos" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-[40px] font-semibold text-foreground text-center mb-16">
          Qué te llevas en 24 h
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Benefits */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md border border-[#F2F2F2] p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Checklist priorizado
                  </h3>
                  <p className="text-muted-foreground">
                    Acciones de alto impacto ordenadas por prioridad
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md border border-[#F2F2F2] p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    3 acciones rápidas para esta semana
                  </h3>
                  <p className="text-muted-foreground">
                    Cambios inmediatos que puedes aplicar hoy mismo
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md border border-[#F2F2F2] p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Benchmark local básico
                  </h3>
                  <p className="text-muted-foreground">
                    Compara tu presencia digital con la competencia
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Mockup */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl border border-[#F2F2F2] p-8 w-full max-w-md">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary/5 to-primary/20 rounded-lg flex flex-col items-center justify-center p-8 border-2 border-primary/20">
                <img 
                  src="/brand/medina-logo.png" 
                  alt="Medina Agency" 
                  className="h-20 w-20 rounded-full mb-6 shadow-md"
                />
                <h4 className="text-2xl font-bold text-foreground text-center mb-2">
                  Auditoría Digital
                </h4>
                <p className="text-sm text-muted-foreground text-center mb-6">
                  Medina Agency
                </p>
                <div className="w-full space-y-3">
                  <div className="h-3 bg-primary/30 rounded-full w-full"></div>
                  <div className="h-3 bg-primary/30 rounded-full w-5/6"></div>
                  <div className="h-3 bg-primary/30 rounded-full w-4/6"></div>
                  <div className="h-3 bg-primary/30 rounded-full w-full mt-6"></div>
                  <div className="h-3 bg-primary/30 rounded-full w-5/6"></div>
                  <div className="h-3 bg-primary/30 rounded-full w-3/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Urgency band */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 text-center">
          <p className="text-lg text-foreground">
            <span className="font-semibold">Cupo semanal: 8 auditorías</span>
            <span className="text-muted-foreground mx-2">·</span>
            <span className="text-primary font-semibold">Aún disponibles hoy</span>
          </p>
        </div>
        
        <div className="text-center">
          <button
            onClick={scrollToReserva}
            className="bg-primary hover:opacity-90 text-primary-foreground font-semibold px-12 h-14 rounded-xl text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 transform hover:scale-105"
          >
            Quiero mi auditoría gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default QueRevisamos;
