import { AboutSectionContainer } from "@/app/page.styles";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import LinkButton from "@/components/LinkButton";

function AboutSection() {
  return (
    <AboutSectionContainer>
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
            Hello, welcome to domain (pun intended). A little about
            myself, I&apos;m a 24 year old software programmer from
            Nigeria, currently building web applications with React
            and NodeJS.
          </p>
          <LinkButton >
                Get to know me
          </LinkButton>
        </motion.div>
      </div>
    </AboutSectionContainer>
  );
}

export default AboutSection;
