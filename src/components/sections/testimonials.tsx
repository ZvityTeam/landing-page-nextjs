"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { AnimatedImage } from "../ui/animated-image";

interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    avatar?: string;
  };
  rating?: number;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  backgroundColor?: string;
  reviewPlatform?: {
    name: string;
    logo?: string;
    total?: string;
  };
  tagline?: string;
}

export function Testimonials({
  title = "What Our Users Say!",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  testimonials,
  backgroundColor = "bg-muted/50",
  reviewPlatform,
  tagline = "testimonials",
}: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className={`py-16 md:py-24 ${backgroundColor}`}>
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
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {reviewPlatform && (
          <div className="flex justify-center items-center mb-10">
            <div className="flex items-center space-x-3">
              <span className="font-medium">Reviewed on</span>
              {reviewPlatform.logo ? (
                <AnimatedImage
                  src={reviewPlatform.logo}
                  alt={reviewPlatform.name}
                  width={100}
                  height={30}
                  className="h-6 w-auto"
                />
              ) : (
                <span className="font-bold">{reviewPlatform.name}</span>
              )}
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              {reviewPlatform.total && (
                <span className="text-sm text-muted-foreground">
                  ({reviewPlatform.total} Reviews)
                </span>
              )}
            </div>
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-2xl p-8 shadow-sm border border-border">
            <div className="mb-6">
              <p className="text-lg md:text-xl italic mb-6">
                &ldquo;{currentTestimonial.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {currentTestimonial.author.avatar ? (
                  <div className="mr-4">
                    <Image
                      src={currentTestimonial.author.avatar}
                      alt={currentTestimonial.author.name}
                      width={48}
                      height={48}
                      className="rounded-full h-12 w-12 object-cover"
                    />
                  </div>
                ) : null}
                <div>
                  <h4 className="font-semibold">
                    {currentTestimonial.author.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial.author.title}
                  </p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={handlePrev}
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={handleNext}
                >
                  <ArrowRight className="h-4 w-4" />
                  <span className="sr-only">Next</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              className={`h-2 w-2 mx-1 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
