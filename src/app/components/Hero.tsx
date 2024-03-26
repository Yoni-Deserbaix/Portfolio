import React from "react";
import Image from "next/image";
import memojiHome from "../assets/memoji-home.png";

import "boxicons/css/boxicons.min.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Salut! 👋 <br /> Je suis{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"Yoni Deserbaix."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Basé à Nantes, je suis un développeur Frontend passionné par la construction d'applications web modernes que les utilisateurs adorent."
          }
        </p>
        <Link href={"mailto:yonideserbaix@gmail.com"} className="inline-block">
          <div>
            <h1 className="text-3xl font-bold hover:text-green-400 transition-all">
              Me contacter 📪
              <div className="w-40 h-3 bg-green-500 rounded-full"></div>
              <div className="w-40 h-3 bg-indigo-500 rounded-full translate-x-2"></div>
            </h1>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] ">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg bg-green-500"></div>
          </div>

          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
      {/* Linkedin 
              <i className="bg-transparent text-base text-[whitesmoke] translate-y-px pr-[5px] bx bxl-linkedin-square"></i>
              {/* Github */}
      {/* <i className="bg-transparent text-base text-[whitesmoke] translate-y-px pr-[5px] bx bxl-github"></i> */}
      {/* Mail */}
      {/* <i className="bg-transparent text-base text-[whitesmoke] translate-y-px pr-[5px] bx bxl-linkedin-square bx bxs-envelope"></i>
            </div> */}
      {/* Hero image  */}
      {/* <div>
              <Image
              src={memojiHome.src}
              width={2000}
              height={2000}
              className=" w-full max-w-[20rem] max-md:w-[10rem] max-lg:w-[17rem] lg:w-[30rem] animate-[animimg_4s_ease-in-out_infinite] rounded-full"
              alt="hero"
              data-aos="fade-up"
              data-aos-duration="300"
              />
            </div>  */}
    </div>
  );
}
