"use client";

import { useRef, useState } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = ButtonProps & {
  hoverEffect?: "scale" | "lift" | "glow" | "slide" | "pulse" | "none";
  intensity?: number;
  direction?: "left" | "right";
  children: React.ReactNode;
};

export function AnimatedButton({
  children,
  className,
  hoverEffect = "lift",
  intensity = 1,
  direction = "right",
  ...props
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const getHoverStyles = () => {
    const styles: React.CSSProperties = {
      position: "relative",
      overflow: "hidden",
    };

    if (hoverEffect === "lift") {
      styles.transform = isHovered ? `translateY(-${2 * intensity}px)` : "translateY(0)";
      styles.boxShadow = isHovered
        ? `0 ${4 * intensity}px ${6 * intensity}px rgba(0, 0, 0, 0.1)`
        : "";
    }

    if (hoverEffect === "glow") {
      styles.boxShadow = isHovered
        ? `0 0 ${10 * intensity}px ${5 * intensity}px rgba(var(--primary), 0.3)`
        : "";
    }

    if (hoverEffect === "scale") {
      styles.transform = isHovered ? `scale(${1 + 0.05 * intensity})` : "scale(1)";
    }

    return styles;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getClassName = () => {
    return cn(
      "transition-all duration-300 ease-in-out",
      {
        "animate-pulse": hoverEffect === "pulse" && isHovered,
      },
      className
    );
  };

  return (
    <Button
      ref={buttonRef}
      className={getClassName()}
      style={getHoverStyles()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {hoverEffect === "slide" ? (
        <div className="relative z-10 flex items-center justify-center overflow-hidden">
          <span
            className={cn(
              "inline-block transition-transform duration-300",
              isHovered ? (direction === "right" ? "-translate-x-full opacity-0" : "translate-x-full opacity-0") : "translate-x-0 opacity-100"
            )}
          >
            {children}
          </span>
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-transform duration-300",
              isHovered ? "translate-x-0 opacity-100" : (direction === "right" ? "translate-x-full opacity-0" : "-translate-x-full opacity-0")
            )}
          >
            {children}
          </span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
}
