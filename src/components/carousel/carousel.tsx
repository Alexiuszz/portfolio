import React from "react";
import { GliderContainer } from "./carousel.styles";
import { motion } from "framer-motion";

const Carousel = ({
  images,
  animate,
  transition,
}: {
  images: string[],
  animate:{opacity:number[]},
  transition: any
}) => {
  return (
    <GliderContainer
      animate={animate}
      transition={transition}
    >
      <div className="glider-wrapper">
        <motion.section
          animate={{ x: "-100%" }}
          transition={{
            duration: 10,
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
            duration: 10,
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
            duration: 10,
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
