import { useEffect } from 'react';

const ReservaAuditoria = () => {
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

  return (
    <section id="reserva" className="py-8 md:py-20 px-4 bg-white reveal">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-[40px] font-semibold text-foreground mb-2 md:mb-4 font-sora">
            Reserva tu <span className="highlight">auditoría</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground">
            Reserva tu auditoría en un clic
          </p>
        </div>
        
        <div 
          className="calendly-inline-widget rounded-lg overflow-hidden shadow-md border border-border"
          data-url="https://calendly.com/info-contact-medinaagency/30min?hide_gdpr_banner=1"
          style={{ minWidth: '320px', height: '760px' }}
          data-event="open_calendly"
        />
      </div>
    </section>
  );
};

export default ReservaAuditoria;
