"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedImage } from "../ui/animated-image";
import { AnimatedSection } from "../ui/animated-section";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import step1 from "../../assets/step1.png";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
  bulletPoints?: string[];
}

interface Stat {
  id: string;
  value: string;
  label: string;
}

interface FeatureSectionProps {
  title: React.ReactNode;
  description?: string;
  features: Feature[];
  image?: string;
  id?: string;
  layout?: "grid" | "columns" | "cards" | "image-like";
  backgroundColor?: string;
  imagePosition?: "right" | "left" | "bottom";
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  tagline?: string;
  stats?: Stat[];
  videoUrl?: string; // Added for video playback
}

export function StatSection({
  title,
  description,
  features,
  image,
  id,
  layout = "grid",
  backgroundColor = "bg-background",
  imagePosition = "right",
  showButton = false,
  buttonText = "Contact Sales",
  buttonLink = "#",
  tagline,
  stats,
  videoUrl = "https://www.youtube.com/watch?v=ikZiD3wSeKs", // Default video URL
}: FeatureSectionProps) {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="container-custom">
        <div
          className={`flex flex-col md:flex-row items-center justify-between`}
        >
          {/* Image or Grid Features */}
          <div className={`${image ? "max-w-xl" : "max-w-lg"}`}>
            {image ? (
              <div className="relative rounded-2xl border border-black border-b-4 overflow-hidden mb-10">
                <AnimatedImage
                  src={image}
                  alt="Feature illustration"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover blur-[2px]"
                />
                {/* Watch Video Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-white/80 hover:bg-white text-black rounded-full flex items-center space-x-2 border border-black/20"
                      >
                        <PlayCircle className="w-5 h-5" />
                        <span>Watch Video</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="p-0 border-none max-w-3xl">
                      <iframe
                        width="100%"
                        height="400"
                        src={videoUrl}
                        title="Feature Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            ) : stats && stats?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mb-10">
                {stats?.map((stat) => (
                  <div
                    key={stat.id}
                    className="flex flex-col bg-[#FDF9F5] rounded-2xl p-8 border border-black border-b-4 shadow-sm"
                  >
                    <span className="text-2xl md:text-3xl font-semibold mb-2 text-primary">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              layout === "grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <AnimatedSection direction="up" delay={0.1}>
                    {features.map((feature) => (
                      <div
                        key={feature.id}
                        className="bg-[#FDF9F5] rounded-2xl p-8 border border-black border-b-4 shadow-sm"
                      >
                        {feature.icon && (
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                              feature.iconColor || "bg-primary/10"
                            } bg-white border border-black border-b-2"`}
                          >
                            <AnimatedImage
                              src={feature.icon}
                              alt={feature.title}
                              width={24}
                              height={24}
                              className="h-6 w-6 object-contain"
                            />
                          </div>
                        )}
                        <h3 className="font-bold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </AnimatedSection>
                </div>
              )
            )}
          </div>
          {/* Text Content */}
          <AnimatedSection direction="up">
            <div className="max-w-xl">
              {tagline && (
                <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                  {tagline}
                </span>
              )}
              <h1 className="heading-secondary font-medium md:text-5xl mb-6">
                {title}
              </h1>
              {description && (
                <p className="text-md text-muted-foreground mb-10 md:mb-16 max-w-xl">
                  {description}
                </p>
              )}

              {layout === "image-like" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#FDF9F5] rounded-2xl p-8 border border-black border-b-4 shadow-sm"
                    >
                      {feature.icon && (
                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-white border border-black border-b-2">
                          <Image
                            src={step1}
                            alt={feature.title}
                            width={24}
                            height={24}
                            className="h-6 w-6 object-contain"
                          />
                        </div>
                      )}
                      <h3 className="font-bold text-lg mb-2 uppercase">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {feature.description}
                      </p>
                      {feature.bulletPoints &&
                        feature.bulletPoints.length > 0 && (
                          <ul className="space-y-2">
                            {feature.bulletPoints.map((point, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm text-muted-foreground"
                              >
                                <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center mr-2">
                                  ✓
                                </span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                    </div>
                  ))}
                </div>
              )}

              {showButton && (
                <Button
                  className="bg-primary hover:bg-primary/90 rounded-full"
                  asChild
                >
                  <a href={buttonLink}>{buttonText}</a>
                </Button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
