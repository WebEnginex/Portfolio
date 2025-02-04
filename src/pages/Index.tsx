import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-black">
      <Navigation />
      <Hero />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;