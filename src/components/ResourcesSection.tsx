import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import personalbranding from "@/assets/covers/personal-branding.jpg";
import ventasdigitales from "@/assets/covers/ventas-digitales.jpg";


const ResourcesSection = () => {
  const resources = [
    {
      title: "Marca personal",
      description: "Construye tu identidad, tono y estilo para que tu audiencia te reconozca y confíe!",
      image: personalbranding,
    },
    {
      title: "Ventas digitales",
      description: "Convierte seguidores en clientes con embudos, ofertas irresistibles y marca.",
      image: ventasdigitales,
    },
    {
      title: "IA aplicada al contenido",
      description: "Acelera ideas, contenidos y atención usando las herramientas de IA más actuales.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section id="recursos" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conoce nuestros 3 pilares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprende con artículos y guías prácticas de nuestro equipo
          </p>
        </div>

        <div
          className="
            flex 
            flex-wrap 
            justify-center 
            gap-8
          "
        >
          {resources.map((resource, index) => (
            <div
              key={index}
              className="
                w-[85%]
                md:w-[45%]
                lg:w-[30%]
                flex
                justify-center
              "
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group border-0 shadow-md w-full">
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
              </Card>
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-12">
          <Button 
            size="lg" 
            className="text-base px-8"
            onClick={() =>
              (window.location.href =
                "https://shop.beacons.ai/katherinee_ugc/8b96a046-edae-4c3d-a36e-db66d661570e")
              }
          >
            ¡Necesito cruzar el puente!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
