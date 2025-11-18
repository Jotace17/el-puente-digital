import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import foto_katherine from "@/assets/foto-katy.jpg";
import foto_troy from "@/assets/foto-troy.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CoFounder {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

const coFounders: CoFounder[] = [
  {
    name: "Katherine",
    role: "Fundadora y Directora",
    photo: foto_katherine,
    bio: "Experta en marketing digital y estrategia de contenido.",
  },
  {
    name: "Troy",
    role: "Co-fundador y Estratega",
    photo: foto_troy,
    bio: "Especialista en transformación digital e IA.",
  },
];

const AboutSection = () => {
  const highlights = [
    "Experiencia real en marketing y educación digital",
    "Metodologías aplicadas al mercado hispanohablante",
    "Comunidad y acompañamiento continuo",
  ];

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quiénes somos?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              El Digital Bridge nace de la necesidad de ofrecer formación práctica,
              ética y actualizada para profesionales que quieren monetizar su
              conocimiento en el entorno digital.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Trabajamos con metodologías probadas, enfocadas en resultados reales
              y sostenibles, sin promesas exageradas ni atajos que comprometan tu
              credibilidad.
            </p>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Co-founders Carousel */}
          <div className="relative">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {coFounders.map((founder, index) => (
                  <CarouselItem key={index}>
                    <Card className="border border-border bg-card rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                      <div className="h-[400px] flex flex-col items-center justify-center p-8 text-center space-y-4">
                        <img
                          src={founder.photo}
                          alt={founder.name}
                          className="w-[140px] h-[140px] rounded-full object-cover shadow-md"
                        />
                        <h3 className="text-2xl font-semibold">{founder.name}</h3>
                        <p className="text-sm text-primary font-medium">{founder.role}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                          {founder.bio}
                        </p>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
