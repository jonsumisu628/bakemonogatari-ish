import React from "react";
import styled from "styled-components";

import Layout from "../components/styles/layout";

export default function Study() {
    return (
        <Layout>
            <Text>
                <p>フロントエンド</p>
                <p>JavaScript / HTML / CSS / React / Gatuby / Vue / Svelte</p>

                <p>バックエンド</p>
                <p>Linux / Docker / Vagrant</p>
            </Text>
        </Layout>
    )
}

const Text = styled.div`
  color: white;
  p {
    font-size: 35px;
  }
`;