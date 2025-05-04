"use client";

import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface FaqProps {
  title?: string;
  description?: string;
  faqs: FaqItem[];
  backgroundColor?: string;
  showTabs?: boolean;
  categories?: string[];
  tagline?: string;
}

export function Faq({
  title = "Frequently Asked Questions",
  description = "Explore solutions in our FAQ section",
  faqs,
  backgroundColor = "bg-background",
  showTabs = true,
  categories = ["Tab one", "Tab two"],
  tagline = "Spectra FAQs",
}: FaqProps) {
  const [activeTab, setActiveTab] = useState("all");

  // Function to filter FAQs by category
  const filteredFaqs = activeTab === "all"
    ? faqs
    : faqs.filter(faq => faq.category === activeTab);

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
          {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
        </div>

        {showTabs && categories.length > 0 && (
          <div className="flex justify-center mb-10">
            <Tabs defaultValue="all" className="w-full max-w-md mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                {categories.map((category, index) => (
                  <TabsTrigger
                    key={category}
                    value={index === 0 ? "all" : category}
                    onClick={() => setActiveTab(index === 0 ? "all" : category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {filteredFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border border-border rounded-lg px-5 shadow-sm">
                <AccordionTrigger className="text-base font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
