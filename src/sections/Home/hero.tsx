import React, { forwardRef } from "react";
import { HeroContainer, LandingContainer } from "@/app/page.styles";
import TypeIt from "typeit-react";
import Carousel from "@/components/carousel/carousel";
import { motion } from "framer-motion";
import { Header, Text } from "@/styles/typography.styles";

const splashAnimation = {
  opacity: [0, 0, 1, 1],
};
const splashTransition = {
  duration: 3,
  times: [0, 0.4, 0.7, 1],
  delay: 4,
  ease: [0, 0.71, 0.2, 1.01],
};

const Hero = forwardRef(function Hero(
  props: {},
  ref: React.Ref<HTMLElement>
) {
  return (
    <LandingContainer ref={ref} id="home">
      <div className="heroContent">
        <HeroContainer
          animate={splashAnimation}
          transition={splashTransition}
        >
          <motion.div className="typewriter">
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
                  .pause(4500)
                  .delete(4)
                  .pause(100)
                  .type("a FullStack Engineer")
                  .pause(4000);
                // Remember to return it!
                return instance;
              }}
            />
          </motion.div>
          <motion.div className="heroAbout">
            <Header weight="700" left="left">
              Alexius Nwala
            </Header>
            <Header weight="700" size="25px" left="left">
              I&apos;m a Fullstack Engineer and Embedded Software
              Engineer.
            </Header>
            <Text>
              I build and design systems and applications for the web
              and occasional devices that connect you to it!
            </Text>
          </motion.div>
        </HeroContainer>
        <Carousel
          animate={splashAnimation}
          transition={splashTransition}
          images={[
            "https://img.icons8.com/color/100/000000/c-plus-plus-logo.png",
            "https://img.icons8.com/color/100/000000/javascript--v1.png",
            "https://img.icons8.com/color/100/000000/typescript.png",
            "https://img.icons8.com/color/100/000000/css3.png",
            "https://img.icons8.com/color/100/000000/html-5--v1.png",
            "https://img.icons8.com/color/100/000000/c-sharp-logo.png",
            "https://img.icons8.com/color/100/000000/react-native.png",
            "https://img.icons8.com/color/100/000000/nextjs.png",
            "https://img.icons8.com/color/100/000000/nodejs.png",
            "https://img.icons8.com/color/100/000000/postgreesql.png",
            "https://img.icons8.com/color/100/000000/mongodb.png",
            "https://img.icons8.com/color/100/000000/redux.png",
          ]}
        />
      </div>
    </LandingContainer>
  );
});
export default Hero;
