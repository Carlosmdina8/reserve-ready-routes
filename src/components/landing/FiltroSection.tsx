import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

const siItems = [
  'Marcas serias, con ganas de crecer',
  'Gente dispuesta a aplicar cambios',
  'Negocios que quieren estar al día',
];

const noItems = [
  'Quien busca "un vídeo viral y ya"',
  'Quien quiere resultados sin constancia',
  'Quien no cuida su producto/servicio',
];

const FiltroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-card/30">
      <div className="container-narrow">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-foreground mb-4">
          Con quién sí trabajo <span className="text-muted-foreground font-normal">(y con quién no)</span>
        </h2>
        
        <p className="reveal text-lg text-muted-foreground mb-10" style={{ transitionDelay: '0.05s' }}>
          Los proyectos con más potencial suelen ser marcas personales o negocios con ganas reales de actualizarse.
          <br />
          Pero tengo filtro, y es normal: soy yo solo.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="reveal card-dark p-6 border-l-2 border-l-green-500" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-500" />
              Sí
            </h3>
            <ul className="space-y-3">
              {siItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="reveal card-dark p-6 border-l-2 border-l-primary" style={{ transitionDelay: '0.15s' }}>
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <X className="w-5 h-5 text-primary" />
              No
            </h3>
            <ul className="space-y-3">
              {noItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiltroSection;
