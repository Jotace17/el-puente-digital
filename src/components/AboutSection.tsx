import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quiénes somos</h2>
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

          {/* Right Column - Co-founders */}
          <div className="relative h-[420px] flex items-center justify-center">
            {/* Container for overlapping cards */}
            <div className="relative w-full max-w-md h-full group/cards">
              {/* Card A - Front card initially (will slide back on hover) */}
              <Card className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full p-6 shadow-xl transition-all duration-500 ease-out z-20 group-hover/cards:translate-x-[-calc(50%-16px)] group-hover/cards:translate-y-[-calc(50%-16px)] group-hover/cards:z-10 group-hover/cards:shadow-lg">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <img
                      src={founderPhoto}
                      alt="Co-fundadora de El Digital Bridge"
                      className="w-28 h-28 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">María González</h3>
                  <p className="text-sm text-primary font-medium mb-3">Fundadora y Directora</p>
                  <p className="text-xs text-muted-foreground">
                    Especialista en marketing digital con más de 8 años de experiencia
                    ayudando a emprendedores a construir negocios digitales sostenibles.
                  </p>
                </div>
              </Card>

              {/* Card B - Back card initially (will come to front on hover) */}
              <Card className="absolute top-1/2 left-1/2 translate-x-[-calc(50%-12px)] translate-y-[-calc(50%-12px)] w-full p-6 shadow-lg transition-all duration-500 ease-out z-10 group-hover/cards:-translate-x-1/2 group-hover/cards:-translate-y-1/2 group-hover/cards:z-30 group-hover/cards:shadow-2xl group-hover/cards:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 overflow-hidden rounded-full">
                    <img
                      src={founderPhoto}
                      alt="Co-fundador de El Digital Bridge"
                      className="w-28 h-28 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">Carlos Rodríguez</h3>
                  <p className="text-sm text-primary font-medium mb-3">Co-fundador y Estratega</p>
                  <p className="text-xs text-muted-foreground">
                    Experto en transformación digital y liderazgo con 10 años formando
                    profesionales en estrategia de contenido y monetización ética.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
