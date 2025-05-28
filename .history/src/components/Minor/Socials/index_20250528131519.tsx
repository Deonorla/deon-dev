import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../SvgPack/AllSvgs";

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

const Socials = () => {
  return (
    <Icons>
      <div>
        <Link style={{ color: "inherit" }} href="">
          <Github width={30} height={25} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link style={{ color: "inherit" }} href="">
          <Twitter width={30} height={25} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link style={{ color: "inherit" }} href="">
          <Facebook width={30} height={25} fill="currentColor" />
        </Link>
      </div>
      <div>
        <Link style={{ color: "inherit" }} href="">
          <YouTube width={30} height={25} fill="currentColor" />
        </Link>
      </div>
      <Line />
    </Icons>
  );
};

export default Socials;
