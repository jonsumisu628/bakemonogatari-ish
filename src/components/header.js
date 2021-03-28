import React from "react";
import styled from "styled-components";

export default function Header() {
    return (
        <Body>
            <p>豫告</p>
        </Body>

    );
}

const Body = styled.div`
  text-align: center;
  font-size: 36px;
  p {
    margin: 40px 0px 10px 0px;
  }
  @media (min-width: 1919px) {
      font-size:60px;
  }
`;
