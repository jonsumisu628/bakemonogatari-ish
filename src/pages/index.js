import React from "react"
import styled from "styled-components";

import Layout from "../components/layout/layout";

function Meigen() {
    let array = [
        "ひ た ぎ ク ラ ブ ",
        "ま よ い マ イ マ イ ",
        "す る が モ ン キ ー ",
        "な で こ ス ネ イ ク ",
        "つ ば さ キ ャ ッ ト ",
    ];
    let ran = Math.floor(Math.random() * array.length);
    return array[ran];
}

export default function Home() {
    return (
        <Layout>
            <Body>
                <Title>
                    <ruby>
                        次     <rt>zi.    </rt>
                        回<rt> kai.</rt>
                    </ruby>
                    <br />
                    <Subtitle>
                        {Meigen()}
                        <ruby>
                            其 <rt>so.  </rt>
                    ノ
                    壹<rt>      ichi.</rt>
                        </ruby>
                    </Subtitle>
                </Title>
            </Body>
        </Layout>
    );
}

const Body = styled.div`
  text-align: center;
  color: white;
  font-size: 36px;
  @media (min-width: 1919px) {
      font-size:60px;
  }
`;

const Title = styled.div`
  margin-bottom: 50px;
  white-space: pre;
  ruby-position: under;

  rt {
    font-size: 16px;
    font-style: italic;
  }
  @media (min-width: 1919px) {
      rt {
          font-size:26px;
      }
  }
`;

const Subtitle = styled.div`
  margin-top: 100px;
`;
