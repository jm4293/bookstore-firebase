import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Person() {
    return(
        <Frame>
            <Link to="/signup/agree"><StyledButton>회원가입</StyledButton></Link>
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
    /* background-color: red; */
    /* border: 3px solid blue; */
`;

const StyledButton = styled.button`
    width: 100%;
    height: 20%;
    margin-top: 30px;
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

const ListWrap = styled.div`
    width: 100%;
    height: calc(80% - 30px);
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
    /* border: 1px solid black; */
`;

const ListItem = styled.div`
    margin: 20px;
`;

export default Person;