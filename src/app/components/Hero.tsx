import React from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import ResumeBtn from "@/components/ui/ResumeBtn";

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold  pt-8 max-sm:text-[1.7rem]">
          Salut! 👋 <br /> Je suis{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"Yoni Deserbaix."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300 max-sm:text-base">
          {
            "Basé à Nantes, je suis un développeur Frontend passionné par la construction d'applications web modernes que les utilisateurs adorent."
          }
        </p>
        <Link href={"mailto:yonideserbaix@gmail.com"} className="inline-block">
          <div>
            <h1 className="text-3xl font-bold hover:text-green-400 transition-all max-sm:text-2xl">
              Me contacter 📪
              <div className="w-40 h-3 bg-green-500 rounded-full"></div>
              <div className="w-40 h-3 bg-indigo-500 rounded-full translate-x-2"></div>
            </h1>
            <div className="flex p-6 gap-5 max-lg:justify-center">
              <Linkedin />
              <Github />
              <Mail />
            </div>
          </div>
        </Link>
      </div>
      <div className="relative max-lg:pt-16">
        <div className="relative w-72 h-72 space-y-3 -rotate-[30deg] my-animation max-lg:pl-8">
          <div className="flex gap-3 translate-x-8 ">
            <div className="w-32 h-32 rounded-2xl bg bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg bg-green-500"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 lg:bottom-14 left-3">
          <ResumeBtn />
        </div>
      </div>
    </div>
  );
}
