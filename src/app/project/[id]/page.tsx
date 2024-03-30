import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ProjectsData } from "@/app/components/Projects/ProjectsData";
import Title from "@/components/ui/Title";
import Link from "next/link";
import { IconType } from "react-icons";

type ProjectType = {
  params: {
    id: string;
  };
};

export default function Home({ params }: ProjectType) {
  const projectId = params.id;

  // Rechercher le projet correspondant dans les données de projet
  const project: any = ProjectsData.find(
    (project) => project.id.toString() === projectId
  );

  return (
    <div className="max-w-7xl mx-auto max-xl:px-8">
      <div className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2 pt-5">
        <Link href="/">Yoni Deserbaix 🦇</Link>
      </div>
      <Title
        text={project.title}
        className="flex flex-col mt-28 items-start justify-center text-3xl"
      />
      <div className="space-y-6">
        <div className="text-xl font-bold pt-12">{project.subtitle}</div>
        <p className="md:w-96 text-md text-gray-300 max-sm:text-base">
          {project.description}
        </p>
        <div className="text-xl font-bold">{project.secondSubtitle}</div>
        <ul className="md:w-96 text-md text-gray-300 max-sm:text-base">
          {project.skillsGained.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <div className="text-xl font-bold">{project.thirdSubtitle}</div>
        <div className="flex gap-5 ml-2">
          {project.stack.map((Icon: IconType, index: number) => {
            return <Icon className="w-8 h-8" key={index} />;
          })}
        </div>
        <div className="flex gap-20">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <Title
              text="Code 🚀"
              className="flex flex-col mt-12 items-start justify-center text-3xl"
            />
          </a>
          <Title
            text="Demo ✨"
            className="flex flex-col mt-12 items-start justify-center text-3xl"
          />
        </div>
      </div>
    </div>
  );
}
