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

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
  height: 100%;
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

const BottomContainer = styled.div`
  position: fixed;
  bottom: 10%;
  right: 2rem;
  display: flex;
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

const Name = styled.div`
  overflow: hidden;

  p {
    font-size: clamp(3rem, 10vw, 10rem); /* scales from 48px to 160px */
    text-transform: capitalize;
    letter-spacing: -0.3rem;
    font-family: "Ogg", serif;
    line-height: 0.9;
    margin: 0;

    @media (max-width: 768px) {
      letter-spacing: -2px;
    }

    @media (max-width: 480px) {
      font-size: clamp(2rem, 12vw, 4rem);
      letter-spacing: -1px;
    }
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
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
  width: ${(prop) => (prop.click ? "50%" : "0%")};
  height: ${(prop) => (prop.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const ImageWrapper = styled.div<{ click: boolean }>`
  position: relative;
  width: ${({ click }) => (click ? "100px" : "300px")};
  height: ${({ click }) => (click ? "150px" : "450px")};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: ${({ click }) => (click ? "80px" : "200px")};
    height: ${({ click }) => (click ? "120px" : "300px")};
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <LightDiv click={click} />
      <Container>
        <Wrapper>
          <TopContainer>
            <Name>
              <p>Oluleye</p>
            </Name>
            <Name>
              <p>Emmanuel</p>
            </Name>
          </TopContainer>
        </Wrapper>
        <Wrapper>
          <BottomContainer>
            <Name>
              <p>Frontend</p>
            </Name>
            <Name>
              <p>Developer</p>
            </Name>
          </BottomContainer>
        </Wrapper>
        <PowerButton />
        <LogoComponent theme={click ? "brown" : "light"} />
        <Socials theme={click ? "brown" : "light"} />
        <Center click={click}>
          <ImageWrapper click={click} onClick={handleClick}>
            <Image
              onClick={() => handleClick()}
              src="/images/head.png"
              alt="Deon Oluleye"
              fill
              style={{ objectFit: "cover", cursor: "pointer" }}
              priority
            />
          </ImageWrapper>
          <span>Click here</span>
        </Center>
        <Contact target="_blank" href="mailto:deonoluleye@gmail.com">
          <h2>Say hi..</h2>
        </Contact>
        <Blog href="/blog">
          <h2>Blog</h2>
        </Blog>
        <Work href="/work" click={click}>
          <h2>Work</h2>
        </Work>
        <BottomBar>
          <About href="/about" click={click}>
            <h2>About</h2>
          </About>
          <Skills href="/skills">
            <h2>My Skills</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
