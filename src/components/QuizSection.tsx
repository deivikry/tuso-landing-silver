import { Button } from "@/components/ui/button";
import { MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import FloatingCard from "./FloatingCard";

interface QuizSectionProps {
  onOpenVideo: () => void;
}

const QuizSection = ({ onOpenVideo }: QuizSectionProps) => {
  const handleOpenForm = () => {
    // Reemplaza esta URL con tu formulario de Google Forms, Typeform, etc.
    window.open("https://forms.google.com", "_blank");
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="fog-overlay" />
      <div className="max-w-3xl mx-auto relative z-10">
        <FloatingCard delay={0.2} className="!p-0 overflow-hidden">
          <div className="relative">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-deep/30 to-gold/10" />
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-gold/30 to-primary/30 flex items-center justify-center glow-gold">
                  <MessageSquare className="w-10 h-10 md:w-12 md:h-12 text-gold" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold/70 text-sm uppercase tracking-wider font-medium">
                    Tu opinión importa
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  ¿Qué te gustaría ver en <span className="text-gold">TUSO</span>?
                </h3>
                
                <p className="text-foreground/70 mb-6 max-w-md">
                  Cuéntanos tus ideas, sugerencias o qué experiencias te gustaría encontrar en Ibagué. 
                  Estamos creando esto para ti.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button
                    onClick={handleOpenForm}
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-6 py-5 rounded-xl glow-gold group"
                  >
                    Completar encuesta
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    onClick={onOpenVideo}
                    variant="ghost"
                    size="lg"
                    className="text-gold hover:text-gold/80 hover:bg-gold/10"
                  >
                    Ver demo primero
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-gold/5 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
          </div>
        </FloatingCard>
      </div>
    </section>
  );
};

export default QuizSection;
