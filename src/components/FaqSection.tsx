import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "¿Necesito experiencia previa?",
      answer:
        "No necesitas experiencia técnica previa. Nuestros programas están diseñados para comenzar desde cero, con explicaciones claras y paso a paso.",
    },
    {
      question: "¿Puedo hacerlo si no soy técnica?",
      answer:
        "Absolutamente. Enfocamos la enseñanza en estrategia y aplicación práctica, no en complejidad técnica. Las herramientas que usamos son intuitivas y bien explicadas.",
    },
    {
      question: "¿Hay acompañamiento?",
      answer:
        "Sí. Cada programa incluye sesiones de mentoría, acceso a comunidad privada y soporte por email para resolver dudas específicas de tu caso.",
    },
    {
      question: "¿Recibo material descargable?",
      answer:
        "Sí. Todos los programas incluyen plantillas, guías descargables, checklists y recursos complementarios que puedes usar incluso después de finalizar.",
    },
    {
      question: "¿Cuánto tiempo necesito dedicarle?",
      answer:
        "Recomendamos entre 3-5 horas semanales. El contenido es flexible y puedes avanzar a tu ritmo, adaptándolo a tu disponibilidad.",
    },
    {
      question: "¿Ofrecen certificados?",
      answer:
        "Sí. Al completar un programa recibes un certificado de finalización que puedes compartir en tu perfil profesional.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolvemos tus dudas más comunes sobre nuestros programas
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
