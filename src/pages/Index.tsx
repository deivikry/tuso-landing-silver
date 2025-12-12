import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Sparkles, Map, Utensils, Calendar, Mountain, Heart, Shield } from "lucide-react";
import VideoModal from "@/components/VideoModal";
import QuizSection from "@/components/QuizSection";
import FloatingCard from "@/components/FloatingCard";

const Index = () => {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-tuso relative overflow-hidden">
      {/* Fog/Mist overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(330_70%_48%/0.2)_0%,_transparent_50%)]" />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
        <div className="fog-overlay" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 md:left-20 opacity-60">
          <FloatingCard delay={0} className="!p-4">
            <Mountain className="w-8 h-8 text-gold" />
          </FloatingCard>
        </div>
        <div className="absolute top-40 right-10 md:right-24 opacity-60">
          <FloatingCard delay={1} className="!p-4">
            <Utensils className="w-8 h-8 text-primary" />
          </FloatingCard>
        </div>
        <div className="absolute bottom-32 left-16 md:left-32 opacity-60">
          <FloatingCard delay={2} className="!p-4">
            <Calendar className="w-8 h-8 text-gold" />
          </FloatingCard>
        </div>
        <div className="absolute bottom-48 right-8 md:right-20 opacity-60">
          <FloatingCard delay={0.5} className="!p-4">
            <Map className="w-8 h-8 text-primary" />
          </FloatingCard>
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Lightning Logo Video */}
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden glow-gold">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="./tuso_rayo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-gold/80 uppercase tracking-widest text-sm font-semibold">
              Turismo Inteligente
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-extrabold text-gold mb-6 leading-tight animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Atrévete a descubrir Ibagué
          </h1>
          
          {/* Enhanced Value Proposition */}
          <div 
            className="max-w-3xl mx-auto mb-10 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-xl md:text-2xl text-foreground/90 mb-4 leading-relaxed">
              <span className="text-gold font-semibold">TUSO te muestra el mejor plan para ti</span> según tus gustos. 
              Planes de naturaleza, gastronomía, eventos y experiencias sorpresa, 
              <span className="text-primary font-semibold"> todo en un solo lugar</span>, 
              con recomendaciones inteligentes y rutas claras.
            </p>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              onClick={() => setVideoOpen(true)}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-xl glow-gold animate-pulse-glow"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Demo
            </Button>
          </div>

          {/* Mystery text */}
          <p 
            className="mt-12 text-muted-foreground italic animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            "Hay un Ibagué que aún no conoces..."
          </p>
        </div>

        {/* Scroll indicator */}
        {/*<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-gold/50 rounded-full" />
          </div>
        </div>*/}
      </section>

      {/* What is TUSO + How it works + MODO SILVER - Combined section */}
      <section className="py-20 px-4 relative">
        <div className="fog-overlay" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left: What is TUSO */}
            <div className="animate-fade-in">
              <span className="text-gold/60 text-sm uppercase tracking-wider">
                ¿Qué es TUSO?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gold mt-2 mb-6">
                La app que encuentra el mejor plan para ti
              </h2>
              <p className="text-foreground/80 text-lg leading-relaxed mb-6">
                TUSO es una app de turismo inteligente que aprende de tus gustos y te recomienda 
                actividades, rutas de naturaleza, experiencias gastronómicas y eventos actuales.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Rutas", "Eventos", "Gastronomía", "Naturaleza"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full glass-card text-sm text-gold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* MODO SILVER - Feature destacado */}
              <FloatingCard delay={0.2} className="!p-6 border-2 border-silver/30 bg-gradient-to-br from-silver/10 to-silver/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-silver/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-silver" />
                  </div>
                  <div>
                    <span className="text-xs text-silver uppercase tracking-wider font-semibold">Funcionalidad Principal</span>
                    <h3 className="text-xl font-bold text-silver">Modo Silver</h3>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  <span className="text-silver font-semibold">Experiencias seguras, tranquilas y adaptadas a ti</span>, 
                  sin estrés y con acompañamiento. Pensado especialmente para adultos mayores que desean 
                  disfrutar del turismo con total confianza.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-silver/20 text-xs text-silver flex items-center gap-1">
                    <Heart className="w-3 h-3" /> Seguro
                  </span>
                  <span className="px-3 py-1 rounded-full bg-silver/20 text-xs text-silver flex items-center gap-1">
                    <Shield className="w-3 h-3" /> Adaptado
                  </span>
                  <span className="px-3 py-1 rounded-full bg-silver/20 text-xs text-silver">
                    Sin estrés
                  </span>
                </div>
              </FloatingCard>
            </div>

            {/* Right: How it works - 3 steps */}
            <div className="space-y-4">
              <span className="text-gold/60 text-sm uppercase tracking-wider">
                ¿Cómo funciona?
              </span>
              <div className="mt-4 space-y-4">
                {[
                  { step: "01", title: "Elige tus gustos", desc: "Presupuesto, nivel físico, tiempo disponible" },
                  { step: "02", title: "Haz match con experiencias", desc: "Desliza tarjetas como en un match de turismo" },
                  { step: "03", title: "Déjate sorprender", desc: "El recomendador inteligente aprende de ti" },
                ].map((item, idx) => (
                  <FloatingCard key={idx} delay={idx * 0.3} className="!p-5">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl font-bold text-gold/40">{item.step}</span>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </FloatingCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <QuizSection onOpenVideo={() => setVideoOpen(true)} />

      {/* Final CTA */}
      <section className="py-20 px-4 relative">
        <div className="fog-overlay" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gold mb-4">
            Atrévete a descubrir Ibagué
          </h2>
          <p className="text-foreground/70 text-lg mb-8">
            Encuentra qué hacer hoy, sin perder tiempo.
          </p>
          <Button
            onClick={() => setVideoOpen(true)}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 rounded-xl glow-gold"
          >
            <Play className="w-5 h-5 mr-2" />
            Descubre tu plan perfecto
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            Turismo Inteligente en Ibagué
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </div>
  );
};

export default Index;