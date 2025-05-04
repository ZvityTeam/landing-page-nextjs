"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  hoverEffect?: "lift" | "glow" | "border" | "scale" | "none";
  intensity?: number;
};

export function HoverCard({
  children,
  className,
  contentClassName,
  hoverEffect = "lift",
  intensity = 1,
}: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const getEffectStyles = () => {
    const styles: React.CSSProperties = {};

    if (hoverEffect === "lift") {
      styles.transform = isHovered ? `translateY(-${5 * intensity}px)` : "translateY(0)";
      styles.boxShadow = isHovered
        ? `0 ${10 * intensity}px ${15 * intensity}px rgba(0, 0, 0, 0.1)`
        : "0 2px 4px rgba(0, 0, 0, 0.05)";
    }

    if (hoverEffect === "glow") {
      styles.boxShadow = isHovered
        ? `0 0 ${15 * intensity}px ${5 * intensity}px rgba(var(--primary), 0.15)`
        : "0 2px 4px rgba(0, 0, 0, 0.05)";
    }

    if (hoverEffect === "scale") {
      styles.transform = isHovered ? `scale(${1 + 0.02 * intensity})` : "scale(1)";
    }

    return styles;
  };

  const getClassName = () => {
    const baseClass = cn(
      "transition-all duration-300 ease-in-out",
      {
        "hover:border-primary/50": hoverEffect === "border",
      },
      className
    );

    return baseClass;
  };

  return (
    <Card
      ref={cardRef}
      className={getClassName()}
      style={getEffectStyles()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn(contentClassName)}>{children}</div>
    </Card>
  );
}

export { CardHeader, CardContent, CardFooter };
