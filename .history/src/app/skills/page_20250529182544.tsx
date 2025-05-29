import { lightTheme } from "@/components/Minor/theme/Themes";
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

const Title = styled.h1``;

const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Main>
          <Title></Title>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
