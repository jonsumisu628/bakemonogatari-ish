import React from "react"
import {graphql, Link} from "gatsby"
import styled from "styled-components";

import Layout from "../components/styles/layout"


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
                {posts.map(({node}) => {
                    return (
                        <BlogPageLink to={`/blog${node.fields.slug}`}>
                            <p>{node.frontmatter.title}</p>
                        </BlogPageLink>
                    )
                })}

                <PageNumber>
                    {Array.from({length: numPages}, (_, i) => (
                        <PageNumberLink key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
                            {i + 1}
                        </PageNumberLink>
                    ))}
                </PageNumber>
            </Layout>
        )
    }
}

const PageNumber = styled.div`
  display: flex;
`;

const PageNumberLink = styled(Link)`
  margin: 60px 30px 0px 30px;
  color: white;
  font-size: 20px;
  text-decoration: none;
`;

const BlogPageLink = styled(Link)`
  font-size: 35px;
  color: white;
  text-decoration: none;
`;