"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeOnScroll from "@/components/ui/animations/FadeOnScroll";
import Title from "@/components/ui/Title";

import { SiJavascript, SiReact } from "react-icons/si";

export default function Faq() {
  const currentStack = [{ icon: SiJavascript }, { icon: SiReact }];
  return (
    <div>
      <FadeOnScroll delay={0}>
        <Title
          text="Services 🧑‍🍳"
          className="flex flex-col mt-36 mb-12 items-center justify-center text-3xl rotate-6"
        />
      </FadeOnScroll>
      <div>
        <FadeOnScroll delay={0}>
          <Accordion
            type="single"
            collapsible
            className="flex justify-center mx-auto flex-col w-2/3 my-28 max-md:w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Quels services j'offre exactement?
              </AccordionTrigger>
              <AccordionContent>
                Je propose des services de création de design, de développement
                de sites web sur mesure, et je m'occupe également du déploiement
                en production de votre site internet.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Que se passe-t-il si le design ne me plaît pas?
              </AccordionTrigger>
              <AccordionContent>
                Pas de soucis ! Je travaille avec vous pour réviser et ajuster
                le design jusqu'à ce que vous en soyez entièrement satisfait.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Quels langages et technologies utilisez-vous?
              </AccordionTrigger>
              <AccordionContent>
                Je travaille avec les technologies les plus récentes pour vous
                offrir des sites web et des applications mobiles modernes et
                performants. J'utilise JavaScript et tout l'écosystème de React
                pour le développement, TailwindCSS pour un design élégant, et
                Framer Motion pour des animations fluides. ✨
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Combien de temps faut-il pour développer un site web?
              </AccordionTrigger>
              <AccordionContent>
                Le délai dépend de la complexité du projet. Un site web de base
                prend généralement 2 à 4 semaines, tandis que des projets plus
                complexes peuvent nécessiter plusieurs mois.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Quels types de sites web pouvez-vous créer?
              </AccordionTrigger>
              <AccordionContent>
                Je peux réaliser une large gamme de sites web : sites vitrines,
                e-commerce, blogs, portfolios et applications web
                personnalisées, selon vos besoins spécifiques.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Proposez-vous des services de référencement (SEO)?
              </AccordionTrigger>
              <AccordionContent>
                Oui, j'optimise votre site web pour améliorer sa visibilité sur
                les moteurs de recherche comme Google, afin d'attirer plus de
                visiteurs et de clients.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                Comment se déroule le processus de collaboration?
              </AccordionTrigger>
              <AccordionContent>
                Nous commencerons par une discussion pour comprendre vos besoins
                et vos objectifs. Ensuite, je vous présenterai un plan de
                projet, des maquettes de design, et nous travaillerons ensemble
                tout au long du développement jusqu'à la mise en ligne. 🤝
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Développez-vous des applications mobiles?
              </AccordionTrigger>
              <AccordionContent>
                Absolument ! Je développe des applications mobiles natives pour
                iOS et Android en utilisant React Native, ce qui permet de créer
                des applications performantes avec une base de code unique.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </FadeOnScroll>
      </div>
    </div>
  );
}
