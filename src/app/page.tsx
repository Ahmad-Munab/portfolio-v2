"use client";

import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-10  w-full h-max ">
      <div className="w-full flex flex-col gap-y-10 bg-gradient-to-b from-transparent to-black from-80% xl:px-[16%] md:[12%] sm:px-[10%] px-4 pb-8">
        {" "}
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
