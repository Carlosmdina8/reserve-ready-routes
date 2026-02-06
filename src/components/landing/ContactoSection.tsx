import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactoSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info.contact@medinaagency.es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        toast.error('Error al enviar. Por favor, inténtalo de nuevo.');
        setIsSubmitting(false);
      }
    } catch {
      toast.error('Error de conexión. Por favor, inténtalo de nuevo.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" ref={sectionRef} className="section-spacing">
      <div className="container-narrow">
        <div className="gradient-line mb-12" />
        
        <div className="max-w-xl mx-auto">
          <h2 className="reveal text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Si te cuadra mi forma de pensar, hablamos primero
          </h2>
          
          <p className="reveal text-lg text-muted-foreground mb-10 text-center" style={{ transitionDelay: '0.05s' }}>
            Rellena esto y te contacto. Primero escucho tu caso, veo si encaja y seguimos.
          </p>
          
          {isSubmitted ? (
            <div className="reveal card-dark p-8 text-center" style={{ transitionDelay: '0.1s' }}>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Perfecto. Lo tengo.
              </h3>
              <p className="text-muted-foreground">
                Te escribo o te llamo para hablar y ver si encaja.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal card-dark p-6 md:p-8 space-y-5" style={{ transitionDelay: '0.1s' }}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="📩 Nueva solicitud - Carlos Medina" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nombre *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Número de teléfono *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="+34 600 000 000"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Correo *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="proyecto" className="block text-sm font-medium text-foreground mb-2">
                  Empresa / proyecto / idea *
                </label>
                <textarea
                  id="proyecto"
                  name="proyecto"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Cuéntame brevemente qué tienes en mente..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
