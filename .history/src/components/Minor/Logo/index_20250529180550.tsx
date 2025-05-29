"use client";

import styled from "styled-components";
import { brownTheme } from "../theme/Themes";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };
  return (
    <div>
      <Logo onClick={goToHome} color={theme}>
        OE
      </Logo>
    </div>
  );
};

export default LogoComponent;
