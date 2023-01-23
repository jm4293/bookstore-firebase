import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Person from "./Person";
import Company from "./Company";

function SignUp() {
    const navigate = useNavigate();
    const [isPerson, setIsPerson] = useState(false);    // [true - 법인] [false - 개인]

    return (
        <Frame>
            <Header>
                <Img src="/images/logo.jpeg" onClick={() => navigate('/')}/>
            </Header>
            <Content>
                <Select>
                    <SelectItem isPerson={isPerson} onClick={() => setIsPerson(false)}>개인회원</SelectItem>
                    <SelectItem isPerson={isPerson} onClick={() => setIsPerson(true)}>법인회원</SelectItem>
                </Select>
                <LoginList>
                    {
                        isPerson === true ? <Company/> : <Person/>
                    }
                </LoginList>
                <Etc>
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
                </Etc>
            </Content>
            <Footer>
                <Text>@jm4293 bookstore</Text>
            </Footer>
        </Frame>
    )
}

const Frame = styled.div`
  width: 99vw;
  height: 99vh;
  margin: auto;
`;

const Img = styled.img`
  height: 90%;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 50%;
  height: 85%;
  margin: auto;
`;

const Select = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SelectItem = styled.span`
  cursor: pointer;
  border: 2px solid green;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-top: ${props => props.isPerson ? "none" : null};
    border-left: ${props => props.isPerson ? "none" : null};
    border-right: ${props => props.isPerson ? "none" : null};
    border-bottom: ${props => props.isPerson ? null : "none"};
  }

  &:last-child {
    border-top: ${props => props.isPerson ? null : "none"};
    border-left: ${props => props.isPerson ? null : "none"};
    border-right: ${props => props.isPerson ? null : "none"};
    border-bottom: ${props => props.isPerson ? "none" : null};
  }
`;

const LoginList = styled.div`
  width: 100%;
  height: 45%;
  border-bottom: 1px solid rgb(180, 180, 180);
`;

const Etc = styled.div`
  height: 50%;
`;

const Footer = styled.div`
  width: 100%;
  height: 5%;
  border-top: 1px solid rgb(180, 180, 180);
`;

const Text = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignUp;