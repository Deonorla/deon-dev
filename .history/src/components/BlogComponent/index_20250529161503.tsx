import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const Box = styled(Link)`
  width: calc() (10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
`;

const BlogComponent = () => {
  return <Box href="">BlogItem</Box>;
};

export default BlogComponent;
