import { MapPin, Star, Heart, AlertCircle } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: MapPin,
      text: 'Nadie encuentra tu restaurante en Google Maps.'
    },
    {
      icon: Star,
      text: 'TripAdvisor y reseñas dispersas no generan reservas constantes.'
    },
    {
      icon: Heart,
      text: 'Tus redes sociales tienen "likes", pero no clientes reales.'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por qué tu restaurante no está lleno aunque la comida sea excelente
            </h2>
            <AlertCircle className="w-12 h-12 text-primary mx-auto mt-6" />
          </div>
          
          <div className="space-y-6">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-card rounded-radius shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-destructive" />
                    </div>
                  </div>
                  <p className="text-lg text-foreground flex-1">
                    {problem.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;