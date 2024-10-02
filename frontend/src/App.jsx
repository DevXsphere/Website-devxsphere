import React from "react";
import Navbar from "../components/Navbar";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Main from "../components/Main";
import Events from "../components/Events"
import Carousel from "../components/Carousel";


export default function App() {
  return (
    <div className=" bg-white dark:bg-darkBackground dark:text-white">
      <Navbar />
      <Carousel />
      {/* <Main/> */}
      <Events />
      <TeamSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
