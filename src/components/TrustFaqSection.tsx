import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";

const TrustFaqSection = () => {
  const promises = [
    {
      title: "Claridad en el contenido",
      description: "Sin relleno ni teoría innecesaria. Solo lo que realmente necesitas aplicar.",
    },
    {
      title: "Actualización constante",
      description: "El entorno digital cambia rápido. Nuestros programas se actualizan regularmente.",
    },
    {
      title: "Soporte humano",
      description: "Acceso directo a mentores y comunidad para resolver tus dudas.",
    },
  ];

  const faqs = [
    {
      question: "¿Necesito experiencia previa?",
      answer: "No necesitas experiencia técnica previa. Nuestros programas están diseñados para comenzar desde cero, con explicaciones claras y paso a paso.",
    },
    {
      question: "¿Puedo hacerlo si no soy técnica?",
      answer: "Absolutamente. Enfocamos la enseñanza en estrategia y aplicación práctica, no en complejidad técnica. Las herramientas que usamos son intuitivas y bien explicadas.",
    },
    {
      question: "¿Hay acompañamiento?",
      answer: "Sí. Cada programa incluye sesiones de mentoría, acceso a comunidad privada y soporte por email para resolver dudas específicas de tu caso.",
    },
    {
      question: "¿Recibo material descargable?",
      answer: "Sí. Todos los programas incluyen plantillas, guías descargables, checklists y recursos complementarios que puedes usar incluso después de finalizar.",
    },
    {
      question: "¿Cuánto tiempo necesito dedicarle?",
      answer: "Recomendamos entre 3-5 horas semanales. El contenido es flexible y puedes avanzar a tu ritmo, adaptándolo a tu disponibilidad.",
    },
    {
      question: "¿Ofrecen certificados?",
      answer: "Sí. Al completar un programa recibes un certificado de finalización que puedes compartir en tu perfil profesional.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-section-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Promises */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Nuestra promesa</h2>
            <div className="space-y-6">
              {promises.map((promise, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span>{promise.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground ml-9">
                      {promise.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - FAQ */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Preguntas frecuentes</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFaqSection;
