"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

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
        With over {expYear} years of experience as a frontend developer in the
        software and telecommunications industries, I have contributed to the
        development of diverse web applications, including ERP, CRM, and OSS
        systems for accounting and warehouse management, as well as an
        e-commerce website. These applications have collectively served over
        400,000 customers through a government program. This experience has
        honed my skills in creating user-friendly and efficient interfaces.
      </p>
    </motion.section>
  );
}
