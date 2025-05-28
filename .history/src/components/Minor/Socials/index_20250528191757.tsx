import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../SvgPack/AllSvgs";
import { brownTheme } from "../theme/Themes";
interface props {
  theme: string;
}

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

const Socials = ({ theme }: props) => {
  return (
    <Icons>
      <div>
        <Link
          style={{ color: "inherit" }}
          target="_blank"
          href="https://github.com/deonorla"
        >
          <Github
            width={30}
            height={25}
            fill={theme === "brown" ? brownTheme.text : brownTheme.body}
          />
        </Link>
      </div>
      <div>
        <Link
          style={{ color: "inherit" }}
          target="_blank"
          href="https://x.com/DeonAtricks"
        >
          <Twitter
            width={30}
            height={25}
            fill={theme === "brown" ? brownTheme.text : brownTheme.body}
          />
        </Link>
      </div>
      <div>
        <Link style={{ color: "inherit" }} target="_blank" href="https://">
          <Facebook
            width={30}
            height={25}
            fill={theme === "brown" ? brownTheme.text : brownTheme.body}
          />
        </Link>
      </div>
      <div>
        <Link style={{ color: "inherit" }} target="_blank" href="https://">
          <YouTube
            width={30}
            height={25}
            fill={theme === "brown" ? brownTheme.text : brownTheme.body}
          />
        </Link>
      </div>
      <Line />
    </Icons>
  );
};

export default Socials;
