
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
    <section id="testimonios" className="relative py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros alumnos
          </h2>
        </div>

        <div className="flex justify-center">
          <div
            className="
              flex 
              flex-wrap 
              justify-center 
              gap-8 
              max-w-5xl 
              mx-auto
            "
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  w-full
                  md:w-[45%]
                  lg:w-[30%]
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-xl mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-[80%] h-auto object-contain rounded-xl shadow-md mx-auto"
                      />
                    </div>
                  </DialogTrigger>

                  <DialogContent className="max-w-4xl">
                    <img
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </DialogContent>
                </Dialog>

                <div className="flex gap-1 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="font-semibold text-lg mb-1">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-navy/5"></div>
    </section>
  );
};

export default TestimonialsSection;
