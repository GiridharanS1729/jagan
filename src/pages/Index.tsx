import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Education from "@/components/portfolio/Education";
import Projects from "@/components/portfolio/Projects";
import Certificates from "@/components/portfolio/Certificates";
import Experience from "@/components/portfolio/Experience";
import PaperPresentations from "@/components/portfolio/PaperPresentations";
import Contact from "@/components/portfolio/Contact";
import FloatingSocial from "@/components/portfolio/FloatingSocial";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingSocial />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Certificates />
      <Experience />
      <PaperPresentations />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
