"use client";
import { motion } from "motion/react";

export default function Waves() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-mauve-800">
      <svg
        className="absolute bottom-0 w-full h-64"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="rgba(0,119,190,1)"
          animate={{
            d: [
              "M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z",
              "M0,120 C240,70 480,170 720,120 C960,70 1200,170 1440,120 L1440,200 L0,200 Z",
              "M0,100 C240,150 480,50 720,100 C960,150 1200,50 1440,100 L1440,200 L0,200 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}
