import React, {useState} from "react";
import styled from "styled-components";
// import app from '../../Firebase/firebase';
import {db, storage} from "../../Firebase/firebase";
import {addDoc, collection} from "firebase/firestore";
import {ref, uploadBytes} from "firebase/storage";
import {useNavigate} from "react-router-dom";

function Admin() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [kind, setKind] = useState("");
    const [release, setRelease] = useState("");
    const [price, setPrice] = useState("");
    const [code, setCode] = useState("");
    const [img, setImg] = useState(null);
    const navigate = useNavigate();

    const save = async () => {
        try {
            // 상품 정보
            await addDoc(collection(db, "books"), {
                title: title,
                author: author,
                kind: kind,
                release: release,
                price: price,
                code: code,
            });
            // 상품 이미지
            const storageRef = ref(storage, code);
            await uploadBytes(storageRef, img);
            window.location.replace("/admin")
            alert("저장 완료")
        } catch (e) {
            console.log(e);
            alert("에러 발생");
        }
    }

    return (
        <Frame>
            <Header>
                <h2>관리자 페이지</h2>
            </Header>
            <Content>
                <Left>
                    <Input>
                        <h4 style={{margin: 0}}>상품 저장</h4>
                        <div style={{margin: "10px 0"}}>
                            <div>제목</div>
                            <input type="text" onChange={e => setTitle(e.target.value)}/>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>작가</div>
                            <input type="text" onChange={e => setAuthor(e.target.value)}/>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>종류</div>
                            <select onChange={e => setKind(e.target.value)}>
                                <option selected disabled>종류 선택</option>
                                <option value="소설">소설</option>
                                <option value="에세이">에세이</option>
                                <option value="자기개발">자기개발</option>
                                <option value="문제집">문제집</option>
                            </select>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>출판일</div>
                            <input type="date" onChange={e => setRelease(e.target.value)}/>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>가격</div>
                            <input type="text" onChange={e => setPrice(e.target.value)}/>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>바코드</div>
                            <input type="text" onChange={e => setCode(e.target.value)}/>
                        </div>
                        <div style={{marginBottom: "10px"}}>
                            <div>사진</div>
                            <input type="file" onChange={e => setImg(e.target.files[0])} accept="image/*"/>
                        </div>
                        <div>
                            <button onClick={() => save()}>저장</button>
                        </div>
                    </Input>
                    <Modify>
                        <h4 style={{marginTop: 0}}>상품 수정</h4>
                    </Modify>
                </Left>
                <Right>
                    <h4 style={{marginTop: 0}}>상품 목록</h4>
                </Right>
            </Content>
            <button onClick={() => navigate('/')}>돌아가기</button>
        </Frame>
    )
}

const Frame = styled.div`
  //border: 1px solid black;
  width: 90%;
  height: 90vh;
  margin: auto;
`;

const Header = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  //align-content: center;
`;

const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;

const Left = styled.div`
  //border: 1px solid red;
  width: 40%;
  height: 100%;
`;

const Input = styled.div`
  width: 100%;
  height: 60%;
  border: 1px solid black;
  border-bottom: none;
  border-top: none;
`;

const Modify = styled.div`
  width: 100%;
  height: 40%;
  border: 1px solid black;
  //border-top: none;
`;

const Right = styled.div`
  border: 1px solid black;
  border-left: none;
  border-top: none;
  width: 60%;
  height: 100%;
`;

export default Admin;





