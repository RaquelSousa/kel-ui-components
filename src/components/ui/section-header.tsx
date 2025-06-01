import { cn } from "../../lib/utils";
import { SectionHeaderProps } from "../../types";

export function SectionHeader({
  title,
  subtitle,
  className,
  centered = true,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 animate-fade-in",
        centered ? "text-center" : "text-left",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
