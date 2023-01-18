import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Slide from "./Slide";
import Item from "../Item";
import {db} from "../../Firebase/firebase";
import {getDocs, collection} from "firebase/firestore";

function Content() {
    const [list, setList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            return await getDocs(collection(db, "books"));
        }
        fetchData().then((data) => {
           // console.log(data)
            data.forEach(element => setList(list => [...list, element.data()]))
        }).catch(err => console.log(err))
        // console.log("list ", list)
    },[])

    console.log("list ", ...list)

    return (
        <Frame>
            <Slide/>

            <div>
                {
                    list.map((element, index) => <Item key={index} title={element.title} author={element.author} kind={element.kind} release={element.release} price={element.price}/>)
                }
            </div>
        </Frame>
    )
}

const Frame = styled.div`
  margin: 50px 0;
  /* background-color: yellow; */
  width: 100%;
  //height: 2000px;
  //display: flex;
  //flex-wrap: wrap;
  /* margin: 20px 20px; */
  /* border: 1px solid black; */
`;

export default Content;