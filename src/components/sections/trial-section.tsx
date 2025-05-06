"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TrialSection() {
  return (
    <section className="relative py-16 md:py-24 bg-white">
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
          <div className="flex items-center justify-center space-x-6  h-14">
            <Input
              type="email"
              placeholder="Email address"
              className="w-1/3 border border-black border-b-4 rounded-full h-full px-6"
            />
            <Button className="bg-orange-500 hover:bg-orange-600 text-white h-full rounded-full px-6">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Corner Icons */}
      <div className="absolute top-0 left-0 w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center opacity-50">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 8h16M4 16h16"
          ></path>
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center opacity-50">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center opacity-50">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center opacity-50">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12h6m-3-3v6"
          ></path>
        </svg>
      </div>
    </section>
  );
}
