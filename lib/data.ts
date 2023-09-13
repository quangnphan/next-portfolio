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
  // {
  //   name: "About",
  //   hash: "#about",
  // },
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Airtalk Wireless",
    description:
      "I worked as a front-end developer on this project for over 1 year. Big e-commerce website working with Government contract.",
    tags: ["React", "Typescript", "Laravel", "Ant Design", "SCSS"],
    imageUrl: airtalk,
  },
  {
    title: "E-Commerce",
    description:
      "Full Stack Web App written in MERN stack. Users can buy products, modify cart and checkout.",
    tags: ["React", "Nodejs", "Expressjs", "MongoDb", "Material UI", "Redux Toolkit", "Stripejs"],
    imageUrl: ecom,
  },
  {
    title: "Admin Dashboard",
    description:
      "Connected to the same database with the e-commerce app, users will be able to modify products/orders with protected routes.",
    tags: ["React", "Expressjs", "Nodejs", "MongoDb", "Material UI"],
    imageUrl: ecomAdmin,
  },
  {
    title: "Youtube",
    description:
      "Youtube Clone.",
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