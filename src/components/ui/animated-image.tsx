"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedImageProps = {
  src: string | "" | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  delay?: number;
  duration?: number;
  fill?: boolean;
  threshold?: number;
  quality?: number;
  style?: React.CSSProperties;
};

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  delay = 0,
  duration = 0.7,
  fill = false,
  threshold = 0.1,
  quality,
  style,
}: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "50px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      style={{
        ...style,
        position: "relative",
      }}
    >
      {(isVisible || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          quality={quality}
          priority={priority}
          onLoad={() => setIsLoaded(true)}
          className={cn("transition-all duration-500", {
            "opacity-100 scale-100 blur-0": isLoaded,
            "opacity-0 scale-105 blur-sm": !isLoaded,
          })}
          style={{
            transitionDelay: `${delay}s`,
            transitionDuration: `${duration}s`,
          }}
        />
      )}
    </div>
  );
}
