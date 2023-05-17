"use client";
import React, { useCallback, useRef, useState } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../config/particles.json";
import { ISourceOptions } from "tsparticles-engine";
import {
  Description,
  Hero,
  LandingContainer,
} from "@/app/page.styles";
import Navigation from "@/components/navigation/Navigation";
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
export default function Home() {
  const [particles, setParticles] = useState<boolean>(true);
  const containerRef = useRef<Container>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const toggleParticles = () => {
    if (containerRef && containerRef.current) {
      particles
        ? containerRef.current.pause()
        : containerRef.current.play();
      setParticles(!particles);
    }
  };
  return (
    <>
      <LandingContainer
        id="#home"
        initial={{
          background: `radial-gradient(circle at 50%, #d6dbdc, #d6dbdc 0%, #343434 0%, #343434 80%)`,
        }}
        animate={{
          background: `radial-gradient(circle at 50%, #d6dbdc, #d6dbdc 100%, #343434 105%, #343434 105%)`
        }}
        transition={{
          duration: .5,
        }}
      >
        <Particles
          options={particlesOptions as ISourceOptions}
          init={particlesInit}
          container={containerRef}
          style={{ display: particles ? "inherit" : "none" }}
        />
        <Navigation
          particles={particles}
          toggleParticles={toggleParticles}
        />
        <Hero animate={splashAnimation} transition={splashTransition}>
          <TypeIt
            element={"h1"}
            options={{
              speed: 10,
              waitUntilVisible: true,
              loop: true,
              loopDelay: 5000,
            }}
            getBeforeInit={(instance) => {
              instance
                .type("Hi, I'm Alex")
                .pause(750)
                .delete(4)
                .pause(500)
                .type("a FullStack Engineer");
              // Remember to return it!
              return instance;
            }}
          />
        </Hero>
      </LandingContainer>
      <Description>
        Portfolio
        <p>
          <code>ALEXIUS</code>
        </p>
      </Description>
    </>
  );
}
