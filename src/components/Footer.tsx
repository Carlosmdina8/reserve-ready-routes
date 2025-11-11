import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#E5E7EB] py-6 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 mb-4 md:mb-8">
          <div className="flex items-center gap-3">
            <img 
              src="/brand/medina-logo.png" 
              alt="Medina Agency" 
              className="h-10 w-10 rounded-full"
            />
            <span className="text-base md:text-lg font-semibold font-sora">Medina Agency</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-base">
            <a 
              href="/aviso-legal" 
              className="hover:text-white transition-colors"
            >
              Aviso legal
            </a>
            <a 
              href="/politica-privacidad" 
              className="hover:text-white transition-colors"
            >
              Política de privacidad
            </a>
            <a 
              href="/politica-de-cookies" 
              className="hover:text-white transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
        
        <div className="text-center text-xs md:text-sm text-[#9CA3AF]">
          <p>&copy; {new Date().getFullYear()} Medina Agency. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;