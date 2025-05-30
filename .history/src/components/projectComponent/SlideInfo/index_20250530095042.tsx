import { motion } from "framer-motion";
import styled from "styled-components";
import { IoMdBookmark } from "react-icons/io";
import { Data, CurrentSlideData } from "@/app/projects/page";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

const SpanBox = styled(motion.span)`
  margin-bottom: 0.5rem;
  height: 0.25rem;
  width: 2.5rem;
  border-radius: 9999px;
  background-color: #fff;
`;

const Container = styled(motion.div)`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Button = styled.button`
  display: flex;
  height: 41px;
  width: 41px;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: #ff8000d4;
  font-size: 0.75rem;
  line-height: 1rem;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const ButtonX = styled.button`
  border: 1px;
  border-color: #ffffff8f;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-weight: 100;

  width: fit-content;

  border-radius: 9999px;

  font-size: 10px;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  &:hover {
    background: white;
    color: black;
  }
`;

const SlideInfo = ({ transitionData, currentSlideData }: Props) => {
  return (
    <>
      <SpanBox layout>
        <Container>
          <Button>
            <IoMdBookmark />
          </Button>
          <ButtonX>Discover location</ButtonX>
        </Container>
      </SpanBox>
    </>
  );
};

export default SlideInfo;
