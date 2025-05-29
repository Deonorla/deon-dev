import { useEffect, useRef } from "react";
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

  .chain {
    transform: rotate(135deg);
  }
`;

const PreDisplay = styled.div`
  position: absolute;
  top: 0;
`;

const Anchor = () => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      const diff = Math.max(bodyHeight - (scrollPosition + windowSize));
      const diffp = (diff * 100) / (bodyHeight - windowSize);
      if (ref.current) {
        (
          ref.current as HTMLDivElement
        ).style.transform = `translateY(${-diffp}%)`;
      }
      if (window.pageYOffset > 5) {
        if (hiddenRef.current) {
          (hiddenRef.current as HTMLDivElement).style.display = "none";
        }
      } else {
        if (hiddenRef.current) {
          (hiddenRef.current as HTMLDivElement).style.display = "block";
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden" />
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
        <Spring width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
};

export default Anchor;
