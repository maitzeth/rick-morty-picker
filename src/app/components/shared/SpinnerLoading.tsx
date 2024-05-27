"use client"
import React from 'react';
import { motion } from 'framer-motion';

export const SpinnerLoading = () => {
  return (
    <motion.div
      className="rounded-full w-[50px] h-[50px] inline-block border-4 border-t-accent-primary border-gray-200"
      variants={{
        animate: {
          rotate: 360,
          transition: {
            repeat: Infinity,
            duration: 1,
          }
        }
      }}
      animate="animate"
    />
  );
};
