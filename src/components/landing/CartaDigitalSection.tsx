import { useEffect, useRef } from 'react';
import { QrCode } from 'lucide-react';

const CartaDigitalSection = () => {
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
        
        <div className="reveal flex items-start gap-4 mb-8">
          <QrCode className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Una solución simple que cambia la experiencia
          </h2>
        </div>
        
        <div className="reveal space-y-5 text-lg text-muted-foreground" style={{ transitionDelay: '0.1s' }}>
          <p>
            Aplicamos también una carta digital, pero no una cualquiera.
          </p>
          
          <p>
            Lorea está en pleno paseo de la <span className="text-foreground">Playa de San Juan</span>. En verano entra mucha gente de fuera, y la mayoría no conoce platos vascos.
          </p>
          
          <p>
            Con una carta física, muchas veces no saben qué pedir, porque con un nombre no eliges.
          </p>
          
          <p className="text-foreground font-medium">
            Así que hice una carta digital de acompañamiento: con un QR, en un clic ven el nombre del plato y su{' '}
            <span className="highlight">FOTO ORIGINAL</span>, en diferentes idiomas.
          </p>
          
          <p>
            La carta física sigue estando, pero para clientes nuevos o extranjeros esto les da seguridad al pedir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CartaDigitalSection;
