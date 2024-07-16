import FadeOnScroll from "@/components/ui/animations/FadeOnScroll";
import Title from "@/components/ui/Title";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact">
      <FadeOnScroll delay={0}>
        <Title
          text="Contact 📪
        "
          className="flex flex-col mt-28 items-center justify-center text-3xl -rotate-6"
        />
      </FadeOnScroll>
      <div>
        <FadeOnScroll delay={0}>
          <div className="mt-28 flex max-md:flex-col gap-2 max-xl:pl-16 max-sm:pl-4">
            <p className="text-2xl font-bold ">
              Besoin d'un site web qui se démarque ? ✨
            </p>
            <h1 className="text-2xl font-bold hover:text-green-400 transition-all ">
              Parlons-en !
              <div className="w-36 h-2 bg-green-500 rounded-full"></div>
              <div className="w-36 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
            </h1>
          </div>
        </FadeOnScroll>

        <div className="flex justify-evenly max-lg:flex-col max-lg:gap-4 mt-14 max-xl:pl-16 max-sm:pl-8 p-16 max-sm:p-0">
          <div className="flex items-center gap-4">
            <span className="p-4 rounded-[50%] hover:scale-125 transition-all">
              <i className="bx bxs-map text-2xl"></i>
            </span>
            <div>
              <span className="font-bold text-xl max-sm:text-lg">Lieu</span>
              <p className="text-lg max-sm:text-sm text-gray-300">
                Nantes, France
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="p-4 rounded-[50%] hover:scale-125 transition-all">
              <i className="bx bx-envelope text-2xl"></i>
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-xl  max-sm:text-lg">Mail</span>
              <Link
                href="mailto:yonideserbaix@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="text-lg text-gray-300  max-sm:text-sm"
              >
                yonideserbaix@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/DESERBAIX_YONI_CV.pdf"
              rel="noreferrer"
              target="_blank"
              className="p-4 rounded-[50%] hover:scale-125 transition-all"
            >
              <Download />
            </Link>
            <div>
              <span className="font-bold text-xl max-sm:text-lg">
                Télécharger
              </span>
              <p className="text-lg max-sm:text-sm text-gray-300">
                CV Développeur React, Next.js
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
