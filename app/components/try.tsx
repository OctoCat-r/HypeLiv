"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
};

function Clip({ title, description }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["0 1", "1.33 1"],
    offset: ["0 1", "0.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scaleText = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="text-white px-20 flex-col flex items-center justify-center p-6"
        ref={ref}
        style={{
          scale: scaleText,
          opacity: scaleText,
        }}
      >
        <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-4xl">
          {title}
        </h2>

        <div className="text-lg  dark:prose-invert text-white text-center">
          {description}
        </div>
      </motion.div>
    </div>
  );
}

export default Clip;
