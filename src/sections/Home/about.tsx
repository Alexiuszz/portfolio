import { AboutSectionContainer } from "@/styles/page.styles";
import React, { forwardRef, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import LinkButton from "@/components/LinkButton";
import CustomLink from "@/components/CustomLink";
import { SectionHeader } from "@/styles/typography.styles";

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
      <SectionHeader>A little about me</SectionHeader>
      <div className="about-content">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 1 }}
          variants={txtVariants}
          className="about-text"
        >
          <article>
            <p>
              <span className="bigLetter">H</span>i! my name is
              Alexius, I&apos;m a software developer from Nigeria. I
              hold a Bachelor&apos;s degree in Electronics Engineering
              from the University of Nigeria Nsukka, located in Enugu,
              Nigeria.
            </p>
            <p>
              Currently, my focus lies in building visually appealing
              web applications using React and NodeJS. Additionally, I
              possess experience as an Embedded Software Engineer.
              Currently, I am involved in the development of two
              projects:{" "}
              <CustomLink href="#" className="home-about-link">
                Biamuta{" "}
              </CustomLink>{" "}
              and{" "}
              <CustomLink href="#" className="home-about-link">
                Emissar{" "}
              </CustomLink>
              . I have an insatiable passion for continuous learning,
              regardless of the scale or complexity of the subject
              matter.
            </p>
          </article>
          <LinkButton
            className="about-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Checkout my Resume
          </LinkButton>
        </motion.div>
        <motion.div className="about-img">
          <div className="splash"></div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants}
            viewport={{ once: true, amount: 1 }}
            className="aboutImgWrapper"
          >
            <div className="about-img-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src={"/assets/images/PortHero1.png"}
                alt="Enyinna Nwala"
                variants={imgVariants}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AboutSectionContainer>
  );
});

export default AboutSection;
