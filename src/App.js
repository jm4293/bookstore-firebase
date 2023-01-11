import React from 'react';
import { createGlobalStyle } from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import { Routes, Route } from "react-router-dom";

function App() {
  // const user = useSelector(state => state.userSlice)
  // const dispatch = useDispatch();

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    /* width: 100vw; */
  }
`;

export default App;