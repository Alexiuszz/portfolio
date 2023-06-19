import { AboutSectionContainer } from "@/styles/page.styles";
import React, { forwardRef, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import LinkButton from "@/components/LinkButton";
import CustomLink from "@/components/CustomLink";

const containerVariants: Variants = {
  offscreen: {
    y: 10,
  },
  onscreen: {
    y: 0,
    rotate: -8,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const txtVariants: Variants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const imgVariants: Variants = {
  offscreen: {
    opacity: 0.5,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    rotate: 8,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
const AboutSection = forwardRef(function AboutSection(
  props: {},
  ref: React.Ref<HTMLElement>
) {
  return (
    <AboutSectionContainer ref={ref} id="about">
      <div className="about-content">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          variants={txtVariants}
          className="about-text"
        >
          <p>
            <span className="bigLetter">H</span>ello! my name is
            Alexius, I&apos;m a software developer from Nigeria,
            currently building beautiful web applications with React &
            NodeJS, I also have experience as an Embedded Software
            Enginneer. I have a Bachelor&apos;s degree in Electronics
            Engineering, from the University of Nigeria Nsukka, Enugu
            Nigeria. I&apos;m currently building{" "}
            <CustomLink href="#" className="home-about-link">
              Biamuta
            </CustomLink>{" "}
            and{" "}
            <CustomLink href="#" className="home-about-link">
              Emissar
            </CustomLink>{" "}
            . I love learning new things no matter how small,
          </p>
          <LinkButton className="about-button" href="#">
            Get to know me
          </LinkButton>
        </motion.div>
        <motion.div className="about-img">
          <div className="splash"></div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants}
            viewport={{ once: false, amount: 1 }}
            className="aboutImgWrapper"
          >
            <div className="subWrapper">
              <div className="about-img-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img
                  src={"/assets/images/PortHero1.png"}
                  alt="Enyinna Nwala"
                  variants={imgVariants}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AboutSectionContainer>
  );
});

export default AboutSection;
