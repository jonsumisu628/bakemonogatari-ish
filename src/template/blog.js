import React from "react"
import {graphql} from "gatsby"
import styled from "styled-components";

import Layout from "../components/styles/layout";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
    return (
        <Layout>
            <Body>
                <Heading>
                    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    <p>{props.data.markdownRemark.frontmatter.date}</p>
                </Heading>
                <Content
                    dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}
                ></Content>
            </Body>
        </Layout>
    )
}

const Body = styled.div`
  display: flex;
`;

const Content = styled.div`
  height: 380px;
  width: 600px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display:none;
  }
`;

const Heading = styled.div`
  margin-right: 100px;
`;

export default Blog
