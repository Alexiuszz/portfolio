import Toggle from "../toggle/Toggle";
import { NavContainer } from "./Navigation.styles";
import { motion } from "framer-motion";

interface NavProps {
  particles: boolean;
  toggleParticles(): void;
}
const entryAnimation = {
  opacity: [0, 0, 1, 1],
  backgroundColor:["#d6dbdc0","#d6dbdc0","#d6dbdc0", "#d6dbdc6e"],
  width: ["50%", "50%", "50%", "100%"],
  x: ["-50%", "-50%", "-50%", "-50%"],
  y: ["-60%", "-60%", "-50%", "-340%"],
};
const splashTransition = {
  duration: 3,
  times: [0, 0.4, 0.6, 1],
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};
function Navigation({ particles, toggleParticles }: NavProps) {
  return (
    <NavContainer
      animate={entryAnimation}
      transition={splashTransition}
    >
      <motion.div>Logo</motion.div>
      <motion.div
        animate={{ opacity: [0, 0, 0, 1] }}
        transition={{
          duration: 0.5,
          delay: 2.5,
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
