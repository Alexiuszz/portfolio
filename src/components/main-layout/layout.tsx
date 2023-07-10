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
  MenuContainer,
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
import {
  animate,
  motion,
  stagger,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
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
import CustomLink from "@/components/CustomLink";
import Link from "@/components/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faDiagramProject,
  faEnvelope,
  faFile,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import LinkButton from "../LinkButton";
interface ProjectOverview {
  id: string;
  text: string;
  icon?: string;
}
interface LayoutProps {
  children?: React.ReactNode;
  sectionInView: string;
}
function Layout({ children, sectionInView }: LayoutProps) {
  const [particles, setParticles] = useState<boolean>(true);
  const containerRef = useRef<Container>(null);
  const [splash, setSplash] = useState(true);
  const [menu, setMenu] = useState<boolean>(false);
  const { loaded, setLoaded } = useContext(ResourceContext);
  const toggleMenu = () => setMenu((prevState) => !prevState);
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
          animate={{
            opacity: [1, 0],
          }}
          transition={{ delay: 3.8, duration: 0.5 }}
          className="logoSplash"
        >
          <SplashDesign />
        </motion.div>
      </SplashScreen>
      {loaded && (
        <>
          <Navigation menu={menu} sectionInView={sectionInView} />
          <MainLayout
            className="main-layout"
            onClick={() => setMenu(false)}
          >
            <LDesign />
            <Socials className="socials">
              <CustomLink
                className="socialsLink"
                href="https://github.com/Alexiuszz"
              >
                <FontAwesomeIcon icon={faGithub} />
              </CustomLink>
              <CustomLink
                className="socialsLink"
                href="https://twitter.com/AlexiusNwala"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </CustomLink>
              <CustomLink
                className="socialsLink"
                href="https://www.linkedin.com/in/alexis-nwala"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </CustomLink>
              <div className="emailLine" />
              <div className="emailCircle" />
            </Socials>
            <MenuContainer menu={menu} sectionInView={sectionInView}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setMenu((prevState) => !prevState);
                }}
                className="nav-menu-button"
              >
                M
              </div>
              <div className="nav-menu-items">
                <CustomLink className="navLinks" href="#home">
                  <span className="navIndex">
                    <FontAwesomeIcon icon={faHome} />{" "}
                  </span>
                  <span> Home</span>
                </CustomLink>
                <CustomLink className="navLinks" href="#about">
                  <span className="navIndex">
                    <FontAwesomeIcon icon={faUser} />{" "}
                  </span>
                  <span> About</span>
                </CustomLink>
                <CustomLink className="navLinks" href="#experience">
                  <span className="navIndex">
                    <FontAwesomeIcon icon={faAddressCard} />{" "}
                  </span>
                  <span> Experience</span>
                </CustomLink>
                <CustomLink className="navLinks" href="#projects">
                  <span className="navIndex">
                    <FontAwesomeIcon icon={faDiagramProject} />
                  </span>
                  <span> Projects</span>
                </CustomLink>
                <CustomLink className="navLinks" href="#contact">
                  <span className="navIndex">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <span> Contact</span>
                </CustomLink>
                <LinkButton
                  className="about-button"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="navIndex">
                    <FontAwesomeIcon icon={faFile} />
                  </span>
                  <span> resume</span>
                </LinkButton>
                <div className="onlyFullMenu">
                  <Link
                    className="menu-mail"
                    href="mailto:alexiusnwala@gmail.com"
                  >
                    alexiusnwala@gmail.com
                  </Link>
                  <div className="menu-socials">
                    <CustomLink
                      className="socialsLink"
                      href="https://github.com/Alexiuszz"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </CustomLink>
                    <CustomLink
                      className="socialsLink"
                      href="https://twitter.com/AlexiusNwala"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </CustomLink>
                    <CustomLink
                      className="socialsLink"
                      href="https://www.linkedin.com/in/alexis-nwala"
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </CustomLink>
                  </div>
                </div>
              </div>
            </MenuContainer>
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
            <EmailDesign className="socials">
              <Link className="" href="mailto:alexiusnwala@gmail.com">
                alexiusnwala@gmail.com
              </Link>
              <div className="emailLine" />
              <div className="emailCircle" />
            </EmailDesign>
          </MainLayout>
        </>
      )}
      {/* <Particles
        options={particlesOptions as ISourceOptions}
        init={particlesInit}
        container={containerRef}
        style={{
          display: particles ? "inherit" : "none",
          zIndex: 2,
        }}
      /> */}
    </ThemeProvider>
  );
}
function SplashDesign() {
  const divRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  useEffect(() => {
    if (!divRef.current) return;

    const { width, height, top, left } =
      divRef.current.getBoundingClientRect();

    setDimensions({ width, height, top, left });
  }, []);

  return (
    <div ref={divRef} className="container">
      <motion.svg
        className="svg-border"
        width={dimensions.width + 100}
        height={dimensions.height + 100}
        viewBox={`0 0 ${dimensions.width + 100} ${
          dimensions.height + 100
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="neon"
            filterUnits="userSpaceOnUse"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
              result="blur5"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur10"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="20"
              result="blur20"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="30"
              result="blur30"
            />
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="50"
              result="blur50"
            />

            <feMerge result="blur-merged">
              <feMergeNode in="blur10" />
              <feMergeNode in="blur20" />
              <feMergeNode in="blur30" />
              <feMergeNode in="blur50" />
            </feMerge>

            <feColorMatrix
              result="red-blur"
              in="blur-merged"
              type="matrix"
              values="1 0 0 0 0
                      0 0.06 0 0 0
                      0 0 0.44 0 0
                      0 0 0 1 0"
            />
            <feMerge>
              <feMergeNode in="red-blur" />
              <feMergeNode in="blur5" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <svg className="neon" x={50} y={50}>
          <motion.path
            d={`M 0 0 h ${dimensions.width} v ${dimensions.height} h -${dimensions.width} v -${dimensions.height}`}
            stroke="lime"
            strokeWidth="3"
            animate={{
              pathLength: [0, 0.75],
              pathOffset: [0, 0.2],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: 2,
              ease: "easeInOut",
              repeatType: "loop",
            }}
          />
        </svg>
      </motion.svg>

      <span>Hello Word!</span>
    </div>
  );
}

export default Layout;
