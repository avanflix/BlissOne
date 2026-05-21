"use client";

import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function StaggerContainer({ children }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}