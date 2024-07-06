import Image from "next/image";

import Hero from "./components/hero";

import { ClipPathLinks } from "@/components/ui/clip-path";

// import { calsans } from "@/fonts/calsans";
export default function Home() {
  const backImage = "/bg.jpg";
  return (
    <main>
      <Hero />
      <section className="h-full w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* <TracingBeam className="px-6">
          <div className="max-w-4xl mx-auto antialiased pt-4 relative">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-10">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.badge}
                  </h2>

                  <p>{item.title}</p>

                  <div className="text-sm  prose prose-sm dark:prose-invert">
                    {item?.image && (
                      <Image
                        src={item.image}
                        alt="blog thumbnail"
                        height="1000"
                        width="1000"
                        className="rounded-lg mb-10 object-cover"
                      />
                    )}
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TracingBeam> */}
      </section>
      <section className="h-full w-full relative flex flex-col md:flex-row gap-4 my-12 md:my-48 md:px-96 px-8 justify-center items-center md:items-start">
        <h2 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-4xl">
          AboutUs
        </h2>
        <p className="font-serif text-lg">
          We are dedicated to transforming visions into reality. As a dynamic
          tech agency, we specialize in taking clients from concept to market
          leadership, providing end-to-end solutions{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent ">
            that drive growth from 0-1 and 1-100.
          </span>{" "}
          <br />
          <br />
          Our passionate team combines innovative technology with strategic
          insight, ensuring your success at every stage. Partner with us to
          launch and scale your business, building strong, lasting relationships
          along the way.
        </p>
      </section>

      <section>
        <ClipPathLinks />
      </section>
    </main>
  );
}
const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
      </>
    ),
    badge: "React",
    image: "",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
  },
];
