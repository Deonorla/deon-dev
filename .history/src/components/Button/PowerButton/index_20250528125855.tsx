"use client";
import { PowerBtn } from "@/components/Minor/SvgPack/AllSvgs";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%, 0);

  background-color: #ffd0d5;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <Link href="/">
        <PowerBtn width={30} height={30} fill="currentColor" />
      </Link>
    </Power>
  );
};

export default PowerButton;
