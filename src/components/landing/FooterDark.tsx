import { Instagram, ExternalLink } from 'lucide-react';

const FooterDark = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-foreground font-semibold mb-1">
              Carlos Medina <span className="text-muted-foreground font-normal">| Marketing e IA</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Alicante
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/marketing_bymedina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@marketing_bymedina</span>
            </a>
            <a
              href="https://medinaagency.es"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">medinaagency.es</span>
            </a>
          </div>
        </div>
        
        <div className="gradient-line mt-8 mb-6" />
        
        <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground/70">
          <a href="/politica-privacidad" className="hover:text-foreground transition-colors">
            Política de privacidad
          </a>
          <span>·</span>
          <a href="/aviso-legal" className="hover:text-foreground transition-colors">
            Aviso legal
          </a>
          <span>·</span>
          <a href="/cookies" className="hover:text-foreground transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterDark;
