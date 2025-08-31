import { Users, Target, Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Quiénes somos
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Somos un equipo joven especializado en marketing gastronómico.
          </p>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Nuestra misión es que cada restaurante local tenga la misma visibilidad digital que una gran cadena, con la cercanía de un socio de confianza.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Creemos en resultados simples, rápidos y accesibles para empezar.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-primary" />
              <span className="text-foreground font-semibold">Equipo Especializado</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              <span className="text-foreground font-semibold">Resultados Medibles</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-foreground font-semibold">Innovación Constante</span>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-gradient-primary rounded-radius shadow-lg inline-block">
            <p className="text-primary-foreground font-bold text-xl">Medina Agency</p>
            <p className="text-primary-foreground/90 mt-2">Fundador: Carlos Medina</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;