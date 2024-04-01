import React from "react";
import Image from "next/image";
import Title from "../../../components/ui/Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { ProjectsData } from "./ProjectsData";
export default function Projects() {
  return (
    <div className="py-10 p-5 sm:p-0" id="projects">
      <Title
        text="Projets 🎨"
        className="flex flex-col mt-28 max-lg:mt-0 items-center justify-center text-3xl rotate-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {ProjectsData.map((project, index) => {
          return (
            <Link href={project.link} key={index}>
              <div className={cn("p-1 rounded-lg", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover[0]}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <div className="flex items-center gap-5">
                      {project.stack.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
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
