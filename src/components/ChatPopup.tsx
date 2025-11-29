import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const ChatPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Don't show on /gracias or /contacto pages
  const shouldShow = location.pathname !== '/gracias' && location.pathname !== '/contacto';

  useEffect(() => {
    if (!shouldShow) return;
    
    // Check if user has already interacted
    const hasInteracted = localStorage.getItem('chatPopupInteracted');
    if (hasInteracted) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, [shouldShow]);

  const goToContacto = () => {
    localStorage.setItem('chatPopupInteracted', 'true');
    setIsVisible(false);
    navigate('/contacto');
  };

  const handleClose = () => {
    localStorage.setItem('chatPopupInteracted', 'true');
    setIsVisible(false);
  };

  if (!isVisible || !shouldShow) return null;

  return (
    <>
      {/* Chat bubble */}
      {!isOpen && (
        <div 
          className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 animate-fade-up cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative">
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
            
            {/* Main bubble */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 max-w-[280px] border-2 border-primary/20 group-hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 font-bold text-white">
                  C
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-medium mb-1">
                    ¿Quieres que revisemos tu restaurante contigo?
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Estoy aquí si necesitas ayuda. — <span className="font-semibold">Carlos</span>
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                  aria-label="Cerrar"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              {/* Triangle pointer */}
              <div className="absolute bottom-0 right-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white translate-y-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* Expanded chat */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 animate-fade-up">
          <div className="bg-white rounded-2xl shadow-2xl w-[320px] border border-border overflow-hidden">
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-primary">
                  C
                </div>
                <div>
                  <p className="text-white font-semibold">Carlos</p>
                  <p className="text-white/80 text-xs">Medina Agency</p>
                </div>
              </div>
              <button 
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-sm text-foreground mb-4">
                ¿Quieres que revisemos tu restaurante contigo? Puedo ayudarte ahora mismo.
              </p>
              
              <button
                onClick={goToContacto}
                className="w-full bg-primary hover:opacity-90 hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-sm"
              >
                Analizar ahora
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
