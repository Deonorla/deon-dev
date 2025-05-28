"use client";

import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
`;

const Main = () => {
  return <MainContainer>Main</MainContainer>;
};

export default Main;
