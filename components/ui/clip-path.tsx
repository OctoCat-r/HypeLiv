"use client";
import React, { MouseEvent } from "react";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiSpotify,
  SiTiktok,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";

export const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-400 border border-neutral-400">
      {/* <div className="grid grid-cols-1 divide-x divide-neutral-400">
        <LinkBox
          Icon={SiGoogle}
          href="#"
          title="Trusted by your<br/> favourite companies"
          text=""
          padding1={40}
        />
        
      </div> */}
      <div className="grid grid-cols-2 divide-x divide-neutral-400">
        <LinkBox
          Icon={SiGoogle}
          href="#"
          title="skillswipes"
          text=" Led the development of entire micro learning platform from scratch
          while identifying crucial user flows"
          padding1={20}
        />
        <LinkBox
          Icon={SiShopify}
          href="#"
          title="Talent Carriage"
          text="Architected the internal tooling of India's only HRSS Service provider, to help them increase efficiency by 100 folds"
          padding1={20}
        />
      </div>
      {/* <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={SiApple} href="#" />
        <LinkBox Icon={SiSoundcloud} href="#" />
        <LinkBox Icon={SiAdobe} href="#" />
        <LinkBox Icon={SiFacebook} href="#" />
      </div> */}
      <div className="grid grid-cols-3 divide-x divide-neutral-400">
        <LinkBox
          Icon={SiTiktok}
          href="#"
          title="/d."
          text="Re-developed the no-code platform to a custom webapp with a scalable infra serving 50+ schools in Australia"
          padding1={10}
        />
        <LinkBox
          Icon={SiSpotify}
          href="#"
          title="horsemouth"
          text="Led the development of thier platform from an idea on a piece of paper to a revenue minting startup"
          // padding1 = 28
          padding1={10}
        />
        <LinkBox
          Icon={SiLinkedin}
          href="#"
          title="GrandShake"
          text="Re-developed the no-code platform to a custom webapp with a scalable infra serving 50+ schools in Australia"
          padding1={10}
        />
      </div>
    </div>
  );
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
  [key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({
  Icon,
  href,
  text,
  title,
  padding1,
}: {
  Icon: IconType;
  href: string;
  text: string;
  title: string;
  padding1: Number;
}) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e: MouseEvent) => {
    const box = (e.target as HTMLElement).getBoundingClientRect();

    const proximityToLeft = {
      proximity: Math.abs(box.left - e.clientX),
      side: "left" as Side,
    };
    const proximityToRight = {
      proximity: Math.abs(box.right - e.clientX),
      side: "right" as Side,
    };
    const proximityToTop = {
      proximity: Math.abs(box.top - e.clientY),
      side: "top" as Side,
    };
    const proximityToBottom = {
      proximity: Math.abs(box.bottom - e.clientY),
      side: "bottom" as Side,
    };

    const sortedProximity = [
      proximityToLeft,
      proximityToRight,
      proximityToTop,
      proximityToBottom,
    ].sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };

  const handleMouseEnter = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };

  const handleMouseLeave = (e: MouseEvent) => {
    const side = getNearestSide(e);

    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };

  return (
    <a
      href={href}
      onMouseEnter={(e) => {
        handleMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave(e);
      }}
      className="relative grid h-30 w-full place-content-center md:h-72 bg-[#222222]"
    >
      {/* <Icon className="text-xl sm:text-3xl lg:text-4xl" /> */}
      <h2 className="text-4xl font-bold text-slate-300">{title}</h2>
      {/* <p className="text-7xl text-slate-200 p-40 text-center">{text}</p> */}

      <div
        ref={scope}
        style={{
          clipPath: BOTTOM_RIGHT_CLIP,
        }}
        className="absolute inset-0 grid place-content-center bg-gradient-to-b from-[#8E7EDD]  to-[#F67FA2] text-white text-center gap-3"
      >
        {/* <Icon className="text-xl sm:text-3xl md:text-4xl" /> */}
        <h2 className="text-3xl font-satoshi font-bold">{title}</h2>
        <p className={`text-base px-${padding1 ? padding1 : 40}`}>{text}</p>
      </div>
    </a>
  );
};
