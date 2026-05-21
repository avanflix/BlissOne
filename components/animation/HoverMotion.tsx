"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function HoverMotion({ children }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}