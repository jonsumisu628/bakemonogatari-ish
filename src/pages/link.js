import React from "react";
import styled from "styled-components";
import {GoMarkGithub} from "@react-icons/all-files/go/GoMarkGithub";

import Layout from "../components/layout/layout";

import Snake from "../components/img/snake.png";

const oneText = (linktext) => {
    let text = linktext;
    let result = text.split("");
    let newText = "";

    for (let i = 0; i < result.length; i++) {
        newText += "<span>" + result[i] + "</span>";
    }
    return <div dangerouslySetInnerHTML={{__html: newText}}></div>
}

export default function Who() {
    return (
        <Layout>
            <Body>
                <Text>
                    <p>
                        <a href="https://github.co.jp/" target="_blank" rel="noreferrer noopener">
                            <GithubLink>
                                {oneText("Github")}
                                <span><GoMarkGithub color="white" /></span>
                            </GithubLink>
                        </a>
                    </p>
                    <p>
                        <a href="https://qiita.com/" target="_blank" rel="noreferrer noopener">
                            <QiitaLink>
                                {oneText("Qiita")}<span className="icon">Q</span>
                            </QiitaLink>
                        </a>
                    </p>
                </Text>
                <img src={Snake} alt="snake" />
            </Body>
        </Layout>
    )
}

const Body = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  img {
      width: 150px;
      height: 100px;
      z-index:1;
      filter: invert(96%) sepia(15%) saturate(7484%) hue-rotate(188deg) brightness(128%) contrast(108%);

      animation-name:snake;
      animation-duration:2s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
      @keyframes snake {
          0% {
            opacity:0;
            transform:translateX(-200px);
          }
          100% {
            opacity:1;
            transform:translateX(0px);
          }
      }
  }
  @media (min-width: 1919px) {
    img {
      width: 210px;
      height: 140px;
    }
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  z-index:2;
  a {
    text-decoration: none;
    color: white;
    font-size: 36px;
  }
  .icon {
    padding: 1px 8px 1px 8px;
    background-color: wheat;
    color: red;
    font-weight:bold;
    font-family: "游ゴシック";
    font-size: 36px;
    border: solid 1px white;
    border-radius: 50%;
  }
  @media (min-width: 1919px) {
      a {
          font-size:60px;
      }
      .icon {
          font-size:60px;
      }
`;

const GithubLink = styled.div`
  display:flex;
  span {
    display: inline-block;
    animation-name: wave-text;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    &:nth-of-type(1) {
      animation-delay: 0.0s;
    }
    &:nth-of-type(2) {
       animation-delay: 0.1s;
    }
    &:nth-of-type(3) {
       animation-delay: 0.2s;
    }
    &:nth-of-type(4) {
       animation-delay: 0.3s;
    }
    &:nth-of-type(5) {
       animation-delay: 0.4s;
    }
    &:nth-of-type(6) {
       animation-delay: 0.5s;
    }
    &:nth-of-type(7) {
       animation-delay: 0.6s;
    }
  }
  @keyframes wave-text{
      0%{
          transform: translateY(0em);
      }
      60%{
          transform: translateY(-0.8em);
      }
      100%{
          transform: translateY(0em);
      }
  }
`;

const QiitaLink = styled.div`
  display:flex;
  span {
    display: inline-block;
    animation-name: wave-text;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    &:nth-of-type(1) {
      animation-delay: 0.0s;
    }
    &:nth-of-type(2) {
       animation-delay: 0.1s;
    }
    &:nth-of-type(3) {
       animation-delay: 0.2s;
    }
    &:nth-of-type(4) {
       animation-delay: 0.3s;
    }
    &:nth-of-type(5) {
       animation-delay: 0.4s;
    }
    &:nth-of-type(6) {
       animation-delay: 0.5s;
    }
  }
  @keyframes wave-text{
      0%{
          transform: translateY(0em);
      }
      60%{
          transform: translateY(-0.8em);
      }
      100%{
          transform: translateY(0em);
      }
  }
`;