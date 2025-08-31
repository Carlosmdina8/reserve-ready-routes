import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Analizamos',
      description: 'tu situación actual'
    },
    {
      icon: Lightbulb,
      title: 'Diseñamos',
      description: 'tu estrategia inicial'
    },
    {
      icon: Rocket,
      title: 'Implementamos',
      description: 'mejoras rápidas (desde Impulso Local)'
    },
    {
      icon: TrendingUp,
      title: 'Escalamos',
      description: 'contigo según tus objetivos'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Cómo trabajamos contigo
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="mb-4 relative">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto shadow-glow">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-[2px] bg-gradient-to-r from-primary to-primary/30" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
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

export default Process;