import Toggle from "../toggle/Toggle";
import { NavContainer } from "./Navigation.styles";
import { animate, motion, stagger } from "framer-motion";
import {
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import CustomLink from "../CustomLink";
import LinkButton from "../LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faDiagramProject,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useIsMedium } from "@/hooks/useMediaQuery";

interface NavProps {
  menu: boolean;
  // hasScrolled:boolean
}

const splashTransition = {
  duration: 3,
  times: [0, 0.4, 0.6, 1],
  delay: 3,
  ease: [0, 0.71, 0.2, 1.01],
};
function Navigation({ menu }: NavProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMedium = useIsMedium();
  const { rive, RiveComponent } = useRive({
    src: "/assets/rives/logo-animation.riv",
    stateMachines: "main",
    autoplay: true,
    layout: new Layout({
      fit: Fit.FitHeight,
    }),
  });
  const playAnimation = useStateMachineInput(
    rive,
    "main",
    "RotateBG"
  );
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const container = document.querySelector(".main-layout");
    if (container) {
      const winScroll = container.scrollTop;

      if (winScroll > lastScrollY) {
        // if scroll down hide the navbar
        animate(
          ".main-nav",
          { y: "-100%" },
          {
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }
        );
        setHasScrolled(false);
      } else {
        // if scroll up show the navbar

        animate(
          ".main-nav",
          { y: "0%" },
          {
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }
        );
        setHasScrolled(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(winScroll);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".main-layout");

    if (container) {
      container.addEventListener("scroll", controlNavbar);
      // cleanup function
      return () => {
        container.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  useEffect(() => {
    animate(
      ".unsplash a,.unsplash div,.nav-menu-button",
      { opacity: [0, 0, 0, 1] },
      {
        duration: 0.5,
        delay: stagger(0.1, { startDelay: 6.5 }),
        ease: [0, 0.71, 0.2, 1.01],
      }
    );
  }, []);
  const [entryAnimation] = useState(() =>
    !isMedium
      ? {
          opacity: [0, 0, 1, 1],
          width: ["50%", "50%", "50%", "100%"],
          x: ["-35%", "-35%", "-35%", "-50%"],
          y: ["300%", "300%", "300%", "0%"],
        }
      : {
          opacity: [0, 0, 1, 1],
          width: ["50%", "50%", "50%", "100%"],
          x: ["-50%", "-50%", "-50%", "-50%"],
          y: ["340%", "340%", "340%", "0%"],
        }
  );
  return (
    <NavContainer
      animate={entryAnimation}
      transition={splashTransition}
      scrollUp={hasScrolled}
      isTop={lastScrollY < 300}
      menu={menu}
      className="main-nav"
    >
      <CustomLink className="logo" href="/#home">
        <motion.div
          animate={{
            width: ["75px", "50px"],
            height: ["75px", "50px"],
          }}
          transition={{
            duration: 1,
            delay: 4.5,
          }}
        >
          <RiveComponent
            onMouseOver={() => {
              playAnimation ? (playAnimation.value = true) : null;
            }}
            onClick={() => {}}
          />
        </motion.div>
      </CustomLink>
      <div className="unsplash">
        <CustomLink className="navLinks" href="#about">
          <span className="navIndex">
            <FontAwesomeIcon icon={faUser} />{" "}
          </span>
          <span>About</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#experience">
          <span className="navIndex">
            <FontAwesomeIcon icon={faAddressCard} />{" "}
          </span>
          <span>Experience</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#projects">
          <span className="navIndex">
            <FontAwesomeIcon icon={faDiagramProject} />
          </span>
          <span>Projects</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#contact">
          <span className="navIndex">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span>Contact</span>
        </CustomLink>
        <LinkButton
          className="about-button"
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </LinkButton>
        {/*<CustomLink className="navLinks" href="#">
          <span className="navIndex">05. </span><span>Blog</span>
          
        </CustomLink> */}
        {/* <Toggle on={particles} toggle={toggleParticles} /> */}
      </div>
    </NavContainer>
  );
}

export default Navigation;
