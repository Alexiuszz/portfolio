import React from "react";
import { HeroContainer } from "@/app/page.styles";
import TypeIt from "typeit-react";

const splashAnimation = {
  opacity: [0, 0, 1, 1],
};
const splashTransition = {
  duration: 3,
  times: [0, 0.4, 0.7, 1],
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};

function Hero() {
  return (
    <HeroContainer
      animate={splashAnimation}
      transition={splashTransition}
    >
      <TypeIt
        element={"h1"}
        options={{
          speed: 5,
          waitUntilVisible: true,
          loop: true,
          loopDelay: 5000,
        }}
        getBeforeInit={(instance) => {
          instance
            .type("Hi, I'm Alex")
            .pause(1000)
            .delete(4)
            .pause(100)
            .type("a FullStack Engineer")
            .pause(4000);
          // Remember to return it!
          return instance;
        }}
      />
    </HeroContainer>
  );
}

export default Hero;