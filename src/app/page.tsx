import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
export default function Home() {
  return (
    <div className="bg-background mx-auto overflow-hidden">
      <div className="bg-grid-white/[0.01] z-10">
        <div className="max-w-6xl mx-auto max-xl:px-8">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-5 pt-20">
        <Projects />
        <Skills />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
