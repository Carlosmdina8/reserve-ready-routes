import { useRef, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const ReservaAuditoria = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current!);
    
    try {
      const response = await fetch('https://formsubmit.co/info.contact@medinaagency.es', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        setShowSuccess(true);
        toast({
          title: "✅ Listo",
          description: "Te contactamos hoy para fijar hora.",
        });
        formRef.current?.reset();
        
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Por favor, intenta de nuevo o usa el calendario.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="reserva" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reserva tu auditoría
          </h2>
          <p className="text-lg text-muted-foreground">
            Elige día y hora. Si prefieres, déjanos tus datos y te llamamos.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendly Widget */}
          <div className="order-2 lg:order-1">
            <div 
              className="calendly-inline-widget rounded-lg overflow-hidden shadow-lg border border-border"
              data-url="https://calendly.com/info-contact-medinaagency/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
          
          {/* Formulario Fallback */}
          <div className="order-1 lg:order-2">
            <div className="bg-muted/20 p-8 rounded-[14px] shadow-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                O déjanos tus datos
              </h3>
              
              {showSuccess ? (
                <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    ✅ Listo
                  </p>
                  <p className="text-muted-foreground">
                    Te contactamos hoy para fijar hora.
                  </p>
                </div>
              ) : (
                <form 
                  ref={formRef} 
                  onSubmit={handleSubmit}
                  action="https://formsubmit.co/info.contact@medinaagency.es" 
                  method="POST" 
                  className="space-y-5"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="📩 Nueva solicitud de Auditoría Digital" />
                  <input type="hidden" name="_next" value="https://www.medinaagency.es" />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="restaurant" className="block text-sm font-medium text-foreground mb-2">
                      Restaurante
                    </label>
                    <input
                      type="text"
                      id="restaurant"
                      name="restaurant"
                      required
                      className="w-full px-4 py-3 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-[14px] text-lg transition-all duration-300 hover:shadow-glow"
                  >
                    Enviar y agendar
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservaAuditoria;
