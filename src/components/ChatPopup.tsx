import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ChatPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = 'medina_popup_closed';
  const EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 hours

  useEffect(() => {
    const closedData = localStorage.getItem(STORAGE_KEY);
    if (closedData) {
      const { timestamp } = JSON.parse(closedData);
      const now = Date.now();
      if (now - timestamp < EXPIRY_TIME) {
        return;
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ timestamp: Date.now() }));
  };

  const handleAnalyze = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ timestamp: Date.now() }));
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 animate-fade-up"
    >
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-primary rounded-2xl animate-ping opacity-20"></div>
        
        {/* Main bubble */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-[280px] border-2 border-primary/20">
          <button 
            onClick={handleClose}
            className="absolute top-2 right-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 font-bold text-white text-sm">
              C
            </div>
            <div className="flex-1 pr-4">
              <p className="text-sm text-foreground font-medium mb-1">
                ¿Quieres que revisemos tu restaurante contigo?
              </p>
              <p className="text-xs text-muted-foreground">
                Estoy aquí si necesitas ayuda. — <span className="font-semibold">Carlos</span>
              </p>
            </div>
          </div>
          
          <button
            onClick={handleAnalyze}
            className="w-full bg-primary hover:opacity-90 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Analizar ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
