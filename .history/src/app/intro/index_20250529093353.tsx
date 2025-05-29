import Image from "next/image";
import React from "react";
import { styled } from "styled-components";

interface Prop {
  $click: boolean;
}

const Box = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 40vw;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;
const StyledImage = styled(Image)`
  position: relative;
  width: 300px;
  height: 400px;
  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(prop) => prop.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > :last-child {
    color: ${(props) => `rgba(${props.theme.text},0.6)`};
    font-size: calc(0.5em + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = ({ $click }: Prop) => {
  return (
    <Box>
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I&apos;m Emmanuel</h3>
          <h6>
            I build scalable, responsive and high performance web application.
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <div>
          <StyledImage
            className="pic"
            width={300}
            height={400}
            src="/images/profile.png"
            alt="Deon"
            priority
          />
        </div>
      </SubBox>
    </Box>
  );
};

export default Intro;
