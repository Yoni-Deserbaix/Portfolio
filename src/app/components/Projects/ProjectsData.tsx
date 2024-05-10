import {
  SiAxios,
  SiFigma,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiStripe,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const ProjectsIconsData = [
  {
    id: 1,
    stack: [SiNextdotjs, SiRedux, SiPrisma, SiPostgresql, SiStripe],
  },
  {
    id: 2,
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma],
  },
  {
    id: 3,
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase],
  },
  {
    id: 4,
    stack: [SiReact, SiReactrouter, SiAxios],
  },
];
