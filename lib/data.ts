import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { TbShieldCode, TbUserCode, TbWorldCode } from "react-icons/tb";
import covicareImg from "@/public/covicare_project.png";
import sosaccidentImg from "@/public/sos_accident_project.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import paintAIImg from "@/public/paintai_project.png";

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
    title: "Data Scientist @ Bajaj Finserv",
    location: "Pune, India",
    description:
      "Developed and deployed ML/DL models for predicting loan acquisition propensity and mitigating risk in personal loans department",
    icon: React.createElement(TbUserCode),
    date: "2022 - 2024",
  },
  {
    title: "Software Intern @ ASAR",
    location: "Pune, India",
    description:
      "Engineered an R and Google Earth Engine pipeline for minimum travel time maps, and conducted a health-center access analysis in Python and R.",
    icon: React.createElement(TbWorldCode),
    date: "2021 - 2022",
  },
  {
    title: "Research & Development Intern  @  DRDO",
    location: "Remote",
    description:
      "Developed a TensorFlow deep learning framework for image steganography detection and created a React-Flask web interface for secure uploads and malicious payload analysis.",
    icon: React.createElement(TbShieldCode),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "PaintAI",
    description:
      "Sketch math equations or problems and get instant solutions from Google's Gemini AI, making math engaging and fun.",
    tags: ["Gen AI", "Prompt Engg.", "React", "TypeScript", "Python"],
    imageUrl: paintAIImg,
    videoLink: "https://youtu.be/i2jk-ToLiy8",
    codeLink: "https://github.com/AnuragGorkar/PaintAI",
    siteLink: "https://adgorkar-paintai.netlify.app/"
  },
  {
    title: "CoviCare",
    description:
      "A smart device and mobile app to record vitals, uses DL models for analyzing CT scans for Covid-19 diagnosis.",
    tags: ["Flutter", "IoT", "TensorFLow", "SQLite", "Java"],
    imageUrl: covicareImg,
    videoLink: "https://youtu.be/qxpOh35byF8?feature=shared",
  codeLink: "https://github.com/AnuragGorkar/CoviCareApp",
  siteLink: ""
  },
  {
    title: "SoS: Alarm System",
    description:
      "Raspberry Pi accident detection system with GPS and GSM alerts to nearest emergency services via app.",
    tags: ["Python", "Android", "React", "IoT", "Firestore"],
    imageUrl: sosaccidentImg,
    videoLink: "https://youtu.be/Ud3XzzwmJhU?feature=shared",
  codeLink: "https://github.com/AnuragGorkar/SOS-Car-Accident-Care-System-",
  siteLink: ""
  }
] as const;

export const skillsData = [
  {
    category: "Languages & Frameworks",
    skills: ["Python", "R", "C++", "Java", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Databricks", "Jupyter", "Tableau", "Selenium", "Apache Airflow", "GitHub"],
  },
  {
    category: "Big Data & Databases",
    skills: ["Apache Spark", "Hadoop", "MongoDB", "Cassandra", "Apache Kafka"],
  },
  {
    category: "ML Frameworks",
    skills: ["TensorFlow", "PyTorch", "PySpark", "Hugging Face", "OpenCV", "NLTK"],
  },
  {
    category: "Web & Application Development",
    skills: ["Flutter", "Android Studio", "Node.js", "React", "Flask", "Django", "RESTful APIs"],
  },
] as const;
