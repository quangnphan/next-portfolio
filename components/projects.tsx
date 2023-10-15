"use client";

import React,{useEffect,useState} from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const [inViewThreshold, setInViewThreshold] = useState(0.4);

  // Check the screen width and set the threshold
  useEffect(() => {
    const handleResize = () => {
      const threshold = window.innerWidth < 768 ? 0.2 : 0.4;
      setInViewThreshold(threshold);
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const { ref } = useSectionInView("Projects", inViewThreshold);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {projectsData.map((project, index) => (
          <div key={index} className="group">
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}