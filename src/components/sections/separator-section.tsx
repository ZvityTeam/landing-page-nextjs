"use client";

import { AnimatedSection } from "../ui/animated-section";
import Image from "next/image";

interface FeatureItem {
  iconPath: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: FeatureItem[];
}

export function SeparatorSection({ features }: FeaturesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={0.1 * (index + 1)}
              className="flex flex-col items-start text-center"
            >
              {/* Icon */}
              <div className="mb-6">
                <Image
                  src={feature.iconPath}
                  alt={`${feature.title} Icon`}
                  width={50}
                  height={50}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-4">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm text-start text-muted-foreground max-w-xs">
                {feature.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
