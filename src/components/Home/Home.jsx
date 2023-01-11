import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Home() {
    return (
        <div>
            <Frame>
                <Header />
                <Content />
                <Footer />
            </Frame>
        </div>
    )
}

const Frame = styled.div`
    width: 90%;
    margin: auto;
`;

export default Home;