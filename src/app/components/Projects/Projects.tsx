import React from "react";
import Image from "next/image";
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
import Title from "../../../components/ui/Title";
import { Link } from "lucide-react";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma],
      link: "http://localhost:3000",
      cover: "/assets/projects/project01.png",
      background: "bg-indigo-500",
    },
    {
      title: "MyBlog",
      stack: [SiNextdotjs, SiTypescript, SiTailwindcss],
      link: "http://localhost:3000",
      cover: "/assets/projects/project02.png",
      background: "bg-green-500",
    },
    {
      title: "CineQwik",
      stack: [SiReact, SiReactrouter, SiCss3],
      link: "http://localhost:3000",
      cover: "/assets/projects/project03.png",
      background: "bg-blue-500",
    },
    {
      title: "GTA VI Landing Page",
      stack: [SiHtml5, SiSass, SiJavascript],
      link: "http://localhost:3000",
      cover: "/assets/projects/project04.png",
      background: "bg-pink-500",
    },
  ];
  return (
    <div className="py-10 p-5 sm:p-0" id="projects">
      <Title
        text="Projects 🎨"
        className="flex flex-col mt-28 items-center justify-center text-3xl rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20">
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover imageUrl={project.cover}>
                  <h2>{project.title}</h2>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
