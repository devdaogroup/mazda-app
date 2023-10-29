import CarVideos from "@/components/sections/CarVideoSection";
import HeroSection from "@/components/sections/HeroSection";
import HowToSection from "@/components/sections/HowToSection";
import PrevWinner from "@/components/sections/PrevWinner";
import SwiperSlider from "@/plugin/SwiperSlider";

function App() {
  return (
    <div>
      <HeroSection />
      <HowToSection />
      <PrevWinner />
      <CarVideos />
      <SwiperSlider />
      {/* <FormGenerator
        inputConfigs={inputConfigs}
        callBackFn={(data) => console.log(data)}
      /> */}
    </div>
  );
}

export default App;
