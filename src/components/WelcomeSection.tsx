import { Card } from "@/components/ui/card";

const WelcomeSection = () => {
  return (
    <section id="bienvenida" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bienvenida al Puente Digital
          </h2>
        </div>

        {/* Vimeo Visualizer Video */}
        <Card className="overflow-hidden shadow-xl rounded-2xl mb-8">
          <div className="relative aspect-video">
            <iframe
              src="https://player.vimeo.com/video/YOUR_VIMEO_VIDEO_ID?title=0&byline=0&portrait=0"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Visualizer Form"
            />
          </div>
        </Card>

        {/* YouTube Introduction Video */}
        <Card className="overflow-hidden shadow-xl rounded-2xl">
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video de Introducción"
            />
          </div>
        </Card>

        {/* Description */}
        <div className="text-center mt-8">
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            En este video descubrirás el propósito de El Digital Bridge y cómo podemos 
            ayudarte a construir tu camino digital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
