import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoModal = ({ open, onOpenChange }: VideoModalProps) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Resetear el estado cuando el modal se abre o cierra
  useEffect(() => {
    if (open) {
      setVideoEnded(false);
    } else {
      // Limpiar cuando el modal se cierra
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignorar errores al destruir
        }
        playerRef.current = null;
      }
    }
  }, [open]);

  // Cargar la API de YouTube IFrame y crear el reproductor
  useEffect(() => {
    if (!open || !containerRef.current) return;

    let player: any = null;

    // Función para inicializar el reproductor
    const initializePlayer = () => {
      if (!containerRef.current || playerRef.current) return;

      const videoId = "3KGiPb1XKsY";
      
      player = new window.YT.Player(containerRef.current, {
        videoId: videoId,
        playerVars: {
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onStateChange: (event: any) => {
            // Estado 0 = ENDED (video terminado)
            if (event.data === window.YT.PlayerState.ENDED) {
              setVideoEnded(true);
            }
          },
        },
      });

      playerRef.current = player;
    };

    // Cargar el script de YouTube IFrame API si no está cargado
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      // Si la API no está cargada, cargarla
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      // Configurar callback global para cuando la API esté lista
      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };

      // También verificar periódicamente por si acaso
      const checkYT = setInterval(() => {
        if (window.YT && window.YT.Player && !playerRef.current) {
          clearInterval(checkYT);
          initializePlayer();
        }
      }, 100);

      return () => {
        clearInterval(checkYT);
        if (playerRef.current) {
          try {
            playerRef.current.destroy();
          } catch (e) {
            // Ignorar errores al destruir
          }
          playerRef.current = null;
        }
      };
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch (e) {
          // Ignorar errores al destruir
        }
        playerRef.current = null;
      }
    };
  }, [open]);

  const handleOpenForm = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdwedM5e-Tz1gwRqKfxUD6wxAxyxyC8PH5eg5Ghj-f2sRKmtw/viewform", "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-gold text-xl">Demo de TUSO</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden">
            <div ref={containerRef} className="w-full h-full" />
          </div>
          
          {/* Botón de encuesta que aparece cuando el video termina */}
          {videoEnded && (
            <div className="mt-6 p-6 rounded-xl bg-gradient-to-br from-primary/20 via-purple-deep/30 to-gold/10 border border-gold/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gold/5 rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
              
              <div className="relative flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/30 to-primary/30 flex items-center justify-center glow-gold">
                    <MessageSquare className="w-8 h-8 text-gold" />
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    ¿Qué te gustaría ver en <span className="text-gold">TUSO</span>?
                  </h4>
                  <p className="text-sm text-foreground/70 mb-4">
                    Cuéntanos tus ideas y sugerencias
                  </p>
                </div>
                
                <Button
                  onClick={handleOpenForm}
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-6 py-5 rounded-xl glow-gold group flex-shrink-0"
                >
                  Completar encuesta
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Extender la interfaz Window para incluir YT
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default VideoModal;