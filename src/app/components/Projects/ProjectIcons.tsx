import {
  SiAxios,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const ProjectsIcons = [
  {
    id: 1,
    stack: [
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiRedux, name: "Redux" },
      { icon: SiPrisma, name: "Prisma" },
      { icon: SiPostgresql, name: "PostgreSQL" },
      { icon: SiStripe, name: "Stripe" },
    ],
  },
  {
    id: 2,
    stack: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: TbBrandFramerMotion, name: "Framer Motion" },
    ],
  },
  {
    id: 3,
    stack: [
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiReactrouter, name: "React Router" },
      { icon: SiAxios, name: "Axios" },
    ],
  },
  {
    id: 4,
    stack: [
      { icon: SiHtml5, name: "HTML5" },
      { icon: SiSass, name: "Sass" },
      { icon: SiJavascript, name: "JavaScript" },
    ],
  },
];
