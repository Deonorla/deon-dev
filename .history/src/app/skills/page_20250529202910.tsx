"use client";
import { brownTheme } from "@/components/Minor/theme/Themes";
import styled, { ThemeProvider } from "styled-components";
import { Developer } from "@/components/Minor/SvgPack/AllSvgs";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import ParticleComponent from "@/components/ParticleComponent";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  z-index: 2;
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

const OrbitIcon = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  z-index: 5;

  img {
    border-radius: 12px;
    object-fit: contain;
    width: 100%;
    height: 100%;
    pointer-events: auto;
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 0.02);
    }, 16); // ~60fps
    return () => clearInterval(interval);
  }, []);

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
          const angle = time + i * (Math.PI / 4);
          const radius = 180 + i * 5; // spiral effect
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <OrbitIcon
              key={icon.name}
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
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
