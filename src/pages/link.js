import React from "react";
import styled from "styled-components";
import {GoMarkGithub} from "@react-icons/all-files/go/GoMarkGithub";

import Layout from "../components/styles/layout";

export default function Who() {
    return (
        <Layout>
            <Text>
                <p>
                    <a href="https://github.com/jonsumisu628" target="_blank" rel="noreferrer noopener">
                        Github
                        <GoMarkGithub color="white" />
                    </a>
                </p>
                <p>
                    <a href="https://qiita.com/john_smith628" target="_blank" rel="noreferrer noopener">
                        Qiita<span>Q</span>
                    </a>
                </p>
            </Text>
        </Layout>
    )
}

const Text = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    color: white;
    font-size: 35px;
  }
  span {
    padding: 1px 8px 1px 8px;
    background-color: wheat;
    color: red;
    font-weight:bold;
    font-family: "游ゴシック";
    font-size: 35px;
    border: solid 1px white;
    border-radius: 50%;
  }
`;
