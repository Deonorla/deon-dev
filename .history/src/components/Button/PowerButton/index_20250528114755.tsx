"use client";
import styled from "styled-components";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%, 0);
`;

const PowerButton = () => {
  return <Power>Home</Power>;
};

export default PowerButton;
