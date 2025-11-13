import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import founderPhoto from "@/assets/founder-photo.jpg";
import maleFounderPhoto from "@/assets/male-founder-photo.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

interface CoFounderCardProps {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

const CoFounderCard = ({ name, role, photo, bio }: CoFounderCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flex-1 perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-[380px]"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 backface-hidden border border-slate-200 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out overflow-hidden">
          <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-3">
            <img
              src={photo}
              alt={name}
              className="w-[120px] h-[120px] rounded-full object-cover shadow-md mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{name}</h3>
            <p className="text-sm text-slate-500 font-medium">{role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {bio}
            </p>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 backface-hidden border border-primary/30 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 flex flex-col justify-center" style={{ transform: "rotateY(180deg)" }}>
          <div className="text-center space-y-4">
            <img
              src={photo}
              alt={name}
              className="w-[100px] h-[100px] rounded-full object-cover shadow-md mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">{name}</h3>
            <p className="text-primary font-semibold text-sm">{role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {bio}
            </p>
            <p className="text-xs text-muted-foreground/60 mt-6">
              Haz clic para volver
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

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
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Co-founder Card 1 */}
            <CoFounderCard
              name="María González"
              role="Fundadora y Directora"
              photo={founderPhoto}
              bio="Apasionada por el marketing digital, la estrategia de contenido y el desarrollo de negocios digitales. Enfocada en construir procesos claros y sostenibles para creadores y emprendedores."
            />
            
            {/* Co-founder Card 2 */}
            <CoFounderCard
              name="Carlos Rodríguez"
              role="Co-fundador y Estratega"
              photo={maleFounderPhoto}
              bio="Experto en transformación digital y liderazgo. Más de 10 años formando profesionales en estrategia de contenido y monetización ética con enfoque en resultados medibles."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
