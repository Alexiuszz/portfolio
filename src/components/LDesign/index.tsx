import React, { useRef, useEffect } from "react";
import { LShape } from "./LDesign.styles";

const LDesign = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const container = containerRef.current;

      container.addEventListener("mousemove", (event) => {
        const { clientX, clientY } = event;
        const { top, left, width, height } =
          container.getBoundingClientRect();

        const x = ((clientX - left) / width) * 100;
        const y = ((clientY - top) / height) * 100;

        container.style.setProperty("--mouse-x", `${x}%`);
        container.style.setProperty("--mouse-y", `${y}%`);
      });

      return () => {
        container.removeEventListener("mousemove", (event) => {
          const { clientX, clientY } = event;
          const { top, left, width, height } =
            container.getBoundingClientRect();

          const x = ((clientX - left) / width) * 100;
          const y = ((clientY - top) / height) * 100;

          container.style.setProperty("--mouse-x", `${x}%`);
          container.style.setProperty("--mouse-y", `${y}%`);
        });
      };
    }
  }, []);

  return (
    <LShape ref={containerRef}>
        <svg
          width="300"
          height="300"
          data-name="corner-top-left"
          xmlns="http://www.w3.org/2000/svg"
          style={{pointerEvents:"none"}}
          data-inlinesvg=".inlineSvgFile-6"
        >
          <defs>
            <linearGradient
              id="grad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0"  className="gradient1"></stop>
              <stop offset=".6" className="gradient2"></stop>
              <stop offset="1" className="gradient1"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url('#grad1')"
            d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
          ></path>
        </svg>
    </LShape>
  );
};

export default LDesign;
