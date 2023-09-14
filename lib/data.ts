import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import airtalk from "@/public/images/airtalk.png";
import ecom from "@/public/images/ecom.png";
import ecomAdmin from "@/public/images/ecom-admin.png";
import youtubeApp from "@/public/images/youtube.png";
import tipCal from "@/public/images/tip-cal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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
      "I graduated after 4 years of studying. Actively looking for a job with a bachelor's degree in Computer Information Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "IT Support",
    location: "Houston, TX",
    description:
      "I worked as an IT support in a startup company. I also learnt about web development.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2022 - May 2022",
  },
  {
    title: "Front-End Developer",
    location: "Houston, TX",
    description:
      "I'm now a front-end developer. My stack includes React, Material UI, Ant Design, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Mar 2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Airtalk Wireless",
    description:
      "I worked as a front-end developer on this project for over 1 year at HTH Communications. Big e-commerce website working with Government contract.",
    tags: ["React", "Typescript", "Laravel", "Ant Design", "SCSS"],
    imageUrl: airtalk,
  },
  {
    title: "E-Commerce",
    description:
      "Full Stack Web App written in MERN stack. Users can buy products, modify cart and checkout.",
    tags: ["React", "Nodejs", "Expressjs", "MongoDB", "Material UI", "Redux Toolkit", "Stripejs"],
    imageUrl: ecom,
  },
  {
    title: "Admin Dashboard",
    description:
      "Connected to the same database with the e-commerce app, users will be able to modify products/orders with protected routes.",
    tags: ["React", "Expressjs", "Nodejs", "MongoDB", "Material UI"],
    imageUrl: ecomAdmin,
  },
  {
    title: "Youtube",
    description:
      "Youtube Clone using React and Material UI. Fetched data using Youtube api v3.",
    tags: ["React", "Material UI", "react-router-dom", "Axios"],
    imageUrl: youtubeApp,
  },
  {
    title: "Tip Calculator",
    description:
      "Simple app to quickly calculate the tip for each person.",
    tags: ["React", "CSS"],
    imageUrl: tipCal,
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
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Bootstrap",
  "jQuery",
  "Ant Design",
  "Material UI",
  "SCSS/SASS",
] as const;