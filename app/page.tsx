"use client";
import Hero from "./components/hero";
import { ClipPathLinks } from "@/components/ui/clip-path";
import { cn } from "@/lib/utils";
import Contact from "@/components/contact";
import Link from "next/link";
import { dummyContent } from "@/components/data/work";
import Works from "./components/work";
import Clip from "./components/try";
import Image from "next/image";

export default function Home() {
  const backImage = "/bg.png";

  return (
    <main>
      <Hero />
      <section className="h-full w-full flex items-center justify-center">
        <div
          className="w-scroll"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          {/* <TracingBeam className="px-6 "> */}
          <div className="px-6 mt-16 ml-5" id="work">
            <h2 className="text-black text-4xl text-center font-medium">
              How We work
            </h2>
        
            {dummyContent.map((item, index) => (
              <Works item={item} key={index} itemKey = {index} />
            ))}
          </div>
          {/* </TracingBeam> */}

          <section
            className="h-full w-full  flex flex-col md:flex-row gap-10 my-12 md:my-48 lg:px-96 px-8 justify-center items-center md:items-start"
            id="about"
          >
            <div className="flex flex-col justify-center md:justify-start md:items-start items-center md:w-1/3">
              <h2 className="text-[#8E7EDD] text-5xl  ">About Us</h2>
              <span className="bg-[#FFC7DB] w-20 h-1 rounded-lg mt-[3px] text-start"></span>
            </div>

            <p className=" text-lg text-black italic md:w-2/3 tracking-wider">
              We are dedicated to transforming visions into reality. As a
              dynamic tech agency, we specialize in taking clients from concept
              to market leadership, providing end-to-end solutions that{" "}
              <span className="bg-gradient-to-r from-[#8E7EDD] via-[#8E7EDD] to-[#EE7FA7] bg-clip-text text-transparent ">
                drive growth from 0-1 and 1-100.
              </span>{" "}
              <br />
              <br />
              Our passionate team combines innovative technology with strategic
              insight, ensuring your success at every stage. Partner with us to
              launch and scale your business, building strong, lasting
              relationships along the way.
            </p>
            {/* <input type="text" className="bg-black"></input> */}
          </section>
        </div>
      </section>

      <section className="hidden md:block" id="clients">
        <div className="bg-[#222222]">
          <h2 className="bg-gradient-to-b from-[#777777]  to-[#b1b0b0] bg-clip-text text-transparent text-6xl text-center py-24 font-medium">
            Trusted by your <br />
            favourite companies
          </h2>
        </div>
        <ClipPathLinks />
      </section>
      <section className="block md:hidden bg-[#222222]" id="clients">
        <h2 className="bg-gradient-to-b from-[#777777]  to-[#b1b0b0] bg-clip-text text-transparent text-4xl text-center py-24 font-medium">
          Trusted by your <br />
          favourite companies
        </h2>
        <div className="overflow-scroll h-96">
          <Clip
            title="Skillwipes"
            description="Led the development of the entire micro learning platform from scratch while identifying crucial user flows."
          />
          <Clip
            title="GrandShakes"
            description="Re developed the no-code platform to a custom webapp with a scalable infra serving 50+  schools in Australia."
          />
          <Clip
            title="Horsemouth"
            description="Led the development of their platform from an idea on a piece to paper to a revenue minting startup!"
          />
          <Clip
            title="/d."
            description="Re-developed the no-code platform to a custom webapp with a scalable infra serving 50+ schools in Australia"
          />
          <Clip
            title="Talent Carriage"
            description="Architected the internal tooling of India's only HRSS Service provider, to help them increase efficiency by 100 folds"
          />
          <Clip
            title="Skillwipes"
            description="Led the development of the entire micro learning platform from scratch while identifying crucial user flows."
          />
        </div>
      </section>
      <div
        className={cn(
          "pointer-events-none absolute h-[100vh] w-full [perspective:200px] bg-[#222222] overflow-y-scroll overflow-x-hidden"
          // className
        )}
      >
        <div className="absolute inset-0 [transform:rotateX(135deg)] mb-[22rem]">
          <div
            className={cn(
              "animate-grid",

              "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

              "[background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_0)]"
            )}
          />
        </div>
        <div className="absolute inset-0 [transform:rotateX(40deg)] mt-[36rem]  ">
          <div
            className={cn(
              "animate-grid",

              "[background-repeat:repeat] [background-size:60px_30px] [height:100vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

              "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_0)]"
            )}
          />
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#222222] to-transparent to-90% ">
          <div
            className="flex flex-col md:flex-row gap-4 my-12 md:my-48 md:px-96 px-8 justify-center items-center md:items-start "
            id="contact"
          >
            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className="text-[#8E7EDD] text-4xl font-semibold">
                Get in Touch
              </h2>
              <span className="bg-[#FFC7DB] w-20 h-1 rounded-lg ml-2 mt-[3px]"></span>
            </div>
            <Contact className="pointer-events-auto" />
          </div>
          <div className="flex h-[10rem] gap-4 px-8 md:px-16 justify-between  md:items-start mb-10 pointer-events-auto overflow-hidden">
            <div className="flex-col items-start px-5 mb-10 mt-10 md:mt-1">
              <h2 className="text-[#DFCAFA] md:text-3xl tracking-wider text-3xl font-satoshi mb-1">
                HYPELIV.
              </h2>
              <div className="flex gap-3">
                <Image
                  src="/Envelope.svg"
                  alt="alt"
                  width={30}
                  height={30}
                  className=""
                />
                <p className="bg-[#8E8E8E] bg-clip-text text-transparent text-lg mb-3 mt-3">
                  shivam@hypeliv.com
                </p>
              </div>
              <div className="flex gap-3">
                <Image src="/Phone.svg" alt="alt" width={30} height={30} />
                <p className="bg-[#8E8E8E] bg-clip-text text-transparent text-lg  md:mb-3">
                  +91 82871 32746
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-5 px-5 mb-10 mt-12 md:mt-5">
              <p className="text-[#8E8E8E] text-sm md:text-lg hidden md:block">
                Contact Us
              </p>
              <div className="flex flex-col text-[#8E8E8E] gap-3 text-lg">
                <Link href="#" className="hover:text-purple-400">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-purple-400">
                  Instagram
                </Link>
                <Link href="#" className="hover:text-purple-400">
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-[#8E8E8E] mb-10 py-10">
            © 2024 HYPERLIV AGENCY. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </main>
  );
}
