import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

export default function Footer() {
    return (
        <Body>
            <StyledLink to="/">J O H N S M I T H</StyledLink>
        </Body>

    );
}

const Body = styled.div`
  margin-bottom: 40px;
  font-size: 26px;
  font-family: "ＭＳ ゴシック";
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;