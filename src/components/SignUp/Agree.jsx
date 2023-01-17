import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

function Agree() {
    const navigate = useNavigate();
    const [check, setCheck] = useState([]);
    const [isDisable, setIsDisable] = useState(true);

    const List = [
        { id: 0, title: "필수 0" },
        { id: 1, title: "필수 1" },
        { id: 2, title: "선택 1" },
        { id: 3, title: "선택 2" },
        { id: 4, title: "선택 3" },
        { id: 5, title: "선택 4" }
    ]

    useEffect(() => {
        check.includes(0) && check.includes(1) ? setIsDisable(false) : setIsDisable(true)
    }, [check])

    const checkAll = (e) => {
        if (e) {
            const temp = [];
            List.map(element => temp.push(element.id))
            setCheck(temp);
        }
        else {
            setCheck([]);
        }
    }

    const checkList = (e, id) => {
        e ? setCheck(prev => [...prev, id]) : setCheck(check.filter((e) => e !== id));
    }

    return (
        <Frame>
            <Header>
                <Img src="/images/logo.jpeg" onClick={() => navigate('/')} />
            </Header>
            <Content>
                <div>
                    <span>전체 동의</span>
                    <input type="checkbox" onChange={(e) => checkAll(e.target.checked)} />
                </div>
                {
                    List.map((element, index) => {
                        return (
                            <div key={index}>
                                <span>{element.title}</span>
                                <input type="checkbox" onChange={(e) => checkList(e.target.checked, element.id)} checked={check.includes(element.id) ? true : false} />
                            </div>
                        )
                    })
                }

                <div>
                    <Link to="/"><button>비동의</button></Link>
                    <Link to="/signup/register"><button disabled={isDisable}>동의</button></Link>
                </div>
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
    /* margin: auto; */
    /* border: 3px solid black; */
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


export default Agree;