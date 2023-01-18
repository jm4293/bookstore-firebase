import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {BsPersonFill} from "react-icons/bs";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";


function Header() {
    const [change, setChange] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    let scrollRef = useRef(null);
    let navigate = useNavigate();

    // 로그인되어있으면 메뉴바 로그아웃으로 로그인 안되어있으면 메뉴바 로그인으로
    useEffect(() => {
        const auth = getAuth();
        console.log("auth ", auth)
        // const user = auth.currentUser;
        // console.log(user)

        onAuthStateChanged(auth, (user) => {
            // console.log("user ", user)
            if (user.uid) {
                user.uid === process.env.REACT_APP_ADMIN ? setIsAdmin(true) : setIsAdmin(false);
                setIsLogin(true);
            } else {
                setIsLogin(false);
            }
        });
    }, [])

    // 스크롤할때 메뉴바 컨트롤
    const handleScroll = () => {
        if (window.scrollY > scrollRef.current.offsetTop) {
            setChange(true)
        } else {
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

    // 로그아웃 클릭
    const sign_out = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // navigate('/');
            alert("로그아웃 성공");
            window.location.replace('/');
            // Sign-out successful.
        }).catch((error) => {
            console.log(error)
            alert("로그아웃 실패")
            // An error happened.
        });
    }

    return (
        <Frame change={change}>
            <Top>
                <UlTop>
                    <div>
                        {
                            isAdmin ? <StyledLink to="/admin">관리자 페이지</StyledLink> : null
                        }
                    </div>
                    <div style={{flexGrow: "1"}}></div>
                    <LiTop>
                        <StyledLink to="/signup">회원가입</StyledLink>
                    </LiTop>
                    <LiTop>
                        {
                            isLogin ? <span onClick={() => sign_out()} style={{cursor: "pointer"}}>로그아웃</span> :
                                <StyledLink to="/signin">로그인</StyledLink>
                        }
                    </LiTop>
                </UlTop>
            </Top>
            <Middle>
                <Logo>
                    <img src="/images/logo.jpeg" onClick={() => navigate('/')}
                         style={{height: "80%", cursor: "pointer"}}/>
                </Logo>
                <Search>
                    <SearchBar>
                        <SearchLeft> 통합검색 </SearchLeft>
                        <SearchRight> <StyledInput type="search"/> </SearchRight>
                        <AiOutlineSearch style={{transform: "scale(1.7)"}}/>
                    </SearchBar>
                    <div style={{flexGrow: "1"}}/>
                    <Basket>
                        <AiOutlineShoppingCart style={{transform: "scale(1.6)"}}/>
                    </Basket>
                    <User>
                        <BsPersonFill style={{transform: "scale(1.6)", margin: "0 50px"}}/>
                    </User>
                </Search>
            </Middle>
            <Bottom ref={scrollRef} change={change}>
                <UlBottom>
                    <LiBottom> <StyledLink>메뉴1</StyledLink> </LiBottom>
                    <LiBottom> <StyledLink>메뉴2</StyledLink> </LiBottom>
                    <LiBottom> <StyledLink>메뉴3</StyledLink> </LiBottom>
                    <LiBottom> <StyledLink>메뉴4</StyledLink> </LiBottom>
                    <div style={{flexGrow: "1"}}></div>
                    <LiHidden change={change}>
                        <StyledLink to="/signup">회원가입</StyledLink>
                    </LiHidden>
                    <LiHidden change={change}>
                        {
                            isLogin ? <span onClick={() => sign_out()} style={{cursor: "pointer"}}>로그아웃</span> :
                                <StyledLink to="/signin">로그인</StyledLink>
                        }
                    </LiHidden>
                </UlBottom>
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

const UlTop = styled.ul`
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const LiTop = styled.li`
  list-style: none;

  &::after {
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

  &::before {
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

const UlBottom = styled.ul`
  margin: 0;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const LiBottom = styled.li`
  list-style: none;

  &::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 10px;
    margin: 10px 10px 0;
    background-color: black;
    opacity: 0.4;
  }
`;

const LiHidden = styled(LiBottom)`
  display: ${props => props.change ? "block" : "none"};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Header;