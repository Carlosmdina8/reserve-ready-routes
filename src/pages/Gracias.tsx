import { useEffect } from 'react';
import { Calendar, MessageCircle, CheckCircle2 } from 'lucide-react';

const Gracias = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCalendar = () => {
    // This will be populated with actual calendar event data
    alert('Funcionalidad de calendario próximamente');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hola, he reservado mi auditoría digital. Quiero enviar fotos de mi restaurante.');
    window.open(`https://wa.me/34XXX?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
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
        <div className="max-w-3xl mx-auto">
          {/* Success message */}
          <div className="text-center mb-12 animate-fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-sora">
              ¡Gracias por reservar tu <span className="highlight">auditoría</span>!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Recibirás un email de confirmación en breve
            </p>
          </div>

          {/* Action cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <button
              onClick={handleAddToCalendar}
              className="bg-white border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 text-left group"
            >
              <Calendar className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Añadir al calendario
              </h3>
              <p className="text-muted-foreground">
                No te olvides de tu auditoría digital
              </p>
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-white border-2 border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 text-left group"
            >
              <MessageCircle className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Enviar fotos por WhatsApp
              </h3>
              <p className="text-muted-foreground">
                Adelanta el proceso enviando material
              </p>
            </button>
          </div>

          {/* Checklist */}
          <div className="bg-muted/5 rounded-2xl p-6 md:p-8 mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 font-sora">
              Qué preparar antes de la llamada
            </h2>
            <ul className="space-y-4">
              {[
                'Nombre de tu restaurante (es lo único imprescindible)',
                'Dirección exacta de Google Maps',
                'URL de Instagram si la tienes',
                'Acceso a tu perfil de Google My Business (opcional)',
                'Dudas o preguntas específicas que tengas'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video placeholder */}
          <div className="bg-white border-2 border-border rounded-2xl p-6 md:p-8 text-center">
            <div className="aspect-video bg-muted/10 rounded-xl mb-4 flex items-center justify-center">
              <p className="text-muted-foreground">Vídeo de bienvenida (próximamente)</p>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Mensaje de Carlos
            </h3>
            <p className="text-muted-foreground">
              Un pequeño vídeo para que sepas qué esperar de nuestra llamada
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gracias;
