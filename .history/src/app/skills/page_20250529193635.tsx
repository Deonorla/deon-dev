"use client";
import { brownTheme, lightTheme } from "@/components/Minor/theme/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Design, Developer } from "@/components/Minor/SvgPack/AllSvgs";
import LogoComponent from "@/components/Minor/Logo";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Skills = () => {
  return (
    <ThemeProvider theme={brownTheme}>
      <Box>
        <LogoComponent theme={"brownTheme"} />
        <Main>
          <Title>
            <Developer width={40} height={40} fill="currentColor" />
            Frontend Developer
          </Title>
          <Description>
            I specialize in creating dynamic and responsive web applications
            using modern JavaScript frameworks like React and Next.js. My focus
            is on building user-friendly interfaces that provide a seamless
            experience across devices.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              React, Next js, Flutter, Typescript, Html, Css, Redux, Tailwind,
              Sass etc
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>Vscode, Github, etc</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
