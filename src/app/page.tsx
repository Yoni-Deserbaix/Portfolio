import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div
      className="bg-black mx-auto overflow-hidden 
        "
    >
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] z-10">
        <div className="max-w-6xl mx-auto max-xl:px-8">
          <Header />
          <Hero />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full max-sm:h-0"></div>
      </div>
      <div className="max-w-6xl mx-auto p-5 pt-20">
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
