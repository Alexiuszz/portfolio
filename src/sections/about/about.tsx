import { AboutSectionContainer } from "@/sections/about/about.styles";
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
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
              <span className="bigLetter">H</span>i! my name is
              Alexius, I&apos;m a software developer from Nigeria. I
              hold a Bachelor&apos;s degree in Electronics Engineering
              from the University of Nigeria Nsukka, located in Enugu,
              Nigeria.
            </p>
            <p>
              currently, my primary focus revolves around building
              captivating and aesthetically pleasing web applications
              with a myriad technologies the core of which are React,
              Next and NodeJS. Moreover, my background also
              encompasses valuable expertise as an Embedded Software
              Engineer. As of now, I am actively engaged in the
              development of two exciting projects:{" "}
              <CustomLink href="#" className="home-about-link">
                Biamuta{" "}
              </CustomLink>{" "}
              and{" "}
              <CustomLink href="#" className="home-about-link">
                OdaNow{" "}
              </CustomLink>
              .
            </p>
            <p>
              One aspect that sets me apart is my insatiable passion
              for continuous learning. I firmly believe that the
              journey of knowledge acquisition is a lifelong pursuit,
              and I eagerly embrace new challenges regardless of their
              scale or complexity. Whether it&apos;s delving into
              cutting-edge frameworks, exploring emerging
              technologies, or expanding my proficiency in existing
              tools, I am always driven to expand my skillset and stay
              at the forefront of industry trends.
            </p>
            <p>
              In summary, I thrive on continuous learning, embracing
              new challenges, and staying ahead of the curve to
              deliver exceptional results.
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
};

export default AboutSection;
