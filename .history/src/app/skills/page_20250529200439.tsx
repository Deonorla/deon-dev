"use client";
import { brownTheme } from "@/components/Minor/theme/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Developer } from "@/components/Minor/SvgPack/AllSvgs";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import ParticleComponent from "@/components/ParticleComponent";
import { motion } from "framer-motion";
import Image from "next/image";

import ReactIcon from "/images/react.png";
import TypeScriptIcon from "/images/typescript.png";
import JavaScriptIcon from "/images/javascript.png";
import FlutterIcon from "/images/flutter.png";
import HtmlIcon from "/images/html.png";

import TailwindIcon from "/images/tailwind.png";

const skillIcons = [
  { src: ReactIcon, name: "React" },
  { src: TypeScriptIcon, name: "TypeScript" },
  { src: FlutterIcon, name: "Flutter" },
  { src: HtmlIcon, name: "HTML" },
  { src: JavaScriptIcon, name: "Javascript" },
  { src: TailwindIcon, name: "Tailwind" },
];

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

const IconGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: center;
  padding-top: 1rem;
`;

const IconWrapper = styled(motion.div)`
  width: 60px;
  height: 60px;
  position: relative;

  img {
    object-fit: contain;
    border-radius: 12px;
  }
`;

const Skills = () => {
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
            <strong>Skills</strong>
            <IconGrid>
              {skillIcons.map((icon, i) => (
                <IconWrapper
                  key={icon.name}
                  initial={{ opacity: 0, y: 40, rotate: -10 }}
                  animate={{
                    opacity: 1,
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
                >
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={60}
                    height={60}
                  />
                </IconWrapper>
              ))}
            </IconGrid>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VS Code, GitHub, Figma, etc</p>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
