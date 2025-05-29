"use client";
import React, { useContext, useEffect, useRef } from "react";
import { styled } from "styled-components";
import CustomCursorContext from "./Context/CustomCursorContext";

const CustomMouse = () => {
  const { type } = useContext(CustomCursorContext);
  const mainCursor = useRef<HTMLDivElement>(null);
  const secondaryCursor = useRef<HTMLDivElement>(null);
  const postionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const mouseX = clientX;
      const mouseY = clientY;
      if (secondaryCursor.current) {
        postionRef.current.mouseX =
          mouseX - secondaryCursor.current.clientWidth / 2;
        postionRef.current.mouseY =
          mouseY - secondaryCursor.current.clientHeight / 2;
      }
      if (mainCursor.current) {
        mainCursor.current.style.transform = `translate3d(${
          mouseX - mainCursor.current.clientWidth / 2
        }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    });
    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      postionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = postionRef.current;
      if (!destinationX || !destinationY) {
        postionRef.current.destinationX = mouseX;
        postionRef.current.destinationY = mouseY;
      } else {
        postionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        postionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(postionRef.current.distanceX) +
            Math.abs(postionRef.current.distanceY) <
          0.1
        ) {
          postionRef.current.destinationX = mouseX;
          postionRef.current.destinationY = mouseY;
        } else {
          postionRef.current.destinationX += distanceX;
          postionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    followMouse();
  }, []);

  const Container = styled.div``;
  const MainCursor = styled.div``;
  const SeccondaryCursor = styled.div``;
  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="main-cursor " ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
      ;
    </div>
  );
};

export default CustomMouse;
