"use client";
import React from "react";
import { motion } from "framer-motion";

interface ITemplate {
  children: React.ReactNode;
}

const template: React.FC<ITemplate> = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}>
      {children}
    </motion.div>
  );
};

export default template;
