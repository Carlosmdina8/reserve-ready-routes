import { MapPin, Crown, Users, Map } from 'lucide-react';

const Method = () => {
  const pillars = [
    {
      number: '1',
      icon: MapPin,
      title: 'Impulso Local',
      description: 'Optimización de perfil (el primer paso)',
      url: 'https://impulsolocal.medinaagency.es'
    },
    {
      number: '2',
      icon: Crown,
      title: 'Servicio Premium',
      description: 'Para restaurantes exigentes',
      url: 'https://premium.medinaagency.es'
    },
    {
      number: '3',
      icon: Users,
      title: 'Mesas Llenas',
      description: 'Sistema de reservas optimizado',
      url: 'https://mesasllenas.medinaagency.es'
    },
    {
      number: '4',
      icon: Map,
      title: 'Tu Restaurante en el Mapa',
      description: 'Visibilidad máxima en tu zona',
      url: 'https://enelmapa.medinaagency.es'
    }
  ];

  return (
    <section id="method" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Nuestro sistema en 4 pilares
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Un sistema diseñado para que un restaurante pase de ser invisible a convertirse en la primera opción de su ciudad. Todo empieza con Impulso Local, el primer paso sencillo y asequible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <a
                  key={index}
                  href={pillar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card/10 backdrop-blur-sm p-6 rounded-radius border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-105 block cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-foreground">
                          {pillar.number}
                        </span>
                      </div>
                      <Icon className="w-6 h-6 text-primary absolute -bottom-1 -right-1 bg-secondary rounded-full p-1" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-foreground mb-2">
                        {pillar.title}
                      </h3>
                      <p className="text-primary-foreground/70">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          
          <div className="text-center">
            <a
              href="https://impulsolocal.medinaagency.es"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-radius text-lg font-semibold hover:shadow-glow transform hover:scale-105 transition-all duration-300 inline-block"
            >
              Empieza con Impulso Local
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;