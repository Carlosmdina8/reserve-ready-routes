import { TrendingUp, Euro, Zap } from 'lucide-react';

const ImpulsoLocal = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="impulso-local" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Empieza fácil, crece grande
            </h2>
            
            <div className="bg-gradient-primary p-8 rounded-radius shadow-xl">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Impulso Local
              </h3>
              
              <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
                No hace falta empezar por todo el sistema. El primer paso se llama <strong>Impulso Local</strong>: optimizamos tu perfil en Google y TripAdvisor para que los clientes te encuentren de inmediato.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Euro className="w-6 h-6 text-primary-foreground" />
                  <span className="text-2xl font-bold text-primary-foreground">Desde solo 39€</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                  <span className="text-lg text-primary-foreground">Resultados inmediatos</span>
                </div>
              </div>
              
              <p className="text-primary-foreground/90 mb-8">
                Es la manera más rápida y sencilla de comprobar cómo funciona nuestro método.
              </p>
              
              <button
                onClick={scrollToContact}
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-radius text-lg font-semibold hover:opacity-90 transform hover:scale-105 transition-all duration-300"
              >
                Conoce Impulso Local
              </button>
            </div>
            
            <div className="mt-8 p-6 bg-muted rounded-radius">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">
                Después, si quieres seguir creciendo, tienes a tu alcance los demás servicios que completan el sistema.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpulsoLocal;