"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "../ui/animated-section";

interface Logo {
  src: string;
  alt: string;
  href?: string;
  id?: string;
}

interface ClientsLogoProps {
  title?: string;
  logos?: Logo[];
  backgroundColor?: string;
  containerWidth?: "full" | "container";
}

export function ClientsLogo({
  title = "More than 25,000 teams use Spectra",
  logos = [],
  backgroundColor = "bg-muted/30",
  containerWidth = "container",
}: ClientsLogoProps) {
  // Default logos if none provided
  const defaultLogos: Logo[] = [
    // Using the same-assets links from the scrape
    {
      src: "https://ext.same-assets.com/1405474887/2680597676.svg",
      alt: "Client 1",
      id: "client-1",
    },
    {
      src: "https://ext.same-assets.com/1405474887/2108739119.svg",
      alt: "Client 2",
      id: "client-2",
    },
    {
      src: "https://ext.same-assets.com/348228198/4283965914.svg",
      alt: "Client 3",
      id: "client-3",
    },
    {
      src: "https://ext.same-assets.com/348228198/1474052009.svg",
      alt: "Client 4",
      id: "client-4",
    },
    {
      src: "https://ext.same-assets.com/348228198/1305029182.svg",
      alt: "Client 5",
      id: "client-5",
    },
  ];

  const displayLogos = logos.length > 0 ? logos : defaultLogos;

  return (
    <section className={`py-10 ${backgroundColor}`}>
      <div
        className={containerWidth === "container" ? "container-custom" : "px-4"}
      >
        <div className="flex flex-col items-center">
          <AnimatedSection direction="up">
            {title && (
              <div className="mb-8 text-center">
                <h3 className="text-sm font-medium text-muted-foreground">
                  {title}
                  {title.endsWith("Spectra") && (
                    <Link
                      href="/pricing"
                      className="ml-2 text-xs text-primary hover:underline"
                    >
                      Learn More
                    </Link>
                  )}
                </h3>
              </div>
            )}
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center w-full">
              {displayLogos.map((logo, index) => (
                <div
                  key={logo.id || `${logo.alt}-${index}`}
                  className="flex justify-center"
                >
                  {logo.href ? (
                    <Link
                      href={logo.href}
                      className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={36}
                        className="h-6 w-auto object-contain"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={36}
                      className="h-6 w-auto object-contain opacity-70"
                    />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
