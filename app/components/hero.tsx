"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
type Props = {};

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = (props: Props) => {
  const handleContactScroll = () => {
    const aboutSection = document.querySelector("#contact");
    if (aboutSection) {
      const headerOffset = 170; // Adjust this value to your header height
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      console.log(offsetPosition, elementPosition, window.scrollY);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="h-[80vh] md:h-screen w-full flex flex-col md:flex-row justify-center items-center bg-[#222222] px-10 py-16 relative md:flex  md:items-center  ">
      <div className="md:w-2/3 mt-10">
        {/* <div
          className="md:w-2/3 mt-10 bg-cover  md:bg-[#222222] md:bg-transparent"
          style={{ backgroundImage: "url(/lightbulb.svg)" }}
        > */}
        <p className="text-4xl md:text-7xl md:font-semibold text-white text-center md:text-left md:ml-10 tracking-wider">
          Building Custom{" "}
          <span className="bg-gradient-to-r from-[#F77FA1] to-[#7F7CE3] bg-clip-text text-transparent font-satoshi">
            Solut
            <span className="italic mr-1">i</span>
            ons{" "}
          </span>
          from 0 to 1,
          <span className="bg-gradient-to-r from-[#F77FA1] to-[#7F7CE3] bg-clip-text text-transparent">
            Scal<span className="italic mr-1">i</span>ng {""}
          </span>
          from 1 to 100
        </p>
        <p className="md:text-left md:ml-10 text-white text-center mt-10 md:mt-5 text-lg hidden md:block">
          Your Trusted Partner in End-to-End Product
          <br /> Development, Strategic Scaling, and Sustainable Growth
        </p>
        <p className="md:hidden md:ml-10 text-white text-center mt-10 md:mt-5 text-lg ">
          Your Trusted Partner in End-to-End Product Development, Strategic
          Scaling, and Sustainable Growth
        </p>
        <div
          // href="#contact"
          className="flex items-center justify-center md:justify-start py-10 md:ml-10"
        >
          <Button
            className="bg-slate-100 text-black hover:gap-4 font-satoshi gap-2 rounded-md relative"
            onClick={handleContactScroll}
            style={{
              background:
                "linear-gradient(white, white) padding-box, linear-gradient(189.21deg, #F67FA2 6.82%, #8E7EDD 89.44%) border-box",
              border: "2px solid transparent",
            }}
          >
            Partner with us
            <Image
              src="/CaretCircleDown.svg"
              alt="alt"
              width={25}
              height={25}
            />
          </Button>
        </div>
      </div>

      <div className="md:w-1/3 hidden md:block relative blur-sm2 hover:blur-0 border-gray-700 ">
        <Image
          src="/Lightbulb.svg"
          alt="alt"
          width={10}
          height={10}
          className="w-full h-auto object-cover absolute  md:static md:w-auto md:h-auto border-gray-800"
        />
      </div>
    </div>
  );
};

export default Hero;
