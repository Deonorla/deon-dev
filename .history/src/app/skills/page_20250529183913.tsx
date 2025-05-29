"use client";
import { brownTheme, lightTheme } from "@/components/Minor/theme/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Design, Developer } from "@/components/Minor/SvgPack/AllSvgs";

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
  font-size: calc(0.6em + 1vw);
`;

const Skills = () => {
  return (
    <ThemeProvider theme={brownTheme}>
      <Box>
        <Main>
          <Title>
            <Developer width={40} height={40} fill="currentColor">
              Frontend Developer
            </Developer>
          </Title>
          <Description></Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
