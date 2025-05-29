import React from "react";
import Particles from "react-particles-js";
import { styled } from "styled-components";

// particle.js configuration

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = () => {
  return (
    <Box>
      <Particles></Particles>
    </Box>
  );
};

export default ParticleComponent;
