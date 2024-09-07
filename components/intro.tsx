"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Typewriter } from "react-simple-typewriter";
import anuragphoto from "@/public/anuragphoto.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/anuragphoto.jpg"
              alt="Anurag Gorkar Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:text-gray-250"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>
          Hello, this is <b>Anurag Gorkar</b>.<br />
        </span>
        <span>I&apos;m a </span>
        <span className="font-bold">
          <Typewriter
            words={[
              "programmer",
              "data scientist",
              "problem solver",
              "cricket lover🏏",
            ]} // Array of words
            loop={true} // If you want it to loop infinitely
            cursor={true}
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/anurag-gorkar-resume.pdf"
          target="_blank"
        >
          Open CV{" "}
          <IoOpenOutline className="opacity-60 group-hover:translate-y transition" />
        </a>

        {/* <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/anurag-gorkar/"
          target="_blank"
          style={{ fontSize: "1.75rem", padding: "0.75rem" }} // Increased size and padding
        >
          <BsLinkedin style={{ color: "#0077b5", fontSize: "1.8rem" }} />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/AnuragGorkar"
          target="_blank"
          style={{ fontSize: "1.75rem", padding: "0.75rem" }} // Increased size and padding
        >
          <FaGithubSquare style={{ fontSize: "1.8rem" }} />
        </a> */}

<a
  className="bg-white p-4 text-[#0077b5] dark:text-[#00a0dc] hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
  href="https://www.linkedin.com/in/anurag-gorkar/"
  target="_blank"
  style={{ fontSize: "1.75rem", padding: "0.75rem" }}
>
  <BsLinkedin
    style={{
      fontSize: "1.55rem",
    }}
  />
</a>

<a
  className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
  href="https://github.com/AnuragGorkar"
  target="_blank"
  style={{ fontSize: "1.75rem", padding: "0.75rem" }}
>
  <FaGithubSquare
    style={{
      fontSize: "1.8rem", // Same font size for GitHub logo
    }}
  />
</a>

      </motion.div>
    </section>
  );
}
