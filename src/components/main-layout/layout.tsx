import React, {
  useCallback,
  useContext,
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
} from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../../config/particles.json";
import Particles from "react-particles";
import { animate, motion, stagger } from "framer-motion";
import CustomCursor from "../CustomCursor";
import {
  useRive,
  Layout as RiveLayout,
  Fit,
} from "@rive-app/react-canvas";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "@/styles/theme";
import LDesign from "../LDesign";
import { ResourceContext } from "./context/ResourceContext";
import CustomLink from '@/components/CustomLink';
import Link from "@/components/CustomLink";

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
  const { loaded, setLoaded } = useContext(ResourceContext);
  const { rive, RiveComponent } = useRive({
    src: "/assets/rives/logo-animation.riv",
    stateMachines: "splash",
    autoplay: true,
    layout: new RiveLayout({
      fit: Fit.FitHeight,
    }),
    onLoad: (e) => {
      setLoaded(true);
    },
  });

  useEffect(() => {
    if (loaded) {
      animate(
        ".socials,.myEmail",
        { opacity: [0, 0, 0, 1] },
        {
          duration: 0.5,
          delay: stagger(0.1, { startDelay: 8.0 }),
          ease: [0, 0.71, 0.2, 1.01],
        }
      );
    }
  }, [loaded]);
  useEffect(() => {
    let splashTimeout: NodeJS.Timeout;
    if (loaded) {
      splashTimeout = setTimeout(() => {
        setSplash(false);
      }, 7000);

      animate(
        ".mainSplash",
        {
          background: `radial-gradient(circle at 50%, transparent,transparent 100%, #061e16 105%, #061e16 105%)`,
        },
        {
          delay: 3,
          duration: 1,
        }
      );
      animate(
        ".logoSplash",
        {
          opacity: [1, 0],
        },
        { delay: 3, duration: 0.5 }
      );
    }
    return () => {
      clearTimeout(splashTimeout);
    };
  }, [loaded]);

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
        className="mainSplash"
        initial={{
          background: `radial-gradient(circle at 50%, transparent, transparent 0%, #061e16 0%, #061e16 80%)`,
        }}
        style={{ display: splash ? "absolute" : "none" }}
      >
        <motion.div
          // animate={{
          //   opacity: [1, 0],
          // }}
          // transition={{ delay: 3.8, duration: 0.5 }}
          className="logoSplash"
        >
          <RiveComponent />
        </motion.div>
      </SplashScreen>
      {loaded && (
        <>
          <Navigation
            particles={particles}
            toggleParticles={toggleParticles}
          />
          <MainLayout hideOverview={hideOverview}>
            <LDesign />
            <Socials className="socials"></Socials>
            <div className="content">{children}</div>
            {/* <PageOverview hideOverview={hideOverview}>
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
            </PageOverview> */}
            <EmailDesign className="myEmail">
              <Link className="" href="mailto:alexiusnwala@gmail.com">
                alexiusnwala@gmail.com
              </Link>
              <div className="emailLine" />
              <div className="emailCircle" />
            </EmailDesign>
          </MainLayout>
        </>
      )}
      <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
        container={containerRef}
        style={{
          display: particles ? "inherit" : "none",
          zIndex: 2,
        }}
      />
    </ThemeProvider>
  );
}

export default Layout;
