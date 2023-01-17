import React, { useRef, useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai"
import { BsPersonFill } from "react-icons/bs";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [change, setChange] = useState(false);
    const [isLogin, setIsLogin] = useState();
    let scrollref = useRef(null);
    let navigate = useNavigate();


    useEffect(() => {
        const auth = getAuth();
        console.log("auth ", auth)
        // const user = auth.currentUser;
        // console.log(user)

        onAuthStateChanged(auth, (user) => {
            console.log("user ", user)
            if (user.uid) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
                console.log("xxxxx")
            }
        }, []);
    }, [])

    const handleScroll = () => {
        // setScrollPosition(window.scrollY);

        if (window.scrollY > scrollref.current.offsetTop) {
            setChange(true)
        }
        else {
            setChange(false)
        }

        // console.log(scrollref.current.offsetTop)
        // console.log(window.scrollY);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            window.addEventListener("scroll", handleScroll);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <Frame change={change}>
            <Top>
                <StyledUl_Top>
                    <StyledLi_Top>
                        <StyledLink to="/admin">관리자 페이지</StyledLink>
                    </StyledLi_Top>
                    <div style={{ flexGrow: "1" }}></div>
                    <StyledLi_Top>
                        <StyledLink to="/signup">회원가입</StyledLink>
                    </StyledLi_Top>
                    <StyledLi_Top>
                        <StyledLink to="/signin">{isLogin ? "로그아웃" : "로그인"}</StyledLink>
                    </StyledLi_Top>
                </StyledUl_Top>
            </Top>
            <Middle>
                <Logo>
                    <img src="/images/logo.jpeg" onClick={() => navigate('/')} style={{ height: "80%", cursor: "pointer" }} />
                </Logo>
                <Search>
                    <SearchBar>
                        <SearchLeft>
                            통합검색
                        </SearchLeft>
                        <SearchRight>
                            <StyledInput type="search" />
                        </SearchRight>
                        <AiOutlineSearch style={{ transform: "scale(1.7)" }} />
                    </SearchBar>
                    <div style={{ flexGrow: "1" }} />
                    <Basket>
                        <AiOutlineShoppingCart style={{ transform: "scale(1.6)" }} />
                    </Basket>
                    <User>
                        <BsPersonFill style={{ transform: "scale(1.6)", margin: "0 50px" }} />
                    </User>
                </Search>
            </Middle>
            <Bottom ref={scrollref} change={change}>
                <StyledUl_Bottom>
                    <StyledLi_Bottom>
                        <StyledLink>메뉴1</StyledLink>
                    </StyledLi_Bottom>
                    <StyledLi_Bottom>
                        <StyledLink>메뉴2</StyledLink>
                    </StyledLi_Bottom>
                    <StyledLi_Bottom>
                        <StyledLink>메뉴3</StyledLink>
                    </StyledLi_Bottom>
                    <StyledLi_Bottom>
                        <StyledLink>메뉴4</StyledLink>
                    </StyledLi_Bottom>
                    <div style={{flexGrow: "1"}}></div>
                    <StyledLi_Hidden change={change}>
                        <StyledLink>회원가입</StyledLink>
                    </StyledLi_Hidden>
                    <StyledLi_Hidden change={change}>
                        <StyledLink>{isLogin ? "로그아웃" : "로그인"}</StyledLink>
                    </StyledLi_Hidden>
                </StyledUl_Bottom>
            </Bottom>
        </Frame>
    )
}

const Frame = styled.div`
    /* position: relative; */
    width: 100%;
    height: ${props => props.change ? 260 : 280}px;
    /* border-bottom: 1px solid black; */
    /* top: -160px; */
    /* z-index: 999; */
`;

const Top = styled.div`
    /* width: 100%; */
    height: 60px;
    border-bottom: 1px solid black;
`;

const StyledUl_Top = styled.ul`
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const StyledLi_Top = styled.li`
    list-style: none;

    &::after{
        content: "";
        display: inline-block;
        width: 1px;
        height: 10px;
        margin: 10px 10px 0;
        background-color: black;
        opacity: 0.4;
    }
`;

const Middle = styled.div`
    /* width: 100%; */
    height: 140px;
    display: flex;
    /* border-bottom: 1px solid black; */
    /* position: sticky;
    top: 0; */
`;

const Logo = styled.div`
    min-width: 350px;
    width: 25vw;
    height: 100%;
    /* background-color: gainsboro; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Search = styled.div`
    width: 80vw;
    height: 100%;
    border-left: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SearchBar = styled.div`
    width: 65%;
    height: 30%;
    margin-left: 40px;
    padding: 0 20px;
    border: 1px solid black;
    border-radius: 400px;
    display: flex;
    align-items: center;
`;

const SearchLeft = styled.div`
    min-width: 70px;
    height: 100%;
    /* background-color: yellow; */
    display: flex; 
    align-items: center;
    justify-content: center;
`;

const SearchRight = styled.div`
    width: 100%;
    height: 100%;
    /* background-color: yellow; */

    &::before{
        content: "";
        border: 1px solid black;
        opacity: 0.2;
        margin-right: 10px;
    }
`;

const StyledInput = styled.input`
    width: 100%;
    height: 100%;
    border: 0;
    font-size: 16px;
    /* margin-left: 30px; */

    &:focus, :active {
        outline: none;
    }
`;

const Basket = styled.div`

`;

const User = styled.div`

`;

const Bottom = styled.div`
    /* width: ${props => props.change ? 90 : 90}%; */
    width: 90%;
    height: ${props => props.change ? 40 : 100}px;
    position: ${props => props.change ? "fixed" : "absolute"};
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    top: ${props => props.change ? 0 : null};
    z-index: 1000;
    /* top: 160px; */
    /* background-color: green; */
    /* position: ${props => props.isScroll}; */
    /* display: flex; */
    /* align-items: center; */
    transition: all 0.2s;
    background-color: rgb(255, 255, 255)
`;

const StyledUl_Bottom = styled.ul`
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const StyledLi_Bottom = styled.li`
    list-style: none;

    &::after{
        content: "";
        display: inline-block;
        width: 1px;
        height: 10px;
        margin: 10px 10px 0;
        background-color: black;
        opacity: 0.4;
    }
`;

const StyledLi_Hidden = styled(StyledLi_Bottom)`
    display: ${props => props.change ? "block" : "none"};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

export default Header;