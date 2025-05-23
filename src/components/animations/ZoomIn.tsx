"use client";
import { FadeInProps } from "@/types/animate";
import { motion, Transition } from "framer-motion";

const ZoomIn = ({ children, duration = 0.6, delay = 0 }: FadeInProps) => {
  const transition: Transition = {
    duration,
    delay,
    ease: "easeOut",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default ZoomIn;
