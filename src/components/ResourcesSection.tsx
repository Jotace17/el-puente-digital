import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Tendencias de productos digitales en 2025",
      description: "Descubre qué formatos están generando más resultados en el mercado hispanohablante.",
    },
    {
      title: "Cómo iniciar sin mostrar tu cara",
      description: "Estrategias efectivas para construir presencia digital manteniendo tu privacidad.",
    },
    {
      title: "IA aplicada al contenido",
      description: "Herramientas y metodologías para crear contenido de calidad con inteligencia artificial.",
    },
  ];

  return (
    <section id="recursos" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos y contenidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprende con artículos y guías prácticas de nuestro equipo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow group">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {resource.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group-hover:gap-3 transition-all p-0">
                  Leer más
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
