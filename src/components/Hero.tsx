import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-navy pt-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="hero-pattern" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-navy-foreground">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Tu puente hacia el éxito digital
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl mb-8 text-navy-foreground/90"
            >
              Formamos creadores, consultores y emprendedores digitales que desean
              monetizar de forma ética, sostenible y con acompañamiento.
            </motion.p>
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
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative"
          >
            <Card className="overflow-hidden shadow-xl rounded-2xl mb-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
