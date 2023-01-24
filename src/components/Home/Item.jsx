import React, {useState} from "react";
import styled from "styled-components";
import {storage} from "../../Firebase/firebase";
import {ref, getDownloadURL} from "firebase/storage";
import {useNavigate} from "react-router-dom";


function Item({title, author, code}) {
    const [img, setImg] = useState("");
    const navigate = useNavigate();

    // 사진 다운로드
    getDownloadURL(ref(storage, `${code}`))
        .then((url) => {
            setImg(url);
        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <Frame onClick={() => navigate(`/detail/${code}`)}>
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
  cursor: pointer;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
  border-radius: 10px;
`;

const Title = styled.div`
  margin: auto;
  font-weight: 600;
  font-size: 18px;
`;

const Author = styled.div`
  margin: auto;
  font-size: 16px;
`;

export default Item;