import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Consultora de Marca Personal",
      content: "El programa me ayudó a estructurar mi negocio desde cero. En 3 meses ya tenía mi primer cliente recurrente.",
      rating: 5,
    },
    {
      name: "Carlos Ramírez",
      role: "Creador de Contenido",
      content: "Las estrategias son claras y aplicables. No prometen milagros, pero sí resultados si haces el trabajo.",
      rating: 5,
    },
    {
      name: "Ana Fernández",
      role: "Coach Digital",
      content: "Lo que más valoro es el acompañamiento. No te dejan solo con el contenido, siempre hay alguien para resolver dudas.",
      rating: 5,
    },
    {
      name: "Diego Torres",
      role: "Emprendedor Digital",
      content: "Contenido actualizado y sin relleno. Cada módulo te acerca más a tu objetivo de monetización.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros alumnos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm mb-4 text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
