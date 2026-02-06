import { useEffect, useRef } from 'react';
import { Search, Target, Play, RefreshCw } from 'lucide-react';

const pasos = [
  {
    icon: Search,
    title: 'Diagnóstico',
    description: 'Veo tu marca como lo ve un cliente: en 10 segundos.',
  },
  {
    icon: Target,
    title: 'Estrategia',
    description: 'Mensaje claro + oferta clara + objetivo claro.',
  },
  {
    icon: Play,
    title: 'Ejecución',
    description: 'Contenido con sistema + web si hace falta + automatizaciones.',
  },
  {
    icon: RefreshCw,
    title: 'Mejora',
    description: 'Prueba-error, medir y ajustar. Disciplina y constancia.',
  },
];

const ProcesoSection = () => {
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
    <section id="como-trabajo" ref={sectionRef} className="section-spacing bg-card/30">
      <div className="container-narrow">
        <h2 className="reveal text-3xl md:text-4xl font-bold text-foreground mb-12">
          Mi forma de trabajar
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {pasos.map((paso, index) => (
            <div
              key={paso.title}
              className="reveal card-dark p-6 text-center"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <paso.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {paso.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {paso.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="reveal text-center text-lg text-foreground font-medium" style={{ transitionDelay: '0.5s' }}>
          Yo no tiro de motivación. Tiro de <span className="highlight">disciplina</span>.
        </p>
      </div>
    </section>
  );
};

export default ProcesoSection;
