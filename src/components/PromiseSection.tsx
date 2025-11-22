import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, RefreshCw, Users } from "lucide-react";

const PromiseSection = () => {
  const promises = [
    {
      icon: Sparkles,
      title: "Claridad en el contenido",
      description:
        "Sin relleno ni teoría innecesaria. Solo lo que realmente necesitas aplicar para obtener resultados concretos.",
    },
    {
      icon: RefreshCw,
      title: "Actualización constante",
      description:
        "El entorno digital cambia rápido. Nuestros programas se actualizan regularmente para mantenerte a la vanguardia.",
    },
    {
      icon: Users,
      title: "Soporte humano y acompañamiento real",
      description:
        "Acceso directo a mentores y comunidad activa para resolver tus dudas y avanzar con confianza.",
    },
  ];

  return (
    <section id="promesa" className="relative py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Promesa</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compromiso real con tu crecimiento profesional y desarrollo digital
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-xl transition-shadow w-[85%] mx-auto md:w-full"
              >
                <CardHeader className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{promise.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {promise.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-navy/5"></div>
    </section>
  );
};

export default PromiseSection;
