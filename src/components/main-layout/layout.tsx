import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  MainLayout,
  PageOverview,
  SplashScreen,
  Socials,
  EmailDesign,
} from "./layout.styles";
import { GlobalStyles } from "@/styles/globalStyles";
import Navigation from "../navigation/Navigation";
import {
  Container,
  Engine,
  ISourceOptions,
  Opacity,
} from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../../config/particles.json";
import Particles from "react-particles";
import { motion } from "framer-motion";
import CustomCursor from "../CustomCursor";
import {
  useRive,
  useStateMachineInput,
  Layout as RiveLayout,
  Fit,
} from "@rive-app/react-canvas";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "@/styles/theme";
import LDesign from "../LDesign";

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
  const [splash, setSplash] = useState(true);
  const { rive, RiveComponent } = useRive({
    src: "/assets/rives/logo-animation.riv",
    stateMachines: "splash",
    autoplay: true,
    layout: new RiveLayout({
      fit: Fit.FitHeight,
    }),
    onLoad: (e) => {},
  });
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setSplash(false);
    }, 5000);

    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

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
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <CustomCursor />
      <SplashScreen
        initial={{
          background: `radial-gradient(circle at 50%, transparent, transparent 0%, #061e16 0%, #061e16 80%)`,
        }}
        animate={{
          background: `radial-gradient(circle at 50%, transparent,transparent 100%, #061e16 105%, #061e16 105%)`,
        }}
        transition={{
          delay: 4,
          duration: 1,
        }}
        style={{ display: splash ? "absolute" : "none" }}
      >
        <motion.div
          animate={{
            opacity: [1, 0],
          }}
          transition={{ delay: 3.8, duration: 0.5 }}
          className="logoSplash"
        >
          <RiveComponent />
        </motion.div>
      </SplashScreen>
      <Navigation
        particles={particles}
        toggleParticles={toggleParticles}
      />
      <MainLayout hideOverview={hideOverview}>
        <LDesign />
        <Socials></Socials>
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
        <EmailDesign><a href="mailto:alexiusnwala@gmail.com">alexiusnwala@gmail.com</a></EmailDesign>
      </MainLayout>
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
        container={containerRef}
        style={{ display: particles ? "inherit" : "none", zIndex: 2 }}
      />
    </ThemeProvider>
  );
}

export default Layout;
