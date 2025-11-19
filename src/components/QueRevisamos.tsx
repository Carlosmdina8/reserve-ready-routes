import { useState, useEffect } from 'react';

const QueRevisamos = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const items = [
    {
      icon: "🗺️",
      title: "Google Maps y TripAdvisor",
      description: "Ficha completa y optimizada"
    },
    {
      icon: "🔍",
      title: "Búsquedas de marca y keywords locales",
      description: "Palabras clave que usan tus clientes"
    },
    {
      icon: "📸",
      title: "Fotos, menús y coherencia visual",
      description: "Presencia profesional y atractiva"
    },
    {
      icon: "🔗",
      title: "Reservas y enlaces rotos",
      description: "Facilidad para que te contacten"
    },
    {
      icon: "⭐",
      title: "Reseñas y respuestas",
      description: "Gestión de reputación online"
    },
    {
      icon: "📱",
      title: "Instagram: bio, highlights y últimos 9 posts",
      description: "Estrategia de redes sociales"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="que-revisamos" className="py-8 md:py-20 px-4 bg-white reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-[40px] font-semibold text-foreground text-center mb-6 md:mb-12 font-sora">
          Esto miramos en tu <span className="highlight">auditoría</span>
        </h2>
        
        {/* Mobile: 2x3 grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8">
          {items.map((item, index) => {
            const titleWords = item.title.split(' ');
            const highlightIndex = Math.floor(titleWords.length / 2);
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-md border transition-all duration-300 p-3 md:p-6 cursor-pointer ${
                  hoveredIndex === index 
                    ? 'border-[#FFEEE5] shadow-sm' 
                    : 'border-[#F2F2F2]'
                }`}
                style={{ 
                  animationDelay: `${index * 0.08}s`,
                  opacity: 0,
                  animation: 'staggerFadeIn 0.5s ease-out forwards'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div 
                  className={`text-3xl md:text-4xl mb-2 md:mb-3 transition-colors duration-300 ${
                    hoveredIndex === index ? 'text-primary' : ''
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1 md:mb-2 leading-tight">
                  {titleWords.map((word, i) => (
                    <span 
                      key={i}
                      className={i === highlightIndex ? 'text-primary' : ''}
                    >
                      {word}{i < titleWords.length - 1 ? ' ' : ''}
                    </span>
                  ))}
                </h3>
                <p className="text-xs md:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Urgency banner */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/10 rounded-full border border-border">
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Cupo semanal: 8 auditorías</span> · Aún disponibles hoy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueRevisamos;
