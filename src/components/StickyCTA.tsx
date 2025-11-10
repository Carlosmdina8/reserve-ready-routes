import { useEffect, useState } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg animate-slide-in-bottom">
      <div className="container mx-auto px-4 py-3">
        <button
          onClick={scrollToReserva}
          className="w-full bg-primary hover:opacity-90 text-primary-foreground font-semibold h-14 rounded-xl text-lg transition-all duration-300 shadow-sm focus:ring-2 focus:ring-primary/40"
        >
          Auditoría gratis
        </button>
      </div>
    </div>
  );
};

export default StickyCTA;
