"use client";
import LogoComponent from "@/components/Minor/Logo";
import Socials from "@/components/Minor/Socials";
import styled from "styled-components";
import { Blogs } from "../../data/BlogData";
import BlogComponent from "@/components/BlogComponent";
import Anchor from "@/components/Minor/Anchor";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const Blog = () => {
  return (
    <MainContainer>
      <Anchor />
      <Container>
        <LogoComponent theme={"brown"} />
        <Socials theme={"brown"} />
        <Center>
          <Grid>
            {Blogs.map((blog) => (
              <BlogComponent key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default Blog;
