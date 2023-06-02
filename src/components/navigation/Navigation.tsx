import Toggle from "../toggle/Toggle";
import { NavContainer } from "./Navigation.styles";
import { motion } from "framer-motion";
import {
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas";
import Link from "next/link";

interface NavProps {
  particles: boolean;
  toggleParticles(): void;
}
const entryAnimation = {
  opacity: [0, 0, 1, 1],
  width: ["50%", "50%", "50%", "100%"],
  x: ["-50%", "-50%", "-50%", "-50%"],
  y: ["-60%", "-60%", "-50%", "-300%"],
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

  return (
    <NavContainer
      animate={entryAnimation}
      transition={splashTransition}
    >
      <Link href="/">
        <motion.div
          animate={{
            width: ["75px", "50px"],
            height: ["75px", "50px"],
          }}
          transition={{
            duration: 0.5,
            delay: 6.5,
          }}
          className="logo"
        >
          <RiveComponent
            onMouseOver={() => {
              playAnimation ? (playAnimation.value = true) : null;
            }}
          />
        </motion.div>
      </Link>
      <motion.div
        animate={{ opacity: [0, 0, 0, 1] }}
        transition={{
          duration: 0.5,
          delay: 6.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="unsplash"
      >
        <a href="#" className="navLinks">
          About
        </a>
        <a href="#" className="navLinks">
          Projects
        </a>
        <a href="#" className="navLinks">
          Education
        </a>
        <a href="#" className="navLinks">
          Contact
        </a>
        <a href="#" className="navLinks">
          Blog
        </a>
        <Toggle on={particles} toggle={toggleParticles} />
      </motion.div>
    </NavContainer>
  );
}

export default Navigation;
