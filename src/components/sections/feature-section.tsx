"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedImage } from "../ui/animated-image";
import { AnimatedSection } from "../ui/animated-section";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
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
  layout?: "grid" | "columns" | "cards";
  backgroundColor?: string;
  imagePosition?: "right" | "left" | "bottom";
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
  tagline?: string;
  stats?: Stat[];
}

export function FeatureSection({
  title,
  description,
  features,
  image,
  layout = "grid",
  backgroundColor = "bg-background",
  imagePosition = "right",
  showButton = false,
  buttonText = "Contact Sales",
  buttonLink = "#",
  tagline,
  stats,
}: FeatureSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <AnimatedSection direction="up">
            <div
              className={imagePosition === "left" ? "lg:order-2" : "lg:order-1"}
            >
              {tagline && (
                <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase mb-3">
                  {tagline}
                </span>
              )}
              <h2 className="heading-secondary mb-6">{title}</h2>
              {description && (
                <p className="text-lg text-muted-foreground mb-10 max-w-xl">
                  {description}
                </p>
              )}

              {/* Stats Display */}
              {stats && stats.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10">
                  {stats.map((stat) => (
                    <div key={stat.id} className="flex flex-col">
                      <span className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                        {stat.value}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Feature Layout Options */}
              {layout === "columns" && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature) => (
                    <div key={feature.id} className="mb-6">
                      {feature.icon && (
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                            feature.iconColor || "bg-primary/10"
                          }`}
                        >
                          <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={20}
                            height={20}
                            className="h-5 w-5 object-contain"
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
                </div>
              )}

              {layout === "cards" && (
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      className="border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex items-start mb-4">
                        {feature.icon && (
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center mr-4 ${
                              feature.iconColor || "bg-primary/10"
                            }`}
                          >
                            <Image
                              src={feature.icon}
                              alt={feature.title}
                              width={16}
                              height={16}
                              className="h-4 w-4 object-contain"
                            />
                          </div>
                        )}
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                      </div>
                      <p className="text-muted-foreground ml-12 text-sm">
                        {feature.description}
                      </p>
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
          {/* Image or Grid Features */}
          <div
            className={imagePosition === "left" ? "lg:order-1" : "lg:order-2"}
          >
            {image ? (
              <div className="relative rounded-2xl overflow-hidden">
                <AnimatedImage
                  src={image}
                  alt="Feature illustration"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : layout === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedSection direction="up" delay={0.1}>
                  {features.map((feature) => (
                    <div key={feature.id} className="mb-6">
                      {feature.icon && (
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                            feature.iconColor || "bg-primary/10"
                          }`}
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
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
