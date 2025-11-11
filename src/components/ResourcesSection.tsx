import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Tendencias de productos digitales en 2025",
      description: "Descubre qué formatos están generando más resultados en el mercado hispanohablante.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    },
    {
      title: "Cómo iniciar sin mostrar tu cara",
      description: "Estrategias efectivas para construir presencia digital manteniendo tu privacidad.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    },
    {
      title: "IA aplicada al contenido",
      description: "Herramientas y metodologías para crear contenido de calidad con inteligencia artificial.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
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
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group border-0 shadow-md">
              <div className="aspect-video overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
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
