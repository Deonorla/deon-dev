"use client";

import PowerButton from "@/components/Button/PowerButton";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
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
  top: 50%;
  transform: rotate(-90deg) translate(-50%, -50%);
  left: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <Socials />
        <Contact target="_blank" href="mailto:deonoluleye@gmail.com">
          <h3>Say hi..</h3>
        </Contact>
        <Blog href="/blog">
          <h3>Blog</h3>
        </Blog>
        <Work href="/work">
          <h3>Work</h3>
        </Work>
      </Container>
    </MainContainer>
  );
};

export default Main;
