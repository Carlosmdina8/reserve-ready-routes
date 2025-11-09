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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Esto miramos en tu auditoría
        </h2>
        
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg text-foreground pt-2">{item.text}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-primary p-8 rounded-[14px] mb-8">
          <p className="text-lg text-primary-foreground leading-relaxed">
            <strong>Entregable:</strong> checklist priorizado + 3 acciones rápidas para esta semana.
          </p>
        </div>
        
        <div className="text-center">
          <button
            onClick={scrollToReserva}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4 rounded-[14px] text-lg transition-all duration-300 hover:shadow-glow transform hover:scale-105"
          >
            Quiero mi auditoría gratis
          </button>
        </div>
      </div>
    </section>
  );
};

export default QueRevisamos;
