"use client";
import { brownTheme } from "@/components/Minor/theme/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Developer } from "@/components/Minor/SvgPack/AllSvgs";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import ParticleComponent from "@/components/ParticleComponent";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const skillIcons = [
  { src: "/images/react.png", name: "React" },
  { src: "/images/typescript.png", name: "TypeScript" },
  { src: "/images/flutter.png", name: "Flutter" },
  { src: "/images/html.png", name: "HTML" },
  { src: "/images/css.png", name: "CSS" },
  { src: "/images/redux.png", name: "Redux" },
  { src: "/images/tailwind.png", name: "Tailwind" },
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
  width: 30vw;
  height: auto;
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
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }
`;

const OrbitIcon = styled(motion.div)<{ x: number; y: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    translate(${(props) => props.x}px, ${(props) => props.y}px);
  width: 60px;
  height: 60px;

  img {
    border-radius: 12px;
    object-fit: contain;
  }

  &:hover .tooltip {
    opacity: 1;
    transform: translateY(-110%);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background: #333;
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
  const [pausedIndex, setPausedIndex] = useState<number | null>(null);

  return (
    <ThemeProvider theme={brownTheme}>
      <Box>
        <LogoComponent theme={"brown"} />
        <Socials theme={"brown"} />
        <ParticleComponent />

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
            <strong>Tools</strong>
            <p>VS Code, GitHub, Figma, etc</p>
          </Description>
        </Main>

        {skillIcons.map((icon, i) => {
          const angle = (360 / skillIcons.length) * i;
          const radius = 180 + i * 5; // Spiral effect
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <OrbitIcon
              key={icon.name}
              x={x}
              y={y}
              animate={{
                rotate: pausedIndex === i ? 0 : [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              onMouseEnter={() => setPausedIndex(i)}
              onMouseLeave={() => setPausedIndex(null)}
            >
              <Tooltip className="tooltip">{icon.name}</Tooltip>
              <Image src={icon.src} alt={icon.name} width={60} height={60} />
            </OrbitIcon>
          );
        })}
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
