import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

export default function Menu() {
    return (
        <Navi>
            <StyledLink to="/who" activeClassName="active">私<p>I</p></StyledLink>
            <StyledLink to="/study" activeClassName="active">勉強<p>study</p></StyledLink>
            <StyledLink to="/product" activeClassName="active">制作物<p>product</p></StyledLink>
            <StyledLink to="/blog/" activeClassName="active">ブログ<p>blog</p></StyledLink>
            <StyledLink to="/link" activeClassName="active">リンク<p>link</p></StyledLink>
        </Navi>
    );
}

const StyledLink = styled(Link)`
  padding: 10px 20px 10px 20px;
  width: 100px;
  text-decoration: none;
  color: white;
  p {
      font-style: italic;
      font-size: 16px;
      margin: 0px;
  }
  &:hover {
      background-color: black;
      transition: 1s;
  }
  @media (min-width: 1919px) {
      width:170px;
      font-size:44px;
      p {
          font-size:26px;
      }
  }
`;

const Navi = styled.div`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  font-size: 26px;
`;