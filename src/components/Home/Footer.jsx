import React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <Frame>
            <Left>
                <Top>회사소개</Top>
                <Bottom>사업자등록번호</Bottom>
            </Left>
            <Right>Family Site</Right>
        </Frame>
    )
}

const Frame = styled.div`
  height: 300px;
  width: 100%;
  border-top: 1px solid black;
  display: flex;
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 60%;
  border-top: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
  border-left: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;