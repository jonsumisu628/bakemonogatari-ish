import React from "react"
import {graphql} from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout/layout"

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

export default class BlogPage extends React.Component {
    render() {
        const posts = this.props.data.markdownRemark

        return (
            <Layout>
                <Body>
                    <Left>
                        <p>{posts.frontmatter.title}</p>
                        <p>{posts.frontmatter.date}</p>
                    </Left>
                    <Right
                        dangerouslySetInnerHTML={{__html: posts.html}}
                    ></Right>
                </Body>
            </Layout>
        )
    }
}

const Body = styled.div`
  display:flex;
`;

const Left = styled.div`
  width: 40%;
  font-size: 35px;
`;

const Right = styled.div`
  width: 60%;
  display:flex;
  flex-direction:column;
  align-items:center;
  overflow: scroll;
  &::-webkit-scrollbar {
      display:none;
  }
`;