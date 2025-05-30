"use client";
import { Data } from "@/app/projects/page";
import SliderCard from "@/components/Minor/Cards/SliderCard";
import { styled } from "styled-components";
type Props = {
  data: Data[];
};

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
`;

const Slides = ({ data }: Props) => {
  return (
    <Container>
      {data.map((data) => {
        return <SliderCard key={data.img} data={data} />;
      })}
    </Container>
  );
};

export default Slides;
