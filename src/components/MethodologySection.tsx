import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const MethodologySection = () => {
  const metrics = [
    { label: "Satisfacción", value: 95 },
    { label: "Proyectos completados", value: 82 },
    { label: "Continuidad", value: 88 },
  ];

  return (
    <section id="metodologia" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Metodología y Resultados Reales
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Abstract Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.8 }} />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="50" r="25" fill="url(#grad1)" opacity="0.6" />
                <circle cx="60" cy="120" r="30" fill="url(#grad1)" opacity="0.5" />
                <circle cx="140" cy="140" r="35" fill="url(#grad1)" opacity="0.7" />
                <line x1="100" y1="75" x2="80" y2="95" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
                <line x1="100" y1="75" x2="120" y2="115" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
                <line x1="85" y1="135" x2="115" y2="125" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
              </svg>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Aprendizaje medible y resultados progresivos.
            </h3>
            <p className="text-base text-muted-foreground mb-8">
              Nuestra metodología combina mentorías, retos semanales y proyectos
              prácticos. Más del 80 % de los participantes completan su primer
              proyecto digital antes de finalizar el programa.
            </p>

            <div className="space-y-6 mb-8">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-sm font-bold text-primary">
                      {metric.value}%
                    </span>
                  </div>
                  <Progress value={metric.value} className="h-2" />
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg">
              Conocer la metodología completa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
