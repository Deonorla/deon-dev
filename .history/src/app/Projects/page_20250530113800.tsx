"use client";
import BackgroundImage from "@/components/projectComponent/BackgroundImage";
import Controls from "@/components/projectComponent/Controls";
import SlideInfo from "@/components/projectComponent/SlideInfo";
import Slides from "@/components/projectComponent/Slides";
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
  background-color: ${(props) => props.theme.body};
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Container = styled.div`
  position: absolute;
  z-index: 20;
  height: 100%;
  width: 100%;
`;
const ColumnGrid = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  @media (min-width: 768px) {
    display: grid;
  }
`;

const LeftSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  grid-column: span 4 / span 4;
  margin-bottom: 0.75rem;
  height: 100%;
  flex: 1 1 0%;
  @media (min-width: 768px) {
    margin-bottom: 0;
    justify-content: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;
const RightSlider = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 2rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  grid-column: span 6 / span 6;
  height: fit-content;
  justify-content: start;
  padding: 1rem;
  @media (min-width: 768px) {
    justify-content: center;
    padding: 0.5rem;
  }
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
        <Container>
          <ColumnGrid>
            <LeftSlider>
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </LeftSlider>
            <RightSlider>
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </RightSlider>
          </ColumnGrid>
        </Container>
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
