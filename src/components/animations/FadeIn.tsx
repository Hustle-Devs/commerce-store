"use client";
import React from "react";
import { motion } from "motion/react";
import { Transition } from "motion";
import { FadeInProps } from "@/types/animate";

const FadeIn = ({ children, delay = 0, duration = 0.6 }: FadeInProps) => {
  const transition: Transition = {
    duration,
    delay,
    ease: ["easeOut"],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
