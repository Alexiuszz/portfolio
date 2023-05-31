import React, { useContext, useEffect, useRef } from "react";
import {
  CursorWrapper,
  MainCursor,
  SecondCursor,
} from "./cursor.styles";
import CustomCursorContext from "./context/CustomCursorContext";

function CustomCursor() {
  const { type } = useContext(CustomCursorContext);
  const mainCursor = useRef<HTMLDivElement>(null);
  const secCursor = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;
      if (
        mainCursor &&
        mainCursor.current &&
        secCursor &&
        secCursor.current
      ) {
        positionRef.current.mouseX =
          mouseX - secCursor?.current?.clientWidth / 2;
        positionRef.current.mouseY =
          mouseY - secCursor?.current?.clientHeight / 2;
        mainCursor.current.style.transform = `translate3d(${
          mouseX - mainCursor?.current?.clientWidth / 2
        }px, ${mouseY - mainCursor?.current?.clientHeight / 2}px, 0)`;
      }
    });

    return () => {};
  }, []);
  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (secCursor && secCursor.current) {
        secCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    followMouse();
    return () => {};
  }, []);

  return (
    <CursorWrapper className={type}>
      <MainCursor ref={mainCursor}>
        <div className="main-cursor-background" />
      </MainCursor>
      <SecondCursor ref={secCursor}>
        <div className="cursor-background" />
      </SecondCursor>
    </CursorWrapper>
  );
}

export default CustomCursor;
