"use client";

import FadeOnScroll from "@/components/ui/animations/FadeOnScroll";
import { Meteors } from "@/components/ui/meteors";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import Title from "@/components/ui/Title";
import Image from "next/image";
import Link from "next/link";

import { SiJavascript, SiReact } from "react-icons/si";

export default function About() {
  const currentStack = [{ icon: SiJavascript }, { icon: SiReact }];
  return (
    <div>
      <FadeOnScroll delay={0}>
        <Title
          text="À propos 🧩
        "
          className="flex flex-col mt-36 mb-12 items-center justify-center text-3xl rotate-6"
        />
      </FadeOnScroll>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="relative">
          <div>
            <div className="w-full relative max-sm:w-11/12 m-auto">
              <FadeOnScroll delay={0}>
                <div className="absolute inset-0 h-full w-full bg-yellow-500 transform scale-[0.80] blur-3xl max-sm:blur-2xl" />
                <div className="relative shadow-xl bg-[#09090B] border border-gray-800  px-8 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                  <div className="flex items-center justify-center mb-4 gap-3">
                    {currentStack.map((current, index) => {
                      const Icon = current.icon;
                      return <Icon key={index} className="w-7 h-7" />;
                    })}
                  </div>

                  <div className="flex items-end mb-4">
                    <h1 className="font-bold text-xl text-white relative z-50">
                      Créateur du{" "}
                      <span className="underline underline-offset-2">
                        #BecomeTheChadCoder
                      </span>
                    </h1>
                  </div>
                  <div className="flex gap-5">
                    <p className="font-normal text-base text-slate-500 z-50 w-48 max-sm:text-sm">
                      J'aide les personnes à se lancer dans le développement web
                      GRATUITEMENT et à devenir LE Chad Coder.
                    </p>
                    <Image
                      src="/assets/chadCoder.png"
                      width={150}
                      height={150}
                      alt=""
                      className="items-center m-auto rounded-lg max-sm:w-32 z-50"
                    ></Image>
                  </div>
                  <div className="p-3"></div>
                  <MovingBorderBtn
                    borderRadius="0.5rem"
                    className="p-2 font-semibold m-auto"
                  >
                    <Link
                      href="https://yoni-deserbaix-my-blog.vercel.app/"
                      target="_blank"
                    >
                      Visite mon blog 🛥️
                    </Link>
                  </MovingBorderBtn>
                  <Meteors number={20} />
                </div>
              </FadeOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
