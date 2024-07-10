import Hero from "./components/hero";

import { ClipPathLinks } from "@/components/ui/clip-path";
import { cn } from "@/lib/utils";
import Contact from "@/components/contact";
import Link from "next/link";
import { dummyContent } from "@/components/data/work";
import Works from "./components/work";
import Clip from "./components/try";
export default function Home() {
  const backImage = "/whiteBg.jpg";
  return (
    <main>
      <Hero />
      <section className="h-full w-full flex items-center justify-center">
        <div
          className="w-screen"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          {/* <TracingBeam className="px-6 "> */}
          <div className="px-6 mt-5" id="work">
            <h2 className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent text-4xl text-center">
              How We work
            </h2>
            {dummyContent.map((item, index) => (
              <Works item={item} key={index} />
            ))}
          </div>
          {/* </TracingBeam> */}

          <section
            className="h-full w-full  flex flex-col md:flex-row gap-4 my-12 md:my-48 lg:px-96 px-8 justify-center items-center md:items-start"
            id="about"
          >
            <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-4xl">
              AboutUs
            </h2>

            <p className="font-serif text-lg text-black">
              We are dedicated to transforming visions into reality. As a
              dynamic tech agency, we specialize in taking clients from concept
              to market leadership, providing end-to-end solutions{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent ">
                that drive growth from 0-1 and 1-100.
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

      <section className="hidden md:block">
        <ClipPathLinks />
      </section>
      <section className="block md:hidden bg-slate-800">
        <h2 className="bg-gradient-to-r from-slate-200 via-slate-200 to-slate-100 bg-clip-text text-transparent text-5xl text-center py-24">
          Trusted By your Favourite Companies
        </h2>
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
          description="Led the development of their platform from an idea on a piece to paper to a revenue minting startup!
"
        />
      </section>
      <div
        className={cn(
          "pointer-events-none absolute h-[100vh] w-full [perspective:200px] bg-slate-800 overflow-y-scroll overflow-x-hidden"
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent to-90% ">
          <div className="flex flex-col md:flex-row gap-4 my-12 md:my-48 md:px-96 px-8 justify-center items-center md:items-start " id="contact">
            <div className="flex flex-col">
              <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-4xl font-semibold">
                Get in Touch
              </h2>
              <span className="bg-purple-400 w-20 h-1 rounded-lg ml-2 mt-[2px]"></span>
            </div>
            <Contact className="pointer-events-auto" />
          </div>
          <div className="flex h-[10rem] gap-4 px-8 justify-between  md:items-start mb-10 pointer-events-auto overflow-hidden">
            <div className="flex-col items-start px-5 mb-10 mt-10 md:mt-1">
              <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-4xl mb-3">
                HypeLiv
              </h2>
              <div className="flex gap-3">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[0.15rem]"
                >
                  <path
                    d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                    fill="white"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="bg-slate-100 bg-clip-text text-transparent text-sm mb-3">
                  Your email
                </p>
              </div>
              <div className="flex gap-3">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[0.15rem]"
                >
                  <path
                    d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z"
                    fill="white"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="bg-slate-100 bg-clip-text text-transparent text-sm mb-3">
                  Number
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-5 px-5 mb-10 mt-10 md:mt-1">
              <p className="text-white">Contact Us</p>
              <div className="flex flex-col text-white gap-3">
                <Link href="#" className="hover:text-purple-400">
                  Twitter
                </Link>
                <Link href="#">Instagram</Link>
                <Link href="#">Twitter</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
