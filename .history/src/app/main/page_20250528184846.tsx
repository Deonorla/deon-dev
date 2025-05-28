"use client";

import PowerButton from "@/components/Button/PowerButton";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import { YinYang } from "@/components/Minor/SvgPack/AllSvgs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

interface Prop {
  click: boolean;
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
const Work = styled(Link)`
  color: ${(props) => props.theme.text};
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
const About = styled(Link)`
  color: ${(props) => props.theme.text};
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
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
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
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const LightDiv = styled.div<Prop>`
  position: absolute;
  top: 0;
  background-color: #ffffff;
  bottom: 0;
  right: 50%;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <LightDiv click={click} />
      <Container>
        <PowerButton />
        <LogoComponent />
        <Socials />
        <Center click={click}>
          <Image
            onClick={() => handleClick()}
            src="/images/head.png"
            alt="Deon Oluleye"
            width={click ? 100 : 300}
            height={click ? 150 : 450}
          />
          <span>Click here</span>
        </Center>
        <Contact target="_blank" href="mailto:deonoluleye@gmail.com">
          <h2>Say hi..</h2>
        </Contact>
        <Blog href="/blog">
          <h2>Blog</h2>
        </Blog>
        <Work href="/work">
          <h2>Work</h2>
        </Work>
        <BottomBar>
          <About href="/about">
            <h2>About</h2>
          </About>
          <Skills href="/Skills">
            <h2>My Skills</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
