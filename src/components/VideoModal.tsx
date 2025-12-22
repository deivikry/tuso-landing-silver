import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useRef } from "react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoModal = ({ open, onOpenChange }: VideoModalProps) => {
  const videoId = "3KGiPb1XKsY";
  const hasBeenOpened = useRef(false);

  // Marcar que el modal ha sido abierto
  useEffect(() => {
    if (open) {
      hasBeenOpened.current = true;
    }
  }, [open]);

  // Cuando se cierra el modal (solo si ya fue abierto antes), hacer scroll
  useEffect(() => {
    if (!open && hasBeenOpened.current) {
      setTimeout(() => {
        const quizSection = document.querySelector('[data-quiz-section]');
        if (quizSection) {
          quizSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 300);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-gold text-xl">Demo de TUSO</DialogTitle>
        </DialogHeader>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Demo de TUSO"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;