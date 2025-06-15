
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contribute from "@/components/Contribute";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Events />
      <Stats />
      <Team />
      <Testimonials />
      <Contribute />
      <Footer />
    </div>
  );
};

export default Index;
