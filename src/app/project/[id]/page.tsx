import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ProjectsData } from "@/app/components/Projects/ProjectsData";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Title from "@/components/ui/Title";
import { cn } from "@/lib/utils";

type ProjectType = {
  params: {
    id: number;
  };
};

export default function Home({ params }: ProjectType) {
  const data = params.id;
  return (
    <div
      className="bg-black mx-auto overflow-hidden 
        "
    >
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto max-xl:px-8">
          <Header />
          <div className="py-10 p-5 sm:p-0" id="projects">
            <Title
              text={data.title}
              className="flex flex-col mt-28 items-center justify-center text-3xl rotate-6"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
              <div className={cn("p-1 rounded-lg", data.background)}>
                <DirectionAwareHover
                  imageUrl={data.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold">{data.title}</h2>
                    <div className="flex items-center gap-5"></div>
                  </div>
                </DirectionAwareHover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
