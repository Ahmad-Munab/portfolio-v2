"use client";

import Link from "next/link";
import React from "react";
import Socials from "./socials";

import { motion } from "framer-motion";
import { slideBottom } from "@/lib/motion-setting";

const Navbar = () => {
  return (
    <motion.div {...slideBottom} className="flex justify-between md:py-12 py-8">
      <Link
        href={"#"}
        className="sm:text-3xl text-2xl text-white font-bold underline underline-offset-8 decoration-green-500 -rotate-3"
      >
        Ahmad Munab 💻
      </Link>
      <Socials />
    </motion.div>
  );
};

export default Navbar;
