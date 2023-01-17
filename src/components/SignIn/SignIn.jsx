import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
    const navigate = useNavigate();
    const [isPerson, setIsPerson] = useState(false);    // [true - 법인] [false - 개인]

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = async () => {
        try {
            const auth = getAuth();
            const result = await signInWithEmailAndPassword(auth, email, password)
            console.log(result);
            alert("로그인 되었습니다.");
            navigate('/');
        }
        catch(err){
            console.log(err.code);
            // console.log(error.message);
            switch(err.code){
                case 'auth/wrong-password' :
                    alert("비밀번호 6자리 이상 또는 비밀번호 잘못 입력");
                    break;
                case 'auth/invalid-email' :
                    alert("없는 이메일 입니다");
                    break;
                case 'auth/user-not-found' :
                    alert("없는 이메일 입니다");
                    break;
                case 'auth/too-many-requests' :
                    alert("너무 많은 요청 잠시만 기다려 주세요");
                    break;
            }
        }
    }

    return (
        <Frame>
            <Header>
                <img src="/images/logo.jpeg" onClick={() => navigate('/')} style={{ height: "90%", cursor: "pointer" }} />
            </Header>
            <Content>
                <Select>
                    <SelectItem isPerson={isPerson} onClick={() => setIsPerson(false)}>개인회원</SelectItem>
                    <SelectItem isPerson={isPerson} onClick={() => setIsPerson(true)}>법인회원</SelectItem>
                </Select>
                <Input>
                    <label for="id"><div>아이디(이메일형식)</div></label>
                    <input type="email" onChange={e => setEmail(e.target.value)} id="id" />
                    <label for="password"><div>비밀번호</div></label>
                    <input type="text" onChange={e => setPassword(e.target.value)} id="password" />
                    <Link to="/signup" ><button>회원가입</button></Link>
                    <button type="submit" onClick={() => signin()}>로그인</button>
                </Input>
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
    width: 50%;
    height: 85%;
    margin: auto;

    /* background-color: rgb(191, 191, 191); */
    border-left: 1px solid rgb(180, 180, 180);
    border-right: 1px solid rgb(180, 180, 180);
`;

const Select = styled.div`
    width: 100%;
    height: 5%;
    /* background-color: green; */
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Input = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SelectItem = styled.span`
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


const Footer = styled.div`
    width: 100%;
    height: 5%;
    /* background-color: rgb(171, 171, 171); */
    border-top: 1px solid rgb(180, 180, 180);
`;

const FooterText = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(191, 191, 191) */
`

export default SignIn;