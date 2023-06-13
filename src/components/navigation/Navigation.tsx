import Toggle from "../toggle/Toggle";
import { NavContainer } from "./Navigation.styles";
import { animate, motion, stagger } from "framer-motion";
import {
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import { useEffect } from "react";
import CustomLink from "../CustomLink";

interface NavProps {
  particles: boolean;
  toggleParticles(): void;
}
const entryAnimation = {
  opacity: [0, 0, 1, 1],
  width: ["50%", "50%", "50%", "100%"],
  x: ["-50%", "-50%", "-50%", "-50%"],
  y: ["-60%", "-60%", "-50%", "-340%"],
};
const splashTransition = {
  duration: 3,
  times: [0, 0.4, 0.6, 1],
  delay: 4,
  ease: [0, 0.71, 0.2, 1.01],
};
function Navigation({ particles, toggleParticles }: NavProps) {
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
    >
      {" "}
      <CustomLink className="logo" href="/">
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
        <CustomLink className="navLinks" href="#">
          <span className="navIndex">01. </span>
          <span>About</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#">
          <span className="navIndex">02. </span>
          <span>Projects</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#">
          <span className="navIndex">03. </span>
          <span>Education</span>
        </CustomLink>
        <CustomLink className="navLinks" href="#">
          <span className="navIndex">04. </span>
          <span>Contact</span>
        </CustomLink>
        {/*<CustomLink className="navLinks" href="#">
          <span className="navIndex">05. </span><span>Blog</span>
          
        </CustomLink> */}
        <Toggle on={particles} toggle={toggleParticles} />
      </div>
    </NavContainer>
  );
}

export default Navigation;
