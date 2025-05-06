"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  categories = [],
  tagline = "TurinIQ FAQs",
}: FaqProps) {
  const [activeTab, setActiveTab] = useState("all");
  const ITEMS_PER_PAGE = 5;

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(faqs.length / ITEMS_PER_PAGE);

  const paginatedFaqs = faqs.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  // Function to filter FAQs by category
  const filteredFaqs =
    activeTab === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeTab);

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
            {paginatedFaqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.answer}
                className="border border-border rounded-lg px-5 shadow-sm"
              >
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
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`h-3 w-3 rounded-full ${
                currentPage === pageIndex ? "bg-primary" : "bg-neutral-400"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
