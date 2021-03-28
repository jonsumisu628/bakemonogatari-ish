import React from "react";
import {graphql, Link} from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout/layout";

import Desk from "../components/img/desk.png";

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
  }
`

export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const {numPages} = this.props.pageContext

        return (
            <Layout>
                <Body>
                    <img src={Desk} alt="desk" />
                    {posts.map(({node}) => {
                        return (
                            <BlogPageLink to={`/blog${node.fields.slug}`}>
                                <p>{node.frontmatter.title}</p>
                            </BlogPageLink>
                        )
                    })}

                    <PageNumber>
                        {Array.from({length: numPages}, (_, i) => (
                            <PageNumberLink activeClassName="active" key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
                                {i + 1}
                            </PageNumberLink>
                        ))}
                    </PageNumber>
                </Body>
            </Layout>
        )
    }
}

const Body = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  img {
    width: 900px;
    height: 380px;
    z-index:1;
    opacity:0.5;
    position: absolute;
    top: 50;
    right: 50;
    animation-name:desk;
    animation-duration:4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes desk {
        0% {
            filter: invert(81%) sepia(81%) saturate(633%) hue-rotate(359deg) brightness(106%) contrast(105%);
        }
        40% {
            filter:invert(62%) sepia(57%) saturate(3349%) hue-rotate(299deg) brightness(107%) contrast(101%);
        }
        60% {
            filter: invert(66%) sepia(44%) saturate(4863%) hue-rotate(159deg) brightness(99%) contrast(109%);
        }
        80% {
            filter: invert(17%) sepia(95%) saturate(5403%) hue-rotate(357deg) brightness(99%) contrast(118%);
        }
        100% {
            filter: invert(95%) sepia(95%) saturate(19%) hue-rotate(343deg) brightness(103%) contrast(109%);
        }
    }
  }
  @media (min-width: 1919px) {
    img {
        width: 1530px;
        height: 640px;
    }
  }
`;

const PageNumber = styled.div`
  display: flex;
  z-index:2;
`;

const PageNumberLink = styled(Link)`
  margin: 60px 30px 0px 30px;
  color: white;
  font-size: 26px;
  text-decoration: none;
  &.active {
      text-decoration: underline;
  }
  @media (min-width: 1919px) {
    font-size:44px;
  }
`;

const BlogPageLink = styled(Link)`
  font-size: 36px;
  color: white;
  text-decoration: none;
  z-index:2;
  @media (min-width: 1919px) {
    font-size:60px;
  }
`;