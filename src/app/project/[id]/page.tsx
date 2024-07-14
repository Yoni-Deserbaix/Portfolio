import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ProjectsIcons } from "@/app/components/Projects/ProjectIcons";
import { supabase } from "@/app/config/supabase";
import FadeOnScroll from "@/components/ui/animations/FadeOnScroll";
import FadeUp from "@/components/ui/animations/FadeUp";
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
      `https://yoni-deserbaix-portfolio.vercel.app/project/${projectId.id}`
    ),
    alternates: {
      canonical: `https://yoni-deserbaix-portfolio.vercel.app/project/${projectId.id}`,
    },
    openGraph: {
      title: `${projectId.title} - Yoni Deserbaix `,
      description: projectId.description,
      url: `https://yoni-deserbaix-portfolio.vercel.app/project/${projectId.id}`,
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
            <FadeUp delay={0.2}>
              <Title
                text={projectId.title}
                className="flex flex-col mt-12 items-start justify-center text-3xl"
              />
            </FadeUp>
          </h1>
          <div className="space-y-6">
            <div className="text-xl font-bold pt-12">
              <FadeUp delay={0.2}>
                <h2>{projectId.subtitle}</h2>
              </FadeUp>
            </div>
            <FadeUp delay={0.4}>
              <p className="md:w-96 text-md text-gray-300 max-sm:text-base">
                {projectId.description}
              </p>
            </FadeUp>
            <div className="text-xl font-bold">
              <FadeOnScroll delay={0.4}>
                <h3>Compétences obtenues :</h3>
              </FadeOnScroll>
            </div>
            <FadeOnScroll delay={0.6}>
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
            </FadeOnScroll>
            <div className="text-xl font-bold">
              <FadeUp delay={0.8}>
                <h4>Stack Technique :</h4>
              </FadeUp>
            </div>
            <div className="flex gap-5 ml-2">
              {ProjectsIcons[id - 1].stack.map((Icon, iconIndex) => (
                <FadeOnScroll key={iconIndex} delay={iconIndex * 0.1}>
                  <Icon className="w-8 h-8w-8 h-8 hover:scale-125 transition-all" />
                </FadeOnScroll>
              ))}
            </div>
            {projectId.githubLink && projectId.demoLink && (
              <div className="flex gap-20 max-sm:flex-col max-sm:gap-0">
                <a
                  href={projectId.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FadeOnScroll delay={0.2}>
                    <Title
                      text="Code 🚀"
                      className="flex flex-col mt-12 items-start justify-center text-3xl -rotate-6"
                    />
                  </FadeOnScroll>
                </a>
                <a
                  href={projectId.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FadeOnScroll delay={0.4}>
                    <Title
                      text="Demo ✨"
                      className="flex flex-col mt-12 items-start justify-center text-3xl -rotate-6"
                    />
                  </FadeOnScroll>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="w-1/3 max-md:w-full">
          <FadeOnScroll delay={0.2}>
            <div className="grid grid-cols-1 pt-12 gap-5 w-full">
              {projectId.coverImage &&
                projectId.coverImage.map((image: string, index: number) => (
                  <FadeUp key={index} delay={index * 0.4}>
                    <div className={cn("p-1 rounded-lg", projectId.background)}>
                      <DirectionAwareHover
                        imageUrl={image}
                        className="w-full space-y-5"
                      >
                        {""}
                      </DirectionAwareHover>
                    </div>
                  </FadeUp>
                ))}
            </div>
          </FadeOnScroll>
        </div>
      </div>
      <div className="pt-12">
        <Footer />
      </div>
    </div>
  );
}
