const TrustSection = () => {
  return (
    <section className="py-12 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-lg text-muted-foreground font-medium">
            Restaurantes que ya han pasado por aquí
          </p>
          <div className="flex items-center gap-6 opacity-60">
            <img 
              src="/brand/medina-logo.png" 
              alt="Medina Agency" 
              className="h-8 w-8 rounded-full grayscale"
            />
            <div className="w-20 h-8 bg-muted rounded-lg"></div>
            <div className="w-20 h-8 bg-muted rounded-lg"></div>
            <div className="w-20 h-8 bg-muted rounded-lg"></div>
            <div className="w-20 h-8 bg-muted rounded-lg"></div>
            <div className="w-20 h-8 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
