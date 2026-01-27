import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

const Contacto = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Log form data for debugging
    console.log('Submitting form with data:');
    formData.forEach((value, key) => console.log(`${key}: ${value}`));

    try {
      const response = await fetch('https://formsubmit.co/ajax/info.contact@medinaagency.es', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = await response.json();
      console.log('FormSubmit response:', result);

      if (result.success) {
        navigate('/gracias');
      } else {
        toast.error('Error al enviar. Por favor, inténtalo de nuevo.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error de conexión. Por favor, inténtalo de nuevo.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Volver</span>
        </button>

        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-border">
          <div className="text-center mb-6">
            <img 
              src="/brand/medina-logo.png" 
              alt="Carlos Medina" 
              className="h-12 w-12 rounded-full mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Hablemos
            </h1>
            <p className="text-muted-foreground text-sm">
              Cuéntame un poco sobre tu restaurante y te respondo en menos de 24h
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="📩 Nueva solicitud de contacto - Carlos Medina" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                Nombre
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                required
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                Teléfono
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+34 600 000 000"
                required
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="h-12 rounded-xl"
              />
            </div>

            <div>
              <label htmlFor="restaurant" className="block text-sm font-medium text-foreground mb-1.5">
                Restaurante
              </label>
              <Input
                id="restaurant"
                name="restaurant"
                type="text"
                placeholder="Nombre de tu restaurante"
                required
                className="h-12 rounded-xl"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 rounded-xl text-base font-semibold mt-2"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Al enviar aceptas nuestra{' '}
            <a href="/politica-privacidad" className="text-primary hover:underline">
              política de privacidad
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
