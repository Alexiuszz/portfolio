import React, { useRef, useState } from "react";
import { GliderContainer } from "./carousel.styles";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  baseVelocity?: number;
  images: string[];
  animate: { opacity: number[] };
  transition: any;
}

const Carousel = ({
  images,
  animate,
  transition,
  baseVelocity = -5,
}: ParallaxProps) => {
  const [scrollSpeed, setScrollSpeed] = useState(baseVelocity);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    {
      clamp: false,
    }
  );
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current * scrollSpeed * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <GliderContainer
      animate={animate}
      transition={transition}
      onMouseOver={() => {
        setScrollSpeed(-2);
      }}
      onMouseLeave={() => {
        setScrollSpeed(baseVelocity);
      }}
    >
      <motion.div className="glider-wrapper" style={{ x }}>
        {images.map((image, id) => (
          <motion.div
            className="image"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            key={id}
          >
            <img src={image} alt={image} />
          </motion.div>
        ))}
        {images.map((image, id) => (
          <motion.div
            className="image"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            key={id}
          >
            <img src={image} alt={image} />
          </motion.div>
        ))}
        {images.map((image, id) => (
          <motion.div
            className="image"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            key={id}
          >
            <img src={image} alt={image} />
          </motion.div>
        ))}
        {images.map((image, id) => (
          <motion.div
            className="image"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            key={id}
          >
            <img src={image} alt={image} />
          </motion.div>
        ))}
      </motion.div>
    </GliderContainer>
  );
};
export default Carousel;
