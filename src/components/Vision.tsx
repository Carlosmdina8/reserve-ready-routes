import { Calendar, Utensils } from 'lucide-react';

const Vision = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8">
            Imagina tu restaurante lleno cada semana
          </h2>
          
          <div className="bg-card/10 backdrop-blur-sm p-8 rounded-radius border border-primary/20 mb-8">
            <div className="flex justify-center gap-4 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <Utensils className="w-8 h-8 text-primary" />
            </div>
            
            <p className="text-lg text-primary-foreground/90 leading-relaxed mb-6">
              Imagina abrir un martes cualquiera y ver todas tus mesas reservadas con antelación.
            </p>
            
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Ese es el impacto de un sistema bien diseñado.
            </p>
          </div>
          
          <button
            onClick={scrollToContact}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-radius text-lg font-semibold hover:shadow-glow transform hover:scale-105 transition-all duration-300"
          >
            Descubre cómo podemos ayudarte
          </button>
        </div>
      </div>
    </section>
  );
};

export default Vision;