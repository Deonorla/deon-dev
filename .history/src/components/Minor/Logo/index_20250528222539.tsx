import React from "react";
import styled from "styled-components";
import { brownTheme } from "../theme/Themes";
interface prop {
  theme: string;
}

const Logo = styled.h1`
  display: inline-block;
  color: ${(prop) =>
    prop.color === "brown" ? brownTheme.text : brownTheme.body};
  font-family: "pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = ({ theme }: prop) => {
  return (
    <div>
      <Logo color={theme}>EO</Logo>
    </div>
  );
};

export default LogoComponent;
