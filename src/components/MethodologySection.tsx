import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import chart from "@/assets/chart.png";

const MethodologySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const metrics = [
    { label: "Satisfacción", value: 95 },
    { label: "Proyectos completados", value: 82 },
    { label: "Continuidad", value: 88 },
  ];

  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  useEffect(() => {
    if (isInView) {
      metrics.forEach((metric, index) => {
        let startValue = 0;
        const duration = 1500;
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(easeOutQuart * metric.value);
          
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        setTimeout(() => animate(), index * 150);
      });
    }
  }, [isInView]);

  return (
    <section ref={sectionRef} id="metodologia" className="relative py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Metodología y Resultados Reales
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Abstract Illustration */}
          <div className="relative">
              
              <img
                src={chart}
                alt="chart"
                className="w-full max-w-[400px] mx-auto h-auto object-contain rounded-xl shadow-md"
              />
          </div>

          {/* Right Column - Content */}
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Aprendizaje medible y resultados progresivos.
            </motion.h3>
            <motion.p 
              className="text-base text-muted-foreground mb-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Nuestra metodología combina mentorías, retos semanales y proyectos
              prácticos. Más del 80 % de los participantes completan su primer
              proyecto digital antes de finalizar el programa.
            </motion.p>

            <div className="space-y-6 mb-8">
              {metrics.map((metric, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + (index * 0.1), ease: "easeOut" }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-sm font-bold text-primary">
                      {animatedValues[index]}%
                    </span>
                  </div>
                  <Progress value={animatedValues[index]} className="h-2" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
            >
              <Button variant="outline" size="lg">
                Conocer la metodología completa
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-navy/5"></div>
    </section>
  );
};

export default MethodologySection;
