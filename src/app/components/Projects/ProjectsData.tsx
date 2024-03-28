import {
  SiAxios,
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

export const ProjectsData = [
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
    stack: [SiReact, SiReactrouter, SiAxios],
    link: "http://localhost:3000",
    cover: "/assets/projects/project03.png",
    background: "bg-green-500",
  },
  {
    title: "GTA VI Landing Page",
    stack: [SiHtml5, SiSass, SiJavascript],
    link: "http://localhost:3000",
    cover: "/assets/projects/project04.png",
    background: "bg-indigo-500",
  },
];
