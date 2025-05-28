"use client";

import styled from "styled-components";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
`;

const Main = () => {
  return <MainContainer>Main</MainContainer>;
};

export default Main;
