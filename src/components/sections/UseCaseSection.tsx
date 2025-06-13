"use client";

import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Book,
  Check,
  CreditCard,
  Home,
  Monitor,
  Plane,
  ShoppingCart,
  Stethoscope,
} from "lucide-react";
import { useState } from "react";

export function UseCaseSection() {
  const useCases = [
    {
      id: "use-case-1",
      industry: "Healthcare",
      icon: <Stethoscope size={20} />,
      description:
        "Streamline patient interactions with AI-powered automation, ensuring 24/7 support and efficient query resolution.",
      checkpoints: [
        "Book appointments instantly through conversational AI",
        "Answer FAQs about symptoms, services, and insurance",
        "Escalate complex queries with full context to staff",
        "Deliver post-consultation care instructions via chat",
      ],
    },
    {
      id: "use-case-2",
      industry: "Finance",
      icon: <CreditCard size={20} />,
      description:
        "Enhance customer trust with secure, AI-driven support for financial queries and onboarding.",
      checkpoints: [
        "Guide customers through loan, account, or card queries",
        "Handle KYC queries and onboarding steps with ease",
        "Detect high-risk messages and escalate accordingly",
        "Deliver multilingual, round-the-clock client assistance",
      ],
    },
    {
      id: "use-case-3",
      industry: "E-commerce",
      icon: <ShoppingCart size={20} />,
      description:
        "Boost sales and reduce support load with automated product guidance and personalized follow-ups.",
      checkpoints: [
        "Answer order, refund, and delivery queries automatically",
        "Upsell products based on browsing and chat behavior",
        "Guide customers with instant product answers and help them decide faster",
        "Escalate to human agents for payment or delivery issues",
      ],
    },
    {
      id: "use-case-4",
      industry: "Real Estate",
      icon: <Home size={20} />,
      description:
        "Capture and qualify property leads while educating prospects about listings and processes.",
      checkpoints: [
        "Capture inquiries and qualify buyers using smart chat",
        "Share property info and schedules through AI instantly",
        "Handle FAQs around pricing, loan, and site visits",
        "Notify agents when prospects show strong buying intent",
      ],
    },
    {
      id: "use-case-5",
      industry: "Education",
      icon: <Book size={20} />,
      description:
        "Support students and parents with admission, course, and campus-related queries across channels.",
      checkpoints: [
        "Automate responses to admission and course queries",
        "Share documents like brochures and fee structures via chat",
        "Guide students through application and onboarding steps",
        "Alert staff when academic or financial doubts escalate",
      ],
    },
    {
      id: "use-case-6",
      industry: "Hospitality/Travel",
      icon: <Plane size={20} />,
      description:
        "Enhance guest experience with automated booking help, FAQs, and instant itinerary support.",
      checkpoints: [
        "Answer booking, availability, and pricing queries 24/7",
        "Share itineraries, menus, or travel plans instantly",
        "Provide live updates or support for delays and issues",
        "Notify front desk when human interaction is needed",
      ],
    },
    {
      id: "use-case-7",
      industry: "SaaS",
      icon: <Monitor size={20} />,
      description:
        "Automate onboarding, support, and retention flows to serve users at scale across all plans.",
      checkpoints: [
        "Answer setup, billing, and product usage FAQs",
        "Push interactive guides or videos during onboarding",
        "Track recurring issues and suggest improvements",
        "Escalate churn risks or VIP clients to success team",
      ],
    },
  ];

  // Set the first industry as default
  const [activeIndustry, setActiveIndustry] = useState(useCases[0]);

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#fbfaf8" }}>
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-start mb-12 md:mb-16">
          <div className="mb-3">
            <span className="inline-block text-xs font-semibold tracking-wider text-primary uppercase">
              Industry Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Tailored Solutions for Your Industry
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Explore how TurinIQ helps businesses across industries drive more
            sales and deliver faster, smarter support — all through one AI-first
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* Left Column: Industry List */}
          <div className="lg:col-span-4 bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
              <span
                className="w-1.5 h-6 rounded-full mr-2.5"
                style={{ backgroundColor: "#d57645" }}
              ></span>
              Industries We Serve
            </h3>
            <div className="flex flex-col space-y-2.5">
              {useCases.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveIndustry(useCase)}
                  className={cn(
                    "text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 flex items-center group",
                    activeIndustry.id === useCase.id
                      ? "shadow-md text-white"
                      : "bg-gray-50 text-foreground hover:bg-gray-100 hover:translate-x-1 hover:shadow-sm"
                  )}
                  style={{
                    backgroundColor:
                      activeIndustry.id === useCase.id ? "#d57645" : "",
                  }}
                >
                  <span
                    className={cn(
                      "mr-3 flex items-center justify-center transition-transform duration-300",
                      activeIndustry.id !== useCase.id &&
                        "group-hover:rotate-12"
                    )}
                    style={{
                      color:
                        activeIndustry.id === useCase.id ? "white" : "#d57645",
                    }}
                  >
                    {useCase.icon}
                  </span>
                  {useCase.industry}
                  {activeIndustry.id === useCase.id ? (
                    <ArrowRight className="ml-auto h-4 w-4" />
                  ) : (
                    <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Use Case Details */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 md:p-8 h-full">
              <div className="flex items-center mb-4">
                <span
                  className="mr-3 p-2 rounded-lg"
                  style={{
                    backgroundColor: "rgba(213, 118, 69, 0.1)",
                    color: "#d57645",
                  }}
                >
                  {activeIndustry.icon}
                </span>
                <h3 className="text-2xl font-bold text-foreground">
                  {activeIndustry.industry}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 text-lg">
                {activeIndustry.description}
              </p>

              <div className="space-y-4 mb-6">
                {activeIndustry.checkpoints.map((checkpoint, index) => (
                  <div
                    key={`checkpoint-${index}`}
                    className="flex items-start bg-gray-50 p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-sm hover:translate-x-1 group"
                  >
                    <div
                      className="mt-0.5 mr-3 p-1 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: "rgba(213, 118, 69, 0.1)",
                      }}
                    >
                      <Check size={16} style={{ color: "#d57645" }} />
                    </div>
                    <p className="text-foreground text-base">{checkpoint}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
