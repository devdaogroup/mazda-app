// import CarVideos from "@/components/sections/CarVideoSection";
// import HeroSection from "@/components/sections/HeroSection";
// import HowToSection from "@/components/sections/HowToSection";
// import PrevWinner from "@/components/sections/PrevWinner";
// import ReactFullpage from "@fullpage/react-fullpage";

import HeroSection from "@/components/sections/HeroSection";

function App() {
  return (
    <div>
      {/* <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} 
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HeroSection />
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
              <div className="section">
                <HowToSection />
              </div>
              <div className="section">
                <PrevWinner />
              </div>

              <div className="section">
                <CarVideos />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      /> */}
      <HeroSection />
      {/* <FormGenerator
        inputConfigs={inputConfigs}
        callBackFn={(data) => console.log(data)}
      /> */}
    </div>
  );
}

export default App;
