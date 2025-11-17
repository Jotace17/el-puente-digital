import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DiscountPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Check if popup was already closed in this session
    const wasClosed = sessionStorage.getItem("discountPopupClosed");
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
    sessionStorage.setItem("discountPopupClosed", "true");
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <Card className="relative max-w-md mx-4 shadow-lg border-2 border-emerald-500 animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>
        
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-emerald-600">
            ¡Oferta Especial!
          </h3>
          <p className="text-muted-foreground mb-6">
            Hay un descuento disponible por tiempo limitado. Aprovecha esta oportunidad.
          </p>
          <Button 
            onClick={handleNavigate}
            size="lg"
            className="w-full"
          >
            Ver descuento
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DiscountPopup;
