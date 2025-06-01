import React from "react";
import { cn } from "../../lib/utils";
import { ComponentProps } from "../../types";

interface ExampleProps extends ComponentProps {
  text?: string;
}

const Example = React.forwardRef<HTMLDivElement, ExampleProps>(
  ({ className, text = "Hello from Kel UI Components!", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card p-4 text-card-foreground shadow-sm",
          className
        )}
        {...props}
      >
        <p className="text-sm">{text}</p>
      </div>
    );
  }
);

Example.displayName = "Example";

export { Example };
