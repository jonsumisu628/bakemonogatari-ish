import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

export default function Menu() {
    return (
        <Navi>
            <StyledLink to="/who" activeClassName="active">私<p>I</p></StyledLink>
            <StyledLink to="/study" activeClassName="active">勉強<p>study</p></StyledLink>
            <StyledLink to="/pastime" activeClassName="active">趣味<p>pastime</p></StyledLink>
            <StyledLink to="/blog" activeClassName="active">ブログ<p>blog</p></StyledLink>
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
`;

const Navi = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 26px;
`;