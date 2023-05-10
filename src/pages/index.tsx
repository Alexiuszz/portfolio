"use client";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
import Toggle from "@/components/toggle/Toggle";

export default function Home() {
  const [particles, setParticles] = useState(true);
  const containerRef = useRef<Container>(null);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  // useEffect(() => {
  //   if (containerRef && containerRef.current) {
  //     console.log(containerRef.current);
  //   }
  // });

  const toggleParticles = () => {
    if (containerRef && containerRef.current) {
      particles
        ? containerRef.current.pause()
        : containerRef.current.play();
      setParticles(!particles);
    }
  };
  return (
    <LandingContainer>
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
        container={containerRef}
        style={{display: particles?"inherit":"none"}}
      />
      <Description >
        Portfolio
        <p>
          <code>ALEXIUS</code>
        </p>
      </Description>
      <Hero>
        <h1>Hello</h1>
      </Hero>
    </LandingContainer>
  );
}
