import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaCalculator } from "react-icons/fa";
import airtalk from "@/public/images/airtalk.jpg";
import ecom from "@/public/images/ecom.jpg";
import ecomAdmin from "@/public/images/ecom-admin.jpg";
import youtubeApp from "@/public/images/youtube.jpg";
import tipCal from "@/public/images/tip-cal.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Houston",
    location: "Houston, TX",
    description:
      "Graduated with a Bachelor of Science degree in Computer Information Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "IT Support",
    location: "Houston, TX",
    description: "Worked as an IT Support.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - May 2022",
  },
  {
    title: "Front-End Developer",
    location: "Houston, TX",
    description:
      "Worked as a front-end developer in Telecommunication industry. Built E-commerce websites, CRM, and warehouse management solutions for U.S. Government programs.",
    icon: React.createElement(FaReact),
    date: "Mar 2022 - Aug 2023",
  },
  {
    title: "Software Developer",
    location: "The Woodlands, TX",
    description:
      "Join a startup, build SaaS ERP Accounting software written in Typescript, React, Kendo UI and ActiveReportsJS.",
    icon: React.createElement(FaCalculator),
    date: "Nov 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Airtalk Wireless",
    description:
      "I worked as a front-end developer on this project. E-commerce website working with Government program.",
    tags: ["React", "Typescript", "Laravel", "Ant Design", "SCSS"],
    imageUrl: airtalk,
    linkWeb: "https://airtalkwireless.com/",
    linkGit: "",
  },
  {
    title: "E-Commerce",
    description: "Full stack e-commerce website written in MERN stack.",
    tags: [
      "React",
      "Nodejs",
      "Expressjs",
      "MongoDB",
      "Material UI",
      "Redux Toolkit",
      "Stripejs",
    ],
    imageUrl: ecom,
    linkWeb: "https://mernstack-ecommerce-03q21.netlify.app/",
    linkGit: "https://github.com/quangnphan/mern-stack-ecommerce",
  },
  {
    title: "Admin Dashboard",
    description:
      "CMS for the e-commerce site with protected routes, syncing between two apps.",
    tags: ["React", "Expressjs", "Nodejs", "MongoDB", "Material UI"],
    imageUrl: ecomAdmin,
    linkWeb: "https://admin-ecom-qp0321.netlify.app/",
    linkGit: "https://github.com/quangnphan/admin-ecommerce",
  },
  {
    title: "Youtube",
    description:
      "Youtube Clone using React and Material UI. Fetched data using Youtube api v3.",
    tags: ["React", "Material UI", "react-router-dom", "Axios"],
    imageUrl: youtubeApp,
    linkWeb: "https://youtube-appppp.netlify.app/",
    linkGit: "https://github.com/quangnphan/youtube-clone-v2",
  },
  {
    title: "Tip Calculator",
    description: "Simple app to quickly calculate the tip for each person.",
    tags: ["React", "CSS"],
    imageUrl: tipCal,
    linkWeb: "https://quangnphan.github.io/tip-calculator/",
    linkGit: "https://github.com/quangnphan/tip-calculator",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Rest API",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Bootstrap",
  "jQuery",
  "Ant Design",
  "Material UI",
  "Kendo UI",
  "SCSS/SASS",
  "ActiveReportsJS",
] as const;
