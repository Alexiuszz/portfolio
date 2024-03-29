import React, { useEffect, useRef, useState } from "react";
import {
  HeroContainer,
  LandingContainer,
} from "@/sections/hero/hero.styles";
import TypeIt from "typeit-react";
import Carousel from "@/components/carousel/carousel";
import {
  Variants,
  animate,
  motion,
  stagger,
  useInView,
} from "framer-motion";
import { Header, Text } from "@/styles/typography.styles";
import { useIsMedium } from "@/hooks/useMediaQuery";

const splashAnimation = {
  opacity: [0, 0, 0, 1],
};
const splashTransition = {
  duration: 2,
  times: [0, 0.4, 0.6, 1],
  delay: 1.8,
  ease: [0, 0.71, 0.2, 1.01],
};
const splashTransition2 = {
  duration: 1.8,
  times: [0, 0.4, 0.7, 1],
  delay: 2,
  ease: [0, 0.71, 0.2, 1.01],
};

const Hero = ({
  setSection,
}: {
  setSection: (section: string) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  useEffect(() => {
    isInView && setSection("home");
  }, [isInView]);
  const isMedium = useIsMedium();
  const [heroAnimation, setHeroAnimation] = useState(() =>
    !isMedium
      ? {
          opacity: [0, 1, 1, 1],
          x: ["130%", "130%", "130%", "0%"],
          y: ["550%", "550%", "550%", "-200%"],
        }
      : {
          opacity: [0, 1, 1, 1],
          x: ["250%", "250%", "250%", "0%"],
          y: ["250%", "250%", "250%", "-200%"],
          fontSize: ["30px", "30px", "30px", "20px"],
        }
  );

  useEffect(() => {
    animate(
      ".heroText, .heroMe, .heroName",
      { opacity: [0,  1] },
      {
        duration: 1,
        delay: stagger(0.1, { startDelay: 3.5 }),
        ease: [0, 0.71, 0.2, 1.01],
      }
    );
  }, []);

  return (
    <LandingContainer ref={ref} id="home">
      <div className="heroContent">
        <HeroContainer>
          <motion.div
            animate={heroAnimation}
            transition={splashTransition}
            className="typewriter"
          >
            <TypeIt
              element={"h1"}
              options={{
                speed: 5,
                waitUntilVisible: true,
              }}
              getBeforeInit={(instance) => {
                instance
                  .type("Hi, I'm Alex")
                  .pause(4500)
                  .delete(4)
                  .pause(100)
                  .type("a FullStack Engineer")
                  .pause(4000)
                  .delete(28)
                  .type("Welcome, my name is");
                // Remember to return it!
                return instance;
              }}
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: [0, 1],
            }}
            transition={splashTransition2}
            className="heroAbout"
          >
            <Header className="heroName" weight="700" left="left">
              Alexius Nwala
            </Header>
            <Header
              className="heroMe"
              weight="700"
              size="34px"
              left="left"
            >
              I&apos;m a Fullstack Dev and Embedded Software Engineer.
            </Header>
            <Text className="heroText">
              I build outstanding systems and applications for the
              web, and amazing devices that keep you connected to it!
              I thrive in building and designing things that bring the
              online world and your gadgets to life.
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
};
export default Hero;
