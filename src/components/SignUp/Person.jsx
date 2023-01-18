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
            <ListWrap>
                <ListItem>네이버</ListItem>
                <ListItem>카카오</ListItem>
                <ListItem>구글</ListItem>
                <ListItem>애플</ListItem>
            </ListWrap>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: 100%;
  //margin: auto;
  //display: flex;
  //flex-direction: column;
  //align-content: center;
  //justify-content: center;
  /* background-color: red; */
  //border: 1px solid blue;
`;

const ButtonWrap = styled.div`
  //border: 1px solid red;
  width: 100%;
  height: 40%;
  //margin: auto;
  display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-content: center;
`;

const Button = styled.button`
  width: 80%;
  height: 40%;
  //margin-top: 30px;
  margin: auto;
  color: white;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  //border: 0;
  cursor: pointer;
  background-color: rgb(0, 160, 25);

  border: 1px solid blue;
  
  &:hover {
    background-color: rgb(0, 140, 25);
  }
`;

const ListWrap = styled.div`
  width: 100%;
  //height: calc(80% - 30px);
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: yellow; */
   //border: 1px solid black; 
`;

const ListItem = styled.div`
  margin: 20px;
`;

export default Person;