import { AnimatePresence } from "framer-motion";
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

const page = () => {
  return (
    <Main>
      <AnimatePresence></AnimatePresence>
    </Main>
  );
};

export default page;
