import { useEffect, useRef } from 'react';
import { Eye, TrendingUp, MessageCircle } from 'lucide-react';

const resultados = [
  { icon: Eye, text: 'Más visibilidad entre público joven' },
  { icon: TrendingUp, text: 'Más curiosidad y visitas al perfil' },
  { icon: MessageCircle, text: 'Más "quiero ir" y conversación' },
];

const CasoLoreaSection = () => {
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
    <section id="caso-real" ref={sectionRef} className="section-spacing bg-card/30">
      <div className="container-narrow">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-foreground mb-4">
          Caso real: Lorea
        </h2>
        <p className="reveal text-primary font-medium mb-8" style={{ transitionDelay: '0.05s' }}>
          Tradición + futuro
        </p>
        
        <div className="reveal space-y-5 text-lg text-muted-foreground mb-12" style={{ transitionDelay: '0.1s' }}>
          <p>
            Ahora mismo trabajo con Lorea, un restaurante vasco tradicional en Alicante con más de{' '}
            <span className="text-foreground font-semibold">40 años de historia</span>.
          </p>
          
          <p>
            En verano llegan a vender diariamente{' '}
            <span className="highlight">1000 croquetas de jamón</span> (sin exagerar) y casi no tienen días disponibles.
          </p>
          
          <p>
            Pero tenían un problema: su cliente habitual era gente muy mayor, de toda la vida.
          </p>
          
          <p className="text-foreground">
            Y si eso no se actualiza, el negocio dentro de unos años cae en picado porque ningún joven lo conocería.
          </p>
          
          <p>
            Así que empezamos a trabajar sus redes de la manera correcta: sistemas creativos que llegan a la audiencia necesaria para que estén al día de todo lo que pasa en el restaurante.
          </p>
          
          <p className="font-medium text-foreground">
            Lo más importante: conseguimos que la gente joven vea vídeos del restaurante todas las semanas, y eso les genera curiosidad real por ir a probarlo.
          </p>
        </div>
        
        <div className="reveal card-dark p-6" style={{ transitionDelay: '0.2s' }}>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Resultados visibles
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {resultados.map((resultado) => (
              <div key={resultado.text} className="flex items-center gap-3">
                <resultado.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{resultado.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasoLoreaSection;
