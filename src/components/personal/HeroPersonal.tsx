import { useNavigate } from 'react-router-dom';

const HeroPersonal = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="min-h-[80vh] flex items-center justify-center px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-8 animate-fade-up">
          <img 
            src="/brand/medina-logo.png" 
            alt="Carlos Medina" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto shadow-lg border-4 border-white"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-sora animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Carlos Medina
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Marketing gastronómico e inteligencia artificial para restaurantes que quieren llenar mesas.
        </p>
        
        <button
          onClick={() => navigate('/contacto')}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          Hablar y ver si encajamos
        </button>
      </div>
    </section>
  );
};

export default HeroPersonal;
