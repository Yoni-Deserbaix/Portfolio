import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Header({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
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
          href="mailto:yonideserbaix@gmail.com"
          className="hover:scale-110 transition-all z-10"
          aria-label="Email me at yonideserbaix@gmail.com"
        >
          <Mail />
        </Link>
      </div>
    </nav>
  );
}
