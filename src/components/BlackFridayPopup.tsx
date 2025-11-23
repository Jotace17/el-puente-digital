import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import blackFridayBg from "@/assets/black-friday-bg.jpg";

const BlackFridayPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Check if popup was already closed in this session
    const wasClosed = sessionStorage.getItem("blackFridayPopupClosed");
    if (wasClosed) {
      setHasBeenClosed(true);
      return;
    }

    let triggered = false;

    // Timer-based trigger (5 seconds)
    const timer = setTimeout(() => {
      if (!triggered && !hasBeenClosed) {
        setIsVisible(true);
        triggered = true;
      }
    }, 5000);

    // Scroll-based trigger (30% of page)
    const handleScroll = () => {
      if (triggered || hasBeenClosed) return;
      
      const scrollPercentage = 
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      if (scrollPercentage >= 30) {
        setIsVisible(true);
        triggered = true;
        clearTimeout(timer);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasBeenClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
    sessionStorage.setItem("blackFridayPopupClosed", "true");
  };

  const handleNavigate = () => {
    const enrollmentSection = document.getElementById("unete");
    if (enrollmentSection) {
      enrollmentSection.scrollIntoView({ behavior: "smooth" });
      handleClose();
    }
  };

  if (!isVisible || hasBeenClosed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
      <div className="relative max-w-4xl w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl animate-[scale-in_0.4s_ease-out]">
        {/* Background Image */}
        <img 
          src={blackFridayBg} 
          alt="Black Friday Sale" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-end sm:pb-8">
          <div className="h-1/3 flex items-center p-8 md:p-12">
            <div className="max-w-2xl w-full">
              {/* Main Title */}
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
                Black Friday Mega Sale
              </h2>
              
              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white font-medium mb-6 leading-relaxed">
                Obten un 20% de descuento<br />
                Acceso completo a El Digital Bridge.<br />
                Ahora 399 USD <span className="line-through opacity-70">(antes 499 USD)</span>.
              </p>
              
              {/* CTA Button */}
              <Button 
                size="lg"
                className="w-full md:w-auto min-w-[300px] bg-[#a6ff01] hover:bg-[#95e600] text-black font-bold text-lg py-6 px-12 sm:pb-6 rounded-xl transition-all shine-effect"
                onClick={() =>
                (window.location.href =
                  "https://shop.beacons.ai/katherinee_ugc/8b96a046-edae-4c3d-a36e-db66d661570e")
                }
              >
                Lo quiero ya!
              </Button>
              
              {/* Footer Text */}
              <p className="text-white/60 text-sm mt-6">
                We respect your decisions. Privacy policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackFridayPopup;
