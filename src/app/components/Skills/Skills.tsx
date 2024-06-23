"use client";
import Title from "../../../components/ui/Title";
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { skillsData } from "./SkillsData";
import FadeOnScroll from "@/components/ui/animations/FadeOnScroll";
export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-8">
     <FadeOnScroll delay={0}>
     <Title
        text="Skills 🔪"
        className="flex flex-col mt-44 max-lg:mt-0 items-center justify-center text-3xl -rotate-6"
      />
     </FadeOnScroll>
      <HoverEffect items={skillsData} />
    </section>
  );
}
