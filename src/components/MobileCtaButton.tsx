const MobileCtaButton = () => {
  const scrollToReserva = () => {
    document.getElementById('reserva')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToReserva}
      className="fixed bottom-4 left-4 right-4 z-50 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-[14px] text-lg transition-all duration-300 hover:shadow-glow shadow-xl md:hidden"
    >
      Auditoría gratis
    </button>
  );
};

export default MobileCtaButton;
