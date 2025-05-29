import Image from "next/image";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

interface Prop {
  blog: {
    id: number;
    name: string;
    tags: string[];
    date: string;
    imgSrc: string;
    link: string;
  };
}

interface imgProps {
  img: string;
}

const Box = styled(Link)`
  width: calc() (10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`;

const StyledImage = styled.div<imgProps>`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
`;

const BlogComponent = ({ blog }: Prop) => {
  return (
    <Box target="_blank" href="">
      <StyledImage img={blog.imgSrc} />
    </Box>
  );
};

export default BlogComponent;
