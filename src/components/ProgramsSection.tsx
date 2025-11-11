import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, BarChart } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "Monetización en redes",
      description: "Aprende a crear contenido estratégico que convierta seguidores en clientes, sin perder tu autenticidad.",
      duration: "8 semanas",
      level: "Principiante",
    },
    {
      title: "Marca personal estratégica",
      description: "Construye una identidad digital sólida y diferenciada que atraiga oportunidades de negocio.",
      duration: "6 semanas",
      level: "Intermedio",
    },
    {
      title: "Embudos y automatización",
      description: "Diseña sistemas de venta automatizados que trabajen por ti mientras te enfocas en crear valor.",
      duration: "10 semanas",
      level: "Avanzado",
    },
  ];

  return (
    <section id="programas" className="py-16 md:py-24 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programas y rutas de aprendizaje
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecciona el enfoque que más se adapta a tu etapa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="flex flex-col hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4" />
                    <Badge variant="secondary">{program.level}</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
