"use client";
import BackgroundImage from "@/components/projectComponent/BackgroundImage";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

const Main = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Projects = () => {
  const [data, setData] = useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });
  return (
    <Main>
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
      </AnimatePresence>
    </Main>
  );
};

const sliderData = [
  {
    img: "/images/gamebloc.png",
    location: "",
    description: "dsghjksakdnjbhjvgytfadujhabsvdctuytukhjcbahjgvhstfuya",
    title: "Gamebloc",
  },
  {
    img: "/images/redefine.png",
    location: "",
    description: "dsghjksakdnjbhjvgytfadujhabsvdctuytukhjcbahjgvhstfuya",
    title: "Redefine",
  },
  {
    img: "/images/bugbounty.png",
    location: "",
    description: "dsghjksakdnjbhjvgytfadujhabsvdctuytukhjcbahjgvhstfuya",
    title: "Bug Bounty",
  },
];

const initData = sliderData[0];

export default Projects;
