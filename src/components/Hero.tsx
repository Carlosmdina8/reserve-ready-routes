import { ArrowDown } from 'lucide-react';
import heroImage from '@/assets/maps-calendar-mockup.jpg';

const Hero = () => {
  const scrollToMethod = () => {
    document.getElementById('method')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-light">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Tu restaurante lleno, visible y con reservas cada semana.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Somos Medina Agency, la agencia especializada en restaurantes locales que transforma tu presencia digital en clientes reales.
          </p>
          
          <button
            onClick={scrollToMethod}
            className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-radius text-lg font-semibold hover:shadow-glow transform hover:scale-105 transition-all duration-300 animate-fade-in-delay-2"
          >
            Descubre nuestro sistema
          </button>
        </div>
        
        <div className="mt-12 relative animate-fade-in-delay-3">
          <img
            src={heroImage}
            alt="Google Maps y calendario de reservas"
            className="w-full max-w-4xl mx-auto rounded-radius shadow-xl"
          />
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
      
    </section>
  );
};

export default Hero;