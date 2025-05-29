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
  display: flex;
  flex-direction: column;
  z-index: 5;
  width: calc() (10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.body};
  border: 2px solid ${(props) => props.theme.body};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.body};
    transition: all 0.3s ease;
  }
`;

const StyledImage = styled.div<imgProps>`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
`;

const Title = styled.h3`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.body};
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;
const Tag = styled.span`
  padding-right: 0.5rem;
`;

const Date = styled.span`
  padding: 0.5rem 0;
`;

const BlogComponent = ({ blog }: Prop) => {
  return (
    <Box target="_blank" href="">
      <StyledImage img={blog.imgSrc} />
      <Title>{blog.name}</Title>
      <HashTags>
        {blog.tags.map((t, id) => (
          <Tag key={id}>#{t}</Tag>
        ))}
      </HashTags>
    </Box>
  );
};

export default BlogComponent;
