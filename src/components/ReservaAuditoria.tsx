import { useRef, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const ReservaAuditoria = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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


  useEffect(() => {
    // Listen for Calendly events
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === 'calendly.event_scheduled') {
        window.location.href = '/gracias';
      }
    };
    
    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch('https://formsubmit.co/ajax/info.contact@medinaagency.es', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      // Redirect to /gracias regardless of response
      navigate('/gracias');
    } catch (error) {
      console.error('Form submission error:', error);
      // Still redirect even if there's an error - FormSubmit might have received it
      navigate('/gracias');
    }
  };

  return (
    <section id="reserva" className="py-8 md:py-20 px-4 bg-white reveal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-[40px] font-semibold text-foreground mb-2 md:mb-4 font-sora">
            Reserva tu <span className="highlight">auditoría</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Reserva tu auditoría en un clic
          </p>
        </div>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Calendly Widget - First on mobile */}
          <div className="order-1">
            <div 
              className="calendly-inline-widget rounded-lg overflow-hidden shadow-md border border-border"
              data-url="https://calendly.com/info-contact-medinaagency/30min?hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '760px' }}
              data-event="open_calendly"
            />
          </div>
          
          {/* Formulario Fallback - Second on mobile */}
          <div className="order-2">
            <div className="bg-white rounded-xl shadow-md border border-[#F2F2F2] p-5 md:p-10">
              <h3 className="text-lg md:text-2xl font-semibold text-foreground mb-5 md:mb-8">
                O déjanos tus datos
              </h3>
              
              <form 
                ref={formRef} 
                onSubmit={handleSubmit}
                className="space-y-3 md:space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="📩 Nueva solicitud de Auditoría Digital" />
                <input type="hidden" name="_template" value="table" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 md:px-4 h-11 md:h-12 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 md:px-4 h-11 md:h-12 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 md:px-4 h-11 md:h-12 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-foreground mb-1.5">
                    Restaurante
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    required
                    className="w-full px-3 md:px-4 h-11 md:h-12 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm md:text-base"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:opacity-90 hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] text-primary-foreground font-semibold h-12 md:h-14 rounded-xl text-base md:text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                  data-event="submit_form"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar y agendar'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservaAuditoria;
