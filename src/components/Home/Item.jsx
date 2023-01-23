import React, {useState} from "react";
import styled from "styled-components";
import {storage} from "../../Firebase/firebase";
import {ref, getDownloadURL} from "firebase/storage";


function Item({title, author, code}) {
    const [img, setImg] = useState("");

    getDownloadURL(ref(storage, `${code}`))
        .then((url) => {
            setImg(url);
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <Frame>
            <StyledImg src={img}/>
            <Title>{`${title}`}</Title>
            <Author>{`${author}`}</Author>
        </Frame>
    )
}

const Frame = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  width: 300px;
  height: 500px;
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  //align-content: center;
  //justify-content: center;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Title = styled.div`
  margin: auto;
  font-weight: 600;
  font-size: 18px;
  //width: 100%;
  //height: 60%;
  //border-bottom: 1px solid black;
`;

const Author = styled.div`
  margin: auto;
  font-size: 16px;
`;

export default Item;