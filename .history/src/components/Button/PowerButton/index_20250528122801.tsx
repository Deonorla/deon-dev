"use client";
import { PowerBtn } from "@/components/SvgPack/AllSvgs";
import Image from "next/image";
import styled from "styled-components";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%, 0);

  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

const PowerButton = () => {
  return (
    <Power>
      <PowerBtn width={30} height={30} fill="currentColor" />
    </Power>
  );
};

export default PowerButton;
