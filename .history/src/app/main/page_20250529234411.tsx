"use client";

import PowerButton from "@/components/Button/PowerButton";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import { YinYang } from "@/components/Minor/SvgPack/AllSvgs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import Intro from "../intro";

interface Prop {
  $click: boolean;
}

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 50vh;
  width: 100%;
  margin-top: -80px;

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    margin-top: -40px;
  }
`;
const MotionDiv = motion.div as typeof motion.div;
const TopContainer = styled(MotionDiv)<MotionProps>`
  position: absolute;
  top: 10%;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  /* height: 100%; */
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 0px 50px;
  }

  @media (max-width: 768px) {
    padding: 0px 30px;
  }

  @media (max-width: 480px) {
    padding: 0px 20px;
    top: 15%;
  }
`;

const BottomContainer = styled(MotionDiv)<MotionProps & Prop>`
  position: absolute;
  bottom: 10%;
  right: 0;
  display: ${(prop) => (prop.$click ? "none" : "flex")};
  flex-direction: column;
  padding: 0px 100px;
  height: fit-content;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding: 0px 50px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px;
  }
  @media (max-width: 480px) {
    padding: 0px 20px;
  }
`;

const AnimatedLine = styled(motion.p)`
  font-size: clamp(2.5rem, 10vw, 10rem);
  font-family: "Ogg", serif;
  text-transform: capitalize;
  letter-spacing: -0.3rem;
  line-height: 0.9;
  color: #ffffff;
  margin: 0;
  @media (max-width: 1800px) {
    font-size: clamp(2rem, 10vw, 7.1rem);
  }
  @media (max-width: 768px) {
    letter-spacing: -2px;
  }

  @media (max-width: 480px) {
    letter-spacing: -1px;
  }
`;

const Contact = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;

  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Blog = styled(Link)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Work = styled(Link)<Prop>`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 46%;
  transform: rotate(-90deg) translate(-50%, -50%);
  left: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;
const About = styled(Link)<Prop>`
  color: ${(props) => (props.$click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const Skills = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
// Bounce animation for the image
const bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-25px);
    }
`;

const Center = styled.button<Prop>`
  position: absolute;
  top: ${(props) => (props.$click ? "85%" : "50%")};
  left: ${(props) => (props.$click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${bounce} 2s infinite;
  }

  & > :last-child {
    color: ${(props) => props.theme.text};
    display: ${(props) => (props.$click ? "none" : "inline-block")};
    padding-top: 0.5rem;
  }
  @media (max-width: 480px) {
    top: ${(props) => (props.$click ? "85%" : "50%")};
    left: ${(props) => (props.$click ? "85%" : "50%")};
  }
`;

const LightDiv = styled.div<Prop>`
  position: absolute;
  top: 0;
  background-color: #ffffff;
  bottom: 0;
  right: 50%;
  width: ${(prop) => (prop.$click ? "50%" : "0%")};
  height: ${(prop) => (prop.$click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const ImageWrapper = styled.div<{ $click: boolean }>`
  position: relative;
  width: ${({ $click }) => ($click ? "100px" : "300px")};
  height: ${({ $click }) => ($click ? "150px" : "450px")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ $click }) => ($click ? "80px" : "200px")};
    height: ${({ $click }) => ($click ? "120px" : "300px")};
  }
`;

// Text Animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <LightDiv $click={click} />
      <Container>
        <Wrapper>
          <TopContainer
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <AnimatedLine variants={textVariants}>Oluleye</AnimatedLine>
            <AnimatedLine variants={textVariants}>Emmanuel</AnimatedLine>
          </TopContainer>
        </Wrapper>
        <Wrapper>
          <BottomContainer
            $click={click}
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <AnimatedLine variants={textVariants}>Frontend</AnimatedLine>
            <AnimatedLine variants={textVariants}>Developer</AnimatedLine>
          </BottomContainer>
        </Wrapper>
        {/* <PowerButton /> */}
        <LogoComponent theme={click ? "brown" : "light"} />
        <Socials theme={click ? "brown" : "light"} />
        <Center $click={click} onClick={handleClick}>
          <ImageWrapper $click={click}>
            <Image
              //   onClick={() => handleClick()}
              src="/images/head.png"
              alt="Deon Oluleye"
              fill
              style={{ objectFit: "cover", cursor: "pointer" }}
              priority
            />
          </ImageWrapper>
          <span>View</span>
        </Center>
        <Contact target="_blank" href="mailto:deonoluleye@gmail.com">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Contact me
          </motion.h2>
        </Contact>
        <Blog href="/blog">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Blog
          </motion.h2>
        </Blog>
        <Work href="/projects" $click={click}>
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Projects
          </motion.h2>
        </Work>
        <BottomBar>
          <About href="/about" $click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h2>
          </About>
          <Skills href="/stack">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Tech Stack
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click ? <Intro $click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
