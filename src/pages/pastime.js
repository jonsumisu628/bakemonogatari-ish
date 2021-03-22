import React from "react";
import styled from "styled-components";

import Layout from "../components/styles/layout";

export default function Pastime() {
    return (
        <Layout>
            <Text>
                <p>アニメやゲームが好きです。</p>
                <p>バスケやスノースポーツもやります。</p>
                <p>専門学校に入学してからは筋トレも始めました。</p>
            </Text>
        </Layout>
    )
}

const Text = styled.div`
  color: white;
  font-size: 35px;
`;