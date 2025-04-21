"use client";
import { FadeInProps } from "@/types/animate";
import { Transition } from "motion";
import { motion } from "motion/react";

const FadeIn = ({ children, duration = 0.4, delay = 0 }: FadeInProps) => {
  const transition: Transition = {
    duration,
    delay,
    ease: ["easeOut"],
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.7 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
