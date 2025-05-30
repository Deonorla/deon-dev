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
  overflow: hidden;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6em + 0.7vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const Skills = () => {
  return (
    <ThemeProvider theme={brownTheme}>
      <Box>
        <LogoComponent theme={"brown"} />
        <Socials theme={"brown"} />

        <Main>
          I’m a software developer based somewhere in Nigeria. I spend most of
          my time building web applications with React, TypeScript, and Next.js
          — that’s the core of my daily stack. I also work with Flutter when I
          need to go cross-platform, and I’ve built products that interact with
          blockchain tech, especially on the ICP and NEAR networks using Motoko
          and Rust. Over the years, I’ve used a wide range of tools — not always
          by choice, sometimes just because the problem needed it. Tools like
          Redux, Tailwind, GitHub’s API, Sanity, Stripe… they’ve all been part
          of the journey. There are also a few things I’ve picked up in school
          or early projects that I don’t reach for these days, and that’s okay.
          I care about good design, clear logic, and shipping things that people
          can actually use. I like learning when there’s a reason to, and I
          enjoy working with teams that care about what they’re building.
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
