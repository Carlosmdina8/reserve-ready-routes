import { useState } from 'react';
import { FileText, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NoGracias = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast({
        title: "✅ Email enviado",
        description: "Recibirás el ejemplo en tu bandeja de entrada",
      });
    }, 500);
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
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <>
              {/* Main message */}
              <div className="text-center mb-12 animate-fade-up">
                <FileText className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4 font-sora">
                  ¿Quieres ver un <span className="highlight">ejemplo real</span>?
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-2">
                  Te envío un informe de muestra para que veas el valor que ofrecemos
                </p>
                <p className="text-sm text-muted-foreground">
                  Sin compromiso. Solo para que sepas qué esperar.
                </p>
              </div>

              {/* Form */}
              <div className="bg-white border-2 border-border rounded-2xl p-6 md:p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 h-12 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Ej: María García"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Tu email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 h-12 bg-white border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:opacity-90 text-white font-semibold h-14 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Recibir ejemplo del informe
                  </button>
                </form>
              </div>

              {/* Secondary CTA */}
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-4">¿Prefieres agendar directamente?</p>
                <a 
                  href="/"
                  className="inline-block text-primary hover:underline font-semibold"
                >
                  Volver a la auditoría gratuita →
                </a>
              </div>
            </>
          ) : (
            <div className="text-center animate-fade-up">
              <div className="bg-primary/5 border-2 border-primary rounded-2xl p-8 md:p-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  ¡Revisa tu email!
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Te hemos enviado un ejemplo real del informe que reciben nuestros clientes
                </p>
                <a 
                  href="/"
                  className="inline-block bg-primary hover:opacity-90 text-white font-semibold px-8 h-12 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md leading-[48px]"
                >
                  Volver al inicio
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default NoGracias;
