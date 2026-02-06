import { useEffect, useRef } from 'react';
import { Instagram, Globe, Zap } from 'lucide-react';

const servicios = [
  {
    icon: Instagram,
    title: 'Instagram y TikTok',
    description: 'Contenido con intención: ideas, hooks, guiones, formatos y series para que te descubran y te recuerden.',
  },
  {
    icon: Globe,
    title: 'Web / landing',
    description: 'Tu casa digital: que cualquiera entre y entienda en segundos qué haces, para quién y cómo contactarte.',
  },
  {
    icon: Zap,
    title: 'Automatizaciones',
    description: 'Menos caos por dentro: sistemas para ahorrar tiempo, ordenar procesos y escalar sin volverte loco.',
  },
];

const ServiciosSection = () => {
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
    <section id="servicios" ref={sectionRef} className="section-spacing">
      <div className="container-narrow">
        <div className="gradient-line mb-12" />
        
        <h2 className="reveal text-3xl md:text-4xl font-bold text-foreground mb-4">
          Lo que hago <span className="text-muted-foreground font-normal">(en simple)</span>
        </h2>
        
        <p className="reveal text-lg text-muted-foreground mb-12" style={{ transitionDelay: '0.05s' }}>
          Yo no estoy aquí para "subir contenido por subir". Lo que me interesa es montar un sistema para que tu marca se vea seria, se entienda rápido y atraiga clientes.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={servicio.title}
              className="reveal card-dark p-6 hover:border-primary/50 transition-colors"
              style={{ transitionDelay: `${0.1 + index * 0.1}s` }}
            >
              <servicio.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {servicio.title}
              </h3>
              <p className="text-muted-foreground">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
        
        <p className="reveal text-sm text-muted-foreground/70 mt-8 text-center" style={{ transitionDelay: '0.4s' }}>
          Dependiendo del proyecto, esto puede ser 100% remoto o presencial en Alicante.
        </p>
      </div>
    </section>
  );
};

export default ServiciosSection;
