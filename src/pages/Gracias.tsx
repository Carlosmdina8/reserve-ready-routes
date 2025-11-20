import { useEffect, useState } from 'react';
import { CheckCircle2, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gracias = () => {
  const [animationDelay, setAnimationDelay] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fire conversion event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_gracias');
    }

    // Trigger animations
    setTimeout(() => setAnimationDelay(true), 50);
  }, []);

  const handleWhatsApp = () => {
    // Track WhatsApp click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'clic_whatsapp_gracias');
    }

    // Preserve UTM parameters if present
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
      .filter(param => urlParams.has(param))
      .map(param => `${param}=${urlParams.get(param)}`)
      .join('&');
    
    const whatsappUrl = `https://wa.me/34671765373?text=${encodeURIComponent('Hola Carlos, acabo de reservar la auditoría gratuita. ¿Algo que deba preparar?')}${utmParams ? '&' + utmParams : ''}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* SEO meta tags */}
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>

      <div className="min-h-screen relative overflow-hidden">
        {/* Blurred background */}
        <div 
          className="fixed inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/assets/maps-calendar-mockup.jpg")',
            filter: 'blur(12px)',
          }}
        />
        <div className="fixed inset-0 -z-10 bg-white/75" />

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 bg-white/95 backdrop-blur-md shadow-sm">
          <div className="container mx-auto px-4 h-full flex items-center">
            <a href="/" className="focus:outline-none focus:ring-2 focus:ring-primary rounded-full">
              <img 
                src="/brand/medina-logo.png" 
                alt="Medina Agency" 
                className="h-8 w-8 md:h-10 md:w-10 rounded-full"
              />
            </a>
          </div>
        </header>

        {/* Content */}
        <main className="pt-20 pb-16 px-4">
          <div className="max-w-2xl mx-auto space-y-6 md:space-y-7">
            {/* Hero */}
            <div 
              className="text-center transition-all duration-500"
              style={{
                opacity: animationDelay ? 1 : 0,
                transform: animationDelay ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: '80ms'
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full mb-4 md:mb-6">
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
                ¡Gracias por reservar tu auditoría!
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Recibirás un email de confirmación en breve
              </p>
            </div>

            {/* Video section */}
            <div 
              className="bg-white rounded-2xl shadow-md p-4 md:p-6 transition-all duration-500"
              style={{
                opacity: animationDelay ? 1 : 0,
                transform: animationDelay ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: '120ms'
              }}
            >
              <div className="relative aspect-video bg-muted/10 rounded-xl mb-3 md:mb-4 flex items-center justify-center group cursor-pointer hover:bg-muted/20 transition-colors">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Vídeo próximamente</p>
                </div>
              </div>
              <p className="text-center text-sm md:text-base text-muted-foreground">
                Qué verás en la llamada y cómo aprovecharla
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div 
              className="transition-all duration-500"
              style={{
                opacity: animationDelay ? 1 : 0,
                transform: animationDelay ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: '160ms'
              }}
            >
              <Button
                onClick={handleWhatsApp}
                className="w-full h-12 md:h-14 text-base md:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-sm relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 rounded-xl transition-transform duration-300 origin-center" />
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Hablar por WhatsApp
              </Button>
              
              <div className="text-center mt-4">
                <a 
                  href="/" 
                  className="text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors"
                >
                  Volver a la página principal
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Gracias;
