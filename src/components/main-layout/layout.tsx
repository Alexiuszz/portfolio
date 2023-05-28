import React, { useCallback, useRef, useState } from "react";
import { MainLayout, PageOverview } from "./layout.styles";
import Navigation from "../navigation/Navigation";
import {
  Container,
  Engine,
  ISourceOptions,
} from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../../config/particles.json";
import Particles from "react-particles";
import { motion } from "framer-motion";

interface ProjectOverview {
  id: string;
  text: string;
  icon?: string;
}
interface LayoutProps {
  children?: React.ReactNode;
  pageOverview?: ProjectOverview[];
  home?: boolean;
  hideOverview?: boolean;
  scrollSection(section: string): void;
}
function Layout({
  children,
  pageOverview,
  home,
  hideOverview,
  scrollSection,
}: LayoutProps) {
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
      <Navigation
        particles={particles}
        toggleParticles={toggleParticles}
      />
      <MainLayout hideOverview={hideOverview}>
        <div className="content">{children}</div>
        <PageOverview hideOverview={hideOverview}>
          <span>Page Overview</span>
          {pageOverview?.map((item, i) => (
            <motion.div key={i} className="item">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollSection(item.id);
                }}
                className="itemLink"
              >
                {item.text}
              </a>
            </motion.div>
          ))}
        </PageOverview>
      </MainLayout>
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
        container={containerRef}
        style={{ display: particles ? "inherit" : "none", zIndex: 2 }}
      />
    </>
  );
}

export default Layout;
