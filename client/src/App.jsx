import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Resume from "./components/sections/Resume";
import Contact from "./components/sections/Contact";

// NOTE: this file does not know about your existing backend health-check
// component/logic from Stage 0. Re-add whatever you were already rendering
// for it (e.g. <HealthCheck /> or a status badge) anywhere in this tree —
// it hasn't been removed or touched, this is just a fresh App.jsx built
// around the new sections. See the Stage 1 notes for how to merge it back in.

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
