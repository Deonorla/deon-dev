"use client";

import PowerButton from "@/components/Button/PowerButton";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import { YinYang } from "@/components/Minor/SvgPack/AllSvgs";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

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

const Center = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > :last-child {
    padding-top: 1rem;
  }
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <Socials />
        <Center>
          <Image
            src="/images/yingyang.png"
            alt="Deon Oluleye"
            width={150}
            height={150}
          />

          {/* <YinYang width={150} height={150} fill="currentColor" /> */}
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
