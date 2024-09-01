// import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  const handleScroll = () => {
    const aboutSection = document.querySelector("#about");
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
  const handleWorkScroll = () => {
    const aboutSection = document.querySelector("#work");
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
    <div className="fixed left-0 right-0 top-0 z-20 bg-[#222222] backdrop-blur p-4 px-8">
      <nav className="flex h-14 items-center justify-between px-4 md:gap-[360px] gap-16 ">
        <Link href="/" className="">
          {/* <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl"> */}
          <h2 className="text-[#DFCAFA] md:text-3xl tracking-wider text-3xl font-satoshi">
            HYPELIV.
          </h2>
        </Link>

        <div className=" flex text-white gap-10">
          <div className="hidden md:flex items-center gap-10">
            {/* <Link href="#work" className=""> */}
            <a
              className="text-white hover:underline underline-offset-8 hover:cursor-pointer"
              onClick={handleWorkScroll}
            >
              How we work
            </a>
            {/* </Link> */}
            {/* <Link href="#about" passHref legacyBehavior> */}
            <a
              className="text-white hover:underline underline-offset-8 hover:cursor-pointer"
              onClick={handleScroll}
              // href=""
            >
              About us
            </a>
            {/* </Link> */}
            <Link href="#clients">
              <p className="text-white hover:underline underline-offset-8">
                Clients
              </p>
            </Link>
          </div>
          {/* <Link href="#contact"> */}
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
          {/* </Link> */}
        </div>
        {/* <div className="flex items-center gap-10 text-white md:hidden">
          awsfdgg
        </div> */}
      </nav>
    </div>
  );
}
