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
            </ListWrap>
            <ButtonWrap>
                <Button>인증하기</Button>
            </ButtonWrap>
        </Frame>
    )
}

const Frame = styled.div`
    width: 100%;
    height: 100%;
`;

const ListWrap = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
    width: 80%;
    height: 30%;
    margin: auto;
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