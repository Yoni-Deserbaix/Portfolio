import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ProjectsData } from "@/app/components/Projects/ProjectsData";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { IconType } from "react-icons";

type ProjectType = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: ProjectType) {
  const projectId = params.id;
  const project: any = ProjectsData.find(
    (project) => project.id.toString() === projectId
  );

  const metadata: Metadata = {
    title: `${project.title} - Yoni Deserbaix `,
    authors: {
      name: "Yoni Deserbaix",
    },
    description: project.description,
    metadataBase: new URL(
      `https://yoni-deserbaix-potfolio.vercel.app/project/${project.id}`
    ),
    alternates: {
      canonical: `https://yoni-deserbaix-potfolio.vercel.app/project/${project.id}`,
    },
    openGraph: {
      title: `${project.title} - Yoni Deserbaix `,
      description: project.description,
      url: `https://yoni-deserbaix-potfolio.vercel.app/project/${project.id}`,
    },
  };

  return metadata;
}

export default function Home({ params }: ProjectType) {
  const projectId = params.id;

  // Rechercher le projet correspondant dans les données de projet
  const project: any = ProjectsData.find(
    (project) => project.id.toString() === projectId
  );

  const metadata: Metadata = {
    title: project.title,
    description: project.description,
  };

  return (
    <div className="max-w-7xl mx-auto max-xl:px-8">
      <Header />
      <div className="max-w-7xl mx-auto max-xl:px-8 flex flex-wrap">
        <div className="w-2/3 max-md:w-full animate-move-up">
          <h1>
            <Title
              text={project.title}
              className="flex flex-col mt-12 items-start justify-center text-3xl"
            />
          </h1>
          <div className="space-y-6">
            <div className="text-xl font-bold pt-12">
              <h2>{project.subtitle}</h2>
            </div>
            <p className="md:w-96 text-md text-gray-300 max-sm:text-base">
              {project.description}
            </p>
            <div className="text-xl font-bold">
              <h3>Compétences obtenues :</h3>
            </div>
            <ul className="md:w-96 text-md text-gray-300 max-sm:text-base">
              {project.skillsGained.map((skill: string, index: number) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <div className="text-xl font-bold">
              <h4>Stack Technique :</h4>
            </div>
            <div className="flex gap-5 ml-2">
              {project.stack.map((Icon: IconType, index: number) => {
                return (
                  <Icon
                    className="w-8 h-8 hover:scale-125 transition-all"
                    key={index}
                  />
                );
              })}
            </div>
            <div className="flex gap-20 max-sm:flex-col max-sm:gap-0">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Title
                  text="Code 🚀"
                  className="flex flex-col mt-12 items-start justify-center text-3xl -rotate-6"
                />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Title
                  text="Demo ✨"
                  className="flex flex-col mt-12 items-start justify-center text-3xl -rotate-6"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/3 max-md:w-full animate-move-down">
          <div className="grid grid-cols-1 pt-12 gap-5 w-full">
            {project.cover.map((imageCover: string, index: number) => (
              <div
                key={index}
                className={cn("p-1 rounded-lg", project.background)}
              >
                <DirectionAwareHover
                  imageUrl={imageCover}
                  className="w-full space-y-5"
                >
                  {""}
                </DirectionAwareHover>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-12">
        <Footer />
      </div>
    </div>
  );
}
