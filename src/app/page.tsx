"use client";

import ContactSection from "@/components/contact-section";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-max">
      <div className="w-screen flex flex-col gap-y-10 bg-gradient-to-b from-transparent to-black from-80% xl:px-[16%] md:[12%] sm:px-[10%] px-4 pb-8">
        {" "}
        <Navbar />
        <Hero />
      </div>
      <div className="w-full flex flex-col items-center gap-y-10 bg-black xl:px-[16%] md:[12%] sm:px-[10%] px-4 pb-8">
        <ContactSection />
      </div>
    </div>
  );
}
