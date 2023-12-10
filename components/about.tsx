"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>What I do</SectionHeading>
      <p className="mb-3">
        With years of experience working as a React developer in Software and
        Telecommunications industry, I've had the privilege of contributing to
        the development of web applications that have served over 400,000
        customers through a Government program. This experience has allowed me
        to refine my skills in crafting user-friendly and efficient interfaces.
      </p>
    </motion.section>
  );
}
