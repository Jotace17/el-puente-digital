import { Card } from "@/components/ui/card";
import Banderas from "@/assets/Banderas.png";


const WelcomeSection = () => {
  return (
    <section id="bienvenida" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <img
            src={Banderas}
            className="h-[120px] object-cover mx-auto"
          />

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Somos el puente de mas de 1.000 personas al mundo de monetizacion en redes sociales
          </h2>
        </div>

        {/* YouTube Introduction Video */}
        <Card className="overflow-hidden shadow-xl rounded-2xl">
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube.com/embed/093K6UR-x54?autoplay=1&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=093K6UR-x54"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Video de Introducción"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default WelcomeSection;
