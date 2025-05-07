"use client";

import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { AnimatedSection } from "../ui/animated-section";
import { AnimatedImage } from "../ui/animated-image";
import heroImage from "../../assets/product-hero.png";
import heroImage1 from "../../assets/product-hero1.png";
import heroImage2 from "../../assets/product-hero2.png";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  showVideo?: boolean;
  videoUrl?: string;
  alignment?: "center" | "left";
  tagline?: string;
  page?: string;
}

export function Hero({
  title,
  subtitle,
  showVideo = true,
  videoUrl = "https://www.youtube.com/embed/ikZiD3wSeKs?si=BQM9Ng2jC959JqCj",
  alignment = "left",
  tagline = "TurinIQ",
  page,
}: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-background">
      <div className="container-custom flex flex-col items-center justify-between">
        <div
          className={`flex flex-col ${
            alignment === "center" ? "items-center text-center" : ""
          } ${page === "product" ? "max-w-5xl" : "max-w-3xl"} ${
            alignment === "center" ? "mx-auto" : ""
          }`}
        >
          <AnimatedSection direction="up" delay={0.1}>
            {tagline && (
              <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                {tagline}
              </span>
            )}
            <h1 className="heading-primary font-medium mb-6">{title}</h1>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-md mb-8 max-w-2xl">{subtitle}</p>
          </AnimatedSection>
        </div>

        {/* Updated image composition with overlap */}
        <div className="relative mt-16 w-full  mx-auto flex items-center justify-center">
          {/* Left image (product-hero1) - Behind main image */}
          <div className="w-[50%] relative z-0 -mr-14">
            <AnimatedImage
              src={heroImage1}
              alt="Left Interface"
              width={600}
              height={400}
              className="w-full h-auto bg-white object-cover shadow-xl rounded-xl border border-black/20"
            />
          </div>

          {/* Center image (product-hero) - On top */}
          <div className="w-[80%] relative z-10">
            <AnimatedImage
              src={heroImage}
              alt="Main Interface"
              width={700}
              height={500}
              className="w-full h-auto object-cover bg-white shadow-xl rounded-xl border border-black border-b-4"
            />
          </div>

          {/* Right image (product-hero2) - Behind main image */}
          <div className="w-[50%] relative z-0 -ml-14">
            <AnimatedImage
              src={heroImage2}
              alt="Right Interface"
              width={600}
              height={400}
              className="w-full h-auto object-cover bg-white shadow-xl rounded-xl border border-black/20"
            />
          </div>
        </div>
      </div>

      {/* Abstract shape decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-1/2 bg-secondary/10 rounded-l-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
