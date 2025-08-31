import { Award, BarChart3, Users } from 'lucide-react';

const Authority = () => {
  const platforms = ['Google', 'Meta Ads', 'Instagram', 'TripAdvisor'];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Por qué confiar en nosotros
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-background rounded-radius shadow-md">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Especialización
              </h3>
              <p className="text-muted-foreground">
                Nos enfocamos 100% en el sector gastronómico
              </p>
            </div>
            
            <div className="p-6 bg-background rounded-radius shadow-md">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                72%
              </h3>
              <p className="text-muted-foreground">
                de los comensales busca en Google Maps antes de reservar
              </p>
            </div>
            
            <div className="p-6 bg-background rounded-radius shadow-md">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                Resultados
              </h3>
              <p className="text-muted-foreground">
                Clientes satisfechos en toda España
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-primary rounded-radius shadow-md"
              >
                <span className="text-primary-foreground font-semibold">
                  {platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;