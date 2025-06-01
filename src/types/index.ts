import React from "react";

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonVariants {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export interface CardProps extends ComponentProps {
  asChild?: boolean;
}

export interface BadgeVariants {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export interface AlertVariants {
  variant?: "default" | "destructive";
}

export interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export interface AnimatedCardProps extends ComponentProps {
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export interface ScrollProgressProps {
  className?: string;
  indicatorClassName?: string;
}

export interface SectionHeaderProps extends ComponentProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}
