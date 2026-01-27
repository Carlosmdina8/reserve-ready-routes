import { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  alternate?: boolean;
}

const Section = ({ id, children, className = '', alternate = false }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-12 md:py-20 px-4 ${alternate ? 'bg-card' : 'bg-background'} ${className}`}
    >
      <div 
        className={`max-w-3xl mx-auto transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
