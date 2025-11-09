import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-2">
              Medina Agency
            </h3>
            <p className="text-secondary-foreground/80">
              Tu socio digital en el éxito gastronómico
            </p>
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/medina_agency_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
              Aviso legal
            </a>
            <span className="text-secondary-foreground/50">·</span>
            <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
              Política de privacidad
            </a>
            <span className="text-secondary-foreground/50">·</span>
            <a href="#" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
              Cookies
            </a>
          </div>
          
          <div className="text-center text-secondary-foreground/70 text-sm">
            <p>&copy; {new Date().getFullYear()} Medina Agency. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;