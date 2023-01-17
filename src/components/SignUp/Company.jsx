import React from "react";
import styled from "styled-components";

function Company() {
    return (
        <Frame>
            <ListWrap>
                <div>사업자번호</div>
                <input type="text" style={{lineHeight: "30px"}}/>
                <div>법인명</div>
                <input type="text" style={{lineHeight: "30px"}}/>
                <StyledButton>인증하기</StyledButton>
            </ListWrap>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: yellow; */
    /* border: 3px solid blue; */
`;

const ListWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
    /* border: 1px solid blue; */
`;

const StyledButton = styled.button`
    width: 100%;
    height: 20%;
    /* margin-top: 30px; */
    /* margin: auto; */
    /* margin: auto 0; */
    color: white;
    font-weight: 500;
    font-size: 16px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    background-color: rgb(0, 160, 25);

    &:hover{
        background-color: rgb(0, 140, 25);
    }
`;

export default Company;