const FooterPersonal = () => {
  return (
    <footer className="bg-foreground text-background/80 py-8 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <img 
            src="/brand/medina-logo.png" 
            alt="Carlos Medina" 
            className="h-10 w-10 rounded-full"
          />
          <span className="font-semibold text-background font-sora">Carlos Medina</span>
        </div>
        
        <p className="text-sm text-background/60">
          Marketing gastronómico e inteligencia artificial
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-xs text-background/50">
          <a href="/aviso-legal" className="hover:text-background transition-colors">
            Aviso legal
          </a>
          <a href="/politica-privacidad" className="hover:text-background transition-colors">
            Política de privacidad
          </a>
          <a href="/cookies" className="hover:text-background transition-colors">
            Cookies
          </a>
        </div>
        
        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} Carlos Medina. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterPersonal;
