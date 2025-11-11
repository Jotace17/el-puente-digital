import { Button } from "@/components/ui/button";

const FinalCta = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-navy">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-foreground">
          ¿Lista para cruzar el puente digital?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-navy-foreground/90 max-w-2xl mx-auto">
          Cuéntanos en qué etapa estás y te recomendamos el programa ideal para ti
        </p>
        <Button size="lg" className="text-base px-8">
          Hablar con nosotros
        </Button>
      </div>
    </section>
  );
};

export default FinalCta;
