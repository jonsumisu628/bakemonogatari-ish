import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby";
import styled from "styled-components";

import Layout from "../components/styles/layout";

const BlogPage = () => {
    const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <Body>
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <StyledLink to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </StyledLink>
                    )
                })}
            </Body>
        </Layout>
    )
}

const Body = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  margin: 0px 30px 0px 30px;
  padding: 10px;
  text-decoration: none;
  color:white;
  border: solid 2px white;
`;

export default BlogPage
