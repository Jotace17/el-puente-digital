import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const TestimonialsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Consultora de Marca Personal",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop",
      alt: "Testimonio de Laura Martínez sobre el programa",
    },
    {
      name: "Carlos Ramírez",
      role: "Creador de Contenido",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop",
      alt: "Testimonio de Carlos Ramírez sobre estrategias efectivas",
    },
    {
      name: "Ana Fernández",
      role: "Coach Digital",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop",
      alt: "Testimonio de Ana Fernández sobre acompañamiento",
    },
    {
      name: "Diego Torres",
      role: "Emprendedor Digital",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&auto=format&fit=crop",
      alt: "Testimonio de Diego Torres sobre contenido actualizado",
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
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card 
                  className="overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-md"
                  onClick={() => setSelectedImage(testimonial.image)}
                >
                  <CardContent className="p-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-4 text-center">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
