// import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className=" fixed left-0 right-0 top-0 z-20 bg-slate-800 backdrop-blur p-4 px-8">
      <nav className="flex h-14 items-center justify-between px-4 ">
        <Link href="/hero">
          {/* <h2 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl"> */}
          <h2 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl tracking-wider">
            HYPELIV
          </h2>
        </Link>

        <div className="items-center gap-10 hidden md:flex  text-white">
          <Link href="/work" className="">
            <p className="text-white hover:underline underline-offset-8">
              How we work
            </p>
          </Link>
          <Link href="/about">
            <p className="text-white hover:underline underline-offset-8">
              About us
            </p>
          </Link>
          <Link href="/clients">
            <p className="text-white hover:underline underline-offset-8">
              Clients
            </p>
          </Link>
        </div>
        <Button className="bg-slate-100 text-black hover:gap-4">
          Partner with us
          <Image src="/CaretCircleDown.svg" alt="alt" width={25} height={25} />
        </Button>
      </nav>
    </div>
  );
}
