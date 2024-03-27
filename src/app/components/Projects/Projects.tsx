import React from "react";
import Image from "next/image";
import { title } from "process";
import {
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Title from "../ui/Title";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma],
      link: "http://localhost:3000",
      cover: "./project01.png",
      background: "bg-indigo-500",
    },
    {
      title: "MyBlog",
      stack: [SiNextdotjs, SiTypescript, SiTailwindcss],
      link: "http://localhost:3000",
      cover: "./project02.png",
      background: "bg-green-500",
    },
    {
      title: "CineQwik",
      stack: [SiReact, SiReactrouter, SiCss3],
      link: "http://localhost:3000",
      cover: "./project03.png",
      background: "bg-blue-500",
    },
    {
      title: "GTA VI Landing Page",
      stack: [SiHtml5, SiSass, SiJavascript],
      link: "http://localhost:3000",
      cover: "./project04.png",
      background: "bg-pink-500",
    },
  ];
  return (
    <section className="py-10 p-5 sm:p-0" id="projects">
      <Title
        text="Projects 🎨"
        className="flex flex-col mt-28 items-center justify-center text-3xl rotate-6"
      />
    </section>
  );
}
