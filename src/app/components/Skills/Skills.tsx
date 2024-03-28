"use client";
import React from "react";
import Title from "../../../components/ui/Title";
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { skillsData } from "./SkillsData";

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col mt-28 items-center justify-center text-3xl -rotate-6"
      />
      <HoverEffect items={skillsData} />
    </section>
  );
}
