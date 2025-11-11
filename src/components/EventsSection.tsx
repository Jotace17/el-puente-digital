import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const EventsSection = () => {
  const [email, setEmail] = useState("");

  const events = [
    {
      title: "Masterclass: Primeros pasos en marketing digital",
      date: "15 de Marzo, 2025",
      time: "18:00 - 19:30 GMT-5",
      modality: "Online",
      description: "Aprende los fundamentos para iniciar tu negocio digital de forma efectiva.",
    },
    {
      title: "Workshop: Estrategias de contenido para redes",
      date: "22 de Marzo, 2025",
      time: "17:00 - 20:00 GMT-5",
      modality: "Online",
      description: "Sesión práctica para crear un calendario de contenido que convierta.",
    },
    {
      title: "Sesión de comunidad: Casos de éxito",
      date: "29 de Marzo, 2025",
      time: "19:00 - 20:00 GMT-5",
      modality: "Online",
      description: "Conoce historias reales de alumnos que han logrado sus objetivos.",
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("¡Gracias por suscribirte! Te mantendremos informado.");
      setEmail("");
    }
  };

  return (
    <section id="eventos" className="py-16 md:py-24 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Próximos eventos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Participa en nuestros talleres en vivo, masterclasses y sesiones de comunidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge>{event.modality}</Badge>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {event.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {event.time}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {event.modality}
                </div>
                <Button className="w-full mt-4">Registrarme</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Section */}
        <Card className="max-w-2xl mx-auto bg-card shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">
              ¿No puedes asistir ahora?
            </CardTitle>
            <CardDescription className="text-base">
              Suscríbete y te avisamos de las próximas fechas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit" className="sm:w-auto">
                Suscribirme
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EventsSection;
