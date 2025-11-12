import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section id="bienvenida" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bienvenida al Puente Digital
          </h2>
        </div>

        {/* Video Container */}
        <Card className="overflow-hidden shadow-xl rounded-2xl">
          <div className="relative aspect-video bg-slate-200 flex items-center justify-center group cursor-pointer hover:bg-slate-300 transition-colors">
            {/* Video Placeholder - Replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-10 w-10 text-white fill-white ml-1" />
              </div>
            </div>
            
            {/* Placeholder text - remove when video is added */}
            <p className="absolute bottom-4 text-sm text-slate-600">
              Video de introducción
            </p>
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
