import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginPerson from "./LoginPerson";
import LoginCompany from "./LoginCompany";

function Register() {
    const navigate = useNavigate();
    const [isPerson, setIsPerson] = useState(false);    // [true - 법인] [false - 개인]

    return (
        <Frame>
            <Header>
                <img src="/images/bookstore_logo.png" onClick={() => navigate('/')} style={{ height: "90%", cursor: "pointer" }} />
            </Header>
            <Content>
                <ContentSelect>
                    <SelectSpan isPerson={isPerson} onClick={() => setIsPerson(false)}>개인회원</SelectSpan>
                    <SelectSpan isPerson={isPerson} onClick={() => setIsPerson(true)}>법인회원</SelectSpan>
                </ContentSelect>
                <ContentLoginList>
                    {   
                        isPerson === true 
                            ? <LoginCompany/>
                            : <LoginPerson/>
                    }
                </ContentLoginList>
                <ContentBenefitBox>
                    <BenefitCouponBox>
                        <BenefitBox>
                            신규회원 특별 혜택
                        </BenefitBox>
                    </BenefitCouponBox>
                    <BenefitCouponBox>
                        <BenefitBox>
                            본인인증 추가 혜택
                        </BenefitBox>
                    </BenefitCouponBox>
                </ContentBenefitBox>
                <div>
                    {
                        isPerson === true
                            ? <ul>
                                <li>사업자번호 인증이 되지 않을 경우, 아래 방법으로 확인하실수 있습니다.</li>
                                <li>FAX 접수 : 02-0000-0000로 사업자등록증 1부, 연락처 기재</li>
                                <li>사업자 구매회원 사업자등록 바로 가기</li>
                                <li>NICE평가정보 바로 가기 (1600-1522)</li>
                            </ul>
                            : null
                    }
                </div>
            </Content>
            <Footer>
                <FooterText>@jm4293 bookstore</FooterText>
            </Footer>
        </Frame>
    )
}

const Frame = styled.div`
    width: 99vw;
    height: 99vh;
    margin: auto;
    /* background-color: rgb(233, 233, 233); */
`;

const Header = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(232, 232, 232);
    /* background-color: rgb(211, 211, 211) */
`;

const Content = styled.div`
    width: 30%;
    height: 85%;
    margin: auto;
    /* background-color: rgb(191, 191, 191); */
    /* border-left: 1px solid rgb(232, 232, 232); */
    /* border-right: 1px solid rgb(232, 232, 232); */
`;

const ContentSelect = styled.div`
    width: 100%;
    height: 5%;
    /* background-color: green; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const SelectSpan = styled.span`
    cursor: pointer;
    border: 2px solid green;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child{
        border-top: ${props => props.isPerson ? "none" : null};
        border-left: ${props => props.isPerson ? "none" : null};
        border-right: ${props => props.isPerson ? "none" : null};
        border-bottom: ${props => props.isPerson ? null : "none"};
    }
    &:last-child{
        border-top: ${props => props.isPerson ? null : "none"};
        border-left: ${props => props.isPerson ? null : "none"};
        border-right: ${props => props.isPerson ? null : "none"};
        border-bottom: ${props => props.isPerson ? "none" : null};
    }
`;

const ContentLoginList = styled.div`
    width: 100%;
    height: 35%;
    /* background-color: rgb(235, 235, 235); */
`;

const ContentBenefitBox = styled.div`
    width: 100%;
    height: 35%;
    background-color: rgb(205, 205, 205);
`;

const BenefitBox = styled.p`
    margin: 0;
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
`;

const BenefitCouponBox = styled.div`
    width: 100%;
    height: 50%;
`;

const Footer = styled.div`
    width: 100%;
    height: 5%;
    /* background-color: rgb(171, 171, 171); */
    border-top: 1px solid rgb(232, 232, 232);
`;

const FooterText = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(191, 191, 191) */
`

export default Register;