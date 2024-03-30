import {
  SiAxios,
  SiCss3,
  SiFigma,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReactrouter,
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
      "• Utilisation de composants réutilisables pour le style",
      "• Maîtrise de Tailwind CSS, ainsi de que de librairies telles que Shadcn/UI et Aceternity/UI pour améliorer l'expérience utilisateur.",
    ],
    thirdSubtitle: "Technologies utilisées",
    stack: [SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma],
    link: "/project/1",
    cover: [
      "/assets/projects/project01.png",
      "/assets/projects/project01-1.png",
      "/assets/projects/project01-2.png",
    ],
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
    cover: [
      "/assets/projects/project02.png",
      "/assets/projects/project02-1.png",
      "/assets/projects/project02-2.png",
    ],
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
      "• Maîtrise de la manipulation de données en utilisant React et l'intégration d'API externes.",
      "• Intégration de bibliothèques tierces telles que Swiper et React-YouTube pour améliorer l'expérience utilisateur et ajouter des fonctionnalités interactives à l'application.",
    ],
    thirdSubtitle: "Technologies utilisées",
    stack: [SiReact, SiReactrouter, SiAxios],
    link: "/project/3",
    cover: ["/assets/projects/project03.png","/assets/projects/project03-1.png", "/assets/projects/project03-2.png"],
    background: "bg-green-500",
    githubLink: "https://github.com/Yoni-Deserbaix/CineQuik",
    demo: "https://yoni-deserbaix.github.io/CineQuik/",
  },
  {
    id: 4,
    title: "GTA VI Landing Page",
    subtitle: "Création d'une landing page exclusive pour le jeu-vidéo GTA VI.",
    description:
      "Le but de ce projet était de créer la toute première landing page web dédié au jeu-vidéo Grand Theft Auto VI, avec l'espoir d'apporter quelque chose de spécial aux fans qui attendent avec impatience le jeu depuis des années.",
    secondSubtitle: "Compétences obtenues :",
    skillsGained: [
      "• Réalisation de sites vitrines à partir d'exemples sur web et de plateformes comme Dribbble.",
      "• Maîtrise de flexbox et grid en CSS et intégration d'animations au scroll.",
    ],
    thirdSubtitle: "Technologies utilisées",
    stack: [SiHtml5, SiCss3, SiJavascript],
    link: "/project/4",
    cover: [
      "/assets/projects/project04.png",
      "/assets/projects/project04-1.png",
      "/assets/projects/project04-2.png",
    ],
    background: "bg-indigo-500",
    githubLink: "https://github.com/Yoni-Deserbaix/GTA-VI-Landing-Page",
    demo: "https://yoni-deserbaix.github.io/GTA-VI-Landing-Page/",
  },
];
