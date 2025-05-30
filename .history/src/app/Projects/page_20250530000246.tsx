"use client";

import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useEffect } from "react";

const view = [
  { src: "/images/gamebloc.png", id: 1, alt: "Slide 1" },
  { src: "/images/bugbounty.png", id: 2, alt: "Slide 2" },
  { src: "/images/redefine.png", id: 3, alt: "Slide 3" },
];

const showContent = keyframes`
  from {
    transform: translateY(-30px);
    filter: blur(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    filter: blur(0);
    opacity: 1;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  height: 800px;
  overflow: hidden;
  margin-top: -50px;
  &::before {
    width: 500px;
    height: 300px;
    content: "";
    background-image: linear-gradient(70deg, #dc422a, blue);
    position: absolute;
    z-index: -1;
    border-radius: 20% 30% 80% 10%;
    filter: blur(150px);
    top: 50%;
    left: 50%;
    transform: translate(-10%, -50%);
    transition: 1s;
  }
`;

const List = styled.div`
  position: absolute;
  width: 1140px;
  max-width: 90%;
  height: 80%;
  left: 50%;
  transform: translateX(-50%);
`;

const Item = styled.div`
  position: absolute;
  left: 0%;
  width: 70%;
  height: 100%;
  font-size: 15px;
  transition: left 0.5s, opacity 0.5s, width 0.5s;
  img {
    width: 50%;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: right 1.5s;
  }
`;

const Introduce = styled.div`
  opacity: 0;
  pointer-events: none;
  width: 400px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.5s;
  .title {
    font-size: 2em;
    font-weight: 500;
    line-height: 1em;
    animation: ${showContent} 0.5s 1s ease-in-out forwards;
  }
  .topic {
    font-size: 4em;
    font-weight: 500;
    animation: ${showContent} 0.5s 1.2s ease-in-out forwards;
  }
  .des {
    font-size: small;
    color: #5559;
    animation: ${showContent} 0.5s 1.4s ease-in-out forwards;
  }
  .seeMore {
    font-family: Poppins;
    margin-top: 1.2em;
    padding: 5px 0;
    border: none;
    border-bottom: 1px solid #555;
    background-color: transparent;
    font-weight: bold;
    letter-spacing: 3px;
    transition: background 0.5s;
    animation: ${showContent} 0.5s 1.6s ease-in-out forwards;
    &:hover {
      background: #eee;
    }
  }
`;

const Detail = styled.div`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: right;
  width: 50%;
  .title {
    font-size: 4em;
    animation: ${showContent} 0.5s 1s ease-in-out forwards;
  }
  .des {
    margin: 1rem 0;
    font-size: 0.95rem;
    color: #444;
    animation: ${showContent} 0.5s 1.2s ease-in-out forwards;
  }
`;

const Specifications = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  border-top: 1px solid #5553;
  margin-top: 20px;
  animation: ${showContent} 0.5s 1.4s ease-in-out forwards;
  div {
    width: 90px;
    text-align: center;
    flex-shrink: 0;
    p:first-child {
      font-weight: bold;
    }
  }
`;

const Checkout = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  animation: ${showContent} 0.5s 1.6s ease-in-out forwards;
  button {
    font-family: Poppins;
    background-color: transparent;
    border: 1px solid #5555;
    padding: 5px 10px;
    letter-spacing: 2px;
    font-weight: 500;
    &:nth-child(2) {
      background-color: #693eff;
      color: #eee;
    }
  }
`;

const Arrows = styled.div`
  position: absolute;
  bottom: 10px;
  width: 1140px;
  max-width: 90%;
  display: flex;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  #prev,
  #next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-family: monospace;
    border: 1px solid #5555;
    font-size: large;
  }
  #back {
    position: absolute;
    z-index: 100;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    border-bottom: 1px solid #555;
    font-family: Poppins;
    font-weight: bold;
    letter-spacing: 3px;
    background-color: transparent;
    padding: 10px;
    transition: opacity 0.5s;
  }
`;
const Projects = () => {
  useEffect(() => {
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");
    const carousel = document.querySelector(".carousel");
    const listHTML = document.querySelector(".carousel .list");
    const seeMoreButtons = document.querySelectorAll(".seeMore");
    const backButton = document.getElementById("back");

    let unAcceptClick: NodeJS.Timeout;

    const showSlider = (type: string) => {
      if (!carousel || !listHTML) return;
      nextButton!.style.pointerEvents = "none";
      prevButton!.style.pointerEvents = "none";

      carousel.classList.remove("next", "prev");
      const items = document.querySelectorAll(".carousel .list .item");

      if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next");
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add("prev");
      }

      clearTimeout(unAcceptClick);
      unAcceptClick = setTimeout(() => {
        nextButton!.style.pointerEvents = "auto";
        prevButton!.style.pointerEvents = "auto";
      }, 2000);
    };

    nextButton!.onclick = () => showSlider("next");
    prevButton!.onclick = () => showSlider("prev");

    seeMoreButtons.forEach((button) => {
      button.addEventListener("click", () => {
        carousel?.classList.remove("next", "prev");
        carousel?.classList.add("showDetail");
      });
    });

    backButton!.onclick = () => {
      carousel?.classList.remove("showDetail");
    };

    return () => {
      nextButton!.onclick = null;
      prevButton!.onclick = null;
    };
  }, []);
  return (
    <CarouselWrapper>
      <List>
        {view.map((n) => (
          <Item key={n.id}>
            <Image src={n.src} alt={n.alt} width={400} height={300} />
            <Introduce>
              <div className="title">DESIGN SLIDER</div>
              <div className="topic">Aerphone</div>
              <div className="des">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officia, laborum cumque dignissimos.
              </div>
              <button className="seeMore">SEE MORE &#8599;</button>
            </Introduce>
            <Detail>
              <div className="title">Aerphone GHTK</div>
              <div className="des">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                reiciendis suscipit nobis nulla animi.
              </div>
              <Specifications>
                <div>
                  <p>Used Time</p>
                  <p>6 hours</p>
                </div>
                <div>
                  <p>Charging port</p>
                  <p>Type-C</p>
                </div>
                <div>
                  <p>Compatible</p>
                  <p>Android</p>
                </div>
                <div>
                  <p>Bluetooth</p>
                  <p>5.3</p>
                </div>
                <div>
                  <p>Controlled</p>
                  <p>Touch</p>
                </div>
              </Specifications>
              <Checkout>
                <button>ADD TO CART</button>
                <button>CHECKOUT</button>
              </Checkout>
            </Detail>
          </Item>
        ))}
      </List>
      <Arrows>
        <button id="prev">{"<"}</button>
        <button id="next">{">"}</button>
        <button id="back">See All &#8599;</button>
      </Arrows>
    </CarouselWrapper>
  );
};

export default Projects;
