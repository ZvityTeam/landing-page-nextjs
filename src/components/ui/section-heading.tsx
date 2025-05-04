"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  subheading?: string;
  heading: string;
  description?: string | ReactNode;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  subheading,
  heading,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div
      className={`${className} ${centered ? "text-center mx-auto max-w-3xl" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {subheading && (
        <motion.p
          variants={itemVariants}
          className="text-primary text-sm font-medium uppercase tracking-wide mb-3"
        >
          {subheading}
        </motion.p>
      )}
      <motion.h2
        variants={itemVariants}
        className="heading-lg mb-6"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.div
          variants={itemVariants}
          className={`text-muted-foreground text-lg ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}
        >
          {description}
        </motion.div>
      )}
    </motion.div>
  );
}
