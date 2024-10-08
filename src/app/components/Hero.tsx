import FadeUp from "@/components/ui/animations/FadeUp";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import "boxicons/css/boxicons.min.css";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
        <div className="space-y-10 text-center lg:text-left">
          <FadeUp delay={0}>
            <h1 className="text-4xl lg:text-5xl font-bold  pt max-lg:pt-0 max-sm:text-[1.7rem]">
              Salut! 👋 <br /> Je suis{" "}
              <span className="underline underline-offset-8 decoration-green-500">
                {"Yoni Deserbaix."}
              </span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="md:w-96 text-lg text-gray-300 max-sm:text-base">
              {
                "Basé à Nantes, je suis développeur Frontend React et Next.js passionné par la construction d'interfaces utilisateurs et d'applications web modernes que les utilisateurs adorent."
              }
            </p>
          </FadeUp>
          <div>
            <FadeUp delay={0.8}>
              <h1 className="text-3xl font-bold hover:text-green-400 transition-all max-sm:text-2xl">
                <Link href="mailto:yonideserbaix@gmail.com">
                  <div className="inline-block">
                    Me contacter 📪
                    <div className="w-40 h-3 bg-green-500 rounded-full"></div>
                    <div className="w-40 h-3 bg-indigo-500 rounded-full translate-x-2"></div>
                  </div>
                </Link>
              </h1>
            </FadeUp>
          </div>
        </div>
        <div className="relative max-lg:pt-16">
          <FadeUp delay={0.2}>
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
          </FadeUp>
          <div className="absolute bottom-5 lg:bottom-16 lg:left-10 max-lg:left-12">
            <FadeUp delay={0.6}>
              <MovingBorderBtn
                borderRadius="0.5rem"
                className="p-3 font-semibold"
              >
                <Link
                  href="https://cal.com/yoni-deserbaix"
                  target="_blank"
                  className="flex gap-2"
                >
                  <Phone size={20} />
                  Prendre un RDV
                </Link>
              </MovingBorderBtn>
            </FadeUp>
          </div>
          <div className="flex flex-row items-center justify-center mb-10 w-full"></div>
        </div>
      </div>
    </section>
  );
}
