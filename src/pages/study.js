import React from "react";
import styled from "styled-components";

import Layout from "../components/layout/layout";

import Snail from "../components/img/snail.png";

export default function Study() {
    return (
        <Layout>
            <Body>
                <img src={Snail} alt="snail" />
                <Text>
                    <p>フロントエンド</p>
                    <p>JavaScript / TypeScript / HTML / CSS <br></br> React / Gatuby / Vue / Svelte</p>

                    <p>バックエンド</p>
                    <p>Linux / Docker / Vagrant</p>
                </Text>
            </Body>
        </Layout>
    )
}

const Body = styled.div`
  img {
    width:200px;
    height:150px;
    position: absolute;
    top:60%;
    left:20%;

    animation-name:snail;
    animation-duration:20s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    @keyframes snail {
        0% {
            opacity:0;
            transform:translateX(200px);
        }
        100% {
            transform:translateX(0px);
        }
    }
  }
`;

const Text = styled.div`
  color: white;
  p {
    font-size: 35px;
  }
  animation-name:study;
  animation-duration:4s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @keyframes study {
      0% {
          opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`;