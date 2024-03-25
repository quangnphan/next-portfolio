"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  const expYear = new Date().getFullYear() - 2022;

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
        With more than {expYear} years of experience as a React developer in the
        telecommunications and software industries, I've had the privilege of
        contributing to the development of various web applications. These
        include ERP and CRM systems for warehouse management, as well as
        accounting software that have collectively served over 400,000 customers
        through a government program. This experience has allowed me to refine
        my skills in crafting user-friendly and efficient interfaces.
      </p>
    </motion.section>
  );
}
