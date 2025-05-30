"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  curIndex: number;
  length: number;
};

const Container = styled.div`
  display: flex;
  height: 1px;
  flex: 1 1 0%;
  align-items: center;
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 255, 0.5);
  width: 19.75rem;
`;

const Wrapper = styled.div`
  height: 1px;
  border-radius: 9999px;
  background-color: rgba(255, 255, 0, 0.5);
`;

const Count = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 500;
`;

const Progress = ({ curIndex, length }: Props) => {
  return (
    <>
      <Container>
        <Wrapper
          style={{ width: (((curIndex + 1) / length) * 100).toString() + "%" }}
        ></Wrapper>
      </Container>
      <span
        key={curIndex}
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        <Count
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={curIndex}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          0{curIndex + 1}
        </Count>
      </span>
    </>
  );
};

export default Progress;
