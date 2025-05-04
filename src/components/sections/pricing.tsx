"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  id: string;
  name: string;
  description?: string;
  price: {
    monthly: number;
    annually: number;
  };
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  popular?: boolean;
  icon?: string;
}

interface PricingProps {
  title?: string;
  description?: string;
  tiers: PricingTier[];
  backgroundColor?: string;
  tagline?: string;
}

export function Pricing({
  title = "Our Plans Scale With Your Business",
  description,
  tiers,
  backgroundColor = "bg-background",
  tagline = "OUR PRICING",
}: PricingProps) {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annually">("annually");

  return (
    <section className={`py-16 md:py-24 ${backgroundColor} overflow-hidden`}>
      <div className="container-custom">
        {tagline && (
          <div className="mb-3 text-center">
            <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase">
              {tagline}
            </span>
          </div>
        )}

        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">{title}</h2>
          {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-muted/50 p-1 rounded-full">
            <button
              onClick={() => setBillingInterval("annually")}
              className={`px-5 py-2 text-sm font-medium rounded-full ${
                billingInterval === "annually"
                  ? "bg-background shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Bill Annually
            </button>
            <button
              onClick={() => setBillingInterval("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-full ${
                billingInterval === "monthly"
                  ? "bg-background shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Bill Monthly
            </button>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`bg-background rounded-xl border ${
                tier.popular ? "border-primary shadow-lg relative" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                  POPULAR
                </div>
              )}

              <div className="p-6">
                {tier.icon && (
                  <div className="mb-4">
                    <Image
                      src={tier.icon}
                      alt={tier.name}
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-muted-foreground">{tier.name}</h4>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-bold">
                      ${billingInterval === "monthly"
                        ? tier.price.monthly.toFixed(2)
                        : tier.price.annually.toFixed(2)}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      /Per User {billingInterval === "monthly" ? "Monthly" : "Annually"}
                    </span>
                  </div>
                </div>

                {tier.description && (
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                )}

                <div className="mt-6 mb-6 space-y-4">
                  {tier.features.map((feature, idx) => (
                    <div
                      key={`${tier.id}-feature-${idx}`}
                      className="flex items-start"
                    >
                      {feature.included ? (
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                      ) : (
                        <div className="h-5 w-5 flex-shrink-0 mr-2" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground"}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full rounded-full ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-background border border-input hover:bg-muted"
                  }`}
                  variant={tier.popular ? "default" : "outline"}
                  asChild
                >
                  <a href={tier.buttonLink}>{tier.buttonText}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Card */}
        <div className="mt-12 bg-muted/30 rounded-xl border border-border p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Glide for Enterprise</h3>
              <p className="text-muted-foreground mb-6">
                Elevate enterprise efficiency with Glide. Our robust solution ensures peak performance and seamless collaboration.
              </p>
              <Button className="rounded-full bg-primary hover:bg-primary/90" asChild>
                <a href="/contact-sales">Contact Sales</a>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>10 Million rows of data</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Custom Terms of Service</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
