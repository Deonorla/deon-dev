/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { styled } from "styled-components";
type Props = {
  data: any;
};

const item = {
  hidden: {
    y: "100%",
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
  },
  visible: {
    y: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
  },
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;
const AnimatedText1 = styled(motion.span)`
  overflow: hidden;
  color: white;
`;
const AnimatedText2 = styled(motion.span)`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  font-weight: 600;

  @media (min-width: 768px) {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 6rem;
    line-height: 100px;
  }
`;
const AnimatedText3 = styled(motion.span)`
  font-size: 0.75rem;
  color: white;
`;
const Paragraph = styled(motion.p)``;

const OtherInfo = ({ data }: Props) => {
  return (
    <Container initial="hidden" animate={"visible"}>
      <span style={{ overflow: "hidden", display: "inline-block" }}>
        <AnimatedText1 variants={item} key={data}>
          {data?.location}
        </AnimatedText1>
      </span>
      <span style={{ overflow: "hidden", display: "inline-block" }}>
        <AnimatedText2 variants={item} key={data}>
          {data?.title}
        </AnimatedText2>
      </span>
      <span style={{ overflow: "hidden", display: "inline-block" }}>
        <AnimatedText3 variants={item} key={data}>
          {data?.description}
        </AnimatedText3>
      </span>
    </Container>
  );
};

export default OtherInfo;
