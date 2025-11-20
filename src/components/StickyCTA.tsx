import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Don't show on /gracias page
  const shouldShow = location.pathname !== '/gracias';

  useEffect(() => {
    if (!shouldShow) return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldShow]);

  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible || !shouldShow) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border shadow-lg animate-slide-in-bottom">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <button
          onClick={scrollToReserva}
          className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold h-12 md:h-14 rounded-xl text-base md:text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40 hover:scale-[1.02] hover:shadow-md active:scale-[0.99]"
          data-event="click_sticky_cta"
        >
          Auditoría gratis
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
