"use client";
import { brownTheme } from "@/components/Minor/theme/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Developer } from "@/components/Minor/SvgPack/AllSvgs";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import Image from "next/image";
import { useState } from "react";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ThemeProvider theme={brownTheme}>
      <Box>
        <LogoComponent theme={"brown"} />
        <Socials theme={"brown"} />
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
