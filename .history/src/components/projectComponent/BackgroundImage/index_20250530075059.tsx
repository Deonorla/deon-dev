/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import styled from "styled-components";
import Image from "next/image";
// import {Data, CurrentSlides} from ""

type Props = {
  transitionData: any;
  currentSlideData: any;
};

const Img = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`;
const Img2 = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  object-fit: cover;
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
      <Img2
        alt="Current Image"
        key={currentSlideData.data.img + "transition"}
        src={currentSlideData.data.img}
      />
    </>
  );
};
