import { ArrowDown } from 'lucide-react';

const HeroDark = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 md:py-32 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/20 pointer-events-none" />
      
      <div className="container-narrow text-center relative z-10">
        <div className="mb-8 animate-fade-up">
          <img 
            src="/brand/carlos-medina.png" 
            alt="Carlos Medina" 
            className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto shadow-xl border-2 border-border object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Ey, soy Carlos.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Tengo 17 años, soy de Alicante y estoy construyendo mi marca personal mientras ayudo a marcas y negocios a crecer con{' '}
          <span className="text-foreground">redes, web y automatizaciones</span>.
        </p>
        
        <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Estudio Hostelería (llevo 2 años y me quedan otros 2) y me formo cada día en la parte digital. Conozco a fondo cómo funcionan las redes y las herramientas para potenciar una empresa. Y sí:{' '}
          <span className="highlight">domino muy bien la Inteligencia Artificial</span>{' '}
          (aunque casi nunca lo digo).
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-up" style={{ animationDelay: '0.25s' }}>
          <button
            onClick={() => scrollToSection('contacto')}
            className="btn-primary text-lg"
          >
            Hablamos primero
          </button>
          <button
            onClick={() => scrollToSection('historia')}
            className="btn-outline text-lg"
          >
            Ver mi historia
          </button>
        </div>
        
        <p className="text-sm text-muted-foreground/60 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Sin promesas raras. Primero te escucho, veo si encaja y te digo claro cómo lo enfocaría.
        </p>
        
        <button 
          onClick={() => scrollToSection('historia')}
          className="mt-16 text-muted-foreground/50 hover:text-primary transition-colors animate-fade-up"
          style={{ animationDelay: '0.35s' }}
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 mx-auto animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroDark;
