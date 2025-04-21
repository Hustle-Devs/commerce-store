"use client";
import React from "react";
import { motion } from "motion/react";
import { Transition } from "motion/react";
import { FadeOutProps } from "@/types/animate";

const FadeOut = ({ children, delay = 0, duration = 0.6 }: FadeOutProps) => {
  const transition: Transition = {
    duration,
    delay,
    ease: ["easeOut"],
  };

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 0, y: 20 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeOut;
