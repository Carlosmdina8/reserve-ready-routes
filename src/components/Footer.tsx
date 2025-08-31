import { Facebook, Instagram, Linkedin } from 'lucide-react';

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
              href="#"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:shadow-glow transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary-foreground" />
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