import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'h-11 md:h-14 bg-background/95 backdrop-blur-md shadow-sm' : 'h-14 md:h-16 bg-background/50 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 h-full flex items-center">
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-full transition-transform hover:scale-105"
          aria-label="Volver al inicio"
        >
          <img 
            src="/brand/medina-logo.png" 
            alt="Carlos Medina" 
            className={`transition-all duration-300 rounded-full ${
              isScrolled ? 'h-8 w-8' : 'h-8 w-8 md:h-10 md:w-10'
            }`}
          />
          <span className={`font-sora font-semibold text-foreground transition-all duration-300 ${
            isScrolled ? 'text-sm' : 'text-sm md:text-base'
          }`}>
            Carlos Medina
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
