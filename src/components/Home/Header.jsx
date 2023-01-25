import React, {useRef, useEffect, useState} from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/ai"
import {BsPersonFill} from "react-icons/bs";
import {app} from "../../Firebase/firebase";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {TrueLogin, FalseLogin, changeUID, clearUID} from "../../store/store";

function Header() {
    const [isChange, setIsChange] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    let scrollRef = useRef(null);
    const navigate = useNavigate();

    // redux - 로그인 상태
    let isLogin = useSelector((state) => {
        return state.isLogin
    })

    // redux - 로그인 UID
    let uid = useSelector((state) => {
        return state.UID
    })
    let dispatch = useDispatch();

    // 로그인되어있으면 메뉴바 로그아웃, 로그인 안되어있으면 메뉴바 로그인 //
    useEffect(() => {
        const auth = getAuth(app);

        // 관리자 페이지 활성화 설정
        onAuthStateChanged(auth, (user) => {
            if (user.uid) {
                user.uid === process.env.REACT_APP_ADMIN ? setIsAdmin(true) : setIsAdmin(false);
                dispatch(changeUID(user.uid));
                dispatch(TrueLogin());
            }
        });
    }, [])

    // 로그아웃 클릭 //
    const sign_out = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                alert("로그아웃 성공");
                dispatch(clearUID())
                dispatch(FalseLogin());
                window.location.replace('/');
            })
            .catch((error) => {
                console.log(error)
                alert("로그아웃 실패")
            });
    }

    // 스크롤할때 메뉴바 컨트롤 //
    const handleScroll = () => {
        if (window.scrollY > scrollRef.current.offsetTop) {
            setIsChange(true)
        } else {
            setIsChange(false)
        }
        // console.log(scrollRef.current.offsetTop)
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
        <Frame change={isChange}>
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
                            // isLogin ? <span onClick={() => sign_out()} style={{cursor: "pointer", color: "black"}}>로그아웃</span> : <StyledLink to="/signin">로그인</StyledLink>
                            isLogin ? <span onClick={() => sign_out()} style={{cursor: "pointer", color: "black"}}>로그아웃</span> :
                                <StyledLink to="/signin">로그인</StyledLink>
                        }
                    </LiTop>
                </UlTop>
            </Top>
            <Middle>
                <Logo>
                    <img src="/images/logo.jpeg" onClick={() => window.location.replace('/')}
                         style={{height: "100%", cursor: "pointer"}}/>
                </Logo>
                <Search>
                    <SearchBar>
                        <SearchBarLeft>통합검색</SearchBarLeft>
                        <SearchBarRight><StyledInput type="search"/></SearchBarRight>
                        <AiOutlineSearch style={{transform: "scale(1.7)", cursor: "pointer"}}/>
                    </SearchBar>
                    <div style={{flexGrow: "1"}}/>
                    <Basket>
                        <AiOutlineShoppingCart onClick={() => navigate('/cart')}
                                               style={{transform: "scale(1.6)", marginLeft: "20px", cursor: "pointer"}}/>
                    </Basket>
                    <User>
                        <BsPersonFill style={{transform: "scale(1.6)", margin: "0 30px"}}/>
                    </User>
                </Search>
            </Middle>
            <Bottom ref={scrollRef} change={isChange}>
                <UlBottom>
                    <LiBottom><StyledLink>베스트</StyledLink></LiBottom>
                    <LiBottom><StyledLink>신상품</StyledLink></LiBottom>
                    <LiBottom><StyledLink>이벤트</StyledLink></LiBottom>
                    <LiBottom><StyledLink>사은품</StyledLink></LiBottom>
                    <div style={{flexGrow: "1"}}></div>
                    <LiHidden change={isChange}>
                        <StyledLink to="/signup">회원가입</StyledLink>
                    </LiHidden>
                    <LiHidden change={isChange}>
                        {
                            // isLogin ? <span onClick={() => sign_out()} style={{cursor: "pointer"}}>로그아웃</span> : <StyledLink to="/signin">로그인</StyledLink>
                            isLogin ? <span onClick={() => sign_out()} style={{cursor: "pointer", color: "black"}}>로그아웃</span> :
                                <StyledLink to="/signin">로그인</StyledLink>
                        }
                    </LiHidden>
                </UlBottom>
            </Bottom>
        </Frame>
    )
}

const Frame = styled.div`
  width: 100%;
  height: ${props => props.change ? 260 : 280}px;
`;

const Top = styled.div`
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
  height: 140px;
  display: flex;
`;

const Logo = styled.div`
  min-width: 420px;
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Search = styled.div`
  width: 75%;
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

const SearchBarLeft = styled.div`
  min-width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBarRight = styled.div`
  width: 100%;
  height: 100%;

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

  &:focus, :active {
    outline: none;
  }
`;

const Basket = styled.div`

`;

const User = styled.div`

`;

const Bottom = styled.div`
  width: 90%;
  height: ${props => props.change ? 40 : 100}px;
  position: ${props => props.change ? "fixed" : "absolute"};
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  top: ${props => props.change ? 0 : null};
  z-index: 1000;
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
  color: black;
`;

export default Header;