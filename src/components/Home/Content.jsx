import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Slide from "./Slide";
import Item from "./Item";
import {db} from "../../Firebase/firebase";
import {getDocs, collection} from "firebase/firestore";

function Content() {
    const [list, setList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await getDocs(collection(db, "books"));
        }
        fetchData()
            .then((data) => {
                // console.log(data)
                data.forEach(element => setList(list => [...list, element.data()]))
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <Frame>
            <div>
                <h1>이벤트</h1>
                <Slide/>
            </div>
            <div>
                <h1>책 목록</h1>
                <ItemWrap>
                    {
                        list.map((element) => <Item title={element.title} author={element.author} code={element.code}/>)
                    }
                </ItemWrap>
            </div>
        </Frame>
    )
}

const Frame = styled.div`
  margin: 50px 0;
  width: 100%;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Content;