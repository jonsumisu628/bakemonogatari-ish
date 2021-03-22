import React from "react";
import styled from "styled-components";

import Layout from "../components/styles/layout";

export default function Who() {
    return (
        <Layout>
            <Text>
                <p>NicName:John.Smith</p>
                <p>BirthDay:1999/6/28</p>
                <p>Location：Tokyo</p>
                <p>東京の専門学校に通っています。</p>
                <p>現在就職活動中...</p>
            </Text>
        </Layout>
    )
}

const Text = styled.div`
  color: white;
  font-size: 35px;
`;