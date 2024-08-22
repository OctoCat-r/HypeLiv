"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

type Props = {
  item: {
    badge: string;
    title: string;
    image?: string;
    description: string;
  };
  key: Number;
};

function Works({ item, key }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["0 1", "1.33 1"],
    offset: ["end end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scaleText = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  return (
    <div className="flex justify-center items-center gap-5 ">
      <div>
        <motion.div
          className="rounded-full w-12 h-16 bg-purple-400 ml-2 flex items-center justify-center text-white text-lg"
          ref={ref}
          style={{
            scale,
          }}
        >
          {item.badge}
        </motion.div>
        <motion.div
          className="w-1 h-72 md:h-60 bg-purple-400 ml-[30px] border-dashed"
          ref={ref}
          style={{
            scale,
          }}
        ></motion.div>
      </div>
      <motion.div
        className="mb-10 mt-16 w-full md:w-1/2 md:px-12 text-black px-4"
        ref={ref}
        style={{
          //   scale: scrollYProgress,
          //   opacity: scrollYProgress,
          scale: scaleText,
          opacity: scaleText,
        }}
      >
        {/* <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
          {item.badge}
        </h2> */}
        {item?.image && (
          <Image
            src={item.image}
            alt="blog thumbnail"
            height="70"
            width="70"
            className="rounded-lg object-cover"
          />
        )}

        <p className="text-xl font-semibold mb-3 mt-4 tracking-wide">
          {item.title}
        </p>

        <div className="text-lg dark:prose-invert text-black ">
          {item.description}
        </div>
      </motion.div>
    </div>
  );
}

export default Works;
