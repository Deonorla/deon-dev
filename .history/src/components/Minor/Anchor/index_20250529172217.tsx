import { useRef } from "react";
import { styled } from "styled-components";
import { Anchor as Spring, Link } from "../SvgPack/AllSvgs";

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  right: 2rem;
`;

const Anchor = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  return (
    <Container>
      <Slider ref={ref}>
        {[
          ...Array(25).map((x, id) => (
            <Link
              key={id}
              width={25}
              height={2}
              fill="currentColor"
              className="chain"
            />
          )),
        ]}
        <Spring width={25} height={2} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default Anchor;
