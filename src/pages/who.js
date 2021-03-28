import React from "react";
import styled from "styled-components";

import Layout from "../components/layout/layout";

import Crab from "../components/img/crab.png";

export default function Who() {
    return (
        <Layout>
            <Body>
                <img src={Crab} alt="crab" />
                <Text>
                    <p>NicName:John.Smith</p>
                    <p>BirthDay:1999/6/28</p>
                    <p>Location：Tokyo</p>
                    <p>東京の専門学校に通っています。</p>
                    <p>現在就職活動中...</p>
                </Text>
            </Body>
        </Layout>
    )
}

const Body = styled.div`
  text-align: center;
  img {
    position: absolute;
    top: 20;
    left: 50;
    width:400px;
    height:350px;

    animation-name:crab;
    animation-duration:20s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes crab {
        0% {
            opacity: 0;
            }
        100% {
            opacity:0.5;
        }
    }
  }
  @media (min-width: 1919px) {
      img {
        width:740px;
        height:580px;
      }
  }
`;

const Text = styled.div`
  color: white;
  font-size: 36px;
  animation-name:who;
  animation-duration:4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes who {
      0% {
          opacity: 0;
          transform: translateY(-50px);
        }
        50%{
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity:1;
        }
    }
  @media (min-width: 1919px) {
      font-size:60px;
  }
`;