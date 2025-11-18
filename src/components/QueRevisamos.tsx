const QueRevisamos = () => {
  const items = [
    {
      icon: "📍",
      title: "Google Maps",
      highlight: "Maps",
      description: "Posicionamiento y reseñas"
    },
    {
      icon: "🔍",
      title: "Búsquedas locales",
      highlight: "locales",
      description: "Cómo te encuentran tus clientes"
    },
    {
      icon: "📸",
      title: "Fotos y menús",
      highlight: "menús",
      description: "Primera impresión digital"
    },
    {
      icon: "🔗",
      title: "Reservas online",
      highlight: "Reservas",
      description: "Experiencia de usuario"
    },
    {
      icon: "⭐",
      title: "Reseñas",
      highlight: "Reseñas",
      description: "Gestión de reputación"
    },
    {
      icon: "📱",
      title: "Instagram",
      highlight: "Instagram",
      description: "Bio, highlights y últimos posts"
    }
  ];

  return (
    <section id="que-revisamos" className="py-8 md:py-16 px-4 bg-white reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-[40px] font-semibold text-foreground text-center mb-6 md:mb-12 font-sora">
          Esto miramos en tu <span className="highlight">auditoría</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-6">
          {items.map((item, index) => {
            const parts = item.title.split(item.highlight);
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-[#F2F2F2] p-3 md:p-6 hover:shadow-md hover:border-[#FFEEE5] transition-all duration-300 group cursor-pointer"
                style={{ 
                  animation: 'stagger-fade-in 0.5s ease-out forwards',
                  animationDelay: `${index * 0.08}s`,
                  opacity: 0
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-2xl md:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-all duration-300">{item.icon}</div>
                  <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2 leading-tight">
                    {parts[0]}
                    <span className="text-primary group-hover:text-primary">{item.highlight}</span>
                    {parts[1]}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
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
