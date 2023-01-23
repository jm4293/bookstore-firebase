import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

function SignIn() {
    const navigate = useNavigate();
    const [isPerson, setIsPerson] = useState(false);    // [true - 법인] [false - 개인]

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const sign_in = async () => {
        try {
            const auth = getAuth();
            const result = await signInWithEmailAndPassword(auth, email, password)
            console.log(result);
            alert("로그인 되었습니다.");
            navigate('/');
        } catch (err) {
            switch (err.code) {
                case 'auth/wrong-password' :
                    alert("비밀번호 6자리 이상 또는 비밀번호 잘못 입력");
                    break;
                case 'auth/invalid-email' :
                    alert("이메일 잘못 일력");
                    break;
                case 'auth/user-not-found' :
                    alert("없는 이메일");
                    break;
                case 'auth/too-many-requests' :
                    alert("너무 많은 요청 잠시만 기다려 주세요");
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <Frame>
            <Header>
                <img src="/images/logo.jpeg" onClick={() => navigate('/')} style={{height: "90%", cursor: "pointer"}}/>
            </Header>
            <Content>
                <Select>
                    <SelectItem isPerson={isPerson} onClick={() => setIsPerson(false)}>개인회원</SelectItem>
                    <SelectItem isPerson={isPerson} onClick={() => setIsPerson(true)}>법인회원</SelectItem>
                </Select>
                <Input>
                    <InputEmail type="email" onChange={e => setEmail(e.target.value)} placeholder="이메일을 입력해 주세요."/>
                    <InputPassword type="password" onChange={e => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요.(6자리 이상)"/>
                    <ButtonSignIn type="submit" onClick={() => sign_in()}>로그인</ButtonSignIn>
                    <ButtonSignUp onClick={() => navigate("/signup")}>회원가입</ButtonSignUp>
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

const Input = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputEmail = styled.input`
  border-color: rgb(207, 207, 207);
  width: 50%;
  height: 4%;
  border-radius: 10px 10px 0 0;
`;

const InputPassword = styled.input`
  border-color: rgb(207, 207, 207);
  width: 50%;
  height: 4%;
  border-radius: 0 0 10px 10px;
`;

const ButtonSignIn = styled.button`
  border: 0;
  margin-top: 20px;
  width: 50%;
  height: 30px;
  background-color: rgb(107, 107, 107);
  color: white;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: rgb(85, 85, 85);
  }
`;

const ButtonSignUp = styled.button`
  margin-top: 20px;
  width: 50%;
  height: 30px;

  border-color: rgb(74, 75, 164);
  background-color: white;
  color: rgb(65, 67, 138);
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: rgb(238, 238, 246);
  }
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

const Footer = styled.div`
  width: 100%;
  height: 5%;
  border-top: 1px solid rgb(180, 180, 180);
`;

const FooterText = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SignIn;