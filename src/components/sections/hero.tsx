"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import heroImage from "../../assets/hero.png";
import { AnimatedImage } from "../ui/animated-image";
import { AnimatedSection } from "../ui/animated-section";

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  showVideo?: boolean;
  videoUrl?: string;
  alignment?: "center" | "left";
  tagline?: string;
  showImage?: boolean;
  subText?: string;
}

export function Hero({
  title,
  subtitle,
  showVideo = true,
  videoUrl = "https://www.youtube.com/embed/l1ewV9w9vQg?si=GTFZ1mK27SiF6xHK",
  alignment = "left",
  tagline = "TurinIQ",
  showImage = true,
  subText = "No code. No chaos. Just seamless customer interactions.",
}: HeroProps) {
  const [videoOpen, setVideoOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Function to handle smooth scrolling to the TrialSection
  const handleScrollToAccess = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default behavior
    const targetId = "access";
    const currentPath = pathname === "/" ? "" : pathname; // Handle root path
    const targetPath = `${currentPath}#${targetId}`; // Append #access to current path
    const fallbackPath = "/product#access"; // Fallback if section not found

    // Check if the access section exists on the current page
    const element = document.getElementById(targetId);
    if (element) {
      // If on the correct page and section exists, scroll directly
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the current page with #access or fallback to product page
      router.push(pathname === "/product" ? targetPath : fallbackPath);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay to ensure page navigation completes
    }
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div
        className={`container-custom flex flex-col md:flex-row items-center ${
          showImage ? "justify-between" : "justify-center"
        }`}
      >
        <div
          className={`flex flex-col ${
            alignment === "center" ? "items-center text-center" : ""
          } ${showImage ? "max-w-3xl" : "max-w-5xl"} ${
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
          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="https://www.turiniq.com/">
              <Button
                className="bg-primary hover:bg-primary/90 rounded-full"
{/*                 onClick={handleScrollToAccess} */}
              >
                Try Early Demo
              </Button>
              </Link>
              {showVideo && (
                <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full flex items-center gap-2"
                    >
                      <PlayCircle size={20} className="text-primary" />
                      Watch Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px] p-0 bg-black">
                    <iframe
                      width="100%"
                      height="450"
                      src={videoUrl}
                      title="Video Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </DialogContent>
                </Dialog>
              )}
            </div>
            <div className="text-xs text-muted-foreground font-medium flex items-center">
              <span className="mr-1">{subText}</span>
            </div>
          </AnimatedSection>
        </div>
        {showImage && (
          <div>
            <AnimatedImage
              src={heroImage}
              alt="Inbox"
              width={400}
              height={200}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>

      {showImage && (
        <>
          {/* Abstract shape decorations */}
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1/3 h-1/2 bg-secondary/10 rounded-l-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-1/4 w-1/4 h-1/4 bg-primary/5 rounded-full blur-3xl -z-10" />
        </>
      )}
    </section>
  );
}
