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
  font-size: 35px;
  p {
    margin: 40px 0px 10px 0px;
  }
`;
