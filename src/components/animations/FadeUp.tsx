"use client";
import { FadeInProps } from "@/types/animate";
import { Transition } from "motion";
import { motion } from "motion/react";

const FadeUp = ({ children, duration = 0.6, delay = 0 }: FadeInProps) => {
  const transition: Transition = {
    duration,
    delay,
    ease: ["easeOut"],
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.7 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
