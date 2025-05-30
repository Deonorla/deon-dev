/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { styled } from "styled-components";

type Props = {
  data: any;
};

const Container = styled(motion.div)`
  position: relative;
  height: 13rem;
  min-width: 250px;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    height: 20rem;
    min-width: 250px;
  }
`;

const Img = styled(motion.img)`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
  filter: brightness(0.5);
`;

const Box = styled(motion.div)`
  position: absolute;
  z-index: 10;
  display: flex;
  height: 100%;
  align-items: end;
  padding: 1rem;
`;

const Line = styled(motion.div)`
  margin-bottom: 0.5rem;
  height: 2px;
  width: 0.75rem;
  border-radius: 9999px;
  background-color: #fff;
`;

const Text = styled(motion.p)`
  font-size: 0.75rem;
  color: #d5d5d6;
`;

const Title = styled(motion.h1)`
  font-size: 1.25rem;
  line-height: 1.5;
  color: #fff;
`;

const SliderCard = ({ data }: Props) => {
  return (
    <Container
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      <Img layoutId={data.img} alt="Transition Image" src={data.img} />
      <Box>
        <motion.div>
          <Line></Line>
          <Text layoutId={data.location}>{data.location}</Text>
          <Title>{data.title}</Title>
        </motion.div>
      </Box>
    </Container>
  );
};

export default SliderCard;
