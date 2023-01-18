import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const IMG_WIDTH = 900

function Slide() {
    const slideRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // console.log(slideref.current.offsetWidth)
        // const imgWidth = IMG_WIDTH;
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
            <Button onClick={() => movePrev()}>이전</Button>
            <Content>
                <ImgWrapper ref={slideRef}>
                    <Img src="/images/slide/slide_1.jpg" />
                    <Img src="/images/slide/slide_2.jpg" />
                    <Img src="/images/slide/slide_3.jpg" />
                    <Img src="/images/slide/slide_4.jpg" />
                    <Img src="/images/slide/slide_5.jpg" />
                </ImgWrapper>
            </Content>
            <Button onClick={() => moveNext()}>이후</Button>
            {/* <div>{currentIndex}</div> */}
        </Frame>
    )
}

const Frame = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 300px;
    margin: 0 auto;
    /* overflow: scroll; */
    display: flex;
`;

const Button = styled.button`
    width: 5%;
    height: 30px;
    margin: auto;
`;

const Content = styled.div`
    overflow: hidden;
    width: ${IMG_WIDTH}px;
    height: 100%;
    /* margin: auto; */
    /* border: 1px solid violet; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
`;

const ImgWrapper = styled.div`
    /* background: ${props => props.element}; */
    width: ${IMG_WIDTH}px;
    height: 100%;
    /* margin: auto; */
    /* border: 1px solid red; */
    display: flex;
`;

const Img = styled.img`
    width: ${IMG_WIDTH}px;
    height: 100%;
    /* border: 1px solid green; */
`;

export default Slide;