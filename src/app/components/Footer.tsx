import { Github, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="border-t mt-10">
      <div className="m-10 text-center text-lg">
        <div className="font-bold underline underline-offset-8 decoration-green-500 rotate-2">
          Yoni Deserbaix 🦇
        </div>
        <div className="mt-3 gap-4 flex items-center justify-center  ">
          <a
            href="https://www.linkedin.com/in/yoni-deserbaix/"
            target="_blank"
            aria-label="Navigate to the LinkedIn account"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Yoni-Deserbaix"
            target="_blank"
            aria-label="Navigate to the Github account"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
