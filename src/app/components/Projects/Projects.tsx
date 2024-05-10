import { supabase } from "@/app/config/supabase";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Title from "../../../components/ui/Title";
import { ProjectsIcons } from "./ProjectIcons";

export default async function Projects() {
  const { data: projects } = await supabase
    .from("portfolio")
    .select()
    .order("id", { ascending: true });

  return (
    <div className="py-10 p-5 sm:p-0" id="projects">
      <Title
        text="Projets 🎨"
        className="flex flex-col mt-28 max-lg:mt-0 items-center justify-center text-3xl rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects &&
          projects.map((project, index) => {
            return (
              <Link href={`/project/${project.id}`} key={index}>
                <div className={cn("p-1 rounded-lg", project.background)}>
                  <DirectionAwareHover
                    imageUrl={project.coverImage.shift()}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <h2 className="text-xl font-bold">{project.title}</h2>
                      <div className="flex items-center gap-5">
                        {ProjectsIcons[index].stack.map((Icon, iconIndex) => (
                          <Icon key={iconIndex} className="w-8 h-8" />
                        ))}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
