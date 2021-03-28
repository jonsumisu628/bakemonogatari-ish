import React from "react"

import "../styles/layout.css";

import Manu from "../menu";
import Header from "../header";
import Footer from "../footer";

export default function Home(props) {
    return (
        <div className="body">
            <Header />
            <div className="content">
                <Manu />
                <div className="page">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
