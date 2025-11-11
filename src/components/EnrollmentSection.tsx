import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const EnrollmentSection = () => {
  const plans = [
    {
      name: "Plan Individual",
      price: "USD 199",
      description: "Acceso a un curso",
      features: [
        "Material descargable",
        "Acceso a comunidad",
        "Soporte por chat",
        "Certificado de finalización",
      ],
    },
    {
      name: "Plan Profesional",
      price: "USD 499",
      description: "Todos los cursos + mentoría personalizada",
      features: [
        "Acceso ilimitado a todos los cursos",
        "Material descargable",
        "Acceso a comunidad privada",
        "Mentoría personalizada",
        "Soporte prioritario",
        "Certificados de todos los programas",
      ],
      featured: true,
    },
    {
      name: "Plan Empresa",
      price: "Personalizado",
      description: "Licencia para equipos",
      features: [
        "Todo lo del Plan Profesional",
        "Licencias múltiples",
        "Dashboard de equipo",
        "Sesiones grupales exclusivas",
        "Facturación corporativa",
      ],
    },
  ];

  return (
    <section id="inscripcion" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-foreground">
            Únete a El Digital Bridge
          </h2>
          <p className="text-lg text-navy-foreground/90 max-w-2xl mx-auto">
            Accede a todos los programas, mentorías y eventos exclusivos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.featured
                  ? "border-primary border-2 shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Más popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                  size="lg"
                >
                  Registrarme
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-navy-foreground/80">
          ¿Tienes dudas? Contáctanos para recibir una guía personalizada.
        </p>
      </div>
    </section>
  );
};

export default EnrollmentSection;
