import React from "react";
import Particles from "react-particles-js";
import { styled } from "styled-components";

// particle.js configuration
import configDark from "../../data/config/particlesjs-config.json";
import configLight from "../../data/config/particlesjs-config-light.json";
interface ParticleProps {
  theme: string;
}

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = ({ theme }: ParticleProps) => {
  return (
    <Box>
      {" "}
      <Particles params={theme === "light" ? configLight : configDark} />{" "}
    </Box>
  );
};

export default ParticleComponent;
