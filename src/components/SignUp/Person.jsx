import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

function Person() {
    const navigate =useNavigate();

    return (
        <Frame>
            <ButtonWrap>
                <Button onClick={() => navigate('/signup/agree')}>회원가입</Button>
            </ButtonWrap>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
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
    
  &:hover {
    background-color: rgb(0, 140, 25);
  }
`;

export default Person;