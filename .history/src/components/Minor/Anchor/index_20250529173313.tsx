import { useRef } from "react";
import { styled } from "styled-components";
import { Anchor as Spring, Link } from "../SvgPack/AllSvgs";

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-50%);
`;

const Anchor = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  return (
    <Container>
      <Slider ref={ref}>
        {[...Array(25)].map((x, id) => (
          <Link
            key={id}
            width={25}
            height={25}
            fill="currentColor"
            className="chain"
          />
        ))}
        <Spring width={250} height={250} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default Anchor;
