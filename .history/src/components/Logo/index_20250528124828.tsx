import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(prop) => prop.theme.text};
  font-family: "pacifico", cursive;
`;

const LogoComponent = () => {
  return (
    <div>
      <Logo>EO</Logo>
    </div>
  );
};

export default LogoComponent;
