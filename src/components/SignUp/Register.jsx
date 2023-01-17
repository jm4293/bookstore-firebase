import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState("");
    // const [birth, setBirth] = useState();
    // const [phone, setPhone] = useState();

    const signup = async () => {
        const auth = getAuth();
        const result = await createUserWithEmailAndPassword(auth, email, password)
        console.log(result);
    }

    return (
        <Frame>
            <Header>
                <Img src="/images/logo.jpeg" onClick={() => navigate('/')}/>
            </Header>
            <Content>
                <label for="id"><div>아이디(이메일형식)</div></label>
                <input type="email" onChange={e => setEmail(e.target.value)} id="id"/>
                <label for="password"><div>비밀번호</div></label>
                <input type="text" onChange={e => setPassword(e.target.value)} id="password"/>
                {/* <label for="name"><div>이름</div></label>
                <input type="text" onChange={e => setName(e.target.value)} id="name"/>
                <label for="birth"><div>생년월일</div></label>
                <input type="text" onChange={e => setBirth(e.target.value)} id="birth"/>
                <label for="phone"><div>전화번호</div></label>
                <input type="text" onChange={e => setPhone(e.target.value)} id="phone"/> */}
                <button type="submit" onClick={() => signup()}>회원가입</button>
                <Link to="/"><button>돌아가기</button></Link>


                <div>{email}</div>
                <div>{password}</div>
                {/* <div>{name}</div> */}
                {/* <div>{birth}</div> */}
                {/* <div>{phone}</div> */}
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
    /* border: 1px solid black; */
    /* background-color: rgb(233, 233, 233); */
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
    /* background-color: rgb(211, 211, 211) */
`;

const Content = styled.div`
    width: 50%;
    height: 85%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    /* background-color: rgb(191, 191, 191); */
    border-left: 1px solid rgb(180, 180, 180);
    border-right: 1px solid rgb(180, 180, 180);
`;

const Footer = styled.div`
    width: 100%;
    height: 5%;
    /* background-color: rgb(171, 171, 171); */
    border-top: 1px solid rgb(180, 180, 180);
    /* border: 1px solid blue; */
`;

const Text = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(191, 191, 191) */
`;

export default Register;