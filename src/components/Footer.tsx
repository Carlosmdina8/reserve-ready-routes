import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="flex items-center gap-2.5 md:gap-3">
            <img 
              src="/brand/medina-logo.png" 
              alt="Medina Agency" 
              className="h-8 w-8 md:h-10 md:w-10 rounded-full"
            />
            <span className="text-lg md:text-xl font-semibold">Medina Agency</span>
          </div>
          
          <nav className="flex flex-wrap gap-4 md:gap-6 justify-center text-sm md:text-base">
            <a 
              href="/aviso-legal" 
              className="text-background/80 hover:text-background transition-colors"
            >
              Aviso legal
            </a>
            <a 
              href="/politica-privacidad" 
              className="text-background/80 hover:text-background transition-colors"
            >
              Política de privacidad
            </a>
            <a 
              href="/politica-de-cookies" 
              className="text-background/80 hover:text-background transition-colors"
            >
              Política de cookies
            </a>
          </nav>
        </div>
        
        <div className="text-center text-background/60 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Medina Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;