import React from "react"

import "./layout.css";

import Manu from "../menu";
import Footer from "../footer";

export default function Home(props) {
    return (
        <div className="app">

            <div className="main">
                <div className="header">
                    <p>豫告</p>
                </div>

                <Manu />

                <div className="contents">
                    {props.children}
                </div>

                <Footer />
            </div>

        </div>
    );
}
