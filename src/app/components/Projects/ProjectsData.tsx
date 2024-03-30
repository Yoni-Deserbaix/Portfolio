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
    secondSubtitle: "Compétences obtenues :",
    skillsGained: [
      "• Réalisation de maquettes Figma.",
      "• Utilisation de composants réutilisables pour le style.",
    ],
    thirdSubtitle: "Technologies utilisées",
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma],
    link: "/project/1",
    cover: "/assets/projects/project01.png",
    background: "bg-indigo-500",
    githubLink: "https://github.com/Yoni-Deserbaix/portfolio-v3",
    demo: "",
  },
  {
    id: 2,
    title: "MyBlog",
    subtitle: "Réalisation de mon blog",
    description:
      "Mon blog, construit avec Next.JS, est une plateforme où je partage mes articles, mes astuces et mes expériences personnelles dans divers domaines. L'utilisation de composants serveurs et clients, ainsi que des routes dynamiques, m'ont permis de créer une expérience de navigation flexible et intuitive pour mes lecteurs.",
    secondSubtitle: "Compétences obtenues :",
    skillsGained: [
      "• Découverte de Next.js, TypeScript et Tailwind.",
      "• Apprentissage du framework Next.js : composants serveurs/clients, mise en cache, routes statiques et dynamiques, métadonnées, méthodes CRUD.",
    ],
    thirdSubtitle: "Technologies utilisées",
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss],
    link: "/project/2",
    cover: "/assets/projects/project02.png",
    background: "bg-green-500",
    githubLink: "https://github.com/Yoni-Deserbaix/MyBlog",
    demo: "https://yoni-deserbaix-my-blog.vercel.app/",
  },
  {
    id: 3,
    title: "CineQwik",
    subtitle: "Réalisation d'une application de cinéma",
    description:
      "Application de cinéma réalisée avec React utilisant l'API TMDB pour offrir une expérience cinématographique immersive. Le but de ce projet était de créer une application permettant aux cinéphiles d'explorer et de découvrir des informations détaillées sur les films, les bandes-annonces et bien plus encore.",
    secondSubtitle: "Compétences obtenues :",
    skillsGained: [
      "• Maitrise de la manipulation de données en utilisant React et l'intégration d'API externes.",
      "• Intégration de bibliothèques tierces telles que Swiper et React-YouTube pour améliorer l'expérience utilisateur et ajouter des fonctionnalités interactives à l'application.",
    ],
    thirdSubtitle: "Technologies utilisées",
    stack: [SiReact, SiReactrouter, SiAxios],
    link: "/project/3",
    cover: "/assets/projects/project03.png",
    background: "bg-green-500",
    githubLink: "https://github.com/Yoni-Deserbaix/CineQuik",
    demo: "https://yoni-deserbaix.github.io/CineQuik/",
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
