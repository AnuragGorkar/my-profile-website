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
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Engineering</span>, I honed my programming and analytics skills by
        working as a data scientist for 2 years. I am currently a <b>MCS student @ NCSU</b>.       
         My core stack is{" "}
        <span className="font-medium">
          LLM&apos;s, ML/DL, Python, Andriod and React.js
        </span>
        I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">internship opportunities</span> as a SDE or data scientist.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and swimming. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
