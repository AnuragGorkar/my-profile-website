"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      {skillsData.map((categoryData, categoryIndex) => (
        <div key={categoryIndex} className="mb-8">
          {/* Category Name */}
          <motion.h3
            className="mb-4 text-2xl text-center font-extralight text-gray-500 dark:text-white"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={categoryIndex}
          >
            {categoryData.category}
          </motion.h3>

          {/* Skills List */}
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {categoryData.skills.map((skill, skillIndex) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-3 py-[0.2rem] font-size: 0.95rem line-height: 1.25rem dark:bg-white/10 dark:text-white/80"
                key={skillIndex}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={categoryIndex * 2.5 + skillIndex} // Delay based on category and skill index
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
