import { AboutSectionContainer } from "@/styles/page.styles";
import Image from "next/image";
import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import LinkButton from "@/components/LinkButton";

const AboutSection = forwardRef(function AboutSection(
  props: {},
  ref: React.Ref<HTMLElement>
) {
  return (
    <AboutSectionContainer ref={ref} id="home-about">
      <div className="about-content">
        <motion.div className="about-text">
          <p>
            <span className="bigLetter">H</span>ello! my name is
            Alexius, I&apos;m a software developer from Nigeria,
            currently building beautiful web applications with React &
            NodeJS, I also have experience as an Embedded Software
            Enginneer. I have a Bachelor&apos;s degree in Electronics
            Engineering, from the University of Nigeria Nsukka, Enugu
            Nigeria. I&apos;m currentl building            <a href="#" className="home-about-link">
              Biamuta
            </a>            and
            <a href="#" className="home-about-link">
              Emissar
            </a>            . I love learning new things no matter how small,
          </p>
          <LinkButton>Get to know me</LinkButton>
        </motion.div>
        <motion.div className="about-img">
          <div className="splash"></div>
          <div className="about-img-container">
            <img
              src={"/assets/images/PortHero1.png"}
              alt="Enyinna Nwala"
            />
          </div>
        </motion.div>
      </div>
    </AboutSectionContainer>
  );
});

export default AboutSection;
