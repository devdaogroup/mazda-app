import AboutUs from "@/components/sections/AboutUs/Index";
import CarVideos from "@/components/sections/CarVideoSection";
import HeroSection from "@/components/sections/HeroSection";
import HowToSection from "@/components/sections/HowToSection";
import PrevWinner from "@/components/sections/PrevWinner";
import Touch from "@/components/sections/Touch";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <HeroSection />
      <HowToSection />
      <PrevWinner />
      <CarVideos />
      <AboutUs />
      <Touch />
    </React.Fragment>
  );
}

export default App;
