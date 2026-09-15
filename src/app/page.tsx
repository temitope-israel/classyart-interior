import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main id="top">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
