import { useEffect, useRef } from 'react';

const HistoriaSection = () => {
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
    <section id="historia" ref={sectionRef} className="section-spacing">
      <div className="container-narrow">
        <div className="gradient-line mb-12" />
        
        <h2 className="reveal text-3xl md:text-4xl font-bold text-foreground mb-8">
          Por qué empecé con esto tan joven
        </h2>
        
        <div className="reveal space-y-6 text-lg text-muted-foreground" style={{ transitionDelay: '0.1s' }}>
          <p>
            Me daba rabia ver lo típico: negocios buenísimos que por fuera parecen{' '}
            <span className="text-foreground">"uno más"</span>. Y hoy, si no te sabes mostrar bien, la gente ni se entera de lo que vales.
          </p>
          
          <p className="text-foreground font-medium">
            Yo no creo en la motivación. La motivación va y viene.
          </p>
          
          <p>
            Yo creo en <span className="highlight">disciplina y constancia</span> hasta conseguir el objetivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistoriaSection;
