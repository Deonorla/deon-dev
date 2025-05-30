"use client";
import { brownTheme } from "@/components/Minor/theme/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Developer } from "@/components/Minor/SvgPack/AllSvgs";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const skillIcons = [
  { src: "/images/react.png", name: "React", top: "5%", left: "10%" },
  {
    src: "/images/typescript.png",
    name: "TypeScript",
    top: "10%",
    right: "12%",
  },
  { src: "/images/flutter.png", name: "Flutter", bottom: "10%", left: "8%" },
  { src: "/images/html.png", name: "HTML", bottom: "15%", right: "15%" },
  { src: "/images/javascript.png", name: "Javascript", top: "30%", left: "2%" },
  // { src: "/images/redux.png", name: "Redux", bottom: "5%", right: "5%" },
  { src: "/images/tailwind.png", name: "Tailwind", top: "5%", right: "40%" },
];

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

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1vw);

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
  padding: 0.5rem 0;

  strong {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
`;

const OrbitIcon = styled(motion.div)<{
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}>`
  position: absolute;
  width: 60px;
  height: 60px;
  ${(props) => props.top && `top: ${props.top};`}
  ${(props) => props.bottom && `bottom: ${props.bottom};`}
  ${(props) => props.left && `left: ${props.left};`}
  ${(props) => props.right && `right: ${props.right};`}
  z-index: 4;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 12px;
    pointer-events: auto;
  }

  &:hover .tooltip {
    opacity: 1;
    transform: translateY(-110%);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: #b59f8f;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.75rem;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-130%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 10;
`;

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ThemeProvider theme={brownTheme}>
      <Box>
        <LogoComponent theme={"brown"} />
        <Socials theme={"brown"} />

        <Main>
          <Title>
            <Developer width={40} height={40} fill="currentColor" />
            Tech Stack
          </Title>
          <Description>
            My main stack revolves around React, TypeScript, and Flutter — with
            a growing interest in blockchain development like ICP and Near. Over
            the years, I&apos;ve also worked with a variety of other
            technologies out of curiosity, project requirements, or both. These
            are the tools and languages I’m most comfortable with today, but
            there are plenty I’ve used in academic or experimental settings that
            I don’t actively work with anymore. I’m always open to learning
            what’s necessary for the problem at hand.
          </Description>
          <Description>
            <strong>Languages</strong>
            <p>
              React, Next.js, Flutter, TypeScript, Javascript, HTML, Tailwind
              CSS, etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VS Code, GitHub, Figma, etc</p>
          </Description>
        </Main>

        {skillIcons.map((icon, i) => (
          <OrbitIcon
            key={icon.name}
            top={icon.top}
            bottom={icon.bottom}
            left={icon.left}
            right={icon.right}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              delay: i * 0.2,
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            whileHover={{
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.4 },
            }}
            whileTap={{
              scale: 0.9,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Tooltip className="tooltip">{icon.name}</Tooltip>
            <Image src={icon.src} alt={icon.name} width={60} height={60} />
          </OrbitIcon>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
