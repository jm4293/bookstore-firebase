import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {db, storage} from "../Firebase/firebase";
import {collection, query, where, getDocs, doc, updateDoc, setDoc} from "firebase/firestore";
import {ref, getDownloadURL} from "firebase/storage";
import {BsFillCartFill} from "react-icons/bs"
import {useSelector} from "react-redux";

function Detail() {
    let {code} = useParams()
    const [item, setItem] = useState({});
    const [img, setImg] = useState("");

    // 상품 정보 불러오기
    useEffect(() => {
        const q = query(collection(db, "books"), where("code", "==", code));

        async function querySnapshot() {
            return await getDocs(q);
        }

        querySnapshot()
            .then((data) => {
                data.forEach(element => setItem(element.data()))
            })
            .catch((error) => {
                console.log(error)
            })

        getDownloadURL(ref(storage, `${code}`))
            .then((url) => {
                setImg(url);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // redux - 로그인 상태
    let isLogin = useSelector((state) => {
        return state.isLogin
    })

    // redux - 로그인 UID
    let uid = useSelector((state) => {
        return state.UID
    })

    const AddCart = async () => {
        if (isLogin) {
            await updateDoc(doc(db, "cart", uid.UID.payload), {
                [item.code]: 1
            });
            alert("상품 추가")
        } else {
            alert("로그인 해주세요")
        }
    }

    return (
        <Frame>
            <Header>
                <img src="/images/logo.jpeg" onClick={() => window.location.replace('/')}
                     style={{height: "100%", cursor: "pointer"}}/>
            </Header>
            <Footer>
                <Left>
                    <h3>{`저자: ${item.author}`}</h3>
                    <h3>{`종류: ${item.kind}`}</h3>
                </Left>
                <Middle>
                    <h1>{`${item.title}`}</h1>
                    <StyledImg src={img}/>
                </Middle>
                <Right>
                    <h2>{`가격: ${item.price}원`}</h2>
                    <h4>{`출판일: ${item.release}`}</h4>
                    <h4>{`코드: ${item.code}`}</h4>
                    <BsFillCartFill onClick={() => AddCart()} style={{scale: "1.5", cursor: "pointer"}}/>
                </Right>
            </Footer>
        </Frame>
    )
}

const Frame = styled.div`
  width: 90vw;
  height: 100vh;
  margin: auto;
  //border: 1px solid black;
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid black;
`;

const Footer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;

const Left = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 1px solid red;
`;

const Middle = styled.div`
  width: 40%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const StyledImg = styled.img`
  width: 70%;
  border-radius: 10px;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 1px solid blue;
`;

export default Detail;