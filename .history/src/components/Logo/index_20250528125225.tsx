import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(prop) => prop.theme.text};
  font-family: "pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = () => {
  return (
    <div>
      <Logo>EO</Logo>
    </div>
  );
};

export default LogoComponent;
