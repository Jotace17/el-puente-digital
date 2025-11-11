import { Button } from "@/components/ui/button";

const KeyAreasSection = () => {
  const keywords = [
    "Liderazgo digital",
    "Inteligencia Artificial aplicada",
    "Branding y Marca personal",
    "Influencia y comunicación",
    "Ventas éticas",
    "Embudos de conversión",
    "Guiones y storytelling",
    "Edición y contenido atractivo",
    "Desarrollo personal",
  ];

  return (
    <section id="areas-clave" className="py-20 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 relative overflow-hidden">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Áreas Clave de Aprendizaje
          </h2>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Domina las competencias que te abrirán camino en el entorno digital.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Nuestro enfoque combina estrategia, creatividad y tecnología para
            construir marcas auténticas y sostenibles.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 animate-float"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${3 + (index % 3)}s`,
              }}
            >
              <span className="text-sm font-medium text-foreground">
                {keyword}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-base px-8">
            Explorar los programas completos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KeyAreasSection;
