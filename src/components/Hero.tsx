import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-navy pt-20">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-navy-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tu puente hacia el éxito digital
            </h1>
            <p className="text-lg md:text-xl mb-8 text-navy-foreground/90">
              Formamos creadores, consultores y emprendedores digitales que desean
              monetizar de forma ética, sostenible y con acompañamiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base"
                onClick={() =>
                (window.location.href =
                "#programas")
                }
              >
                Explorar programas
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-navy-foreground/10 text-navy-foreground hover:border-navy-foreground/10"
                onClick={() =>
                (window.location.href =
                "#eventos")
                }
              >
                Ver próximos eventos
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
           
          {/* Vimeo Visualizer Video */}
            <Card className="overflow-hidden shadow-xl rounded-2xl mb-8">
              <div className="relative aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1115884764?h=b223b1bd7c&title=0&byline=0&portrait=0&badge=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Visualizer Form"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
