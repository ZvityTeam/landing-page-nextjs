import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 10,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:25s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
