import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    'Más tranquilidad para ti, menos mesas vacías.',
    'Una marca que inspira confianza y atrae clientes.',
    'Estrategia continua, no improvisación.'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Qué significa trabajar con nosotros
          </h2>
          
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-card rounded-radius shadow-md hover:shadow-lg transition-all duration-300 text-left max-w-3xl mx-auto"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <p className="text-lg text-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;