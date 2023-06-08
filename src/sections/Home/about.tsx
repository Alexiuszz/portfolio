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
        <motion.div className="about-img">
          <Image
            src={"/assets/images/PortHero1.png"}
            fill={true}
            alt="Enyinna Nwala"
          />
        </motion.div>
        <motion.div className="about-text">
          <p>
            Hello, welcome to my domain (pun intended). A little about
            myself, I&apos;m a 24 year old software developer from
            Nigeria, currently building web applications with React
            and NodeJS, I also have some experience as an Embedded
            Software Enginneer. I have a Bachelor&apos;s degree in
            Electronics Engineering, from the University of Nigeria
            Nsukka, Enugu Nigeria.
          </p>
          <LinkButton>Get to know me</LinkButton>
        </motion.div>
      </div>

      <motion.div className="techsCarousel"></motion.div>
    </AboutSectionContainer>
  );
});

export default AboutSection;
