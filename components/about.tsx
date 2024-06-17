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
        With more than {expYear} years of experience in the software and
        telecommunications industry as a Frontend Developer, I have successfully
        built a wide range of web applications, including ERP, CRM, OSS
        solutions, and specialized accounting platforms. Additionally, I've
        developed e-commerce applications that have served over 400,000
        customers through government programs. My expertise spans a diverse tech
        stack, including JavaScript, React.js, Next.js, TypeScript, Node.js,
        HTML, CSS, and various UI libraries such as Ant Design, Kendo UI,
        Material UI, and Tailwind CSS.
      </p>
    </motion.section>
  );
}
