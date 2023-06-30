import Toggle from "../toggle/Toggle";
import { NavContainer } from "./Navigation.styles";
import {
  animate,
  motion,
  stagger,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect, useState } from "react";
import CustomLink from "../CustomLink";
import LinkButton from "../LinkButton";

interface NavProps {
  particles: boolean;
  toggleParticles(): void;
  // hasScrolled:boolean
}
const entryAnimation = {
  opacity: [0, 0, 1, 1],
  width: ["50%", "50%", "50%", "100%"],
  x: ["-50%", "-50%", "-50%", "-50%"],
  y: ["340%", "340%", "340%", "0%"],
};
const splashTransition = {
  duration: 3,
  times: [0, 0.4, 0.6, 1],
  delay: 4,
  ease: [0, 0.71, 0.2, 1.01],
};
function Navigation({ particles, toggleParticles }: NavProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
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
      // const height =
      //   container.clientHeight;
        // documconaent.documentElement.clientHeight;
      if (winScroll > lastScrollY) {
        // if scroll down hide the navbar
        console.log("down");
        setHasScrolled(false);
      } else {
        // if scroll up show the navbar

        console.log("up");
        setHasScrolled(true);
      }

      console.log(lastScrollY);
      // remember current page location to use in the next move
      setLastScrollY(winScroll);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".main-layout");

    if (container) {
      container.addEventListener("scroll", controlNavbar);
      console.log("Scroll");
      // cleanup function
      return () => {
        container.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  // const scrollDetect = () => {
  //   if (window.scrollY >= 80) {
  //     setHasScrolled(true);
  //     console.log(hasScrolled)
  //   } else {
  //     setHasScrolled(false);
  //   }
  // };
  // useEffect(() => {
  //   scrollDetect()
  //   // adding the event when scroll change background
  //   window.addEventListener("scroll", scrollDetect)
  // })
  // window.addEventListener("scroll", scrollDetect);
  useEffect(() => {
    animate(
      ".unsplash a,.unsplash div",
      { opacity: [0, 0, 0, 1] },
      {
        duration: 0.5,
        delay: stagger(0.1, { startDelay: 6.5 }),
        ease: [0, 0.71, 0.2, 1.01],
      }
    );
  }, []);
  return (
    <NavContainer
      animate={entryAnimation}
      transition={splashTransition}
      style={hasScrolled ? { backdropFilter: "blur(10px)" } : {}}
    >
      <CustomLink className="logo" href="/#home">
        <motion.div
          animate={{
            width: ["75px", "50px"],
            height: ["75px", "50px"],
          }}
          transition={{
            duration: 0.5,
            delay: 6.5,
          }}
        >
          <RiveComponent
            onMouseOver={() => {
              playAnimation ? (playAnimation.value = true) : null;
            }}
          />
        </motion.div>
      </CustomLink>
      <div className="unsplash">
        <CustomLink className="navLinks" href="#about">
          <span className="navIndex">01. </span>
          <span>About</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#experience">
          <span className="navIndex">02. </span>
          <span>Experience</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#projects">
          <span className="navIndex">03. </span>
          <span>Projects</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#contact">
          <span className="navIndex">04. </span>
          <span>Contact</span>
        </CustomLink>
        <LinkButton className="navLinks resumeLink" href="/resume">
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
