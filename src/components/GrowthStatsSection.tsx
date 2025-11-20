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
      
      // Enhanced slot machine shuffle animation
      const duration = 2000;
      const startTime = Date.now();
      let frame = 0;
      
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        frame++;
        
        if (elapsed < duration) {
          // Slot machine effect - each digit rolling independently
          const progress = elapsed / duration;
          const rollSpeed = Math.max(30, 80 * (1 - progress)); // Slow down gradually
          
          if (frame % Math.floor(rollSpeed / 30) === 0) {
            // Generate rolling digits
            const digit1 = Math.floor(Math.random() * 10);
            const digit2 = Math.floor(Math.random() * 10);
            const digit3 = Math.floor(Math.random() * 10);
            const digit4 = Math.floor(Math.random() * 10);
            const digit5 = Math.floor(Math.random() * 10);
            const digit6 = Math.floor(Math.random() * 10);
            
            setDisplayNumber(`${digit1}${digit2}${digit3}.${digit4}${digit5}${digit6}`);
          }
        } else {
          // Final value with smooth transition
          setDisplayNumber("300.000");
          clearInterval(interval);
          // Trigger cash animation after number stops
          setTimeout(() => setShowCash(true), 300);
        }
      }, 16); // ~60fps

      return () => clearInterval(interval);
    }
  }, [isInView, isAnimating]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Cash Animation Elements */}
      {showCash && (
        <>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-5xl pointer-events-none z-10"
              initial={{ 
                opacity: 0,
                x: i % 2 === 0 ? -100 : window.innerWidth + 100,
                y: Math.random() * 300 + 50,
                rotate: Math.random() * 360,
                scale: 0.5
              }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                x: i % 2 === 0 ? window.innerWidth + 100 : -100,
                y: Math.random() * 400 + 100,
                rotate: Math.random() * 720,
                scale: [0.5, 1.2, 1, 0.8]
              }}
              transition={{
                duration: 2.5,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            >
              💵
            </motion.div>
          ))}
        </>
      )}

      {/* Decorative gradient blobs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

      <div className="max-w-5xl mx-auto px-4 relative z-20">
        {/* Animated 3D Number */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative inline-block">
            {/* Glow effect behind number */}
            <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-primary via-accent to-primary animate-pulse" style={{ animationDuration: '3s' }} />
            
            <h2 
              className="text-7xl md:text-8xl lg:text-9xl font-black text-foreground relative tracking-tight"
              style={{
                textShadow: `
                  3px 3px 0 hsl(var(--primary) / 0.4),
                  6px 6px 0 hsl(var(--primary) / 0.3),
                  9px 9px 0 hsl(var(--primary) / 0.2),
                  12px 12px 25px hsl(var(--primary) / 0.2)
                `,
                transform: "translateZ(30px)",
                fontWeight: 900,
                letterSpacing: '-0.02em'
              }}
            >
              {displayNumber}
            </h2>
          </div>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-semibold">
            dólares en 1 año
          </p>
        </motion.div>

        {/* Supporting Text with Animation */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-8 md:p-10 border border-primary/10 shadow-lg">
            <p className="text-center text-foreground font-bold text-xl md:text-2xl mb-6">
              💰 207 millones de personas ya monetizan su pasión en línea.
            </p>
            <p className="text-center text-foreground/90 leading-relaxed text-lg md:text-xl">
              Casi la mitad lo hace a tiempo completo, facturando desde cualquier lugar del planeta. 
              Mientras lees esto, el mercado de productos digitales mueve USD 2,5 billones al año 
              y crece sin freno. <span className="font-bold text-primary">¿Te unes o te quedas mirando?</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthStatsSection;
