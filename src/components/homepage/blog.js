import React from 'react';
// import { Link } from 'gatsby'
import Arrow from './blog_components/arrow';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BlogPage from '../../pages/blog/blog';
const Blog = () => (
  <BlogWrapperParent id="blog">
    <BlogWrapper>
      <BlogTitle>
        <Title>Blog</Title>
        <ArrowWrapper>
          <Link style={{ zIndex: '2' }} to="/blog">
            Read more...
          </Link>
        </ArrowWrapper>
      </BlogTitle>
      <Posts />
    </BlogWrapper>
  </BlogWrapperParent>

  // <Route path="/blog" component={BlogPage} />
);

const BlogWrapperParent = styled.div`
  width: 100%;
  height: 100%;
  // background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const BlogWrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const BlogTitle = styled.div``;
const Title = styled.div`
  // width: 50%;
  // height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 2.4vw;
  }
  @media screen and (max-width: 767px) {
    font-size: 5vw;
  }
  color: black;
`;
const ArrowWrapper = styled.div`
  width: 100%;
  padding-left: 1vw;
  z-index: 2;
`;

const Posts = styled.div`
  width: 50%;
`;
export default Blog;
