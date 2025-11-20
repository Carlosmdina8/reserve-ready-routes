import { useState, useEffect } from 'react';
import { MapPin, Search, Camera, Link, Star, Instagram } from 'lucide-react';

const QueRevisamos = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const items = [
    {
      icon: MapPin,
      title: "Google Maps y TripAdvisor",
      description: "Ficha completa y optimizada"
    },
    {
      icon: Search,
      title: "Búsquedas de marca y keywords locales",
      description: "Palabras clave que usan tus clientes"
    },
    {
      icon: Camera,
      title: "Fotos, menús y coherencia visual",
      description: "Presencia profesional y atractiva"
    },
    {
      icon: Link,
      title: "Reservas y enlaces rotos",
      description: "Facilidad para que te contacten"
    },
    {
      icon: Star,
      title: "Reseñas y respuestas",
      description: "Gestión de reputación online"
    },
    {
      icon: Instagram,
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 mb-4 md:mb-8">
          {items.map((item, index) => {
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl border transition-all duration-300 p-4 md:p-6 cursor-pointer ${
                  hoveredIndex === index 
                    ? 'border-primary/30 shadow-md' 
                    : 'border-border shadow-sm'
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
                  className={`mb-3 md:mb-4 transition-all duration-300 ${
                    hoveredIndex === index ? 'text-primary scale-105' : 'text-muted-foreground'
                  }`}
                >
                  <item.icon size={28} strokeWidth={1.5} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-primary mb-1 md:mb-2 leading-tight">
                  {item.title}
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
