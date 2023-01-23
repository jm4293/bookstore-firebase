import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async () => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
        alert("회원가입 성공");
        navigate('/');
    }

    return (
        <Frame>
            <Header>
                <Img src="/images/logo.jpeg" onClick={() => navigate('/')}/>
            </Header>
            <Content>
                <InputEmail type="email" onChange={e => setEmail(e.target.value)} placeholder="이메일을 입력해 주세요."/>
                <InputPassword type="password" onChange={e => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요.(6자리 이상)"/>
                <ButtonSignIn type="submit" onClick={() => signup()}>회원가입</ButtonSignIn>
                <ButtonSignUp onClick={() => navigate("/")}>돌아가기</ButtonSignUp>
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
  border-bottom: 1px solid rgb(180, 180, 180);
`;

const Content = styled.div`
  width: 50%;
  height: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgb(180, 180, 180);
  border-right: 1px solid rgb(180, 180, 180);
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
  height: 25px;
  background-color: rgb(107, 107, 107);
  color: white;
  cursor: pointer;
  border-radius: 10px;

  &:hover{
    background-color: rgb(85, 85, 85);
  }
`;

const ButtonSignUp = styled.button`
  margin-top: 20px;
  width: 50%;
  height: 25px;

  border-color: rgb(74, 75, 164);
  background-color: white;
  color: rgb(65, 67, 138);
  cursor: pointer;
  border-radius: 10px;

  &:hover{
    background-color: rgb(238, 238, 246);
  }
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

export default Register;