import { useNavigate } from 'react-router-dom';
import Section from './Section';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <Section id="contacto" alternate>
      <div className="text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-sora">
          Si has llegado hasta aquí…
        </h2>
        
        <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-2xl mx-auto">
          <p>
            Si has llegado hasta aquí, seguramente algo de esto te ha resonado.
          </p>
          <p>
            Lo primero no es contratar nada. Lo primero es hablar.
          </p>
          <p>
            Ver en qué punto estás y ver si tiene sentido trabajar juntos.
          </p>
          <p className="font-medium text-foreground">
            Si encajamos, lo hacemos bien. Y si no, no pasa nada.
          </p>
        </div>
        
        <button
          onClick={() => navigate('/contacto')}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-5 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Hablar y ver si encajamos
        </button>
      </div>
    </Section>
  );
};

export default CTASection;
