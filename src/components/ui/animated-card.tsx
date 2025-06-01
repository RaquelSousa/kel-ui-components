import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { Card } from "./card";
import { AnimatedCardProps } from "../../types";

export const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, delay = 0, direction = "up", ...props }, ref) => {
    const animationClass = `animate-fade-in-${direction}`;
    const animationDelay = `${delay}s`;

    return (
      <div className={cn(animationClass, className)} style={{ animationDelay }}>
        <Card
          ref={ref}
          className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
          {...props}
        >
          {children}
        </Card>
      </div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";
