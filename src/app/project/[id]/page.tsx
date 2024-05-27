import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ProjectsIcons } from "@/app/components/Projects/ProjectIcons";
import { supabase } from "@/app/config/supabase";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

type ProjectType = {
  params: {
    id: number;
  };
};

export const revalidate = 10;

// Dunamic Metadata
export async function generateMetadata({ params }: ProjectType) {
  const id = params.id;
  const { data: projectId } = await supabase
    .from("portfolio")
    .select()
    .match({ id })
    .single();

  const metadata: Metadata = {
    title: `${projectId.title} - Yoni Deserbaix `,
    authors: {
      name: "Yoni Deserbaix",
    },
    description: projectId.description,
    metadataBase: new URL(
      `https://yoni-deserbaix-potfolio.vercel.app/project/${projectId.id}`
    ),
    alternates: {
      canonical: `https://yoni-deserbaix-potfolio.vercel.app/project/${projectId.id}`,
    },
    openGraph: {
      title: `${projectId.title} - Yoni Deserbaix `,
      description: projectId.description,
      url: `https://yoni-deserbaix-potfolio.vercel.app/project/${projectId.id}`,
    },
  };

  return metadata;
}

export default async function Home({ params }: ProjectType) {
  const id = params.id;

  // Rechercher le projet correspondant dans les données de projet
  const { data: projectId } = await supabase
    .from("portfolio")
    .select()
    .match({ id })
    .single();

  const metadata: Metadata = {
    title: projectId.title,
    description: projectId.description,
  };

  return (
    <div className="max-w-7xl mx-auto max-xl:px-8">
      <Header />
      <div className="max-w-7xl mx-auto max-xl:px-8 flex flex-wrap">
        <div className="w-2/3 max-md:w-full animate-move-up">
          <h1>
            <Title
              text={projectId.title}
              className="flex flex-col mt-12 items-start justify-center text-3xl"
            />
          </h1>
          <div className="space-y-6">
            <div className="text-xl font-bold pt-12">
              <h2>{projectId.subtitle}</h2>
            </div>
            <p className="md:w-96 text-md text-gray-300 max-sm:text-base">
              {projectId.description}
            </p>
            <div className="text-xl font-bold">
              {!projectId.description && <h3>Compétences obtenues :</h3>}
            </div>
            <ul className="md:w-96 text-md text-gray-300 max-sm:text-base">
              {projectId &&
                projectId.skillsGained &&
                projectId.skillsGained
                  .split("\n")
                  .map((line: string, index: number) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
            </ul>
            <div className="text-xl font-bold">
              <h4>Stack Technique :</h4>
            </div>
            <div className="flex gap-5 ml-2">
              {ProjectsIcons[id - 1].stack.map((Icon, iconIndex) => (
                <Icon
                  key={iconIndex}
                  className="w-8 h-8w-8 h-8 hover:scale-125 transition-all"
                />
              ))}
            </div>
            {projectId.githubLink && projectId.demoLink && (
              <div className="flex gap-20 max-sm:flex-col max-sm:gap-0">
                <a
                  href={projectId.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Title
                    text="Code 🚀"
                    className="flex flex-col mt-12 items-start justify-center text-3xl -rotate-6"
                  />
                </a>
                <a
                  href={projectId.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Title
                    text="Demo ✨"
                    className="flex flex-col mt-12 items-start justify-center text-3xl -rotate-6"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/3 max-md:w-full animate-move-down">
          <div className="grid grid-cols-1 pt-12 gap-5 w-full">
            <div className="grid grid-cols-1 pt-12 gap-5 w-full">
              {projectId.coverImage &&
                projectId.coverImage.map((image: string, index: number) => (
                  <div
                    key={index}
                    className={cn("p-1 rounded-lg", projectId.background)}
                  >
                    <DirectionAwareHover
                      imageUrl={image}
                      className="w-full space-y-5"
                    >
                      {""}
                    </DirectionAwareHover>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <Footer />
      </div>
    </div>
  );
}
