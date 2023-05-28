import React, { useState, useEffect } from "react";
import { GliderContainer } from "./carousel.styles";
import Image from "next/image";
import { motion, useTime, useTransform } from "framer-motion";

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <GliderContainer>
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
            <div className="image" key={id}>
              <img src={image} alt={image} />
            </div>
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
            <div className="image" key={id}>
              <img src={image} alt={image} />
            </div>
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
            <div className="image" key={id}>
              <img src={image} alt={image} />
            </div>
          ))}
        </motion.section>
      </div>
    </GliderContainer>
  );
};
export default Carousel;
