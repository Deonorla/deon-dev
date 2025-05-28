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
`;

const PowerButton = () => {
  return (
    <Power>
      {/* <Image
        src={"/svg/power-off-solid.svg"}
        width={25}
        height={30}
        alt="Power Button"
      /> */}
      <PowerBtn width={30} height={30} />
    </Power>
  );
};

export default PowerButton;
