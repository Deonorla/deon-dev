"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { CurrentSlideData, Data } from "@/app/projects/page";
import Progress from "@/components/Minor/Progress";

type Props = {
  currentSlideData: CurrentSlideData;
  sliderData: Data[];
  data: Data[];
  transitionData: Data;
  handleData: React.Dispatch<React.SetStateAction<Data[]>>;
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  initData: Data;
};

const Controls = ({
  sliderData,
  data,
  transitionData,
  currentSlideData,
  handleData,
  handleTransitionData,
  handleCurrentSlideData,
  initData,
}: Props) => {
  const handlePrev = () => {
    handleData((prevData) => [
      transitionData ? transitionData : initData,
      ...prevData.slice(0, prevData.length - 1),
    ]);
    handleCurrentSlideData({
      data: transitionData ? transitionData : sliderData[0],
      index: sliderData.findIndex((i) => i.img === data[data.length - 1].img),
    });
    handleTransitionData(data[data.length - 1]);
  };

  const handleNext = () => {
    handleData((prev) => prev.slice(1));
    handleCurrentSlideData({
      data: transitionData ? transitionData : initData,
      index: sliderData.findIndex((i) => i.img === data[0].img),
    });
    handleTransitionData(data[0]);
    setTimeout(() => {
      handleData((newData) => [
        ...newData,
        transitionData ? transitionData : initData,
      ]);
    }, 500);
  };

  const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding-left: 0;
    padding-right: 0;

    @media (min-width: 768px) {
      padding-left: 0.25rem;
      padding-right: 0.25rem;
      padding-top: 1.25rem;
      padding-bottom: 1.25rem;
    }
  `;

  const SliderButton = styled.button`
    display: flex;
    height: 3.5rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 1px solid #fdfdfd5f;
    transition: all 300ms ease-in-out;

    &:hover {
      background: white;
      color: black;
    }
  `;

  return (
    <Container>
      <SliderButton onClick={handlePrev}>
        <IoIosArrowBack />
      </SliderButton>
      <SliderButton onClick={handleNext}>
        <IoIosArrowForward />
      </SliderButton>
      <Progress curIndex={currentSlideData.index} length={sliderData.length} />
    </Container>
  );
};

export default Controls;
