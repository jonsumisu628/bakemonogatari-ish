import React from "react";
import styled from "styled-components";

import Layout from "../components/layout/layout";

import Cat from "../components/img/cat.png";

export default function Product() {
    return (
        <Layout>
            <Body>
                <img src={Cat} alt="cat" />
                <Text>
                    <p className="first">hoge</p>
                    <p>huga</p>
                    <p>hugo</p>
                </Text>
            </Body>
        </Layout>
    )
}

const Body = styled.div`
  text-align: center;
  img {
    width:160px;
    height:110px;

    animation-name:cat;
    animation-duration:5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes cat {
        0% {
            filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(90deg) brightness(99%) contrast(104%);
        }
        100% {
            filter: invert(96%) sepia(15%) saturate(7484%) hue-rotate(188deg) brightness(128%) contrast(108%);
        }
    }
  }
  @media (min-width: 1919px) {
    img {
      width:320px;
      height:220px;
    }
  }
`;

const Text = styled.div`
  color: white;
  font-size: 36px;
  animation-name:pastime;
  animation-duration:5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes pastime {
      0% {
          color:black;
      }
      100% {
          color:white;
      }
    }

    .first {
        margin-top:0px;
    }
  @media (min-width: 1919px) {
    font-size:60px;
  }
`;