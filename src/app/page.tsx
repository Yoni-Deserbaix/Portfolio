import Header from "./components/Header";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-black mx-auto overflow-hidden 
        "
    >
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Hero />
        </div>
      </div>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
