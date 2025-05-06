"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState, useRef } from "react";

interface FormData {
  email: string;
  businessType: string;
}

export function TrialSection() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    businessType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formSectionRef = useRef<HTMLDivElement>(null);

  const submitToGoogleForms = async (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScPmqt3EgwDULTcmjAxoO3BwTTh3Qzadw_tfIULwkiq6gyVxQ/formResponse";

    // Create URL encoded data
    const formDataEncoded = new URLSearchParams();
    formDataEncoded.append("entry.984614680", formData.email);
    formDataEncoded.append("entry.1608056188", formData.businessType);

    try {
      // Create a hidden form and submit it
      const form = document.createElement("form");
      form.method = "POST";
      form.action = formUrl;
      form.style.display = "none";

      // Add form fields
      formDataEncoded.forEach((value, key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Add the form to the document
      document.body.appendChild(form);

      // Create a hidden iframe
      const iframe = document.createElement("iframe");
      iframe.name = "hidden-iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      // Set form target to the hidden iframe
      form.target = "hidden-iframe";

      // Submit the form
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setFormData({ email: "", businessType: "" });
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 500);

      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      return false;
    }
  };

  return (
    <section id="access" className="relative py-16 md:py-24 bg-white">
      <div className="container-custom flex items-center justify-center">
        {/* Card */}
        <div className="relative p-8 md:p-12 w-full text-center">
          {/* Logo */}
          <div className="mb-4">
            <span className=" text-2xl font-bold flex items-center justify-center">
              {/* <span className="mr-2">⋆</span> TurinIQ. */}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-semibold mb-4">
            Join our exclusive beta program
          </h1>

          {/* Description */}
          <p className="text-sm  mb-10">
            Give Prowly a try and see for yourself if it’s a good fit for your
            PR needs.
          </p>

          {/* Email Input and Button */}
          <form
            onSubmit={submitToGoogleForms}
            className="flex md:flex-row flex-col items-center justify-center md:space-x-6 max-sm:gap-3  h-14"
          >
            <Input
              type="email"
              id="entry.984614680"
              name="entry.984614680"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="Your email"
              className="md:w-1/3 border border-black border-b-4 rounded-full h-full px-6"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white h-full rounded-full px-6"
            >
              {isSubmitted ? (
                <>Yayy!! Added to waitlist!!</>
              ) : isSubmitting ? (
                "Submitting..."
              ) : (
                <>Get Started</>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Decorative Corner Icons */}
      <div className="absolute top-0 left-0 md:left-1/4   rounded-lg flex items-center justify-center ">
        <Image src="/assets/trial1.png" alt="trial1" width={80} height={300} />
      </div>
      <div className="absolute top-0 right-0 md:right-1/4 rounded-lg flex items-center justify-center ">
        <Image src="/assets/trial2.png" alt="trial2" width={80} height={300} />
      </div>
      <div className="absolute bottom-0 left-0 md:left-1/4  rounded-lg flex items-center justify-center">
        <Image src="/assets/trial3.png" alt="trial3" width={80} height={300} />
      </div>
      <div className="absolute bottom-0 right-0 md:right-1/4   rounded-lg flex items-center justify-center">
        <Image src="/assets/trial4.png" alt="trial4" width={80} height={300} />
      </div>
    </section>
  );
}
