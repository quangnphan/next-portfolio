"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 1);

  const expYear = new Date().getFullYear() - 2021;

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
        Frontend Software Developer with more than {expYear} years of
        experience in building web applications, ERP accounting software, CRM,
        warehouse management systems, and e-commerce solutions for U.S.
        Government programs. Proficient in JavaScript, TypeScript, React,
        Next.js, Node.js, HTML, CSS, and UI libraries like Ant Design, Kendo UI,
        Material UI, and Tailwind CSS.
      </p>
    </motion.section>
  );
}
