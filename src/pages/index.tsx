import HeroLayout from "@/components/sections/HeroSection";
import HowToSection from "@/components/sections/HowToSection";
import PrevWinner from "@/components/sections/PrevWinner";
import CarVideos from "@/components/sections/CarVideoSection";

function App() {
    return (
        <div>
            <HeroLayout/>
            <HowToSection/>
            <PrevWinner/>
            <CarVideos/>
            {/* <FormGenerator
        inputConfigs={inputConfigs}
        callBackFn={(data) => console.log(data)}
      /> */}
        </div>
    );
}

export default App;
