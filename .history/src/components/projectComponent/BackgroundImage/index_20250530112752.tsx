/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
import { Data, CurrentSlideData } from "@/app/projects/page";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

const Img = styled(motion.img)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100px; /* must define width */
  height: 100px;
  filter: brightness(0.5);
`;
const Img2 = styled(motion.img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 50%;
  /* object-fit: cover; */
  filter: brightness(0.5);
`;

const BackgroundImage = ({ transitionData, currentSlideData }: Props) => {
  return (
    <>
      {transitionData && (
        <Img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          src={transitionData.img}
        />
      )}
      {/* Background Slide */}
      <Img2
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
      />
    </>
  );
};

export default BackgroundImage;
