import { AboutSectionContainer } from "@/sections/about/about.styles";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Variants, motion, useInView } from "framer-motion";
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
const AboutSection = ({
  setSection,
}: {
  setSection: (section: string) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  useEffect(() => {
    isInView && setSection("about");
  }, [isInView]);

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
              <span className="bigLetter">H</span>i! my name is Alexius.
            </p>
            <p>
              Software Developer with 6+ years of experience designing,
              optimising, and deploying production-ready solutions across
              diverse domains, including IoT, EdTech, and enterprise web
              platforms. Skilled in building scalable systems and currently
              focused on applying AI and machine learning technologies to
              enhance usability, streamline performance, and drive productivity
              at scale.
            </p>
          </article>
          <LinkButton
            className="about-button"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
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
                src={"/assets/images/Headshot.jpg"}
                alt="Enyinna Nwala"
                variants={imgVariants}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AboutSectionContainer>
  );
};

export default AboutSection;
