import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            {/* Left: Logo + Brand */}
            <div className="flex items-center gap-4">
              <img 
                src="/brand/medina-logo.png" 
                alt="Medina Agency" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-bold text-[#E5E7EB]">
                Medina Agency
              </span>
            </div>
            
            {/* Right: Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="/aviso-legal" 
                className="text-[#E5E7EB]/70 hover:text-[#E5E7EB] transition-colors"
              >
                Aviso legal
              </a>
              <span className="text-[#E5E7EB]/50">·</span>
              <a 
                href="/politica-privacidad" 
                className="text-[#E5E7EB]/70 hover:text-[#E5E7EB] transition-colors"
              >
                Política de privacidad
              </a>
              <span className="text-[#E5E7EB]/50">·</span>
              <a 
                href="/politica-de-cookies" 
                className="text-[#E5E7EB]/70 hover:text-[#E5E7EB] transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
          
          {/* Instagram */}
          <div className="flex justify-center mb-8">
            <a
              href="https://www.instagram.com/medina_agency_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 focus:ring-2 focus:ring-primary/40"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center text-[#E5E7EB]/70 text-sm">
            <p>&copy; {new Date().getFullYear()} Medina Agency. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;