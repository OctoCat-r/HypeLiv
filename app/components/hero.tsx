"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Bulb from "@/components/bulb";
type Props = {};
import { PinContainer } from "@/components/ui/3d-pin";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = (props: Props) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return (
    <div className="h-[100vh] w-full flex justify-between items-center bg-slate-800 px-10">
      <div>
        <p className="text-7xl font-semibold text-white text-center md:text-left ml-10">
          Building Custom{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Solutions{" "}
          </span>
          from 0 to 1,{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Scaling{" "}
          </span>
          from 1 to 100
        </p>
      </div>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        className="hidden"
      >
        <div></div>
      </PinContainer>
      {/* <Image src="/Lightbulb2.svg" alt="alt" width={1000} height={600} />
       */}
    </div>
  );
};

export default Hero;
