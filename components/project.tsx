"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode } from "react-icons/fa6"; // Import GitHub icon
import { BsCode, BsYoutube } from "react-icons/bs"; // Import Code and YouTube icons

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  videoLink,
  codeLink,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-4 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-4 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-4 sm:pl-10 sm:pr-1 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[16rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-1 mb-1 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>

          {/* Buttons Section */}
          <div className="flex justify-center gap-2 mb-[0.75rem]">
            <a
              className="bg-white p-[0.45rem] text-gray-700 flex items-center justify-center rounded-full focus:scale-[1.1] hover:scale-[1.1] active:scale-105 transition cursor-pointer borderBlack"
              href={videoLink}
              target="_blank"
              style={{ fontSize: "1rem" }} // Smaller font size
            >
              <BsYoutube style={{ fontSize: "1.2rem", color: "red" }} />{" "}
              {/* Smaller icon */}
            </a>

            <a
              className="bg-white p-[0.45rem] text-gray-700 flex items-center justify-center rounded-full focus:scale-[1.1] hover:scale-[1.1] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
              href={codeLink}
              target="_blank"
              style={{ fontSize: "1rem" }} // Smaller font size
            >
              <FaCode style={{ fontSize: "1.2rem" }} /> {/* Smaller icon */}
            </a>
          </div>

          {/* Tags Section */}
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.50rem] rounded-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-[12rem]"
        />
      </section>
    </motion.div>
  );
}
