import React from "react"
import {graphql} from "gatsby"
import styled from "styled-components";
import "prismjs/themes/prism-okaidia.css";

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
  padding:10px;
  width: 40%;
  border-right: solid 2px white;
  font-size: 35px;
  @media (min-width: 1919px) {
      font-size:60px;
  }
`;

const Right = styled.div`
  padding:10px;
  width: 60%;
  height:350px;
  display:flex;
  flex-direction:column;
  text-align:left;
  overflow: scroll;
  &::-webkit-scrollbar {
      display:none;
  }
  // コードブロックタイトル
  .gatsby-code-title {
      span {
        margin:0px;
        padding:4px;
        border-radius:4px;
        background-color:#272822;
      }
  }
  // コードブロック
  pre {
      margin:0px;
  }
  @media (min-width: 1919px) {
      height:600px;
      h1 {
          font-size:54px;
      }
      h2 {
        font-size:40px;
      }
      h3 {
        font-size:30px;
      }
      h4 {
        font-size:26px;
      }
      h5 {
        font-size:22px;
      }
      h6 {
        font-size:18px;
      }
      p {
        font-size:26px;
      }
      li {
        font-size:26px;
      }
  }
`;