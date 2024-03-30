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
    id: 1,
    title: "Portfolio",
    subtitle: "Réalisation de mon portfolio",
    description:
      "Mon portfolio personnel optimisé et réalisé en Next.js. Ce projet m'a permis de m'entraîner et perfectionner mes compétences en frontend. Il reflète mes compétences, mes réalisations, offrant aux visiteurs un aperçu authentique de mon travail ainsi que de mon style.",
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma],
    secondSubtitle: "Compétences obtenues :",
    skillsGained: [
      "• Réalisation de maquettes Figma.",
      "• Utilisation de composants réutilisables pour le style.",
    ],
    thirdSubtitle: "Technologies utilisées",
    link: "/project/1",
    cover: "/assets/projects/project01.png",
    background: "bg-indigo-500",
    githubLink: "https://github.com/Yoni-Deserbaix/portfolio-v3",
    demo:"",
  },
  {
    id: 2,

    title: "MyBlog",
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss],
    link: "/project/2",
    cover: "/assets/projects/project02.png",
    background: "bg-green-500",
  },
  {
    id: 3,

    title: "CineQwik",
    stack: [SiReact, SiReactrouter, SiAxios],
    link: "/project/3",
    cover: "/assets/projects/project03.png",
    background: "bg-green-500",
  },
  {
    id: 4,

    title: "GTA VI Landing Page",
    stack: [SiHtml5, SiSass, SiJavascript],
    link: "/project/4",
    cover: "/assets/projects/project04.png",
    background: "bg-indigo-500",
  },
];
