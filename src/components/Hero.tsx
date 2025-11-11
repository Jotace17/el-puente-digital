import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-navy pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-navy-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tu puente hacia el crecimiento digital
            </h1>
            <p className="text-lg md:text-xl mb-8 text-navy-foreground/90">
              Formamos creadores, consultores y emprendedores digitales que desean
              monetizar de forma ética, sostenible y con acompañamiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base">
                Explorar programas
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-navy-foreground text-navy-foreground hover:bg-navy-foreground/10"
              >
                Ver próximos eventos
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Plataforma de educación digital"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy/20 hover:bg-navy/10 transition-colors cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-center mt-6 text-navy-foreground/80 text-sm">
              Más de 1.000 alumnos en 10 países
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
