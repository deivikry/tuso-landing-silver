import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const VideoModal = ({ open, onOpenChange }: VideoModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-gold text-xl">Demo de TUSO</DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Placeholder for video - replace with actual video embed */}
          <div className="absolute inset-0 bg-gradient-to-br from-magenta/20 to-purple-deep/40" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center glow-gold">
              <Play className="w-10 h-10 text-gold ml-1" />
            </div>
            <p className="text-muted-foreground text-sm">Video de demostración próximamente</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;