import React, { useState } from "react";
import { GliderContainer } from "./carousel.styles";
import { motion } from "framer-motion";

const Carousel = ({
  images,
  animate,
  transition,
}: {
  images: string[];
  animate: { opacity: number[] };
  transition: any;
}) => {
  const [scrollSpeed, setScrollSpeed] = useState(5);
  return (
    <GliderContainer
      animate={animate}
      transition={transition}
      onMouseOver={() => {
        setScrollSpeed(5);
      }}
      onMouseLeave={() => {
        setScrollSpeed(15);
      }}
    >
      <div className="glider-wrapper">
        <motion.section
          animate={{ x: "-100%" }}
          transition={{
            duration: scrollSpeed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
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
        </motion.section>

        <motion.section
          animate={{ x: "-100%" }}
          transition={{
            duration: scrollSpeed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.map((image, id) => (
            <motion.div
              className="image"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              key={id}
            >
              <img src={image} alt={image} />
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          animate={{ x: "-100%" }}
          transition={{
            duration: scrollSpeed,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {images.map((image, id) => (
            <motion.div
              className="image"
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              key={id}
            >
              <img src={image} alt={image} />
            </motion.div>
          ))}
        </motion.section>
      </div>
    </GliderContainer>
  );
};
export default Carousel;
