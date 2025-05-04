"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Animation variants
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const slideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: { once?: boolean; amount?: number };
}

// Reusable motion components
export const FadeIn = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.3 },
}: MotionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={fadeIn}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideUp = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.3 },
}: MotionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={slideUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.3 },
}: MotionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={slideInLeft}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInRight = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.3 },
}: MotionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={slideInRight}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.3 },
}: MotionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={scaleIn}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
  viewport = { once: true, amount: 0.3 },
}: MotionProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewport}
    variants={staggerContainer}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

// Children that will be animated in a staggered sequence
export const StaggerItem = ({
  children,
  className = "",
  delay = 0,
}: MotionProps) => (
  <motion.div variants={slideUp} transition={{ delay }} className={className}>
    {children}
  </motion.div>
);
