"use client";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;
const Blog = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent theme={""} />
        <Socials theme={""} />
      </Container>
    </MainContainer>
  );
};

export default Blog;
