import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineLogin } from "react-icons/ai"

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [change, setChange] = useState(false);
    let scrollref = useRef(null);

    const handleScroll = () => {
        // setScrollPosition(window.scrollY);

        if (window.scrollY > 201) {
            setChange(true)
        }
        else{
            setChange(false)
        }

        console.log(scrollref.current.offsetTop)
        console.log(window.scrollY);
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
                <StyledTopUl>
                    <StyledTopLi>
                        <StyledLink to="/register">회원가입</StyledLink>
                    </StyledTopLi>
                    <StyledTopLi>
                        <StyledLink>로그인</StyledLink>
                    </StyledTopLi>
                    <StyledTopLi>
                        <StyledLink>회원혜택</StyledLink>
                    </StyledTopLi>
                    <StyledTopLi>
                        <StyledLink>고객센터</StyledLink>
                    </StyledTopLi>
                </StyledTopUl>
            </Top>
            <Middle>
                <Logo>
                    <img src="/images/bookstore_logo.png" style={{ height: "80%" }} />
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
                        <AiOutlineLogin style={{ transform: "scale(1.6)", margin: "0 50px" }} />
                    </User>
                </Search>
            </Middle>
            <Bottom ref={scrollref} change={change}>
                <StyledBottomUl>
                    <StyledBottomLi>
                        <StyledLink>무제한</StyledLink>
                    </StyledBottomLi>
                    <StyledBottomLi>
                        <StyledLink>프리미엄</StyledLink>
                    </StyledBottomLi>
                    <StyledBottomLi>
                        <StyledLink>스페셜</StyledLink>
                    </StyledBottomLi>
                    <StyledBottomLi>
                        <StyledLink>My이용권</StyledLink>
                    </StyledBottomLi>
                    <StyledBottomLiHidden change={change}>
                        <StyledLink>회원가입</StyledLink>
                    </StyledBottomLiHidden>
                    <StyledBottomLiHidden change={change}>
                        <StyledLink>로그인</StyledLink>
                    </StyledBottomLiHidden>
                </StyledBottomUl>
            </Bottom>
        </Frame>
    )
}

const Frame = styled.div`
    /* position: relative; */
    /* width: 90%; */
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

const StyledTopUl = styled.ul`
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
`;

const StyledTopLi = styled.li`
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
    min-width: 150px;
    width: 20vw;
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
    width: 30%;
    height: 30%;
    margin-left: 20px;
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
    height: ${props => props.change ? 60 : 80}px;
    position: ${props => props.change ? "fixed" : "absolute"};
    border: 1px solid black;
    top: ${props => props.change ? 0 : null};
    /* top: 160px; */
    /* background-color: green; */
    /* position: ${props => props.isScroll}; */
    /* display: flex; */
    /* align-items: center; */
    transition: all 0.3s;
    background-color: rgb(255, 255, 255)
`;

const StyledBottomUl = styled.ul`
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const StyledBottomLi = styled.li`
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

const StyledBottomLiHidden = styled(StyledBottomLi)`
    display: ${props => props.change ? "block" : "none"};
    
    
`;

const StyledLink = styled(Link)`
    
`;

export default Header;