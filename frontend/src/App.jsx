import React from "react";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Main from "./components/Main";
import Events from "./components/Events";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";

export default function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      {/* <Main/> */}
      <Events />
      <TeamSection />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
