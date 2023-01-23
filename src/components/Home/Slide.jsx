import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {TfiArrowCircleLeft, TfiArrowCircleRight} from "react-icons/tfi"

const IMG_WIDTH = 900

function Slide() {
    const slideRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // console.log(slideRef.current.offsetWidth)
        const slideRange = currentIndex * IMG_WIDTH;
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    }, [currentIndex])
    
    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex === 4 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
        }, 2000)

        return () => {
            clearInterval(interval);
        }
    })

    const movePrev = () => {
        currentIndex === 0 ? setCurrentIndex(4) : setCurrentIndex(currentIndex - 1);
    }

    const moveNext = () => {
        currentIndex === 4 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
    }

    return (
        <Frame>
            <TfiArrowCircleLeft onClick={() => movePrev()} style={{margin: "auto", cursor: "pointer", scale: "1.4"}}/>
            <Content>
                <ImgWrapper ref={slideRef}>
                    <Img src="/images/slide/slide_1.jpg"/>
                    <Img src="/images/slide/slide_2.jpg"/>
                    <Img src="/images/slide/slide_3.jpg"/>
                    <Img src="/images/slide/slide_4.jpg"/>
                    <Img src="/images/slide/slide_5.jpg"/>
                </ImgWrapper>
            </Content>
            <TfiArrowCircleRight onClick={() => moveNext()} style={{margin: "auto", cursor: "pointer", scale: "1.4"}}/>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  margin: 50px 0;
`;

const Content = styled.div`
  overflow: hidden;
  width: ${IMG_WIDTH}px;
  height: 100%;
`;

const ImgWrapper = styled.div`
  width: ${IMG_WIDTH}px;
  height: 100%;
  display: flex;
`;

const Img = styled.img`
  width: ${IMG_WIDTH}px;
  height: 100%;
`;

export default Slide;