import React from "react";
import Navbar from "../components/Navbar";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import Main from "../components/Main";

export default function App() {
  return (
    <div>
      <Navbar />
      <Main/>
      <TeamSection />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}
