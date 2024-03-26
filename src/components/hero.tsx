"use client";

import { slideBottom, heroSlideLeft } from "@/lib/motion-setting";
import { delay, motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-full md:py-14 py-10 flex lg:flex-row flex-col lg:justify-between justify-start gap-y-8 ">
      <div
        // {...heroSlideLeft}
        className="flex flex-col justify-between items-start gap-y-10 pb-10 w-4/6"
      >
        <motion.h1
          initial={{ x: "-4vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="md:text-6xl text-4xl text-white font-bold"
        >
          Hello there 👋 <br />
          <span className=" underline underline-offset-8 decoration-green-500">
            {"I'm Ahmad Munab"}
          </span>
        </motion.h1>
        <motion.p
          initial={{ x: "-4vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.25 }}
          className="md:text-xl text-lg text-gray-300 lg:w-10/12"
        >
          {
            "Based in Bangladesh, I'm a web developer passionate about building modern web applications with modest technologies."
          }
        </motion.p>
        <motion.div
          initial={{ x: "-4vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-white hover:text-green-400 transition-all cursor-pointer">
            Contact Me 📭
          </h1>
          <div className="w-40 h-2 bg-green-500 rounded-full "></div>
          <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
        </motion.div>
      </div>
      <motion.div {...slideBottom} className="w-1/6 relative lg:mr-8 ">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative ">
          <div className="bg-[#8359f6] absolute top-[-30%] left-[-10%] rotate-[40deg] -z-10 h-[20rem] w-[14rem] rounded-full blur-[6.5rem] "></div>

          <div className="flex gap-3 translate-x-8">
            <div className=" w-24 h-24 rounded-2xl bg-green-500"></div>
            <div
              className=" w-24 h-24 rounded-full bg-indigo-500"
              style={{ transitionDuration: "3s" }}
            ></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div
              className=" w-24 h-24 rounded-2xl bg-indigo-500"
              style={{ transitionDuration: "3s" }}
            ></div>
            <div
              className=" w-24 h-24 rounded-full bg-green-500"
              style={{ transitionDuration: "3s" }}
            ></div>
          </div>
          <div className=" glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className=" absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <a download="" href="/.pdf">
            <button
              className="bg-transparent relative text-xl p-[1px] overflow-hidden"
              style={{ borderRadius: "0.5rem" }}
            >
              <div
                className="absolute inset-0"
                style={{ borderRadius: "calc(0.5rem * 0.96)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="absolute h-full w-full"
                  width="100%"
                  height="100%"
                >
                  <rect
                    fill="none"
                    width="100%"
                    height="100%"
                    rx="30%"
                    ry="30%"
                  ></rect>
                </svg>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    display: "inline-block",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="h-20 w-20 opacity-80 bg-radial-gradient(var(--sky-500)_40%,transparent_60%)"></div>
                </div>
              </div>
              <div
                className="relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased p-3 font-semibold"
                style={{ borderRadius: "calc(0.5rem * 0.96)" }}
              >
                <p>📢 Available for Work</p>
              </div>
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
