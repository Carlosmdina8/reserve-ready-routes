import { useEffect, useRef } from 'react';

const ParisSection = () => {
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
    <section id="paris" ref={sectionRef} className="section-spacing">
      <div className="container-narrow">
        <div className="reveal card-dark p-8 md:p-12 relative overflow-hidden">
          {/* Subtle red accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            La duda que tenía… y cómo se me quitó en París
          </h2>
          
          <div className="space-y-5 text-base md:text-lg text-muted-foreground">
            <p>
              En Navidad estuve 9 días en París. Un día mi hermana y yo hicimos plan de "turisturis", pero con una idea: ir a los sitios más{' '}
              <span className="highlight">virales</span> de TikTok.
            </p>
            
            <p>
              Fuimos a la pastelería más viral. Fuimos a un sitio de carne que también era viral… y sinceramente, no tenía nada del otro mundo.
            </p>
            
            <p className="text-foreground">
              ¿Lo que me impactó? Que no vi <span className="highlight">colas</span> fuertes en casi ningún sitio. Excepto justo en esos dos.
            </p>
            
            <p>
              Hice aprox <span className="text-foreground font-semibold">1h 30min de cola para comer</span>, y casi{' '}
              <span className="text-foreground font-semibold">2 horas para comprar unas piezas de fruta</span> de una pastelería.
            </p>
            
            <p>
              No fue por el producto.
            </p>
            
            <p>
              Fue por una cosa: cómo se estaban exponiendo en redes. Mostraban{' '}
              <span className="highlight">procesos</span>, se daban a conocer de forma creativa y la gente iba en masa.
            </p>
            
            <p className="text-foreground font-medium pt-4 border-t border-border/50">
              Ahí llegué a una conclusión: sí, las redes sirven para algo. Y lo que yo hago no es "humo". Es verídico y funcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParisSection;
