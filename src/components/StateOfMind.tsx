const StateOfMind = () => {
  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/90 to-foreground/80"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(17, 17, 17, 0.85) 0%, rgba(17, 17, 17, 0.95) 50%, rgba(17, 17, 17, 0.85) 100%)'
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-lg md:text-2xl lg:text-3xl text-white font-semibold leading-relaxed animate-fade-up">
          Los restaurantes no cierran por falta de clientes. <br className="hidden md:block" />
          Cierran por falta de <span className="highlight text-primary font-bold">VISIBILIDAD</span>.
        </p>
      </div>
    </section>
  );
};

export default StateOfMind;
