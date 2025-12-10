import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard = ({ children, className = "", delay = 0 }: FloatingCardProps) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 floating-element ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default FloatingCard;