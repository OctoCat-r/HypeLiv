"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
type Props = {};

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const Hero = (props: Props) => {
  return (
    // <div className="h-screen w-full flex flex-col md:flex-row justify-center items-center bg-slate-800 px-10 py-16 gap-24">
    //   <div className="md:w-1/2">
    //     <p className="text-7xl font-semibold text-white text-center md:text-left ml-10">
    //       Building Custom{" "}
    //       <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
    //         Solutions{" "}
    //       </span>
    //       from 0 to 1,{" "}
    //       <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
    //         Scaling{" "}
    //       </span>
    //       from 1 to 100
    //     </p>
    //     <p className="md:text-left ml-10 text-white text-center mt-10 md:mt-5 text-lg">
    //       Your Trusted Partner in End-to-End Product Development, Strategic
    //       Scaling, and Sustainable Growth
    //     </p>
    //   </div>

    //   <div className="md:w-1/2 relative gap-6">
    //     <Image
    //       src="/time.svg"
    //       alt="alt"
    //       width={400}
    //       height={600}
    //       className="w-full h-auto object-cover absolute  md:static md:w-auto md:h-auto mr-5"
    //     />
    //     {/* <SVG /> */}
    //     {/* <Image src="/Lightbulb2.svg" alt="alt" width={1000} height={600} />
    //      */}
    //   </div>
    // </div>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Building Custom{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Solutions{" "}
        </span>{" "}
        and <br />{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Scaling{" "}
        </span>{" "}
        from 1 to 100
      </motion.h1>
      <motion.p
        className=" text-white text-center mt-10 md:mt-5 text-lg font-serif"
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        Your Trusted Partner in End-to-End Product Development, Strategic
        Scaling, and Sustainable Growth{" "}
      </motion.p>
    </LampContainer>
  );
};

export default Hero;
