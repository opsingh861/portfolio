import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import CustomCursor from "@/components/ui/CustomCursor";
import ChatWidget from "@/components/ui/ChatWidget";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import GitHub from "@/components/sections/GitHub";
import LinkedIn from "@/components/sections/LinkedIn";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <GitHub />
        <LinkedIn />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
