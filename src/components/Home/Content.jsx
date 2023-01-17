import React, { useRef, useEffect, cloneElement, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";

function Content() {
    return (
        <Frame>
            <Slide/>
        </Frame>
    )
}

const Frame = styled.div`
    margin-top: 50px;
    /* background-color: yellow; */
    width: 100%;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    /* margin: 20px 20px; */
    /* border: 1px solid black; */
`;

export default Content;