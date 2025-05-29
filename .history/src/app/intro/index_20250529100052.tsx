import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { styled } from "styled-components";

interface Prop {
  $click: boolean;
}

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;
const StyledImage = styled(Image)`
  position: relative;
  width: 300px;
  height: 400px;
  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(prop) => prop.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > :last-child {
    color: ${(props) => `rgba(${props.theme.text},0.6)`};
    font-size: calc(0.3em + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = ({ $click }: Prop) => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I&apos;m Emmanuel.</h3>
          <h6>
            I build scalable, responsive and high performance web applications.
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <StyledImage
            className="pic"
            width={300}
            height={400}
            src="/images/profile.png"
            alt="Deon"
            priority
          />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
