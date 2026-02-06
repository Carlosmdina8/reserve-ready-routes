import { useEffect, useRef } from 'react';

const PorQueHablarSection = () => {
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
    <section ref={sectionRef} className="section-spacing">
      <div className="container-narrow">
        <div className="gradient-line mb-12" />
        
        <h2 className="reveal text-3xl md:text-4xl font-bold text-foreground mb-8">
          Por qué primero hablo contigo
        </h2>
        
        <div className="reveal space-y-5 text-lg text-muted-foreground" style={{ transitionDelay: '0.1s' }}>
          <p>
            Si yo trabajara con 15 marcas a la vez, no podría meter{' '}
            <span className="text-foreground">energía real</span> a cada proyecto.
          </p>
          
          <p>
            Yo prefiero pocos proyectos, bien elegidos, y hacerlo de verdad.
          </p>
          
          <p className="text-foreground font-medium">
            Y por eso no te prometo nada desde una web.
          </p>
          
          <p>
            Primero necesito entender tu situación, el problema real y hacia dónde quieres ir.
          </p>
          
          <p>
            Si encaja, te digo claro cómo lo haría. Si no, te lo digo igual de claro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PorQueHablarSection;
