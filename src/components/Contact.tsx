import { useState } from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo muy pronto.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      restaurant: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conversemos sobre tu restaurante
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos listos para conocerte y mostrarte el camino más simple para empezar: <strong>Impulso Local</strong>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-radius shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-radius focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-radius focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium text-foreground mb-2">
                    Restaurante
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-radius focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-primary text-primary-foreground py-4 rounded-radius font-semibold hover:shadow-glow transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar mensaje
                </button>
              </form>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-radius shadow-md">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 671 765 373</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-radius shadow-md">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info.contact@medinaagency.es</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-radius shadow-md">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">Trabajamos con restaurantes en toda España</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-primary p-6 rounded-radius shadow-lg">
                <h3 className="font-bold text-primary-foreground mb-2 text-lg">
                  ¿Listo para empezar?
                </h3>
                <p className="text-primary-foreground/90">
                  Con Impulso Local, tu restaurante empezará a ser visible desde el primer día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;