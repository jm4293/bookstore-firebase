import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

function Cart() {

    let a = useSelector((state) => {
        return state
    })
    console.log(a)

    let dispatch = useDispatch();

    return (
        <Frame>
            <Header>

            </Header>
            <Footer>
                <Table>
                    <thead>
                    <tr>
                        <Th>상품</Th>
                        <Th>수량</Th>
                        <Th>가격</Th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Th></Th>
                        <Th>1</Th>
                        <Th>20000</Th>
                    </tr>
                    </tbody>
                </Table>
            </Footer>
        </Frame>
    )
}

const Frame = styled.div`
  width: 90vw;
  height: 100vh;
  margin: auto;
  border: 1px solid black;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid black;
`;

const Footer = styled.div`
  width: 100%;
  height: 90%;
`;

const Table = styled.table`
  width: 50%;
  margin: auto;
  border-collapse: collapse;
`;

const Th = styled.th`
  height: 40px;
  border: 1px solid black;
`;

export default Cart;