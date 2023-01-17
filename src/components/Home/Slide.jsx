import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const item = ['#33a', '#8c9', '#f3e074']

function Slide() {
    const slideref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log(currentIndex)
        const imgWidth = slideref.current.offsetWidth;
        const slideRange = currentIndex * imgWidth;
        slideref.current.style.transition = "all 0.5s ease-in-out";
        slideref.current.style.transform = `translateX(-${slideRange}px)`;
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
                <ImgWrapper ref={slideref}>
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
    width: 90%;
    height: 100%;
    /* margin: auto; */
    /* border: 1px solid violet; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
`;

const ImgWrapper = styled.div`
    /* background: ${props => props.element}; */
    width: 100%;
    height: 100%;
    /* margin: auto; */
    /* border: 1px solid red; */
    display: flex;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    /* border: 1px solid green; */
`;

export default Slide;