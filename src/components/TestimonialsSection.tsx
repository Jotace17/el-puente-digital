import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Star } from "lucide-react";

import testimonio_hellen from "@/assets/testimonios/testimonio-hellen-digital.jpeg";
import testimonio_marketea from "@/assets/testimonios/testimonio-marketeamama.jpeg";
import testimonio_maria from "@/assets/testimonios/testimonio-maria-hernandez.jpeg";


const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "María Hernandez",
      role: "Consultora de Marca Personal",
      rating: 5,
      image: testimonio_maria,
      alt: "Testimonio de Maria hernandez sobre el programa",
    },
    {
      name: "Marketeamama",
      role: "Coach Digital",
      rating: 5,
      image: testimonio_marketea,
      alt: "Testimonio de Marketeamama sobre estrategias efectivas",
    },
    {
      name: "Hellen Digital",
      role: "Creadora de Contenido",
      rating: 5,
      image: testimonio_hellen,
      alt: "Testimonio de Hellen sobre acompañamiento",
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
            <Card key={index} className="overflow-hidden shadow-md">
              <CardContent className="p-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full h-48 object-cover rounded-xl shadow-md"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-auto rounded-xl"
                    />
                  </DialogContent>
                </Dialog>

                <div className="flex gap-1 mt-3 mb-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="font-semibold text-lg mb-1">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
