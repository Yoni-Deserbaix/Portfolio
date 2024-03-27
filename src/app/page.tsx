import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div
      className="min-h-[400vh] bg-black mx-auto overflow-hidden 
        "
    >
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] relative">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Hero />
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full"></div>
      </div>
      <div className="max-w-7xl mx-auto p-5 pt-20">
        <Skills />
        <Projects />
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
