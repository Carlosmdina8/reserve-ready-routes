import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const STORAGE_KEY = 'medina_exit_intent_shown';
  const INACTIVITY_TIME = 70000; // 70 seconds

  useEffect(() => {
    // Check if modal was already shown
    if (localStorage.getItem(STORAGE_KEY)) {
      return;
    }

    let inactivityTimer: NodeJS.Timeout;

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem(STORAGE_KEY)) {
        setIsVisible(true);
        localStorage.setItem(STORAGE_KEY, '1');
      }
    };

    // Inactivity detection
    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        if (!localStorage.getItem(STORAGE_KEY)) {
          setIsVisible(true);
          localStorage.setItem(STORAGE_KEY, '1');
        }
      }, INACTIVITY_TIME);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', resetInactivityTimer);
    document.addEventListener('keypress', resetInactivityTimer);
    document.addEventListener('scroll', resetInactivityTimer);
    
    resetInactivityTimer();

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', resetInactivityTimer);
      document.removeEventListener('keypress', resetInactivityTimer);
      document.removeEventListener('scroll', resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md mx-4 p-6 md:p-8 relative animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <span className="text-3xl">📊</span>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2 font-sora">
            ¿Quieres un <span className="highlight">ejemplo real</span>?
          </h3>
          <p className="text-muted-foreground">
            Te enviamos un ejemplo del informe que otros restaurantes reciben
          </p>
        </div>

        <form
          action="https://formsubmit.co/info.contact@medinaagency.es"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="📧 Solicitud de ejemplo de informe" />
          <input type="hidden" name="_next" value="https://medinaagency.lovable.app/gracias" />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label htmlFor="exit-email" className="block text-sm font-medium text-foreground mb-1">
              Email *
            </label>
            <input
              type="email"
              id="exit-email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none transition-all"
              placeholder="tu@email.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold h-12 rounded-xl text-base transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 hover:scale-[1.02] hover:shadow-md active:scale-[0.99]"
          >
            Recibir ejemplo
          </button>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Sin spam. Solo el ejemplo del informe.
        </p>
      </div>
    </div>
  );
};

export default ExitIntentModal;
