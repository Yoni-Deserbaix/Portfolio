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
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

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
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiSupabase, name: "Supabase" },
    ],
  },
  {
    id: 3,
    stack: [
      { icon: SiReact, name: "React" },
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
