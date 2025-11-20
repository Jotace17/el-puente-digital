import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const GrowthStatsSection = () => {
  const [displayNumber, setDisplayNumber] = useState("000.000");
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCash, setShowCash] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isAnimating) {
      setIsAnimating(true);
      
      // Shuffle animation
      const duration = 1500;
      const startTime = Date.now();
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        
        if (elapsed < duration) {
          // Random digits during shuffle
          const randomNum = Math.floor(Math.random() * 999999);
          setDisplayNumber(randomNum.toString().padStart(6, "0").replace(/(\d{3})(\d{3})/, "$1.$2"));
        } else {
          // Final value
          setDisplayNumber("300.000");
          clearInterval(interval);
          // Trigger cash animation after number stops
          setTimeout(() => setShowCash(true), 200);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isInView, isAnimating]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-background to-slate-50 overflow-hidden"
    >
      {/* Cash Animation Elements */}
      {showCash && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl pointer-events-none"
              initial={{ 
                opacity: 0,
                x: i % 2 === 0 ? -100 : window.innerWidth + 100,
                y: Math.random() * 200 + 100,
                rotate: Math.random() * 360
              }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                x: i % 2 === 0 ? window.innerWidth + 100 : -100,
                y: Math.random() * 300 + 150,
                rotate: Math.random() * 720
              }}
              transition={{
                duration: 2,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            >
              💵
            </motion.div>
          ))}
        </>
      )}

      <div className="max-w-4xl mx-auto px-4">
        {/* Animated 3D Number */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground relative"
            style={{
              textShadow: `
                2px 2px 0 hsl(var(--primary) / 0.3),
                4px 4px 0 hsl(var(--primary) / 0.2),
                6px 6px 0 hsl(var(--primary) / 0.1),
                8px 8px 20px hsl(var(--primary) / 0.15)
              `,
              transform: "translateZ(20px)"
            }}
          >
            {displayNumber}
          </h2>
          <p className="mt-2 text-lg md:text-xl text-muted-foreground font-medium">
            dólares en 1 año
          </p>
        </motion.div>

        {/* Supporting Text with Animation */}
        <motion.div
          className="max-w-3xl mx-auto mt-10 space-y-4 text-lg md:text-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
        >
          <p className="text-center md:text-left text-foreground font-semibold">
            💰 207 millones de personas ya monetizan su pasión en línea.
          </p>
          <p className="text-center md:text-left text-muted-foreground leading-relaxed">
            Casi la mitad lo hace a tiempo completo, facturando desde cualquier lugar del planeta. 
            Mientras lees esto, el mercado de productos digitales mueve USD 2,5 billones al año 
            y crece sin freno. ¿Te unes o te quedas mirando?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthStatsSection;
