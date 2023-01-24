import React from 'react';
import {createGlobalStyle} from 'styled-components';
// import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Agree from './components/SignUp/Agree';
import Register from './components/SignUp/Register';
import SignIn from './components/SignIn/SignIn';
import Admin from './components/Admin/Admin';
import Detail from "./components/Detail";
import {Routes, Route} from "react-router-dom";
import app from './Firebase/firebase';

function App() {
    // const user = useSelector(state => state.userSlice)
    // const dispatch = useDispatch();

    return (
        <>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/signup/agree" element={<Agree/>}/>
                <Route path="/signup/register" element={<Register/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/detail/:code" element={<Detail/>}/>
            </Routes>
        </>
    );
}

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

export default App;