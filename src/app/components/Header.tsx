import { cn } from "@/lib/utils";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { SiGithub, SiLinkedin } from "react-icons/si";
import FadeDown from "../../components/ui/animations/FadeDown";

export default function Header({ className }: { className?: string }) {
  return (
    <FadeDown delay={0}>
      <nav className={cn("py-10 flex justify-between items-center", className)}>
        <Link href="/">
          <h1
            className={cn(
              "text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2",
              className
            )}
          >
            Yoni Deserbaix 🦇
          </h1>
        </Link>
        <div className="flex items-center gap-5 max-sm:gap-3">
          <Link
            href="https://www.linkedin.com/in/yoni-deserbaix/"
            target="_blank"
            aria-label="Navigate to the LinkedIn account"
            className="w-5 h-5 text-xl hover:scale-125 transition-all"
          >
            <SiLinkedin />
          </Link>
          <Link
            href="https://github.com/Yoni-Deserbaix"
            target="_blank"
            aria-label="Navigate to the Github account"
            className="w-5 h-5 text-xl hover:scale-125 transition-all"
          >
            <SiGithub />
          </Link>
          <Link
            href="https://x.com/y2_dev"
            target="_blank"
            className="w-5 h-5 text-xl hover:scale-125 transition-all"
            aria-label="Navigate to the X account"
          >
            <BsTwitterX />
          </Link>
        </div>
      </nav>
    </FadeDown>
  );
}
