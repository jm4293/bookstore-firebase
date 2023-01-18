import React from "react";
import styled from "styled-components";

function Item({title, author, kind, release, price}) {
    return (
        <Frame>
            <Left>
                <Img>
                    이미지
                </Img>
                <Release>
                    {`출판일: ${release}`}
                </Release>
            </Left>
            <Right>
                <Title>
                    <div>
                        {`제목: ${title}`}
                    </div>
                    <div>
                        {`작가: ${author}`}
                    </div>
                </Title>
                <Kind>
                    {`종류: ${kind}`}
                </Kind>
                <Price>
                    {`가격: ${price}`}
                </Price>
            </Right>
        </Frame>
    )
}

const Frame = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  //padding: 10px;
  width: 70%;
  height: 200px;
  margin: 20px auto;
  display: flex;
`;

const Left = styled.div`
  border-right: 1px solid black;
  width: 30%;
  height: 100%;
  //margin: auto;
  //display: flex;
  //flex-direction: column;
  //align-content: center;
  //justify-content: center;
`;

const Img = styled.div`
  //border: 1px solid black;
  width: 100%;
  height: 80%;
  //padding: 10px;
  //margin: auto;
  //display: flex;
  //justify-content: center;
  //align-content: center;
`;

const Release = styled.div`
  border-top: 1px solid black;
  width: 100%;
  height: 20%;
`;

const Right = styled.div`
  width: 70%;
  height: 100%;
  //border: 1px solid rebeccapurple;
`;

const Title = styled.div`
  width: 100%;
  height: 60%;
  border-bottom: 1px solid black;
`;

const Kind = styled.div`
  width: 100%;
  height: 20%;
  border-bottom: 1px solid black;
`;

const Price = styled.div`
  width: 100%;
  height: 20%;
`;

export default Item;